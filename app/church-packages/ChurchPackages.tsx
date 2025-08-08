"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RippleButton from "@/components/RippleButton";
import Image from "next/image";
import plant from "../assets/seed.png";
import church1 from "../assets/images/church1.png";
import church2 from "../assets/images/church2.png";
import church3 from "../assets/images/church3.png";
import church4 from "../assets/images/church4.png";
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ChurchPackagesPage = () => {
  return (
    <>
      <div className="items-center justify-center mx-auto text-center my-40 tracking-wide">
        <h1 className="z-10 text-5xl  font-extrabold uppercase text-white leading-tight tracking-wide drop-shadow-[0_0_15px_rgba(199,210,254,0.4)]">
          Running a church is a full-time calling. <br />
          <span className="text-5xl font-extrabold bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
            VitaNova
          </span>{" "}
          is here to help.{" "}
        </h1>{" "}
        <p className="text-xl max-w-3xl mx-auto">
          From Sunday sermons to midweek events, we help churches stay connected
          online—so you can focus on serving your community.
        </p>
      </div>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.1 } },
        }}
        className="relative w-full max-w-9xl mx-auto bg-white shadow-2xl border-t-4 border-purple-500 z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20 justify-items-center">
        {/* Title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[90%] max-w-[720px] px-4 sm:px-6 py-4 sm:py-6 rounded-3xl shadow-xl z-20 text-center">
          <h1 className="text-purple-900 text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Church Website Packages
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mt-4">
            <Link
              href="https://calendly.com/vitanovadesigns/15min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a free 15-minute strategy call">
              <RippleButton
                rippleColor="rgba(168, 85, 247, 0.4)"
                className="relative bg-white text-purple-800 font-bold py-2 px-4 sm:px-6 rounded-2xl hover:bg-purple-200 transition-all shadow-md text-sm md:text-base">
                <span className="relative z-10">Book a free 15-min call</span>
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
            altPrice: "$795 one-time (includes 3 months maintenance)",
            points: [
              "Custom 1-page website (Home, Contact, Service Info)",
              "Mobile-responsive design",
              "Service times & location map",
              "Basic logo styling & prayer/contact form",
              "Domain + hosting setup",
              "1 hour/month maintenance for 12 months",
            ],
          },
          {
            title: "Grow Plan",
            price: "$1,295 setup + $79/month",
            altPrice: "$1,495 one-time (includes 3 months maintenance)",
            points: [
              "Up to 5 pages (Home, About, Ministries, Events, Contact)",
              "Sermon archive (YouTube embeds)",
              "Event calendar & donation button",
              "Newsletter signup & basic SEO",
              "Social media integration",
              "3 hours/month maintenance for 12 months",
            ],
          },
          {
            title: "Flourish Plan",
            price: "$2,495 setup + $129/month",
            altPrice: "$2,995 one-time (includes 3 months maintenance)",
            points: [
              "Up to 10 pages (Ministries, Staff, Media, Blog)",
              "Custom branding & graphic support",
              "Live streaming & advanced sermon library",
              "Online giving + analytics dashboard",
              "Member portal + SEO strategy",
              "6 hours/month maintenance for 12 months",
            ],
          },
        ].map((plan) => (
          <motion.div
            key={plan.title}
            variants={itemVariants}
            whileHover={{ rotateX: 5, rotateY: -5, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="mt-8 rounded-3xl bg-white overflow-hidden cursor-pointer p-6 shadow-md hover:shadow-xl mx-auto items-center justify-center ">
            <div className="flex justify-around items-center mx-auto ">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-700 mb-3">
                {plan.title}
              </h2>
              <Image src={plant} alt="growing plant" width={75} height={150} />
            </div>
            <ul className="text-sm sm:text-base text-purple-900 font-medium space-y-1 mb-4">
              {plan.points.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-purple-700">
              {plan.price}
            </p>
            <p className="text-sm italic text-gray-500">or {plan.altPrice}</p>
          </motion.div>
        ))}

        {/* Add-Ons Card */}
        {/* <motion.div
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
              </ul>
            </div>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
              className="absolute bottom-4 right-4 opacity-20 text-[6rem] sm:text-[9rem] pointer-events-none select-none">
              ✨
            </motion.div>
          </Card>
        </motion.div> */}
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-8">
        <Image
          src={church1}
          alt="church 1"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
        />
        <Image
          src={church2}
          alt="church 2"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
        />
        <Image
          src={church3}
          alt="church 3"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
        />
        <Image
          src={church4}
          alt="church 4"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
        />
        {/* <Image
          src={church2}
          alt="church 2"
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
        /> */}
      </div>
    </>
  );
};

export default ChurchPackagesPage;
