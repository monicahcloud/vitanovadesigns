"use client";

import { motion } from "framer-motion";
import { Brain, Server, Code, Database } from "lucide-react";

// Feature list with icons and text
const features = [
  {
    icon: Brain,
    text: "AI-driven automation that enhances efficiency and decision-making",
  },
  {
    icon: Server,
    text: "Seamless integration of AI systems into existing infrastructure",
  },
  {
    icon: Code,
    text: "Scalable and maintainable AI code for evolving business needs",
  },
  {
    icon: Database,
    text: "Intelligent data management with AI to drive actionable insights",
  },
];

export default function AIDetail() {
  return (
    <>
      {/* ✨ Intro paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-lg leading-relaxed text-center">
        We integrate advanced AI systems into your existing workflows, enabling
        intelligent automation and data-driven insights. Our solutions are
        designed to scale with your needs, providing powerful tools that evolve
        as your business grows.
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
            <span className="shrink-0 rounded-full p-5 bg-gradient-to-tr from-purple-600 to-cyan-500 text-white group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-purple-700 group-hover:to-cyan-600 transition-all transform duration-300 ease-in-out shadow-xl">
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
