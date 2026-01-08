"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  Laptop,
  Smartphone,
  Layout,
  Palette,
  Code,
  Brain,
  ArrowLeft,
} from "lucide-react"; // Lucide icons

/* ───── Detail components ───── */
import UXUIDetail from "./UXUIDetail";
import WebDetail from "./WebDetail";
import MobileDetail from "./MobileDetail";
import LandingDetail from "./LandingDetail";
import BrandingDetail from "./BrandingDetail";
import AppDevDetail from "./AppDevDetail";
import CMSDetail from "./CMSDetail";
import AIDetail from "./AIDetail";

/* ───── Types ───── */
type ServiceTitle =
  | "UX/UI Design"
  | "Web Development"
  | "Mobile App Design"
  | "Landing Page Design"
  | "Branding"
  | "App Development"
  | "CMS Development"
  | "AI System Integration";

/* ───── Map each title → component ───── */
const contentMap: Record<ServiceTitle, () => React.JSX.Element> = {
  "UX/UI Design": () => <UXUIDetail />,
  "Web Development": () => <WebDetail />,
  "Mobile App Design": () => <MobileDetail />,
  "Landing Page Design": () => <LandingDetail />,
  Branding: () => <BrandingDetail />,
  "App Development": () => <AppDevDetail />,
  "CMS Development": () => <CMSDetail />,
  "AI System Integration": () => <AIDetail />,
};

/* ───── Service Data ───── */
const services: {
  title: ServiceTitle;
  description: string;
  icon: React.JSX.Element;
}[] = [
  {
    title: "UX/UI Design",
    description: "Crafting intuitive and delightful digital experiences.",
    icon: <Palette className="text-7xl text-white" />,
  },
  {
    title: "Web Development",
    description: "Responsive, modern websites that captivate and convert.",
    icon: <Laptop className="text-7xl text-white" />,
  },
  {
    title: "Mobile App Design",
    description:
      "Clean, fast, and beautiful app interfaces for iOS and Android.",
    icon: <Smartphone className="text-7xl text-white" />,
  },
  {
    title: "Landing Page Design",
    description: "High-converting pages tailored to your goals and brand.",
    icon: <Layout className="text-7xl text-white" />,
  },
  {
    title: "Branding",
    description:
      "Logos, color systems, and visuals that make you unforgettable.",
    icon: <Palette className="text-7xl text-white" />,
  },
  // {
  //   title: "App Development",
  //   description: "iOS & Android apps built with performance in mind.",
  //   icon: <Smartphone className="text-7xl text-white" />,
  // },
  {
    title: "CMS Development",
    description:
      "Custom headless CMS solutions with flexibility & scalability for your content management needs.",
    icon: <Code className="text-7xl text-white" />,
  },

  {
    title: "AI System Integration",
    description:
      "Seamless integration of AI systems & intelligent services into your applications for enhanced automation and insights.",
    icon: <Brain className="text-7xl text-white" />,
  },
];

/* ───── Detail wrapper ───── */
function ServiceDetail({
  title,
  onClose,
}: {
  title: ServiceTitle;
  onClose: () => void;
}) {
  const Detail = contentMap[title];
  return (
    <div className="max-w-5xl mx-auto mt-12 bg-white border rounded-2xl shadow-2xl p-10 text-black">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-4xl text-center justify-center items-center font-bold text-purple-700 ">
          {title}
        </h2>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
          ×
        </button>
      </div>
      <Detail />
      <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
        <a
          href="https://calendly.com/vitanovadesigns/30min-1"
          target="_blank"
          rel="noopener noreferrer">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white text-xl">
            Book a Discovery Call
          </Button>
        </a>
        <Link href="/contact">
          <Button
            variant="outline"
            className="text-purple-600 hover:bg-purple-500 text-xl">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function DesignServicesPage() {
  const [active, setActive] = useState<ServiceTitle | null>(null);

  return (
    <div className="relative w-full bg-[#f1f3f7] min-h-screen overflow-hidden">
      {/* 🔮 Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-200/30 blur-[120px] rounded-full -z-10" />

      {/* 🚀 Hero Section */}
      <section className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 space-y-6">
          <span className="px-4 py-1.5 rounded-full bg-purple-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-purple-500/20">
            VitaNova Studios
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            WE DESIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
              EXPERIENCES.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mt-4">
            We build the engines that power modern brands. From{" "}
            <span className="text-slate-900 font-bold">
              high-conversion landing pages
            </span>{" "}
            to{" "}
            <span className="text-slate-900 font-bold">
              complex SaaS architectures
            </span>
            , we deliver digital foundations that are fast, secure, and ready
            for revenue.
          </p>
        </motion.div>
      </section>

      {/* 🛠 Interactive Services Grid */}
      <section className="w-full px-6 pb-24">
        <AnimatePresence mode="wait">
          {!active ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setActive(service.title)}
                  whileHover={{ y: -10 }}
                  // Darkened the base background to bg-slate-100/50 so it's visible on the light page
                  className="group relative p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-xl hover:shadow-2xl hover:border-purple-400 transition-all text-left flex flex-col justify-between min-h-[380px]">
                  <div className="space-y-8">
                    {/* Icon Box Fix: Darkened the default icon color to slate-600 */}
                    <div className="w-20 h-20 rounded-3xl bg-cyan-500 flex items-center justify-center text-slate-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      {service.icon}
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-slate-900 leading-none">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-purple-600 font-bold uppercase tracking-widest text-xs flex items-center gap-2 opacity-100 group-hover:translate-x-2 transition-all">
                    View Project Lab{" "}
                    <ArrowLeft className="rotate-180 w-4 h-4" />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="max-w-[1400px] mx-auto">
              <button
                onClick={() => setActive(null)}
                className="mb-10 flex items-center gap-2 text-slate-600 hover:text-purple-600 font-bold uppercase text-sm tracking-widest transition-colors">
                <ArrowLeft className="w-5 h-5" /> Back to Expertise
              </button>

              {/* Seamless Detail Expansion */}
              <div className="bg-white border border-slate-200 rounded-[4rem] p-12 md:p-20 shadow-2xl">
                <ServiceDetail title={active} onClose={() => setActive(null)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
