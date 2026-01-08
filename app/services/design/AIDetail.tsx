"use client";

import { motion } from "framer-motion";
import { Brain, Server, Code, Database } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Cognitive Automation",
    text: "Building intelligent workflows that learn and adapt, reducing manual labor and human error.",
  },
  {
    icon: Server,
    title: "Seamless Integration",
    text: "Architecting the bridge between cutting-edge AI models and your existing business infrastructure.",
  },
  {
    icon: Code,
    title: "Custom Logic Engines",
    text: "Developing proprietary AI code that evolves with your business, ensuring long-term scalability.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    text: "Turning complex data sets into actionable insights and automated decision-making tools.",
  },
];

export default function AIDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          INTELLIGENT <br />
          <span className="text-purple-600">SYSTEMS.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          We don&apos;t just &quot;add&quot; AI; we architect intelligent
          ecosystems. We integrate advanced systems into your workflows to
          enable high-velocity automation and data-driven clarity.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Automate Your Future
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
            <div className="shrink-0 rounded-2xl p-4 bg-slate-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <item.icon className="w-6 h-6" />
            </div>
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
