"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import RippleButton from "@/components/RippleButton";

export type SubMenuItem = {
  name: string;
  href: string;
  description: string[];
  icon: StaticImageData;
};

// Animation Variants
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

type MegaMenuProps = {
  title: string;
  subMenu: SubMenuItem[];
};

const MegaMenu: React.FC<MegaMenuProps> = ({ title, subMenu }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="text-3xl hover:text-purple-900 flex items-center gap-1"
          aria-haspopup="menu">
          {title}
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </DropdownMenuTrigger>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mega-menu"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={containerVariants}
            className="absolute left-0 top-full mt-4 rounded-4xl w-full bg-white shadow-2xl border-t-4 border-purple-500 z-50 px-8 py-10 grid grid-cols-4 gap-6">
            {/* Promo CTA Card */}
            <motion.div variants={itemVariants}>
              <Card className="col-span-1 bg-gradient-to-br from-purple-700 to-purple-900 text-white flex flex-col justify-between items-center h-full min-h-[220px] rounded-3xl p-6 shadow-lg relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex flex-col items-center text-center gap-4 cursor-pointer">
                  <div className="text-4xl font-extrabold">
                    Let&apos;s Talk!
                  </div>
                  <p className="text-lg opacity-90">
                    Got a project in mind? <br /> Let&apos;s make it happen.
                  </p>
                  <RippleButton
                    rippleColor="rgba(168, 85, 247, 0.4)"
                    className="mt-4 bg-white text-purple-800 font-bold py-2 px-4 rounded-xl hover:bg-purple-200 transition-all">
                    Get in Touch
                  </RippleButton>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                  }}
                  className="absolute bottom-5 right-5 opacity-20 text-9xl font-extrabold select-none pointer-events-none">
                  🚀
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
                className="col-span-1 rounded-3xl bg-white overflow-hidden cursor-pointer">
                <Link href={item.href} className="block h-full">
                  <div className="flex flex-col gap-4 p-6 relative z-10 h-full">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={100}
                      height={50}
                      className="object-cover rounded"
                    />
                    <div className="text-3xl font-bold text-gray-900">
                      {item.name}
                    </div>
                    <hr />
                    <ul className="list-none pl-0 text-lg text-purple-900 font-semibold space-y-1">
                      {item.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                  {/* Optional overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </DropdownMenu>
  );
};

export default MegaMenu;
