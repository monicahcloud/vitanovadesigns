// app/small-business-packages/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layout as LayoutIcon,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SmallBusinessPackage from "./SmallBusinessPackage";
import { GuaranteeDetails } from "@/components/CraftsmanshipGuarantee";
export const metadata: Metadata = {
  title: "Small Business Website Packages | Vita Nova Designs",
  description:
    "Modern, mobile-first websites for small businesses. Clear pricing, fast delivery, ongoing support.",
  alternates: { canonical: "/small-business-packages" },
  openGraph: {
    title: "Small Business Website Packages",
    description:
      "Stand out online with clean design, SEO setup, and simple pricing. Built with Next.js and Tailwind.",
    url: "/small-business-packages",
    siteName: "Vita Nova Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Small Business Website Packages",
    description:
      "Modern websites that grow your business. Clear pricing, fast delivery, real results.",
  },
};

const features = [
  "Mobile-first responsive design",
  "SEO basics (titles, meta, sitemap)",
  "Performance best practices",
  "Accessibility minded",
  "Analytics installed",
  "1:1 onboarding + handoff",
];

export default function SmallBusinessPackagesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <section className="relative px-6 md:px-10 lg:px-16 py-20">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Badge className="mb-3 bg-purple-100 text-purple-700 border-purple-200">
              New for 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Websites{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
                That Win You Customers
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Stand out, get found, and turn clicks into customers. Clear
              pricing. Fast turnaround. No fluff.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90">
                <Link href="/contact">
                  Start a Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <Link
                  href="https://calendly.com/vitanovadesigns/30min-1"
                  target="_blank"
                  rel="noopener noreferrer">
                  Book a Call
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 text-slate-700">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-purple-600" />
                <span>Typical delivery: 2–3 weeks for Lite</span>
              </div>

              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-cyan-500" />
                <span>90-day craftsmanship guarantee</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border bg-white/80 backdrop-blur shadow-xl p-6">
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                <Sparkles className="h-4 w-4 text-purple-600" />
                Clear plans. Fair pricing. Real support.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing (client-side toggle) */}
      <SmallBusinessPackage />

      {/* Process */}
      <section className="px-6 md:px-10 lg:px-16 py-16 border-t bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Our 3-Step Process
          </h2>
          <p className="mt-2 text-slate-600">
            Clear communication, fast delivery, no surprises.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold">1) Discover</h3>
                </div>
              </CardHeader>
              <CardContent className="text-slate-600">
                A 15-minute call to nail your goals, pages, and timeline. You’ll
                get a fixed quote and start date.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <LayoutIcon className="h-5 w-5 text-cyan-500" />
                  <h3 className="font-semibold">2) Design & Build</h3>
                </div>
              </CardHeader>
              <CardContent className="text-slate-600">
                We design in your brand, then build with Next.js for speed and
                SEO. You’ll review and request edits.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold">3) Launch & Support</h3>
                </div>
              </CardHeader>
              <CardContent className="text-slate-600">
                Go live with analytics and SEO basics. Optional care plans keep
                things fresh and secure.
              </CardContent>
            </Card>
          </div>
        </div>
        <GuaranteeDetails />
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-10 lg:px-16 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            <details className="group rounded-xl border bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium text-slate-900">
                  How fast can we launch?
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-slate-600">
                Most Starter and Growth sites ship in 2–3 weeks. Premium
                projects vary based on branding and integrations.
              </p>
            </details>
            <details className="group rounded-xl border bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium text-slate-900">
                  Do you provide hosting & maintenance?
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-slate-600">
                Yes — we offer care plans for hosting, updates, backups, and
                small content changes. Ask on the call and we’ll match a plan.
              </p>
            </details>
            <details className="group rounded-xl border bg-white p-5 open:shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between">
                <span className="font-medium text-slate-900">
                  Can you help with copy, photos, or branding?
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-slate-600">
                Absolutely. Premium includes branding. For Starter/Growth, we
                can add copywriting or photography as an add-on.
              </p>
            </details>
          </div>
          <div className="mt-10 flex gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90">
              <Link href="/contact">Start a Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-700 hover:bg-purple-50">
              <Link
                href="https://calendly.com/vitanovadesigns/30min-1"
                target="_blank"
                rel="noopener noreferrer">
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border bg-white p-10 md:p-14">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Ready to turn visitors into customers?
              </h3>
              <p className="mt-2 text-slate-600">
                We combine clean design with SEO and performance so your website
                actually works for your business.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-700 hover:bg-purple-50">
                <Link
                  href="https://calendly.com/vitanovadesigns/30min-1"
                  target="_blank"
                  rel="noopener noreferrer">
                  Ask a Question
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
