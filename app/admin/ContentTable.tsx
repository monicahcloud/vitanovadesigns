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

type ContentItem = {
  id: string;
  title: string;
  type: "BLOG" | "PAGE" | "SOCIAL" | "EMAIL" | "OTHER";
  status: "IDEATE" | "DRAFT" | "REVIEW" | "PUBLISHED";
  dueDate?: string | null;
};

export default function ContentTable() {
  const [rows, setRows] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/content", { cache: "no-store" })
      .then((r) => r.json())
      .then(setRows)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          Array.from({ length: 4 }).map((_, i) => (
            <TableRow key={`s-${i}`}>
              <TableCell>
                <div className="h-4 w-56 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-16 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-5 w-20 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-24 animate-pulse bg-slate-200 rounded" />
              </TableCell>
            </TableRow>
          ))
        ) : rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={4} className="py-6 text-slate-500">
              No content yet.
            </TableCell>
          </TableRow>
        ) : (
          rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.title}</TableCell>
              <TableCell>{r.type}</TableCell>
              <TableCell>
                <Badge
                  variant={r.status === "PUBLISHED" ? "default" : "secondary"}>
                  {r.status}
                </Badge>
              </TableCell>
              <TableCell>
                {r.dueDate ? new Date(r.dueDate).toLocaleDateString() : "—"}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
