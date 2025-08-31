"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Laptop, Smartphone, Layout, Palette, Code, Brain } from "lucide-react"; // Lucide icons

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

/* ───── Main page ───── */
export default function DesignServicesPage() {
  const [active, setActive] = useState<ServiceTitle | null>(null);

  return (
    <div className="relative overflow-hidden w-full">
      {/* 🎥 Hero (unchanged) */}
      {/* <video
        className="absolute -top-75 left-0 w-full h-full object-cover -z-20"
        src="/herobg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" /> */}

      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
        {/* 🔮 Animated Glow Gradient Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-cyan-900 animate-pulse-slow opacity-50 blur-2xl" />

        {/* 🌈 Optional SVG burst pattern */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-purple-700/50 to-cyan-400/40 rounded-full blur-[120px] opacity-20 animate-spin-slower z-0" />

        {/* 💡 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="z-10 text-5xl md:text-7xl font-extrabold uppercase text-white leading-tight tracking-tight drop-shadow-[0_0_15px_rgba(199,210,254,0.4)]">
          We Design <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-500 to-white text-transparent bg-clip-text drop-shadow-md">
            Exceptional Digital Experiences
          </span>
        </motion.h1>

        {/* 📝 Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-white/80 max-w-2xl font-light z-10">
          From stunning web and mobile apps to unforgettable branding and
          landing pages.
        </motion.p>

        {/* 🚀 CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-10 z-10">
          <a
            href="https://calendly.com/vitanovadesigns/30min-1"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xl font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
              Schedule Your Free Discovery Call
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Services */}
      <section className="py-10 px-12 w-full bg-white/95 backdrop-blur-md">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl shadow-xl z-20">
          <h1 className="text-purple-900 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center">
            Design & Development
          </h1>
        </div>

        {/* ───── Circle Icons with Pulsing & Flowing Color ───── */}
        {active === null && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-15">
            {services.map((service, idx) => (
              <motion.button
                type="button"
                key={idx}
                onClick={() => setActive(service.title)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-center p-6 rounded-full bg-gradient-to-r from-purple-900 to-cyan-500 shadow-xl hover:bg-purple-700 hover:shadow-2xl focus:outline-none"
                // style={{
                //   animation: `pulse 8s infinite ease-in-out`, // Pulse animation
                // }}
              >
                <div className="p-6 flex justify-center items-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    {service.icon}
                  </motion.div>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-md text-white">{service.description}</p>
              </motion.button>
            ))}
          </div>
        )}

        {/* ───── Detail view ───── */}
        {active && (
          <ServiceDetail title={active} onClose={() => setActive(null)} />
        )}
      </section>

      {/* CTA (unchanged) */}
      <section className="w-full py-24 bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold max-w-[85vw] mx-auto">
          Ready to design something beautiful?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-8">
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="text-purple-900 font-bold text-2xl border-white hover:bg-white hover:text-purple-700">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
