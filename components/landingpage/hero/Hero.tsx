"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "../../../app/assets/images/portfolio.png";
import img5 from "../../../app/assets/images/businessHub.png";
import img2 from "../../../app/assets/images/gamehub.png";
import img6 from "../../../app/assets/images/resume.png";
import img3 from "../../../app/assets/images/aseamerch.png";
import img4 from "../../../app/assets/images/asea.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projectImages = [img1, img3, img4, img5, img6, img2];

const Hero = () => {
  const imageHeight = 200;
  const gap = 32;
  const totalHeight = (imageHeight + gap) * projectImages.length;

  return (
    <main className="relative flex items-center justify-between min-h-[90vh] bg-[#0a082689] overflow-hidden px-12">
      {/* Carousel as background-right */}
      <motion.div
        animate={{ y: [0, -totalHeight] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute right-5 top-0 h-full flex flex-col gap-8 opacity-10 z-0"
        style={{ willChange: "transform" }}>
        {projectImages.concat(projectImages).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`project ${index + 1}`}
            width={400}
            height={imageHeight}
            className="rounded-xl object-cover"
          />
        ))}
      </motion.div>

      {/* Left-aligned text block */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-left max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter text-white uppercase">
          premium <br />
          Business Solutions
        </h1>
        <p className="text-2xl md:text-3xl mt-8 text-gray-300 font-light tracking-wide">
          We Ignite Brands Online.
          <br />
          Websites, Strategy, Analytics, Marketing — all in one place.
        </p>
        <Button
          asChild
          className="mt-10 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full hover:scale-105 transition-all">
          <Link href="/contact"> Let&apos;s Build Something Bold</Link>
        </Button>
      </motion.div>
    </main>
  );
};

export default Hero;
