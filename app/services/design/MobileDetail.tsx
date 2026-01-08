"use client";

import { motion } from "framer-motion";
import { Smartphone, Zap, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Native Performance",
    text: "Apps that feel fast, smooth, and right at home on both iOS and Android platforms.",
  },
  {
    icon: Zap,
    title: "Frictionless Interaction",
    text: "Micro-interactions designed to keep users engaged and reduce drop-off rates.",
  },
  {
    icon: Users,
    title: "Scalable Audience Tech",
    text: "Built to handle your first 100 users and your next 100,000 without a single hitch.",
  },
  {
    icon: Globe,
    title: "Global Sync",
    text: "Real-time data synchronization ensuring your users stay connected, wherever they are.",
  },
];

export default function MobileDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          MOBILE <br />
          <span className="text-purple-600">ENGINEERING.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          We create mobile applications that combine high-end aesthetics with
          custom-coded performance. Our focus is on building intuitive tools
          that become an essential part of your customer&apos;s daily life.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Deploy Your App
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
