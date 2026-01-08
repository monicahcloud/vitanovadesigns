"use client";

import { motion } from "framer-motion";
import { Laptop, Code, Cloud, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Performance First",
    text: "Lightning-fast load times that optimize for SEO and user retention.",
  },
  {
    icon: Code,
    title: "Clean Architecture",
    text: "Custom-coded foundations that are maintainable, scalable, and built to last.",
  },
  {
    icon: Cloud,
    title: "Ecosystem Integration",
    text: "Connecting your digital presence with your existing CRMs and business tools.",
  },
  {
    icon: ShieldCheck,
    title: "Bespoke Security",
    text: "Hardened server-side logic and encryption to protect your business data.",
  },
];

export default function WebDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          DIGITAL <br />
          <span className="text-purple-600">FOUNDATIONS.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          We don&apos;t just build sites; we architect digital engines. From
          custom SaaS platforms to high-end corporate presence, our builds are
          engineered for stability and growth.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Build Your Foundation
        </button>
      </motion.div>

      <ul className="grid gap-8">
        {features.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-6 group">
            <div className="shrink-0 rounded-2xl p-4 bg-slate-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                {item.title}
              </h4>
              <p className="text-slate-500 text-base leading-snug">
                {item.text}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
