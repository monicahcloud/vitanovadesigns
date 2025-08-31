/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AddLeadDialog } from "@/components/admin/AddLeadDialog";

type Lead = {
  id: string;
  name: string;
  org?: string | null;
  email?: string | null;
  status: string; // e.g., NEW | CONTACTED | QUALIFIED | WON | LOST | ARCHIVED
  createdAt: string;
};

const STATUS_VARIANT: Record<
  string,
  "default" | "secondary" | "destructive" | "outline"
> = {
  NEW: "secondary",
  CONTACTED: "secondary",
  QUALIFIED: "default",
  WON: "default",
  LOST: "destructive",
  ARCHIVED: "outline",
};

export default function LeadsTable() {
  const [rows, setRows] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  async function load() {
    try {
      setErr(null);
      setLoading(true);
      const r = await fetch("/api/leads", { cache: "no-store" });
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      const data: Lead[] = await r.json();
      setRows(data);
    } catch (e: any) {
      setErr(e?.message || "Failed to load leads");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-base">Leads</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={load}>
            Refresh
          </Button>
          <AddLeadDialog onAdded={load} />
        </div>
      </CardHeader>
      <CardContent>
        {err && (
          <div className="mb-3 text-sm text-rose-600">{err} — try Refresh.</div>
        )}

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Org</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              // lightweight skeletons
              Array.from({ length: 4 }).map((_, i) => (
                <TableRow key={`s-${i}`}>
                  <TableCell className="py-3">
                    <div className="h-4 w-32 animate-pulse bg-slate-200 rounded" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-28 animate-pulse bg-slate-200 rounded" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-40 animate-pulse bg-slate-200 rounded" />
                  </TableCell>
                  <TableCell>
                    <div className="h-5 w-16 animate-pulse bg-slate-200 rounded" />
                  </TableCell>
                  <TableCell>
                    <div className="h-4 w-24 animate-pulse bg-slate-200 rounded" />
                  </TableCell>
                </TableRow>
              ))
            ) : rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="py-6 text-slate-500">
                  No leads yet.
                </TableCell>
              </TableRow>
            ) : (
              rows.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="py-3">{r.name}</TableCell>
                  <TableCell>{r.org ?? "—"}</TableCell>
                  <TableCell>{r.email ?? "—"}</TableCell>
                  <TableCell>
                    <Badge variant={STATUS_VARIANT[r.status] ?? "secondary"}>
                      {r.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(r.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
