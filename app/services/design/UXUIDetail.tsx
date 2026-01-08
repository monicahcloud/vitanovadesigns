"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, PenTool, Fingerprint, Heart } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Intuitive Flow",
    text: "Architecting user journeys that feel like second nature, guiding visitors exactly where they need to go.",
  },
  {
    icon: PenTool,
    title: "Precision Systems",
    text: "Creating consistent, pixel-perfect design systems that grow with your brand across all digital platforms.",
  },
  {
    icon: Fingerprint,
    title: "Behavioral Design",
    text: "Interfaces crafted to feel familiar and instantly engaging by leveraging proven psychological patterns.",
  },
  {
    icon: Heart,
    title: "Empathy-First UI",
    text: "Designing for people, not just pixels—ensuring accessibility, trust, and emotional resonance.",
  },
];

export default function UXUIDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column: The Strategic Pitch */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          EXPERIENCE <br />
          <span className="text-purple-600">DESIGN.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          Great design doesn’t just look good—it feels right. We craft
          experiences that reduce friction, build trust, and spark delight
          through strategic, human-centered interaction design.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Optimize Your Experience
        </button>
      </motion.div>

      {/* Right Column: Feature List */}
      <ul className="grid gap-8">
        {features.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-6 group">
            {/* The Icon Badge */}
            <div className="shrink-0 rounded-2xl p-4 bg-slate-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg">
              <item.icon className="w-6 h-6" />
            </div>

            {/* Text Content */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1 transition-colors group-hover:text-purple-600">
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
