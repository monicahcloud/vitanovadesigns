/* components/service-details/MobileDetail.tsx */
"use client";

import { motion } from "framer-motion";
import { Smartphone, Touchpad, Sparkles, Move } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    text: "Designed to feel natural and intuitive on every mobile device",
  },
  {
    icon: Touchpad,
    text: "Effortless navigation that keeps your users moving forward",
  },
  {
    icon: Sparkles,
    text: "Polished animations and micro-interactions that bring your brand to life",
  },
  {
    icon: Move,
    text: "Responsive layouts that scale gracefully with your business",
  },
];

export default function MobileDetail() {
  return (
    <>
      {/* ✨ Opening message with motion */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-lg leading-relaxed">
        Your mobile experience should be just as stunning and seamless as your
        desktop one— maybe even better. At VitaNova, we design mobile interfaces
        that feel smooth, familiar, and built for action. It's more than
        mobile-friendly—it's mobile-first magic.
      </motion.p>

      {/* 📱 Feature list with icon animation */}
      <ul className="space-y-5">
        {features.map(({ icon: Icon, text }, i) => (
          <motion.li
            key={text}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-start gap-4 group">
            <span className="shrink-0 rounded-full p-2 bg-gradient-to-tr from-purple-500 to-pink-500 text-white group-hover:scale-110 transition shadow-lg">
              <Icon className="w-5 h-5" />
            </span>
            <span className="text-base md:text-lg leading-relaxed">{text}</span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
