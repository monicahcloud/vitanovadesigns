// components/landingpage/hero/HeroDashboard.tsx

"use client";

import { BarChart3, Bot, Megaphone, MonitorSmartphone } from "lucide-react";
import DashboardCard from "./DashboardCard";
import AnimatedLineChart from "./AnimatedLineChart";
import FloatingWidgets from "./FloatingWidgets";

export default function HeroDashboard() {
  return (
    <div className="relative hidden min-h-[650px] lg:block">
      <FloatingWidgets />

      <DashboardCard className="absolute right-10 top-8 w-[680px] p-6">
        <h3 className="mb-6 text-xl font-bold">Business Intelligence</h3>

        <div className="grid grid-cols-4 gap-4">
          {[
            ["Total Users", "12,458"],
            ["Conversions", "8,742"],
            ["Revenue", "$248K"],
            ["Growth", "32%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs text-slate-300">{label}</p>
              <p className="mt-2 text-2xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-[1.6fr_0.8fr] gap-5">
          <div className="h-64 rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="mb-4 text-sm text-slate-300">Performance Overview</p>
            <AnimatedLineChart />
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/25 p-5">
            <p className="text-sm text-slate-300">Top Channels</p>

            <div className="mt-8 grid place-items-center">
              <div className="grid h-32 w-32 place-items-center rounded-full bg-[conic-gradient(#22d3ee_0_52%,#a855f7_52%_76%,#facc15_76%_100%)]">
                <div className="h-20 w-20 rounded-full bg-[#080021]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-4">
          {[
            { icon: MonitorSmartphone, label: "Web Design" },
            { icon: Bot, label: "Automations" },
            { icon: Megaphone, label: "Marketing" },
            { icon: BarChart3, label: "Data & AI" },
          ].map((item) => (
            <div
              key={item.label}
              className="grid place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center">
              <item.icon className="mb-2 h-7 w-7 text-cyan-300" />
              <p className="text-xs font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
}
