"use client";

import { useState } from "react";
import Link from "next/link";
import { Layout, LineChart, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type BillingMode = "onetime" | "subscription";

const pricing = {
  onetime: {
    seed: 695,
    grow: 1295,
    flourish: 2195,
  },
  subscription: {
    termLabel: "12-month term; own the site after",
    seed: { setup: 450, monthly: 119, hours: 1 },
    grow: { setup: 850, monthly: 199, hours: 2 },
    flourish: { setup: 1450, monthly: 319, hours: 4 },
  },
} as const;

// REDUCED SCOPES
const seed = [
  "1-page site (Service times, location, contact)",
  "Map & directions + simple contact form",
  "Basic brand setup (colors & type)",
  "No sermon import (add-on available)",
];

const grow = [
  "Up to 4 pages (Home, About, Ministries, Contact)",
  "Sermon embeds (initial import up to 10)",
  "Newsletter signup OR donation button (choose one)",
  "Search-friendly setup & indexing",
];

const flourish = [
  "Up to 6 pages",
  "Brand palette & type refresh (no full logo)",
  "Livestream page + sermon library (import up to 20)",
  "Giving flow + newcomer follow-up prompt",
];

const subscriptionExtras = (hours: number) => [
  `${hours} hr/mo content & updates`,
  "Security updates, monitoring & backups",
  "Priority email support",
];

const fmt = (n: number) =>
  n.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export default function ChurchPackages() {
  const [mode, setMode] = useState<BillingMode>("subscription");
  const isSub = mode === "subscription";

  return (
    <section id="packages" className="px-6 md:px-10 lg:px-16 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Simple, Transparent Packages
            </h2>
            <p className="mt-2 text-slate-600">
              Choose the billing that fits your budget. Upgrade anytime.
            </p>
          </div>

          <div className="inline-flex rounded-xl border p-1 bg-white shadow-sm">
            {/* Setup + Monthly FIRST */}
            <button
              type="button"
              onClick={() => setMode("subscription")}
              aria-pressed={isSub}
              className={`px-3 py-1.5 text-sm rounded-lg transition ${
                isSub
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                  : "text-slate-700 hover:bg-slate-50"
              }`}>
              Setup + Monthly
            </button>

            <button
              type="button"
              onClick={() => setMode("onetime")}
              aria-pressed={!isSub}
              className={`px-3 py-1.5 text-sm rounded-lg transition ${
                !isSub
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                  : "text-slate-700 hover:bg-slate-50"
              }`}>
              One-Time
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Seed */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layout className="h-5 w-5 text-purple-600" />
                  <h3 className="text-xl font-semibold">Seed</h3>
                </div>
                <Badge
                  variant="outline"
                  className="border-purple-300 text-purple-700">
                  Most Affordable
                </Badge>
              </div>
              {isSub ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="text-2xl font-extrabold">
                    {fmt(pricing.subscription.seed.setup)} setup
                  </p>
                  <p className="text-sm text-slate-500">
                    then from {fmt(pricing.subscription.seed.monthly)}/mo ·{" "}
                    {pricing.subscription.termLabel}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mt-2">
                    Starting at
                  </p>
                  <p className="text-3xl font-extrabold">
                    {fmt(pricing.onetime.seed)}
                  </p>
                </>
              )}
              <p className="text-sm text-slate-500 mt-2">
                Invite-ready, simple and clear.
              </p>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                ...seed,
                ...(isSub
                  ? subscriptionExtras(pricing.subscription.seed.hours)
                  : []),
              ].map((item) => (
                <div className="flex items-start gap-2" key={item}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90">
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Grow */}
          <Card className="relative ring-1 ring-cyan-100 shadow-lg flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-semibold">Grow</h3>
                </div>
                <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500">
                  Most Popular
                </Badge>
              </div>
              {isSub ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="text-2xl font-extrabold">
                    {fmt(pricing.subscription.grow.setup)} setup
                  </p>
                  <p className="text-sm text-slate-500">
                    then from {fmt(pricing.subscription.grow.monthly)}/mo ·{" "}
                    {pricing.subscription.termLabel}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mt-2">
                    Starting at
                  </p>
                  <p className="text-3xl font-extrabold">
                    {fmt(pricing.onetime.grow)}
                  </p>
                </>
              )}
              <p className="text-sm text-slate-500 mt-2">
                Sermons and connections, without the bloat.
              </p>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                ...grow,
                ...(isSub
                  ? subscriptionExtras(pricing.subscription.grow.hours)
                  : []),
              ].map((item) => (
                <div className="flex items-start gap-2" key={item}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90">
                <Link href="/contact">Book a Call</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Flourish */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <h3 className="text-xl font-semibold">Flourish</h3>
                </div>
                <Badge
                  variant="outline"
                  className="border-cyan-300 text-cyan-600">
                  For Growing Ministries
                </Badge>
              </div>
              {isSub ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="text-2xl font-extrabold">
                    {fmt(pricing.subscription.flourish.setup)} setup
                  </p>
                  <p className="text-sm text-slate-500">
                    then from {fmt(pricing.subscription.flourish.monthly)}/mo ·{" "}
                    {pricing.subscription.termLabel}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mt-2">
                    Starting at
                  </p>
                  <p className="text-3xl font-extrabold">
                    {fmt(pricing.onetime.flourish)}
                  </p>
                </>
              )}
              <p className="text-sm text-slate-500 mt-2">
                Livestream-ready with a deeper library.
              </p>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                ...flourish,
                ...(isSub
                  ? subscriptionExtras(pricing.subscription.flourish.hours)
                  : []),
              ].map((item) => (
                <div className="flex items-start gap-2" key={item}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90">
                <Link href="/contact">Let&apos;s Begin</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          “Starting at” prices reflect typical scopes. Final pricing may vary
          with features, content, integrations, or timeline.
        </p>
      </div>
    </section>
  );
}
