"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart4, Briefcase, BrainCircuit, Settings } from "lucide-react";

const businessServices = [
  {
    title: "KPI Dashboards",
    description:
      "Track real-time metrics that matter with custom-built dashboards tailored to your business goals.",
    icon: <BarChart4 className="text-white w-12 h-12" />,
  },
  {
    title: "Business Intelligence",
    description:
      "Transform your data into actionable insights with AI-powered analytics and reporting systems.",
    icon: <BrainCircuit className="text-white w-12 h-12" />,
  },
  {
    title: "Consulting & Strategy",
    description:
      "Expert guidance to optimize operations, uncover opportunities, and position your business for scalable growth.",
    icon: <Briefcase className="text-white w-12 h-12" />,
  },
  {
    title: "Systems & Automation",
    description:
      "Streamline your workflows and boost efficiency through smart automations and connected systems.",
    icon: <Settings className="text-white w-12 h-12" />,
  },
];

export default function BusinessSolutionsPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* 🔥 Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(91,33,182,0.4),_rgba(0,0,0,0.9))] blur-2xl animate-pulse-slow" />
        <div className="absolute -top-20 right-[-30%] w-[600px] h-[600px] bg-gradient-to-br from-purple-700/40 to-cyan-500/30 rounded-full blur-[120px] opacity-30 animate-spin-slower z-0" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="z-10 text-5xl md:text-7xl font-extrabold uppercase text-white leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
          Business Solutions <br />
          <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-white text-transparent bg-clip-text">
            Built to Scale
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-xl md:text-2xl text-white/80 max-w-2xl font-light z-10">
          Streamline operations, connect systems, and accelerate growth with
          expert-driven business infrastructure and technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="mt-10 z-10">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xl font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-transform duration-300">
              Let’s Talk Strategy
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* 💼 Services Section */}
      <section className="relative w-full bg-white py-20 px-6 md:px-16 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-extrabold text-purple-900 mb-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl shadow-xl z-20">
            <h1 className="text-purple-900 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center">
              Our Business Solutions
            </h1>
          </div>
        </motion.h2>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {businessServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm leading-relaxed text-white/90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
