"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import monicahImg from "../assets/images/monicah.jpg";
import coryImg from "../assets/images/cory.png";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

const teamMembers = [
  {
    name: "Monicah Cloud",
    role: "Creative Strategist & Developer",
    image: monicahImg,
    bio: `Monicah is a creative strategist, developer, and problem solver who thrives at the intersection of innovation and intention. She’s spent years helping brands—from bold startups to evolving nonprofits—step confidently into their next chapter.
With experience in design, development, and business analytics, she brings a rare balance of artistic vision and analytical thinking to every project—translating complex ideas into clean, impactful digital experiences. Her work is rooted in empathy, excellence, and the belief that every brand deserves to be seen, heard, and elevated with purpose.`,
  },
  {
    name: "Cory Walton Sr.",
    role: "Business Development & Growth Strategist",
    image: coryImg,
    bio: `Cory serves as our Business Development & Growth Strategist, where he helps clients turn goals into action through data-driven insight and clear direction. With a deep background in leadership, federal operations, and organizational development, Cory brings structure to complex challenges and clarity to client strategy. He supports businesses in scaling smart—from building efficient systems to aligning projects with measurable outcomes—ensuring every solution delivers value, growth, and long-term momentum.`,
  },
];

export default function AboutPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrent(
      (prev) => (prev + newDirection + teamMembers.length) % teamMembers.length
    );
  };

  return (
    <main className="max-w-9xl mx-auto px-6 py-15 space-y-28 bg-[#0A0826] font-sans text-white">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          Design With <span className="text-purple-500">Purpose</span>.
          <br />
          Strategy With <span className="text-cyan-500">Vision</span>.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          At <span className="text-white font-semibold">Vita Nova Designs</span>
          , we are more than a design agency — we are a{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded font-bold shadow-sm">
            full-service business solutions partner
          </span>
          . From branding and development to business intelligence and
          marketing, we help you uncover opportunities, solve real problems, and
          deliver lasting impact.
        </p>
      </section>

      <Separator />

      {/* Mission Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white">
          Bringing Brands to Life, One Strategic Design at a Time
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-loose">
          We believe great design isn’t just visual—
          <span className="text-purple-400 font-semibold">
            it’s transformational
          </span>
          . Our mission is to empower entrepreneurs, organizations, and
          visionaries with digital experiences that tell their story, connect
          with their audience, and solve real business challenges.
        </p>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          A Full Suite of Creative & Strategic Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
          {[
            {
              title: "Brand and Identity Design",
              description:
                "Logos, brand kits, visual systems, and rebranding services.",
            },
            {
              title: "Custom Website Design",
              description:
                "Mobile-optimized, SEO-ready sites with interactive features.",
            },
            {
              title: "Marketing Campaigns",
              description:
                "Email templates, social graphics, landing pages, and eBooks.",
            },
            {
              title: "Business Analytics and Strategy",
              description:
                "Dashboards, reports, workflow consulting, and data insights.",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                {title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team Carousel */}
      <section className="space-y-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Meet the Team
          </span>
        </h2>

        <div className="relative max-w-5xl mx-auto overflow-hidden px-4">
          <AnimatePresence initial={false} custom={1}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 border rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg">
              <Image
                src={teamMembers[current].image}
                alt={teamMembers[current].name}
                width={260}
                height={260}
                className="rounded-full object-cover border-4 border-purple-500 shadow-md"
              />
              <div className="text-left max-w-xl space-y-3">
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
                  {teamMembers[current].name}
                </h3>
                <p className="text-lg font-semibold text-cyan-400 tracking-wide uppercase">
                  {teamMembers[current].role}
                </p>
                <p className="text-lg leading-relaxed text-gray-200 font-light">
                  {teamMembers[current].bio}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-6">
            <Button
              variant="outline"
              onClick={() => paginate(-1)}
              className="border-cyan-500 text-cyan-700 hover:text-cyan-900 hover:border-cyan-300">
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={() => paginate(1)}
              className="border-purple-500 text-purple-700 hover:text-purple-900 hover:border-purple-300">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* Why Vita Nova */}
      <section className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Why Vita Nova?
        </h2>
        <blockquote className="text-xl italic text-purple-400 max-w-2xl mx-auto">
          “Vita Nova” means "New Life" — and that’s what we build into every
          brand.
        </blockquote>
        <p className="text-lg text-gray-200 max-w-xl mx-auto leading-relaxed">
          Every project we take on is rooted in the belief that your brand
          deserves a fresh, confident start—backed by strategy and brought to
          life through purposeful design.
        </p>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8 ">
        <h2 className="text-4xl font-bold text-white tracking-tight">
          Let’s Create Something Bold Together
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-lg px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            <a
              href="https://calendly.com/monicahcloud-vitanovadesigns/30min-1"
              target="_blank"
              rel="noopener noreferrer">
              Book a Discovery Call
            </a>
          </Button>

          {/* <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10 hover:backdrop-blur">
            View Our Work
          </Button> */}
        </div>
      </section>
    </main>
  );
}
