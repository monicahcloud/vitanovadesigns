"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#0A0826] text-white relative z-50 border-t border-purple-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1 - Logo & CTA */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <Link href="/">
            <h2 className="text-4xl font-extrabold bg-gradient-to-t from-indigo-900 via-purple-700 to-purple-500 bg-clip-text text-transparent">
              VitaNova
            </h2>
          </Link>
          <p className="mt-4 text-gray-400 max-w-xs">
            Empowering brands through vibrant design, development, and
            marketing.
          </p>
          <Button
            asChild
            className="mt-6 bg-purple-700 hover:bg-purple-800 text-sm w-fit">
            <Link href="/contact">Get in Touch →</Link>
          </Button>
        </div>

        {/* Column 2 - Services */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4 uppercase">Services</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/services/design"
                className="hover:text-purple-400 transition-colors">
                Design & Development
              </Link>
            </li>
            <li>
              <Link
                href="/services/marketing"
                className="hover:text-purple-400 transition-colors">
                Marketing & Branding
              </Link>
            </li>
            <li>
              <Link
                href="/services/business"
                className="hover:text-purple-400 transition-colors">
                Business Intelligence & Analytics
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Company */}
        <div className="text-center md:text-left">
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

        {/* Column 4 - Resources */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h4 className="text-xl font-bold mb-4 uppercase">Resources</h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link
                href="/blog"
                className="hover:text-purple-400 transition-colors">
                Blog & Tips
              </Link>
            </li>
            <li>
              <Link
                href="/case-studies"
                className="hover:text-purple-400 transition-colors">
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="hover:text-purple-400 transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
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
