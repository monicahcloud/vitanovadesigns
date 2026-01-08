"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
      className="bg-[#050414] text-white relative z-50 border-t border-white/10">
      {/* Expanded width to match the Services grid (1400px) */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1 - Brand Identity (Restored Logo Styling) */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <Link href="/" className="group">
            <h2 className="text-4xl font-extrabold bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent transition-transform group-hover:scale-105">
              VitaNova
            </h2>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] text-center md:text-left">
            Elite digital architecture and business strategy for the AI era. We
            build the future, faster.
          </p>
          <Button
            asChild
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 rounded-full px-8 py-6 shadow-lg shadow-purple-500/20 transition-all border-none">
            <Link href="/contact" className="font-bold text-lg">
              Start a Project →
            </Link>
          </Button>
        </div>

        {/* Column 2 - Core Solutions */}
        <div className="text-center md:text-left">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
            Expertise
          </h4>
          <ul className="space-y-4 text-gray-300 font-medium">
            <li>
              <Link
                href="/services/design"
                className="hover:text-cyan-400 transition-colors">
                Product Build
              </Link>
            </li>
            <li>
              <Link
                href="/services/marketing"
                className="hover:text-cyan-400 transition-colors">
                Growth Strategy
              </Link>
            </li>
            <li>
              <Link
                href="/services/business"
                className="hover:text-cyan-400 transition-colors">
                AI Automations
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Special Packages */}
        <div className="text-center md:text-left">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
            Partnerships
          </h4>
          <ul className="space-y-4 text-gray-300 font-medium">
            <li>
              <Link
                href="/church-packages"
                className="hover:text-purple-400 transition-colors">
                Church Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/small-business-package"
                className="hover:text-purple-400 transition-colors">
                SME Accelerator
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 transition-colors">
                Our Story
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - The Lab (Social Proof) */}
        <div className="text-center md:text-left">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em] mb-6">
            VitaNova Labs
          </h4>
          <div className="p-5 rounded-3xl bg-white/5 border border-white/10 group hover:border-purple-500/50 transition-colors">
            <p className="text-[10px] text-purple-400 font-bold mb-2 uppercase tracking-[0.2em]">
              Featured Build
            </p>
            <Link
              href="https://maxresumebuilder.com"
              target="_blank"
              className="text-sm font-bold text-white block hover:underline">
              MaxResumeBuilder.com
            </Link>
            <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest pt-2">
              Featured Case Study: Software Excellence
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 border-t border-white/5 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-[13px] font-medium">
          © {new Date().getFullYear()} VitaNova Designs & Marketing. All rights
          reserved.
        </div>

        <div className="flex gap-8 text-[13px] font-medium text-gray-500">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
