"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { Settings } from "@/lib/types";

export default function SettingsForm({ initial }: { initial: Settings }) {
  const [settings, setSettings] = useState<Settings>(initial);
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base flex items-center gap-2">
          Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label>Calendly link</Label>
          <Input
            value={settings.calendly}
            onChange={(e) =>
              setSettings({ ...settings, calendly: e.target.value })
            }
          />
          <p className="text-xs text-slate-500">
            Used in email/social templates and CTA buttons.
          </p>
        </div>
        <div className="space-y-3">
          <Label>Outbound email</Label>
          <Input
            value={settings.outboundEmail}
            onChange={(e) =>
              setSettings({ ...settings, outboundEmail: e.target.value })
            }
          />
          <p className="text-xs text-slate-500">
            Draft emails will set the From: to this address.
          </p>
        </div>
        <div className="md:col-span-2 space-y-3">
          <Label>Voice & tone guardrails</Label>
          <Textarea
            rows={4}
            value={settings.tone}
            onChange={(e) => setSettings({ ...settings, tone: e.target.value })}
          />
          <p className="text-xs text-slate-500">
            Agents inherit this guidance. Keep it short, specific, and
            non‑salesy.
          </p>
        </div>
        <div className="md:col-span-2 flex items-center justify-between rounded-xl border p-3">
          <div>
            <div className="font-medium">Draft-only mode</div>
            <div className="text-xs text-slate-500">
              Require your approval before anything is sent or published.
            </div>
          </div>
          <Switch
            checked={settings.draftOnly}
            onCheckedChange={(v) => setSettings({ ...settings, draftOnly: v })}
          />
        </div>
        <div className="md:col-span-2 flex gap-2">
          <Button onClick={() => console.log("Save settings", settings)}>
            Save Settings
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = "/admin/org-chart")}>
            View Org Chart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
