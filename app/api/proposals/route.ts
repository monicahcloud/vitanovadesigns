import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET() {
  const rows = await prisma.proposal.findMany({
    orderBy: { createdAt: "desc" },
    take: 100,
  });
  return Response.json(rows);
}

export const runtime = "nodejs";
export const revalidate = 0;

export async function POST(req: Request) {
  const isAuthed = (await cookies()).get("vn_admin")?.value === "ok";
  if (!isAuthed) return new Response("Unauthorized", { status: 401 });
  const b = await req.json();
  const row = await prisma.proposal.create({
    data: {
      clientName: b.clientName,
      scope: b.scope ?? "SEED",
      priceMin: b.priceMin ?? null,
      priceMax: b.priceMax ?? null,
      status: b.status ?? "DRAFT",
      docUrl: b.docUrl ?? null,
      followUpDate: b.followUpDate ? new Date(b.followUpDate) : null,
    },
  });
  return Response.json(row);
}
