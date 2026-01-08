"use client";

import { motion } from "framer-motion";
import { Smartphone, Code, Database, Cloud } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "High-Performance Mobile",
    text: "Bespoke applications designed for fluid user experiences and native-level speed on all devices.",
  },
  {
    icon: Code,
    title: "Engineering Excellence",
    text: "Clean, maintainable codebases built from scratch to ensure your software is a permanent asset.",
  },
  {
    icon: Database,
    title: "Robust Data Structures",
    text: "Sophisticated database management capable of handling complex user data and high-traffic loads.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    text: "Modern cloud-native deployment that ensures your application is flexible, secure, and always on.",
  },
];

export default function AppDevDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start text-left">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          PRODUCT <br />
          <span className="text-purple-600">ENGINEERING.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          We build custom software products that combine deep functionality with
          intuitive interfaces. From MVP to enterprise scale, we engineer
          solutions that deliver lasting business value.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Build Your Product
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
