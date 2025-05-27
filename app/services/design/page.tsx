"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import Image from "next/image";
import bgImage from "../../assets/images/design.jpg";

const services = [
  {
    title: "UX/UI Design",
    description:
      "Crafting intuitive and delightful digital experiences that put the user first.",
    image: bgImage,
  },
  {
    title: "Web Design",
    description: "Responsive, modern websites that captivate and convert.",
    image: bgImage,
  },
  {
    title: "Mobile App Design",
    description:
      "Clean, fast, and beautiful app interfaces for iOS and Android.",
    image: bgImage,
  },
  {
    title: "Landing Page Design",
    description: "High-converting pages tailored to your goals and brand.",
    image: bgImage,
  },
  {
    title: "Branding",
    description:
      "Logos, color systems, and visuals that make you unforgettable.",
    image: bgImage,
  },
];

export default function DesignServicesPage() {
  const containerRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: containerRef,
  //   offset: ["start start", "end end"],
  // });

  // const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  // const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  return (
    <div ref={containerRef} className="relative overflow-hidden w-full">
      {/* 🎥 Fullscreen Video Background */}
      <video
        className="absolute -top-75 left-0 w-full h-full object-cover -z-20"
        src="/herobg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" />

      {/* Hero Section */}
      <section className="min-h-[80vh] w-full px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold w-full max-w-[90vw] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          We Design Exceptional Digital Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground w-full max-w-[75vw]">
          From stunning web and mobile apps to effective branding and landing
          pages.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8">
          <a
            href="https://calendly.com/monicahcloud-vitanovadesigns/30min-1"
            target="_blank"
            rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white text-2xl font-semibold">
              Schedule a Free 15 Min Call
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-12 w-full bg-white/90 backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-purple-800 text-center mb-16">
          Design Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}>
              <Card className="rounded-2xl overflow-hidden shadow-xl bg-white/90 hover:scale-[1.02] hover:shadow-2xl transition-all">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-700">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 bg-gradient-to-r from-purple-700 to-cyan-600 text-white text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold w-full max-w-[85vw] mx-auto">
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
