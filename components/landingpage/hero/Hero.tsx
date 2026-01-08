"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
// Importing images - ensure img6 is your Resume Builder
import img1 from "../../../app/assets/images/portfolio.png";
import img5 from "../../../app/assets/images/businessHub.png";
import img2 from "../../../app/assets/images/gamehub.png";
import img6 from "../../../app/assets/images/resume.png"; // This is the star of the show
import img3 from "../../../app/assets/images/aseamerch.png";
import img4 from "../../../app/assets/images/asea.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// We put the Resume Builder first to show you are a "Product Founder"
const projectImages = [img6, img1, img3, img4, img5, img2];

const Hero = () => {
  const imageHeight = 200;
  const gap = 32;
  const totalHeight = (imageHeight + gap) * projectImages.length;

  return (
    <main className="relative flex items-center justify-between min-h-[90vh] bg-[#0a0212] overflow-hidden px-12 ">
      {/* Background Motion: Proving your "Build Power" */}
      <motion.div
        animate={{ y: [0, -totalHeight] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute right-5 top-0 h-full mx-15 flex flex-col gap-8 opacity-20 z-0 select-none pointer-events-none"
        style={{ willChange: "transform" }}>
        {projectImages.concat(projectImages).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="Real world digital products launched by VitaNova"
            width={450}
            height={imageHeight}
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl border border-white/10"
          />
        ))}
      </motion.div>

      {/* Main Content: Human-Friendly Strategy */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-left max-w-4xl mx-15">
        {/* Modern "Pill" Tag for immediate trust */}
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 border border-cyan-400/20 rounded-full">
          The Human Moat in an AI World
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tighter text-white">
          LAUNCH YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            NEXT BIG IDEA
          </span>{" "}
          <br />
          IN DAYS.
        </h1>

        <p className="text-xl md:text-2xl mt-8 text-gray-400 font-medium max-w-2xl leading-relaxed">
          Stop waiting months for custom development. We combine elite business
          strategy with high-speed AI tools to build
          <span className="text-white">
            {" "}
            scalable sites, automated systems, and market-ready products
          </span>{" "}
          at the speed of thought.
        </p>

        <div className="mt-10 flex flex-wrap gap-6 justify-center items-center">
          {/* Primary Button: Authority & Action */}
          <motion.a
            href="https://calendly.com/vitanovadesigns/30min-1"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="bg-cyan-900 text-white text-xl font-bold px-10 py-8 rounded-full shadow-[0_20px_40px_rgba(15,23,42,0.3)] hover:bg-[#6366F1] transition-all duration-300 border-none group flex items-center gap-3">
              Book your Growth Strategy
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-[#818CF8]" />
            </Button>
          </motion.a>

          {/* Secondary Button: The "Lab" Proof */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Link href="/labs">
              <Button
                variant="outline"
                size="lg"
                className="bg-purple-500 backdrop-blur-sm border-2 border-[#E2E8F0] text-[#0F172A] text-xl font-bold px-10 py-8 rounded-full hover:bg-white hover:border-[#6366F1] transition-all duration-300 shadow-sm">
                See the Lab Results
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Small Trust Badge */}
        <p className="mt-10 text-sm text-gray-500 font-mono">
          Featured Product:{" "}
          <span className="text-gray-300">MaxResumeBuilder.com</span> — Built &
          Scaled by us.
        </p>
      </motion.div>
    </main>
  );
};

export default Hero;
