/* eslint-disable @typescript-eslint/no-explicit-any */
export const runtime = "nodejs";
export const revalidate = 0;

import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";

// --- helpers ---
function getHeaderSig(req: Request) {
  return (
    req.headers.get("Calendly-Webhook-Signature") ||
    req.headers.get("X-Calendly-Webhook-Signature") || // in case
    ""
  );
}
function safeJSON<T = any>(text: string): T {
  try {
    return JSON.parse(text);
  } catch {
    return {} as T;
  }
}
function hmacValid(raw: string, headerSig: string, key: string) {
  // Calendly sends "v1=<hex>" format
  const parts = headerSig.split(",");
  const v1 = parts.find((p) => p.trim().startsWith("v1="))?.split("=")[1];
  if (!v1) return false;
  const digest = crypto
    .createHmac("sha256", key)
    .update(raw, "utf8")
    .digest("hex");
  return crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(digest));
}
function lastPathId(url?: string) {
  if (!url) return undefined;
  try {
    const u = new URL(url);
    return u.pathname.split("/").filter(Boolean).pop();
  } catch {
    return url.split("/").pop();
  }
}
function pick<T>(...vals: (T | undefined | null)[]) {
  return vals.find((v) => v != null) as T | undefined;
}

// Extract fields from a variety of Calendly payload shapes
function parseCalendly(body: any) {
  const eventType = body?.event || body?.trigger || body?.topic || "";
  const payload = body?.payload || body?.resource || body;

  // scheduled start (try multiple shapes)
  const startISO =
    payload?.scheduled_event?.start_time ||
    payload?.start_time ||
    payload?.event?.start_time ||
    payload?.resource?.start_time ||
    payload?.resource?.scheduled_start_time;

  const scheduledAt = startISO ? new Date(startISO) : undefined;

  const email = pick<string>(
    payload?.email,
    payload?.invitee?.email,
    payload?.profile?.email
  );
  const name = pick<string>(
    payload?.name,
    payload?.invitee?.name,
    payload?.profile?.name
  );

  // stable IDs to upsert on
  const eventUri =
    payload?.event || payload?.scheduled_event?.uri || payload?.uri;
  const externalId =
    payload?.event_uuid || payload?.uuid || lastPathId(eventUri);

  return { eventType, scheduledAt, email, name, eventUri, externalId };
}

export async function POST(req: Request) {
  // --- auth: quick shared secret on query OR HMAC header ---
  const url = new URL(req.url);
  const qsSecret = url.searchParams.get("secret");
  const sharedOk =
    process.env.CALENDLY_SHARED_SECRET &&
    qsSecret &&
    qsSecret === process.env.CALENDLY_SHARED_SECRET;

  const raw = await req.text();
  const body = safeJSON(raw);

  const hmacKey = process.env.CALENDLY_SIGNING_KEY;
  const headerSig = getHeaderSig(req);
  const hmacOk = hmacKey && headerSig && hmacValid(raw, headerSig, hmacKey);

  if (!sharedOk && !hmacOk) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { eventType, scheduledAt, email, name, eventUri, externalId } =
    parseCalendly(body);

  // We’ll upsert by externalId if we have it, else fall back to (email + scheduledAt)
  // If your Meeting model does not have externalId/eventUri/raw fields,
  // feel free to remove those lines.
  // Example Meeting model fields (what we’ve been using):
  // id, createdAt, scheduledAt, email, name, source, status, externalId?, eventUri?, raw?
  const where = externalId ? { externalId } : undefined;

  // build data
  const baseData: any = {
    scheduledAt: scheduledAt ?? new Date(),
    email: email ?? null,
    name: name ?? null,
    source: "calendly",
    eventUri: eventUri ?? null,
    externalId: externalId ?? null,
    raw: body, // JSON payload (optional column)
  };

  try {
    if (/created|invitee\.created|scheduled_event\.created/i.test(eventType)) {
      if (where) {
        await prisma.meeting.upsert({
          where,
          update: { ...baseData, status: "booked" },
          create: { ...baseData, status: "booked" },
        });
      } else {
        await prisma.meeting.create({
          data: { ...baseData, status: "booked" },
        });
      }
    } else if (
      /canceled|cancelled|invitee\.canceled|scheduled_event\.canceled/i.test(
        eventType
      )
    ) {
      if (where) {
        await prisma.meeting.updateMany({
          where,
          data: { status: "canceled" },
        });
      } else if (email && scheduledAt) {
        await prisma.meeting.updateMany({
          where: { email, scheduledAt },
          data: { status: "canceled" },
        });
      }
    } else {
      // ignore other event types
    }

    return Response.json({ ok: true });
  } catch (e) {
    console.error("Calendly webhook error", e);
    return new Response("Server error", { status: 500 });
  }
}
