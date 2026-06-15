// components/landingpage/hero/StatsBar.tsx

import { BriefcaseBusiness, ShieldCheck, Trophy, Users } from "lucide-react";

export default function StatsBar() {
  return (
    <div className="absolute bottom-8 right-10 hidden w-[720px] grid-cols-4 gap-4 rounded-3xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-2xl lg:grid">
      {[
        { icon: Users, label: "Happy Clients", value: "500+" },
        { icon: BriefcaseBusiness, label: "Projects Delivered", value: "250+" },
        { icon: ShieldCheck, label: "Years of Excellence", value: "12+" },
        { icon: Trophy, label: "Solutions That Scale", value: "100%" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <item.icon className="h-8 w-8 text-cyan-300" />
          <div>
            <p className="text-xs text-slate-300">{item.label}</p>
            <p className="text-2xl font-black text-white">{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
