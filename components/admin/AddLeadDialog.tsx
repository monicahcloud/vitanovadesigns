/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Zap } from "lucide-react";

/* ───── TYPES & CONSTANTS ───── */

// Defining these here ensures TypeScript can resolve the names
export const STATUSES = [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "WON",
  "LOST",
  "ARCHIVED",
] as const;

export type Lead = {
  id: string;
  name: string;
  org?: string | null;
  email?: string | null;
  website?: string | null;
  segment?: string | null;
  status: (typeof STATUSES)[number];
  createdAt: string;
  notes?: string | null;
  priority?: number | null;
};

/* ───── COMPONENT ───── */

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

  const resetForm = () => {
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
    setError(null);
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return setError("Name is required");

    try {
      setIsSubmitting(true);
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          name: form.name.trim(),
          priority: form.priority ? Number(form.priority) : null,
        }),
      });

      if (!res.ok)
        throw new Error(
          res.status === 401 ? "Unauthorized" : "Failed to save lead"
        );

      const created: Lead = await res.json();
      onAdded?.(created);
      setOpen(false);
      resetForm();
    } catch (err: any) {
      setError(err?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) resetForm();
      }}>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 shadow-lg shadow-purple-500/20 gap-2">
          <Plus size={18} />
          Add Lead
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[550px] rounded-[2rem] border-none shadow-2xl p-0 overflow-hidden bg-white">
        {/* Decorative Header */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <DialogTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
              <Zap className="text-cyan-400 fill-cyan-400" size={20} />
              New Lead Entry
            </DialogTitle>
            <DialogDescription className="text-slate-400 mt-1">
              Architecture for a new partnership. Admin-only access.
            </DialogDescription>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 space-y-1.5">
              <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Client Name *
              </Label>
              <Input
                className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
              />
            </div>

            {/* Added Organization field back to match your previous layout */}
            <div className="col-span-2 space-y-1.5">
              <Label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">
                Organization
              </Label>
              <Input
                className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white"
                value={form.org}
                onChange={(e) =>
                  setForm((f) => ({ ...f, org: e.target.value }))
                }
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 text-red-600 text-xs font-bold border border-red-100 uppercase tracking-tighter">
              [ ERROR: {error} ]
            </div>
          )}

          <DialogFooter className="pt-4 gap-3">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              className="rounded-full text-slate-400 hover:text-slate-900">
              Discard
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-slate-900 text-white hover:bg-purple-600 rounded-full px-8 shadow-xl transition-all">
              {isSubmitting ? "Syncing..." : "Commit Lead"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
