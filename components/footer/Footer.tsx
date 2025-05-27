"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0A0826] text-white relative z-50 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 - Logo & CTA */}
        <div>
          <Link href="/">
            <h2 className="text-4xl font-extrabold bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
              VitaNova
            </h2>
          </Link>

          <p className="mt-4 text-gray-400">
            Empowering brands through vibrant design, development, and
            marketing.
          </p>
          <Button asChild className="mt-6 bg-purple-700 hover:bg-purple-800">
            <Link href="/contact">Get in Touch →</Link>
          </Button>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/services/design"
                className="hover:text-purple-400 transition-colors">
                Design
              </Link>
            </li>
            <li>
              <Link
                href="/services/development"
                className="hover:text-purple-400 transition-colors">
                Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/marketing"
                className="hover:text-purple-400 transition-colors">
                Marketing
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase">Company</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/about"
                className="hover:text-purple-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-purple-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-purple-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase">Follow Us</h4>
          <div className="flex gap-4 text-gray-300">
            <Link href="#" className="hover:text-purple-400 transition-colors">
              <Instagram />
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              <Facebook />
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              <Twitter />
            </Link>
            <Link href="#" className="hover:text-purple-400 transition-colors">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-purple-800 mt-8 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} VitaNova Designs. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
