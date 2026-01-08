"use client";

import { motion } from "framer-motion";

const ContactHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-4 mb-10">
    {/* Status Badge */}
    <div className="flex items-center gap-3">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400">
        System_Status: Receiving_Inquiries
      </span>
    </div>

    {/* Primary Headline */}
    <div className="space-y-2">
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
        Project <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
          Intelligence.
        </span>
      </h2>
      <p className="text-slate-500 font-medium text-lg max-w-md leading-relaxed">
        Submit your project parameters below. Our engineering team reviews all
        briefs within 24 hours.
      </p>
    </div>

    {/* Subtle Divider */}
    <div className="w-12 h-1 bg-slate-100 rounded-full mt-6" />
  </motion.div>
);

export default ContactHeader;
