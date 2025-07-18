"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Trophy, ScrollText, Megaphone } from "lucide-react";

// Feature list with icons and text
const features = [
  {
    icon: ScrollText,
    text: "Clear, compelling copy that connects instantly with your audience",
  },
  {
    icon: MousePointerClick,
    text: "Focused layouts that drive action — one message, one goal, no distractions",
  },
  {
    icon: Megaphone,
    text: "Strategic storytelling that builds trust and sparks curiosity",
  },
  {
    icon: Trophy,
    text: "Designed to convert — whether you’re launching, promoting, or scaling",
  },
];

export default function LandingDetail() {
  return (
    <>
      {/* 🪄 Opening pitch with animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-lg leading-relaxed text-center">
        A great landing page doesn’t just look good — it sells. At VitaNova, we
        create high-converting pages that turn browsers into buyers. With
        crystal-clear messaging, striking visuals, and smart design choices,
        your visitors won&apos;t just scroll — they&apos;ll click.
      </motion.p>

      {/* 🎯 Feature list with icons and animation */}
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
              <Icon className="w-12 h-12" />
            </span>

            {/* Text */}
            <span className="text-base md:text-xl leading-relaxed text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
              {text}
            </span>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
