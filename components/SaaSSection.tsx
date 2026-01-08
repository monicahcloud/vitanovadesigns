"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, ShieldCheck, Globe, Code2 } from "lucide-react";
import Link from "next/link";

const saasFeatures = [
  {
    title: "Scalable Architecture",
    desc: "Built to handle 10 or 10,000 users without breaking a sweat.",
    icon: <Database className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Secure Authentication",
    desc: "Enterprise-grade security using Clerk or Auth.js integrations.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Global API Integration",
    desc: "Connect your product to the world with custom API builds.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Clean Codebase",
    desc: "Maintainable, documented code that your team can actually own.",
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
  },
];

export default function SaaSSection() {
  return (
    <section className="py-24 bg-[#050414] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              FROM IDEA TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                MARKET-READY SaaS
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We don&apos;t just build websites; we build software. We handle
              everything from database schema design to AI integrations,
              ensuring your product is fast, secure, and ready for revenue.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {saasFeatures.map((f, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-3">
                    {f.icon}
                    <h4 className="font-bold text-white">{f.title}</h4>
                  </div>
                  <p className="text-sm text-gray-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: The "Proof" (Visualizing your Lab) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative p-2 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10">
            <div className="bg-[#0A0826] rounded-[22px] p-8 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest">
                  Featured Case Study: Software Excellence
                </div>
              </div>

              {/* Visual representation of a SaaS UI */}
              <div className="space-y-4 animate-pulse">
                <div className="h-4 w-1/3 bg-purple-500/20 rounded" />
                <div className="h-32 w-full bg-white/5 rounded-xl border border-white/5" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-cyan-500/10 rounded-xl" />
                  <div className="h-20 bg-purple-500/10 rounded-xl" />
                  <div className="h-20 bg-white/5 rounded-xl" />
                </div>
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-400 text-sm mb-4 italic">
                  &quot;VitaNova delivered our MVP 3x faster than quoted
                  elsewhere.&quot;
                </p>
                <Link
                  href="/services/design"
                  className="text-cyan-400 font-bold hover:underline">
                  Explore Our SaaS Workflow →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
