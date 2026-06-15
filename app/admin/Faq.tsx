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

type Faq = { id: string; question: string; answer: string; tags: string[] };

export default function Faq() {
  const [rows, setRows] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/faqs", { cache: "no-store" })
      .then((r) => r.json())
      .then(setRows)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Question</TableHead>
          <TableHead>Answer</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <TableRow key={`s-${i}`}>
              <TableCell>
                <div className="h-4 w-64 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-96 animate-pulse bg-slate-200 rounded" />
              </TableCell>
              <TableCell>
                <div className="h-4 w-40 animate-pulse bg-slate-200 rounded" />
              </TableCell>
            </TableRow>
          ))
        ) : rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="py-6 text-slate-500">
              No FAQs yet.
            </TableCell>
          </TableRow>
        ) : (
          rows.map((r) => (
            <TableRow key={r.id}>
              <TableCell className="align-top max-w-[260px] break-words">
                {r.question}
              </TableCell>
              <TableCell className="align-top text-slate-700 max-w-[520px] break-words">
                {r.answer}
              </TableCell>
              <TableCell className="align-top">
                {r.tags?.length
                  ? r.tags.map((t) => (
                      <Badge key={t} variant="outline" className="mr-1 mb-1">
                        {t}
                      </Badge>
                    ))
                  : "—"}
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
