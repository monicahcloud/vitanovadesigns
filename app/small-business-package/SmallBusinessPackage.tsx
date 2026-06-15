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
    // keep your one-time tiers, but show "Starting at"
    lite: 1500,
    essential: 3000,
    pro: 5000,
  },
  // optional if you still want to keep a subscription tab visible
  subscription: {
    termLabel: "12-month term; own the site after",
    lite: { setup: 525, monthly: 139, hours: 1 }, // care-included model (adjust if desired)
    essential: { setup: 1050, monthly: 275, hours: 2 },
    pro: { setup: 1750, monthly: 459, hours: 4 },
  },
} as const;

// REDUCED SCOPES to fit “Starting at” prices
const lite = [
  "Up to 2 pages (Home + Contact)",
  "Conversion-ready contact form",
  "Basic SEO fields (titles & meta)",
  "Google Map or social links",
  "1 round of revisions",
];

const essential = [
  "Up to 4 pages (e.g., Home, About, Services, Contact)",
  "Search-friendly setup & indexing",
  "Blog/news ready (no content migration)",
  "Email capture or booking link (choose one)",
  "1 month of minor updates (one-time only)",
];

const pro = [
  "Up to 6 pages + 1 simple landing page",
  "Brand palette & type refresh (no full logo design)",
  "Local SEO basics + Google Business link",
  "Newsletter OR booking integration (choose one)",
  "2 months priority support (one-time only)",
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

export default function SmallBusinessPackage() {
  const [mode, setMode] = useState<BillingMode>("subscription");
  const isSub = mode === "subscription";

  return (
    <section id="packages" className="px-6 md:px-10 lg:px-16 pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Simple, Transparent Packages
            </h2>
            <p className="mt-2 text-slate-600">
              Choose the billing that fits your budget. Upgrade anytime.
            </p>
          </div>

          {/* LOCAL UI TOGGLE (no URL change) */}
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
          {/* Lite */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layout className="h-5 w-5 text-purple-600" />
                  <h3 className="text-xl font-semibold">Lite</h3>
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
                    {fmt(pricing.subscription.lite.setup)} setup
                  </p>
                  <p className="text-sm text-slate-500">
                    then from {fmt(pricing.subscription.lite.monthly)}/mo ·{" "}
                    {pricing.subscription.termLabel}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mt-2">
                    Starting at
                  </p>
                  <p className="text-3xl font-extrabold">
                    {fmt(pricing.onetime.lite)}
                  </p>
                </>
              )}
              <p className="text-sm text-slate-500 mt-2">
                Essentials to get you live quickly.
              </p>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                ...lite,
                ...(isSub
                  ? subscriptionExtras(pricing.subscription.lite.hours)
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

          {/* Essential */}
          <Card className="relative ring-1 ring-cyan-100 shadow-lg flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-semibold">Essential</h3>
                </div>
                <Badge className="bg-gradient-to-r from-purple-600 to-cyan-500">
                  Best Value
                </Badge>
              </div>
              {isSub ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="text-2xl font-extrabold">
                    {fmt(pricing.subscription.essential.setup)} setup
                  </p>
                  <p className="text-sm text-slate-500">
                    then from {fmt(pricing.subscription.essential.monthly)}/mo ·{" "}
                    {pricing.subscription.termLabel}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mt-2">
                    Starting at
                  </p>
                  <p className="text-3xl font-extrabold">
                    {fmt(pricing.onetime.essential)}
                  </p>
                </>
              )}
              <p className="text-sm text-slate-500 mt-2">
                Room to grow with the right basics.
              </p>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                ...essential,
                ...(isSub
                  ? subscriptionExtras(pricing.subscription.essential.hours)
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

          {/* Pro */}
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-purple-600" />
                  <h3 className="text-xl font-semibold">Pro</h3>
                </div>
                <Badge
                  variant="outline"
                  className="border-cyan-300 text-cyan-600">
                  For Scaling
                </Badge>
              </div>
              {isSub ? (
                <div className="mt-3">
                  <p className="text-xs uppercase tracking-wide text-slate-500">
                    Starting at
                  </p>
                  <p className="text-2xl font-extrabold">
                    {fmt(pricing.subscription.pro.setup)} setup
                  </p>
                  <p className="text-sm text-slate-500">
                    then from {fmt(pricing.subscription.pro.monthly)}/mo ·{" "}
                    {pricing.subscription.termLabel}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-xs uppercase tracking-wide text-slate-500 mt-2">
                    Starting at
                  </p>
                  <p className="text-3xl font-extrabold">
                    {fmt(pricing.onetime.pro)}
                  </p>
                </>
              )}
              <p className="text-sm text-slate-500 mt-2">
                Brand refresh and a focused growth setup.
              </p>
            </CardHeader>
            <CardContent className="grid gap-2">
              {[
                ...pro,
                ...(isSub
                  ? subscriptionExtras(pricing.subscription.pro.hours)
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

        {/* Small print */}
        <p className="mt-6 text-xs text-slate-500">
          “Starting at” prices reflect typical scopes. Final pricing may vary
          with features, content, integrations, or timeline.
        </p>
      </div>
    </section>
  );
}
