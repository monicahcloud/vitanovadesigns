/* components/service-details/BrandingDetail.tsx */
"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Type, Eye } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    text: "A brand identity that’s unforgettable — bold, refined, and true to you",
  },
  {
    icon: Palette,
    text: "Custom color palettes and visuals that resonate at first glance",
  },
  {
    icon: Type,
    text: "Typography that speaks in your voice, with clarity and confidence",
  },
  {
    icon: Eye,
    text: "A visual system that stays consistent across every platform and touchpoint",
  },
];

export default function BrandingDetail() {
  return (
    <>
      {/* ✨ Intro paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-lg leading-relaxed">
        Your brand is more than a logo — it’s how people feel when they see,
        hear, or interact with you. At VitaNova, we build brand identities that
        are emotionally resonant, visually iconic, and ready to scale with
        purpose and personality.
      </motion.p>

      {/* 🌈 Animated feature list */}
      <ul className="space-y-5">
        {features.map(({ icon: Icon, text }, i) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 group">
            <span className="shrink-0 rounded-full p-2 bg-gradient-to-tr from-purple-600 to-fuchsia-500 text-white group-hover:scale-110 transition shadow-lg">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-base md:text-lg leading-relaxed">{text}</span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
