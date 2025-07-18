"use client";

import { motion } from "framer-motion";
import { Smartphone, PhoneCall, Wifi, Users } from "lucide-react";

// Feature list with icons and text
const features = [
  {
    icon: Smartphone,
    text: "High-performance apps built with user-first design principles",
  },
  {
    icon: PhoneCall,
    text: "Seamless communication features for mobile users",
  },
  {
    icon: Wifi,
    text: "Optimized for mobile networks, ensuring smooth experiences",
  },
  {
    icon: Users,
    text: "Multi-platform apps that scale with your audience",
  },
];

export default function MobileDetail() {
  return (
    <>
      {/* ✨ Opening statement */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 text-base md:text-xl leading-relaxed text-center">
        We create mobile applications that combine functionality and aesthetics.
        Our focus is on building apps that are intuitive, efficient, and
        engaging for every user.
      </motion.p>

      {/* 💡 Feature list with icons & motion */}
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
