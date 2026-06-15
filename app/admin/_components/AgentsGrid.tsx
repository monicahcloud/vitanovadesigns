"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import AvatarInitials from "./AvatarInitials";
import type { Agent } from "@/lib/types";

export default function AgentsGrid({ agents }: { agents: Agent[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {agents.map((a) => (
        <Card key={a.code}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <AvatarInitials initials={a.initials} gradient={a.gradient} />
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500">
                  {a.code}
                </div>
                <div className="font-semibold leading-tight">{a.name}</div>
                <div className="text-slate-600 text-xs">{a.role}</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span>Enabled</span>
              <Switch defaultChecked={a.enabled} />
            </div>
            <div className="flex items-center justify-between">
              <span>Draft-only mode</span>
              <Switch defaultChecked />
            </div>
            <Separator />
            <p className="text-slate-600">
              Voice: neighborly, helpful, non‑salesy. Clear next step: “Click on
              the link to schedule a call.”
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
