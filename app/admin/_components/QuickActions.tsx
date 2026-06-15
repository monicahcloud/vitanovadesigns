"use client";
import { Button } from "@/components/ui/button";
import { CalendarDays, FileText, Send } from "lucide-react";
import type { Settings } from "@/lib/types";

export default function QuickActions({ settings }: { settings: Settings }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-4">
      <div className="rounded-2xl border bg-white p-4">
        <div className="text-base font-medium mb-2">This week’s plan</div>
        <div className="text-sm text-slate-700 space-y-2">
          <p>
            • Scout researches 15–20 leads and drafts outreach (draft-only).
          </p>
          <p>• Scribe prepares proposals within 24h of calls.</p>
          <p>• Spark drafts 2 blog posts + 5 social posts.</p>
          <p>
            • Care drafts acknowledgments within 15 minutes for new inquiries.
          </p>
        </div>
      </div>
      <div className="rounded-2xl border bg-white p-4">
        <div className="text-base font-medium mb-2">Quick actions</div>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="secondary"
            onClick={() =>
              window.open(settings.calendly, "_blank", "noopener,noreferrer")
            }>
            <CalendarDays className="w-4 h-4 mr-2" />
            Open Calendly
          </Button>
          <Button>
            <Send className="w-4 h-4 mr-2" />
            Review Draft Emails
          </Button>
          <Button variant="outline">
            <FileText className="w-4 h-4 mr-2" />
            Create Proposal
          </Button>
        </div>
      </div>
    </div>
  );
}
