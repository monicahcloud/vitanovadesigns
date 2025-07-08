/* components/service-details/WebDetail.tsx */
"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Smile, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    text: "Effortless elegance — a sleek design that makes your brand shine",
  },
  {
    icon: Globe,
    text: "Global-first impression — your site looks flawless on every screen",
  },
  {
    icon: Smile,
    text: "User-friendly by design — intuitive layouts that build instant trust",
  },
  {
    icon: TrendingUp,
    text: "Future-ready — crafted to evolve with your business and vision",
  },
];

export default function WebDetail() {
  return (
    <>
      {/* 🌠 Opening line with motion */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-lg leading-relaxed">
        Your website is your stage — and at VitaNova, we make sure you steal the
        spotlight. We design premium, high-performance websites that captivate
        at first glance, guide your visitors with ease, and leave a lasting
        impression that elevates your entire brand.
      </motion.p>

      {/* ✨ Feature list with motion & iconography */}
      <ul className="space-y-5">
        {features.map(({ icon: Icon, text }, i) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 group">
            {/* Icon container */}
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
