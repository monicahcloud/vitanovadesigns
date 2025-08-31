import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export const runtime = "nodejs";
export const revalidate = 0;

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return Response.json(leads);
}

export async function POST(req: Request) {
  const isAuthed = (await cookies()).get("vn_admin")?.value === "ok";
  if (!isAuthed) return new Response("Unauthorized", { status: 401 });
  const body = await req.json();
  const lead = await prisma.lead.create({
    data: {
      name: body.name,
      org: body.org ?? null,
      email: body.email ?? null,
      website: body.website ?? null,
      segment: body.segment ?? null,
      status: body.status ?? "NEW",
      notes: body.notes ?? null,
      priority: body.priority ?? null,
    },
  });
  return Response.json(lead);
}
