export const runtime = "nodejs";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";

function startOfWeek(d = new Date()) {
  const day = d.getDay(); // 0=Sun ... 6=Sat
  const diff = (day === 0 ? -6 : 1) - day; // Monday start
  const dt = new Date(d);
  dt.setDate(d.getDate() + diff);
  dt.setHours(0, 0, 0, 0);
  return dt;
}
function formatMinutes(mins: number | null) {
  if (mins == null) return "—";
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return h ? `${h}h ${m}m` : `${m}m`;
}

export async function GET() {
  const weekStart = startOfWeek();

  const [leadsThisWeek, proposalsSentThisWeek, callsBooked] = await Promise.all(
    [
      prisma.lead.count({ where: { createdAt: { gte: weekStart } } }),
      prisma.proposal.count({
        where: { status: "SENT", updatedAt: { gte: weekStart } },
      }),
      prisma.meeting.count({
        where: { status: "booked", scheduledAt: { gte: weekStart } },
      }),
    ]
  );

  // Reply time stays placeholder until we track messaging events
  const avgReplyMinutes: number | null = null;

  return Response.json({
    kpis: [
      { label: "Leads (this week)", value: leadsThisWeek },
      { label: "Calls booked", value: callsBooked },
      { label: "Proposals sent", value: proposalsSentThisWeek },
      { label: "Avg reply time", value: formatMinutes(avgReplyMinutes) },
    ],
  });
}
