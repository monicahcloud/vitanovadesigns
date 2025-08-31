"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { KPI } from "@/lib/types";

export default function OverviewCards({ kpis }: { kpis: KPI[] }) {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {kpis.map((k) => (
        <Card key={k.label}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-slate-600">{k.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{k.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
