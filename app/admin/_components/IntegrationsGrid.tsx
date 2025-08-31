"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarDays,
  Github,
  Globe,
  Link as LinkIcon,
  Mail,
  Plug,
  Table as TableIcon,
} from "lucide-react";

const INTEGRATIONS = [
  { name: "Notion", icon: TableIcon },
  { name: "Gmail", icon: Mail },
  { name: "Google Drive", icon: Globe },
  { name: "GitHub", icon: Github },
  { name: "Vercel", icon: Globe },
  { name: "Stripe", icon: LinkIcon },
  { name: "Calendly", icon: CalendarDays },
  { name: "Zapier / Make", icon: Plug },
];

export default function IntegrationsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {INTEGRATIONS.map(({ name, icon: Icon }) => (
        <Card key={name}>
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5" />
              <div>
                <div className="font-medium">{name}</div>
                <div className="text-xs text-slate-500">
                  Status:{" "}
                  <span className="text-emerald-600">Not connected</span>
                </div>
              </div>
            </div>
            <button className="rounded-md border px-3 py-1 text-sm">
              Connect
            </button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
