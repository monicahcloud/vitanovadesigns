/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
// File: components/admin/AddLeadDialog.tsx

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type Lead = {
  id: string;
  name: string;
  org?: string | null;
  email?: string | null;
  website?: string | null;
  segment?: string | null; // e.g., SMB, Nonprofit, Startup, Church
  status: string; // NEW | CONTACTED | QUALIFIED | WON | LOST | ARCHIVED
  createdAt: string;
};

const STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "WON",
  "LOST",
  "ARCHIVED",
] as const;

export function AddLeadDialog({ onAdded }: { onAdded?: (lead: Lead) => void }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    website: "",
    segment: "",
    status: "NEW" as (typeof STATUSES)[number],
    notes: "",
    priority: "" as string | number,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!form.name.trim()) {
      setError("Name is required");
      return;
    }
    try {
      setIsSubmitting(true);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          org: form.org || null,
          email: form.email || null,
          website: form.website || null,
          segment: form.segment || null,
          status: form.status,
          notes: form.notes || null,
          priority: form.priority ? Number(form.priority) : null,
        }),
      });
      if (!res.ok) {
        if (res.status === 401)
          throw new Error("Unauthorized — sign in at /admin/login first");
        throw new Error(`Failed to create lead (HTTP ${res.status})`);
      }
      const created: Lead = await res.json();
      onAdded?.(created);
      setOpen(false);
      setForm({
        name: "",
        org: "",
        email: "",
        website: "",
        segment: "",
        status: "NEW",
        notes: "",
        priority: "",
      });
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Add Lead</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>New Lead</DialogTitle>
          <DialogDescription>
            Save a potential client. Only you can create leads (requires admin
            login).
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-2">
          <div className="grid gap-1">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              required
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="org">Organization</Label>
            <Input
              id="org"
              value={form.org}
              onChange={(e) => setForm((f) => ({ ...f, org: e.target.value }))}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
            </div>
            <div className="grid gap-1">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={form.website}
                onChange={(e) =>
                  setForm((f) => ({ ...f, website: e.target.value }))
                }
                placeholder="https://"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="grid gap-1">
              <Label htmlFor="segment">Segment</Label>
              <Input
                id="segment"
                value={form.segment}
                onChange={(e) =>
                  setForm((f) => ({ ...f, segment: e.target.value }))
                }
                placeholder="SMB / Nonprofit / Startup"
              />
            </div>
            <div className="grid gap-1">
              <Label>Status</Label>
              <Select
                value={form.status}
                onValueChange={(v) =>
                  setForm((f) => ({ ...f, status: v as any }))
                }>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {STATUSES.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-1">
              <Label htmlFor="priority">Priority</Label>
              <Input
                id="priority"
                type="number"
                inputMode="numeric"
                value={form.priority}
                onChange={(e) =>
                  setForm((f) => ({ ...f, priority: e.target.value }))
                }
                placeholder="1-5"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              rows={3}
              value={form.notes}
              onChange={(e) =>
                setForm((f) => ({ ...f, notes: e.target.value }))
              }
            />
          </div>
          {error && <p className="text-sm text-rose-600">{error}</p>}
          <DialogFooter className="mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving…" : "Save Lead"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// ------------------
// Usage example inside your Leads tab
// File: app/admin/_parts/LeadsSection.tsx (or inline in /admin/page.tsx)
