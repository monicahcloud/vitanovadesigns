/* components/service-details/LandingDetail.tsx */
"use client";

import { motion } from "framer-motion";
import { MousePointerClick, Trophy, ScrollText, Megaphone } from "lucide-react";

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
        className="mb-6 text-base md:text-lg leading-relaxed">
        A great landing page doesn’t just look good — it sells. At VitaNova, we
        create high-converting pages that turn browsers into buyers. With
        crystal-clear messaging, striking visuals, and smart design choices,
        your visitors won&apos;t just scroll — they&apos;ll click.
      </motion.p>

      {/* 🎯 Feature list with icons and animation */}
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
