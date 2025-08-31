"use client";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeaderBar() {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5" />
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
            VitaNova Admin
          </h1>
        </div>
        <Button
          variant="outline"
          onClick={async () => {
            await fetch("/api/admin-logout", { method: "POST" });
            window.location.href = "/admin/login";
          }}>
          Log out
        </Button>
      </div>
      <p className="text-slate-600">
        One place to manage agents, integrations, and weekly performance.
        Draft-first: agents prepare; you approve.
      </p>
    </header>
  );
}
