// components/landingpage/hero/AnimatedLineChart.tsx

"use client";

import { motion } from "framer-motion";

export default function AnimatedLineChart() {
  return (
    <svg viewBox="0 0 400 180" className="h-full w-full">
      <defs>
        <linearGradient id="chartGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      <motion.polyline
        points="0,140 50,110 90,125 140,75 185,95 240,55 290,90 340,50 400,20"
        fill="none"
        stroke="url(#chartGradient)"
        strokeWidth="7"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
  );
}
