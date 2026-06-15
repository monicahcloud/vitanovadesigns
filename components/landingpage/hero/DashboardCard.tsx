// components/landingpage/hero/DashboardCard.tsx

import { ReactNode } from "react";

type DashboardCardProps = {
  children: ReactNode;
  className?: string;
};

export default function DashboardCard({
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`
        rounded-3xl border border-white/15 
        bg-white/[0.08] 
        shadow-[0_0_40px_rgba(124,58,237,0.25)]
        backdrop-blur-2xl
        ${className}
      `}>
      {children}
    </div>
  );
}
