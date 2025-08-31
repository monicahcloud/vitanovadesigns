import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET() {
  const rows = await prisma.contentItem.findMany({
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
  const row = await prisma.contentItem.create({
    data: {
      title: b.title,
      type: b.type ?? "BLOG",
      status: b.status ?? "DRAFT",
      keyword: b.keyword ?? null,
      dueDate: b.dueDate ? new Date(b.dueDate) : null,
    },
  });
  return Response.json(row);
}
