// components/landingpage/hero/FloatingWidgets.tsx

"use client";

import { motion } from "framer-motion";
import { BrainCircuit, CloudUpload, Database } from "lucide-react";

export default function FloatingWidgets() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-12 top-8 grid h-24 w-24 place-items-center rounded-3xl border border-purple-400/30 bg-purple-500/20 backdrop-blur-xl">
        <BrainCircuit className="h-10 w-10 text-purple-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute right-0 top-40 grid h-24 w-24 place-items-center rounded-3xl border border-cyan-400/30 bg-cyan-500/20 backdrop-blur-xl">
        <CloudUpload className="h-10 w-10 text-cyan-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4.5 }}
        className="absolute left-10 bottom-20 grid h-20 w-20 place-items-center rounded-3xl border border-cyan-400/30 bg-white/10 backdrop-blur-xl">
        <Database className="h-9 w-9 text-cyan-300" />
      </motion.div>
    </>
  );
}
