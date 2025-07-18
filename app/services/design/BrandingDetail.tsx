"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Type, Eye } from "lucide-react";

// Feature list with icons and text
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
        className="mb-6 text-base md:text-lg leading-relaxed text-center">
        Your brand is more than a logo — it’s how people feel when they see,
        hear, or interact with you. At VitaNova, we build brand identities that
        are emotionally resonant, visually iconic, and ready to scale with
        purpose and personality.
      </motion.p>

      {/* 🌈 Animated feature list */}
      <ul className="space-y-6">
        {features.map(({ icon: Icon, text }, i) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-6 group cursor-pointer transition-all ease-in-out">
            {/* Icon badge with gradient and pulsing effect */}
            <span className="shrink-0 rounded-full p-5 bg-gradient-to-tr from-purple-600 to-cyan-500 text-white group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-purple-700 group-hover:to-fuchsia-600 transition-all transform duration-300 ease-in-out shadow-xl">
              <Icon className="w-8 h-8" />
            </span>

            {/* Text */}
            <span className="text-base md:text-xl mt-3 leading-relaxed text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
              {text}
            </span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
