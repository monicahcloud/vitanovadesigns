// app/church-packages/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  Shield,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ChurchPackages from "./ChurchPackages";
import { GuaranteeDetails } from "@/components/CraftsmanshipGuarantee";

export const metadata: Metadata = {
  title: "Church Website Packages | Vita Nova Designs",
  description:
    "Purpose-built church websites with sermons, giving, events, and livestream integrations. Clear pricing, fast delivery, real support.",
  alternates: { canonical: "/church-packages" },
  openGraph: {
    title: "Church Website Packages",
    description:
      "Seed, Grow, and Flourish packages designed for ministries at every stage. Clear pricing and reliable support.",
    url: "/church-packages",
    siteName: "Vita Nova Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Church Website Packages",
    description:
      "Modern church websites that help people visit, give, and get connected.",
  },
};

const features = [
  "Mobile-first responsive design",
  "Sermon library (YouTube/Vimeo embeds)",
  "Events calendar & announcements",
  "Online giving & visitor next steps",
  "Search-friendly setup (titles, descriptions, sitemap)",
  "Analytics installed",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero */}
      <section className="relative px-6 md:px-10 lg:px-16 py-20">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2 items-center">
          <div>
            <Badge className="mb-3 bg-purple-100 text-purple-700 border-purple-200">
              For Churches & Ministries
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Church Websites{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
                Built to Grow Attendance, Giving, and Engagement
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Reach new visitors, serve your members, and keep events, sermons,
              and giving in one place. Fast, dependable, and easy to update.
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
                <span>Typical delivery: 2–3 weeks for Seed plan</span>
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
                Ministry-minded partner focused on clarity and care.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing (client-side toggle) */}
      <ChurchPackages />

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
            <div className="rounded-xl border bg-white p-6">
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold">1) Discover</h3>
              </div>
              <p className="mt-3 text-slate-600">
                A 15-minute call to nail your goals, pages, and timeline. You’ll
                get a fixed quote and start date.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-500" />
                <h3 className="font-semibold">2) Design & Build</h3>
              </div>
              <p className="mt-3 text-slate-600">
                We design in your brand, then build a fast, search-friendly
                site. You’ll review and request edits.
              </p>
            </div>
            <div className="rounded-xl border bg-white p-6">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-purple-600" />
                <h3 className="font-semibold">3) Launch & Support</h3>
              </div>
              <p className="mt-3 text-slate-600">
                Go live with analytics and search-friendly basics. Optional care
                plans keep things fresh and secure.
              </p>
            </div>
          </div>
        </div>
        <GuaranteeDetails />
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl border bg-white p-10 md:p-14">
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                Ready to serve more people online?
              </h3>
              <p className="mt-2 text-slate-600">
                We combine clean design with search-friendly performance so your
                website actually supports your ministry.
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
