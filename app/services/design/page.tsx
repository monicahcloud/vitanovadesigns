/* app/(marketing)/design-services/page.tsx */
"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import bgImage from "../../assets/images/design.jpg";

/* ───── Detail components ───── */
import UXUIDetail from "./UXUIDetail";
import WebDetail from "./WebDetail";
import MobileDetail from "./MobileDetail";
import LandingDetail from "./LandingDetail";
import BrandingDetail from "./BrandingDetail";

/* ───── Types ───── */
type ServiceTitle =
  | "UX/UI Design"
  | "Web Design"
  | "Mobile App Design"
  | "Landing Page Design"
  | "Branding";

/* ───── Map each title → component ───── */
const contentMap: Record<ServiceTitle, () => React.JSX.Element> = {
  "UX/UI Design": () => <UXUIDetail />,
  "Web Design": () => <WebDetail />,
  "Mobile App Design": () => <MobileDetail />,
  "Landing Page Design": () => <LandingDetail />,
  Branding: () => <BrandingDetail />,
};

/* ───── Card data (for grid) ───── */
interface ServiceCardData {
  title: ServiceTitle;
  description: string;
  image: StaticImageData;
}

const services: ServiceCardData[] = [
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
        <h2 className="text-2xl font-bold text-purple-700 ">{title}</h2>
        <button
          onClick={onClose}
          aria-label="Close"
          className="text-gray-400 hover:text-gray-600 text-2xl leading-none">
          ×
        </button>
      </div>

      <Detail />

      <div className="mt-8 flex flex-wrap gap-4">
        <a
          href="https://calendly.com/monicahcloud-vitanovadesigns/30min-1"
          target="_blank"
          rel="noopener noreferrer">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Book a Discovery Call
          </Button>
        </a>
        <Link href="/contact">
          <Button
            variant="outline"
            className="text-purple-600 hover:bg-purple-500">
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
      <video
        className="absolute -top-75 left-0 w-full h-full object-cover -z-20"
        src="/herobg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10" />

      <section className="min-h-[80vh] w-full px-6 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 max-w-[90vw]">
          We Design Exceptional Digital Experiences
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-lg md:text-xl text-muted-foreground max-w-[75vw]">
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

      {/* Services */}
      <section className="py-24 px-12 w-full bg-white/90 backdrop-blur-md">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-purple-800 text-center mb-16">
          Design Services
        </h2>

        {/* ───── Grid view ───── */}
        {active === null && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.button
                type="button"
                key={service.title}
                onClick={() => setActive(service.title)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-left">
                <Card className="rounded-2xl overflow-hidden shadow-xl bg-white/90 hover:scale-[1.02] hover:shadow-2xl transition-all focus-visible:ring-4 focus-visible:ring-purple-500">
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
