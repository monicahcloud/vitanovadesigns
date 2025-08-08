"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import RippleButton from "@/components/RippleButton";
import Image from "next/image";
import plant from "../assets/seed.png";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ChurchPackagesPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className="relative w-full bg-white shadow-2xl border-t-4 border-purple-500 z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
      {/* Title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl shadow-xl z-20">
        <h1 className="text-purple-900 text-3xl sm:text-5xl md:text-5xl font-extrabold text-center">
          Church Website Packages
        </h1>
        <div className="flex items-center mx-auto justify-center">
          <Link
            href="https://calendly.com/vitanovadesigns/15min"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book a free 15-minute strategy call">
            <RippleButton
              rippleColor="rgba(168, 85, 247, 0.4)"
              className="relative mt-3 bg-white text-purple-800 font-bold py-2 px-4 sm:px-6 rounded-2xl hover:bg-purple-200 transition-all shadow-md text-sm md:text-base">
              <span className="relative z-10">
                Book a free 15-min strategy call
              </span>
              <span className="absolute inset-0 rounded-2xl animate-pulse bg-purple-300 opacity-10" />
            </RippleButton>
          </Link>
        </div>
      </div>

      {/* Package Cards */}
      {[
        {
          title: "Seed Plan",
          price: "$595 setup + $39/month",
          points: [
            "Custom 1-page website (Home, Contact, Service Info)",
            "Mobile-responsive design",
            "Service times & location map",
            "Basic logo styling & prayer/contact form",
            "Domain + hosting setup",
            "1 hour/month maintenance",
          ],
        },
        {
          title: "Grow Plan",
          price: "$1,295 setup + $79/month",
          points: [
            "Up to 5 pages (Home, About, Ministries, Events, Contact)",
            "Sermon archive (YouTube/SoundCloud embeds)",
            "Event calendar & donation button",
            "Newsletter signup & basic SEO",
            "Social media integration",
            "3 hours/month maintenance",
          ],
        },
        {
          title: "Flourish Plan",
          price: "$2,495 setup + $149/month",
          points: [
            "Up to 10 pages (Ministries, Staff, Media, Blog)",
            "Custom branding & graphic support",
            "Live streaming & advanced sermon library",
            "Online giving + analytics dashboard",
            "Member portal + SEO strategy",
            "6 hours/month maintenance",
          ],
        },
      ].map((plan) => (
        <motion.div
          key={plan.title}
          variants={itemVariants}
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: "preserve-3d", perspective: 1000 }}
          className="rounded-3xl bg-white overflow-hidden cursor-pointer p-6 shadow-md hover:shadow-xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-3">
              {plan.title}
            </h2>{" "}
            <Image src={plant} alt="growing plant" width={75} height={150} />
          </div>
          <ul className="text-sm sm:text-base text-purple-900 font-medium space-y-1 mb-4">
            {plan.points.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>
          <p className="text-lg font-semibold text-purple-700">{plan.price}</p>
        </motion.div>
      ))}
      {/* Promo CTA */}
      {/* <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0 },
        }}>
        <Card className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white flex flex-col justify-between items-center min-h-[260px] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-purple-400/20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex flex-col items-center text-center gap-4 cursor-pointer">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-purple-300 to-white text-transparent bg-clip-text drop-shadow-sm">
              Your Project, <br /> Your Price
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-purple-100 italic px-2 max-w-md">
              Flexible solutions, powerful results. <br />
              Let’s shape your vision — on your terms.
            </p>
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 opacity-20 text-[6rem] sm:text-[9rem] pointer-events-none select-none">
            ✨
          </motion.div>
        </Card>
      </motion.div> */}
      {/* Add-Ons Card */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}>
        <Card className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-900 text-white flex flex-col justify-between items-center min-h-[260px] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-purple-400/20">
          <div className="flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl sm:text-3xl  font-black tracking-tight bg-gradient-to-r from-white via-purple-300 to-white text-transparent bg-clip-text drop-shadow-sm">
              Additional Add-Ons
            </h2>
            <ul className="text-sm sm:text-base md:text-lg text-purple-100 italic px-2 max-w-md space-y-1">
              <li>• Logo Design: $195</li>
              <li>• Social Media Graphics: $175</li>
              <li>• Full Brand Kit: $295</li>
              <li>• Email Marketing Setup: $125</li>
              <li>• Staff Training Session: $99</li>
            </ul>
          </div>
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
            className="absolute bottom-4 right-4 opacity-20 text-[6rem] sm:text-[9rem] pointer-events-none select-none">
            ✨
          </motion.div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default ChurchPackagesPage;
