"use client";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import RippleButton from "@/components/RippleButton";

export type SubMenuItem = {
  name: string;
  href: string;
  description: string[];
  icon: StaticImageData;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type ServicesProps = {
  title: string;
  subMenu: SubMenuItem[];
};

const Services: React.FC<ServicesProps> = ({ title, subMenu }) => {
  return (
    <>
      {/* MegaMenu Grid */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="relative w-full bg-white shadow-2xl border-t-4 border-purple-500 z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {/* Title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-3xl shadow-xl z-20">
          <h1 className="text-purple-900 text-3xl sm:text-5xl md:text-6xl font-extrabold text-center">
            {title}
          </h1>
        </div>

        {/* Promo CTA Card */}
        <motion.div variants={itemVariants}>
          <Card className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white flex flex-col justify-between items-center min-h-[260px] rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-purple-400/20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="flex flex-col items-center text-center gap-4 cursor-pointer">
              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-purple-300 to-white text-transparent bg-clip-text drop-shadow-sm">
                Your Project, <br /> Your Price
              </h2>

              {/* Subtext */}
              <p className="text-sm sm:text-base md:text-lg text-purple-100 italic px-2 max-w-md">
                Flexible solutions, powerful results. <br />
                Let’s shape your vision — on your terms.
              </p>

              {/* CTA */}
              <RippleButton
                rippleColor="rgba(168, 85, 247, 0.4)"
                className="relative mt-3 bg-white text-purple-800 font-bold py-2 px-4 sm:px-6 rounded-2xl hover:bg-purple-200 transition-all shadow-md text-sm md:text-base">
                <span className="relative z-10">
                  Book a free 15-min strategy call
                </span>
                <span className="absolute inset-0 rounded-2xl animate-pulse bg-purple-300 opacity-10" />
              </RippleButton>
            </motion.div>

            {/* Decorative Icon */}
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 16,
                ease: "easeInOut",
              }}
              className="absolute bottom-4 right-4 opacity-20 text-[6rem] sm:text-[9rem] pointer-events-none select-none">
              ✨
            </motion.div>
          </Card>
        </motion.div>

        {/* SubMenu Cards */}
        {subMenu.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{
              rotateX: 5,
              rotateY: -5,
              scale: 1.03,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ transformStyle: "preserve-3d", perspective: 1000 }}
            className="rounded-3xl bg-white overflow-hidden cursor-pointer">
            <Link href={item.href} className="block h-full">
              <div className="flex flex-col gap-4 p-5 sm:p-6 h-full relative z-10">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={80}
                  height={40}
                  className="object-cover rounded"
                />
                <div className="text-xl sm:text-2xl font-bold text-gray-900">
                  {item.name}
                </div>
                <hr />
                <ul className="list-none pl-0 text-sm sm:text-base text-purple-900 font-semibold space-y-1">
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Services;
