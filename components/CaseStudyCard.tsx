"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Database, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FormQuillCaseStudy() {
  return (
    <section className="py-20 bg-[#0A0826] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-[#050414] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-white/5 p-4 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-500 font-bold uppercase tracking-widest">
                  System Build: FormQuill
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
                </div>
              </div>
              {/* This represents the FormQuill Dashboard mockup */}
              <div className="p-8 space-y-6">
                <div className="h-6 w-1/2 bg-cyan-400/20 rounded-md" />
                <div className="space-y-3">
                  <div className="h-12 w-full bg-white/5 rounded-lg border border-white/10" />
                  <div className="h-12 w-full bg-white/5 rounded-lg border border-white/10" />
                  <div className="h-12 w-full bg-white/5 rounded-lg border border-white/10" />
                </div>
                <div className="h-10 w-32 bg-purple-600 rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              ENGINEERING <br />
              <span className="text-cyan-400">BUSINESS AUTOMATION</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              FormQuill is more than a form builder—it’s a data engine. We
              custom-coded this platform to solve the &quot;clunky UI&quot;
              problem of traditional intake systems.
            </p>

            <div className="space-y-4">
              {/* Existing Database Point */}
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-cyan-400/10 rounded-lg">
                  <Database className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Dynamic Logic Engines
                  </h4>
                  <p className="text-sm text-gray-500">
                    Custom conditional paths that adapt to user behavior in
                    real-time.
                  </p>
                </div>
              </div>

              {/* NEW: Using FileText here */}
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-blue-400/10 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Automated Document Generation
                  </h4>
                  <p className="text-sm text-gray-500">
                    Instantly transform raw form data into professionally
                    formatted PDFs and reports.
                  </p>
                </div>
              </div>

              {/* Existing Shield Point */}
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-purple-400/10 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Hardened Data Integrity
                  </h4>
                  <p className="text-sm text-gray-500">
                    Bespoke encryption and secure server-side processing for
                    sensitive business data.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link href="https://formquill.com" target="_blank">
                <button className="flex items-center gap-2 text-white font-bold group">
                  Visit the Lab: FormQuill.com
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
