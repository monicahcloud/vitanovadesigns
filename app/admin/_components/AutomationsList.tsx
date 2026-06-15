"use client";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ShieldCheck } from "lucide-react";

const items = [
  "Web form → Notion + Gmail alert",
  "Lead status=Contacted → Draft acknowledgment",
  "Calendly booking → Proposal task",
  "Proposal sent → 3-day follow-up draft",
  "Friday 4:30pm → KPI email draft",
];

export default function AutomationsList() {
  return (
    <div className="space-y-4 text-sm">
      {items.map((label, i) => (
        <div
          className="flex items-center justify-between p-3 border rounded-xl bg-white"
          key={i}>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{label}</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Test
            </Button>
            <Switch defaultChecked />
          </div>
        </div>
      ))}
      <p className="text-xs text-slate-500">
        Wire these via Zapier/Make/n8n or your own API routes + cron. Keep
        draft‑only until you flip approvals.
      </p>
    </div>
  );
}
