/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { render } from "@react-email/render";
import ContactNotification from "@/emails/ContactNotification";
import ContactReceipt from "@/emails/ContactReceipt";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyTurnstile(token?: string, ip?: string) {
  if (!token) return false;
  const form = new URLSearchParams();
  form.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  form.append("response", token);
  if (ip) form.append("remoteip", ip);

  const r = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: form,
    }
  );
  const data = await r.json();
  return !!data.success;
}

// helpers
const trim = (s: unknown) => (typeof s === "string" ? s.trim() : s);
const opt = (v: unknown) => {
  if (typeof v !== "string") return undefined;
  const t = v.trim();
  return t.length ? t : undefined;
};

const Schema = z.object({
  name: z.string().transform(trim).pipe(z.string().min(2, "Name too short")),
  email: z.string().email(),
  phone: z.string().optional().transform(opt),
  projectType: z.string().optional().transform(opt),
  budget: z.string().optional().transform(opt),
  message: z
    .string()
    .transform((v) => (typeof v === "string" ? v.trim() : ""))
    .pipe(
      z
        .string()
        .min(10, "Please provide at least 10 characters so we can help.")
    ),
  consent: z.coerce.boolean().optional().catch(false),
  company: z.string().optional().transform(opt), // honeypot
});

const corsHeaders = {
  "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_SITE_URL || "*",
  "Access-Control-Allow-Methods": "POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: NextRequest) {
  try {
    // ✅ Read once
    const json = await req.json();

    // ✅ Optional: require captcha only in production (or when keys exist)
    const requireCaptcha =
      process.env.NODE_ENV === "production" &&
      !!process.env.TURNSTILE_SECRET_KEY;

    if (requireCaptcha) {
      const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
      const ok = await verifyTurnstile((json as any).turnstileToken, ip);
      if (!ok) {
        return NextResponse.json(
          { error: "Captcha failed" },
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // ✅ Now validate the same json
    const parsed = Schema.safeParse(json);
    if (!parsed.success) {
      if (process.env.NODE_ENV !== "production") {
        console.error("Contact validation failed:", parsed.error.flatten());
      }
      return NextResponse.json(
        { error: "Invalid payload", details: parsed.error.flatten() },
        { status: 400, headers: corsHeaders }
      );
    }

    const data = parsed.data;

    // Honeypot: if filled, pretend success
    if (data.company) {
      return NextResponse.json({ ok: true }, { headers: corsHeaders });
    }

    const FROM = process.env.CONTACT_FROM_EMAIL!; // e.g., "VitaNova Designs <hello@vitanovadesigns.cloud>"
    const TO = process.env.CONTACT_TO_EMAIL!;

    // Pre-render HTML for both emails (avoids renderAsync issues)
    const notificationHtml = await render(
      ContactNotification({
        name: data.name,
        email: data.email,
        phone: data.phone,
        projectType: data.projectType,
        budget: data.budget,
        message: data.message,
      })
    );

    const receiptHtml = await render(ContactReceipt({ name: data.name }));

    // 1) Notify you
    await resend.emails.send({
      from: FROM,
      to: TO,
      subject: `New contact: ${data.name}${
        data.projectType ? ` (${data.projectType})` : ""
      }`,
      html: notificationHtml,
      replyTo: data.email,
    });

    await resend.emails.send({
      from: FROM,
      to: data.email,
      subject: "We received your message — VitaNova Designs",
      html: receiptHtml,
      // (no replyTo needed here, but it's allowed)
    });
    return NextResponse.json({ ok: true }, { headers: corsHeaders });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500, headers: corsHeaders }
    );
  }
}
