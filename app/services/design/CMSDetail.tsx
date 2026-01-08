"use client";

import { motion } from "framer-motion";
import { FileText, Code, Database, Server } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Headless Content Hubs",
    text: "Decoupling your content from your code, allowing you to update your site without ever touching a line of programming.",
  },
  {
    icon: Code,
    title: "Scalable Content Logic",
    text: "Custom-built schemas that handle everything from simple blogs to complex multi-language product catalogs.",
  },
  {
    icon: Database,
    title: "Structured Data Assets",
    text: "Organizing your business information so it can be reused across websites, mobile apps, and internal tools.",
  },
  {
    icon: Server,
    title: "High-Performance Delivery",
    text: "Optimized server-side rendering ensures your content reaches your audience instantly, everywhere in the world.",
  },
];

export default function CMSDetail() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column: The Strategic Pitch */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}>
        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-none tracking-tighter">
          CONTENT <br />
          <span className="text-purple-600">FREEDOM.</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed font-medium mb-10">
          Stop fighting your website. We build custom headless CMS solutions
          that empower your team to manage content effortlessly while
          maintaining elite performance and scalability.
        </p>
        <button className="bg-slate-900 text-white rounded-full px-10 py-5 text-lg font-bold shadow-2xl hover:bg-purple-600 transition-all">
          Modernize Your Content
        </button>
      </motion.div>

      {/* Right Column: Feature List */}
      <ul className="grid gap-8">
        {features.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-6 group">
            <div className="shrink-0 rounded-2xl p-4 bg-slate-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-1 transition-colors group-hover:text-purple-600">
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
