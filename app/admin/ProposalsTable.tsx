"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Proposal = {
  id: string;
  clientName: string;
  scope: "SEED" | "GROW" | "FLOURISH" | "CUSTOM";
  status: "DRAFT" | "SENT" | "ACCEPTED" | "REJECTED" | "ON_HOLD";
  docUrl?: string | null;
  createdAt: string;
};

export default function ProposalsTable() {
  const [rows, setRows] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/proposals", { cache: "no-store" })
      .then((r) => r.json())
      .then(setRows)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Client</TableHead>
          <TableHead>Scope</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Link</TableHead>
          <TableHead>Created</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <TableRow key={`s-${i}`}>
              <TableCell>
                <div className="h-4 w-36 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-16 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-5 w-16 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-10 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-24 animate-pulse bg-slate-200 rounded" />
              </TableCell>
            </TableRow>
          ))
        ) : rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="py-6 text-slate-500">
              No proposals yet.
            </TableCell>
          </TableRow>
        ) : (
          rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.clientName}</TableCell>
              <TableCell>{r.scope}</TableCell>
              <TableCell>
                <Badge>{r.status}</Badge>
              </TableCell>
              <TableCell>
                {r.docUrl ? (
                  <a href={r.docUrl} className="text-sky-600" target="_blank">
                    Doc
                  </a>
                ) : (
                  "—"
                )}
              </TableCell>
              <TableCell>
                {new Date(r.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
