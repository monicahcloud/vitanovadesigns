"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const params = useSearchParams();
  const router = useRouter();
  const next = params.get("next") || "/admin";

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      router.push(next);
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <div className="min-h-[100dvh] grid place-items-center bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-sm rounded-2xl border bg-white p-6 shadow-sm">
        <h1 className="text-xl font-semibold mb-4">VitaNova Admin Login</h1>
        <label className="block text-sm text-slate-600 mb-2">Password</label>
        <input
          type="password"
          className="w-full rounded-md border p-2 mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter admin password"
          required
        />
        {error && <p className="text-sm text-rose-600 mb-3">{error}</p>}
        <button className="w-full rounded-md bg-slate-900 text-white py-2">
          Sign in
        </button>
        <p className="text-xs text-slate-500 mt-3">
          Draft‑only workflow stays in place; this simply protects the admin UI.
        </p>
      </form>
    </div>
  );
}
