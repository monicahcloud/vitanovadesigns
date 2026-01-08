"use client";

import { Phone, Mail, Globe } from "lucide-react";

export default function ContactLeftColumn() {
  return (
    <div className="relative w-full h-full p-2 text-white flex flex-col justify-between min-h-[500px]">
      {/* 1. Brand & Strategic Headline */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-cyan-300">
            Establish_Connection
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter uppercase">
          Build the <br />
          <span className="text-cyan-400">Foundation.</span>
        </h2>

        <p className="text-purple-100/70 text-lg leading-relaxed max-w-sm">
          Ready to turn your idea into a powerhouse product? Reach out to our
          team to plan your next SaaS platform or high-performance website.
        </p>
      </div>

      {/* 2. System Info & Contact (Unified Block - No Borders) */}
      <div className="space-y-8  ">
        {/* Location Row */}
        <div className="flex items-center gap-4 group mt-5">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
            <Globe size={18} />
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-purple-300">
              Location
            </p>
            <p className="text-sm font-bold uppercase">Remote Global</p>
          </div>
        </div>

        {/* Contact Links Row */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-300">
                Direct_Line
              </p>
              <a
                href="tel:+14047707133"
                className="text-lg font-bold hover:text-cyan-300 transition-colors">
                (404) 703-7133
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-purple-300">
                Secure_Email
              </p>
              <a
                href="mailto:monicahcloud@vitanovadesigns.cloud"
                className="text-sm md:text-base font-bold hover:text-purple-300 transition-colors break-all">
                monicahcloud@vitanovadesigns.cloud
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glows */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] -z-10" />
    </div>
  );
}
