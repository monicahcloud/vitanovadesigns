"use client";

import { motion } from "framer-motion";
import { Sparkles, Palette, Type, Eye } from "lucide-react"; // Or use your specific icons

export default function BrandingDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column: The Strategic Pitch */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          AUTHORITY <br />
          <span className="text-purple-600">BRANDING.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          Your brand is your most valuable moat. We engineer identities that
          command attention and position you as the only logical choice in your
          market.
        </p>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
            Start Your Identity Build
          </button>
        </div>
      </motion.div>

      {/* Right Column: The "Non-Tech Friendly" Features */}
      <ul className="grid gap-8">
        {[
          {
            icon: Sparkles,
            title: "Unforgettable Identity",
            text: "A visual voice that stands out in a crowded, AI-generated marketplace.",
          },
          {
            icon: Palette,
            title: "Strategic Visual Systems",
            text: "Beyond a logo; a complete visual language that screams authority.",
          },
          {
            icon: Type,
            title: "Narrative Alignment",
            text: "Ensuring your fonts, colors, and words all tell the same powerful story.",
          },
          {
            icon: Eye,
            title: "Consistency at Scale",
            text: "A brand that looks just as premium on a billboard as it does in an app icon.",
          },
        ].map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-6 group">
            <div className="shrink-0 rounded-2xl p-4 bg-slate-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">
                {item.title}
              </h4>
              <p className="text-slate-500 text-base leading-snug">
                {item.text}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
