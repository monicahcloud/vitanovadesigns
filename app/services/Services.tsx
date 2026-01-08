"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import RippleButton from "@/components/RippleButton";
import { ArrowUpRight, Sparkles } from "lucide-react";

export type SubMenuItem = {
  name: string;
  href: string;
  description: string[];
  icon: StaticImageData;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

type ServicesProps = {
  title: string;
  subMenu: SubMenuItem[];
};

const Services: React.FC<ServicesProps> = ({ title, subMenu }) => {
  return (
    <section className="relative w-full py-16 md:py-20 bg-[#fcfaff] overflow-hidden">
      {/* Soft Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-100/30 blur-[120px] rounded-full -z-10" />

      {/* Expanded Max-Width for a "Wider" feel */}
      <div className="max-w-[1550px] mx-auto px-6">
        {/* Header Area */}
        <div className="mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-purple-600 rounded-full" />
            <span className="text-purple-600 font-bold uppercase tracking-[0.2em] text-[15px]">
              Expertise & Solutions
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black text-[#0F172A] tracking-tighter leading-none">
            {title}
          </h2>
        </div>

        {/* The Grid: Slightly larger gaps to emphasize width */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
          {/* ⚡ Promo Card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-[#0F172A] text-white flex flex-col justify-between rounded-[2.5rem] p-9 md:p-11 shadow-2xl border-none relative overflow-hidden min-h-[420px]">
              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-cyan-300 uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> Flexible Pricing
                </div>
                <h2 className="text-4xl font-black leading-tight tracking-tight">
                  Your Project, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    Your Price.
                  </span>
                </h2>
                <p className="text-sm md:text-base text-slate-400 font-medium leading-relaxed">
                  Tailored digital solutions built to fit your unique business
                  goals.
                </p>
              </div>

              <div className="relative z-10 w-full pt-6">
                <RippleButton
                  rippleColor="rgba(168, 85, 247, 0.4)"
                  className="w-full bg-white text-[#0F172A] font-bold py-4 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-2 text-base shadow-xl">
                  <span>Book Strategy Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </RippleButton>
              </div>
            </Card>
          </motion.div>

          {/* 🛠 Service Cards */}
          {subMenu.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link href={item.href} className="block h-full group">
                <Card className="h-full rounded-[2.5rem] bg-white border border-slate-100 p-9 md:p-11 shadow-sm hover:shadow-2xl hover:border-purple-200 transition-all duration-500 flex flex-col min-h-[420px] relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-purple-50 transition-all duration-500 mb-8">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="object-contain opacity-80 group-hover:opacity-100 transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] group-hover:text-purple-600 transition-colors mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
                      Capabilities
                    </p>
                  </div>

                  <ul className="space-y-3.5 flex-grow">
                    {item.description.map((desc, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm md:text-[15px] text-slate-600 font-medium leading-tight">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-slate-50 flex items-center text-[10px] font-black text-purple-600 uppercase tracking-widest group-hover:gap-3 gap-2 transition-all">
                    Explore Details <ArrowUpRight className="w-3 h-3" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
