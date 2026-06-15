"use client";

import { useEffect, useState } from "react";
import type { KPI } from "@/lib/types";
import OverviewCards from "./OverviewCards";

export default function OverviewSection() {
  const [kpis, setKpis] = useState<KPI[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/kpis", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => setKpis(data.kpis))
      .catch((e) => setErr(e?.message || "Failed to load KPIs"));
  }, []);

  if (err) return <div className="text-sm text-rose-600">{err}</div>;
  if (!kpis) {
    // simple skeletons
    return (
      <div className="grid md:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border bg-white p-4">
            <div className="h-4 w-40 bg-slate-200 animate-pulse rounded mb-3" />
            <div className="h-6 w-16 bg-slate-200 animate-pulse rounded" />
          </div>
        ))}
      </div>
    );
  }

  return <OverviewCards kpis={kpis} />;
}
