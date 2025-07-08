/* components/service-details/UXUIDetail.tsx */
"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, PenTool, Fingerprint, Heart } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    text: "Intuitive user journeys that make navigation feel effortless",
  },
  {
    icon: PenTool,
    text: "Pixel-perfect layouts and design systems tailored to your brand",
  },
  {
    icon: Fingerprint,
    text: "Interfaces crafted to feel natural, familiar, and instantly engaging",
  },
  {
    icon: Heart,
    text: "Empathy-driven design that puts people—not pixels—first",
  },
];

export default function UXUIDetail() {
  return (
    <>
      {/* ✨ Opening statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-lg leading-relaxed">
        Great design doesn’t just look good—it feels right. At VitaNova, we
        craft user experiences that are intuitive, elegant, and emotionally
        resonant. Every interaction is designed to build trust, reduce friction,
        and spark delight.
      </motion.p>

      {/* 💡 Feature list with icons & motion */}
      <ul className="space-y-5">
        {features.map(({ icon: Icon, text }, i) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 group">
            {/* Icon badge */}
            <span className="shrink-0 rounded-full p-2 bg-gradient-to-tr from-purple-500 to-pink-500 text-white group-hover:scale-110 transition shadow-lg">
              <Icon className="w-5 h-5" />
            </span>

            {/* Text */}
            <span className="text-base md:text-lg leading-relaxed">{text}</span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
