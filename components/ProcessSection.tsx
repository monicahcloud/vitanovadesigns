"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Target, Rocket } from "lucide-react";

const steps = [
  {
    day: "Day 1",
    title: "The Strategic Blueprint",
    description:
      "We dive deep into your business goals. No fluff. We map out your high-conversion user journey and technical architecture before a single line of code is written.",
    icon: <Target className="w-8 h-8 text-purple-400" />,
    color: "from-purple-500/20 to-transparent",
  },
  {
    day: "Day 2",
    title: "AI-Accelerated Build",
    description:
      "Our 'Human-in-the-Loop' workflow begins. We leverage advanced AI tools to build your frontend and core systems at 10x speed, while our engineers focus on custom logic and security.",
    icon: <Zap className="w-8 h-8 text-cyan-400" />,
    color: "from-cyan-500/20 to-transparent",
  },
  {
    day: "Day 3",
    title: "Refinement & Launch",
    description:
      "We polish the 'Last Mile.' Security audits, SEO optimization, and mobile testing. We hand over a battle-tested product that is ready to scale immediately.",
    icon: <Rocket className="w-8 h-8 text-white" />,
    color: "from-white/20 to-transparent",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#0A0826] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Our <span className="text-cyan-400">Velocity</span> Process
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Traditional agencies take months. We use AI-augmented engineering to
            deliver elite results in a fraction of the time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-white/20 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className={`relative z-10 p-8 rounded-3xl border border-white/10 bg-gradient-to-b ${step.color} backdrop-blur-sm`}>
              <div className="text-sm font-bold text-cyan-400 mb-4 tracking-widest uppercase">
                {step.day}
              </div>
              <div className="mb-6 inline-block p-4 rounded-2xl bg-white/5 border border-white/10">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic">
            *Complex Enterprise systems or custom SaaS builds may require
            additional 3-day sprints.
          </p>
        </div>
      </div>
    </section>
  );
}
