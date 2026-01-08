"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Trophy, ScrollText, Megaphone } from "lucide-react";

const features = [
  {
    icon: ScrollText,
    title: "Compelling Narrative",
    text: "Compelling copy that speaks directly to your customer's pain points and desires.",
  },
  {
    icon: MousePointerClick,
    title: "Focused Layouts",
    text: "Eliminating distractions to drive users toward a single, high-value action.",
  },
  {
    icon: Megaphone,
    title: "Strategic Storytelling",
    text: "Building trust and curiosity through a carefully architected content flow.",
  },
  {
    icon: Trophy,
    title: "Engineered to Convert",
    text: "Every pixel is placed with the intent to turn a visitor into a committed lead.",
  },
];

export default function LandingDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          CONVERSION <br />
          <span className="text-purple-600">ENGINES.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          A great landing page doesn’t just look good—it sells. We build
          high-velocity pages that remove the friction between your offer and
          your revenue, designed for instant impact.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Scale Your Revenue
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
