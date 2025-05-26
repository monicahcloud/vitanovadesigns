import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { AlignRight, ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Top level dropdown (like SERVICES)
const TopLevelDropdown = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-3xl font-extrabold uppercase hover:text-cyan-400 transition-colors mb-4">
        {title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="pl-4 mt-4 space-y-8">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Main Mobile Menu Sheet
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <AlignRight className="size-8 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="fixed top-0 right-0 !w-[700px] !max-w-[95vw] !h-screen bg-gradient-to-br from-[#0A0826]/90 to-purple-900/90 backdrop-blur-lg text-white p-10 z-[9999] flex flex-col overflow-y-auto">
        {/* Close & CTA */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/contact" className="border px-6 py-3 text-lg font-bold">
            Request a Quote
          </Link>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <X className="size-8 text-white" />
            </Button>
          </SheetTrigger>
        </div>

        {/* MegaMenu */}
        <div className="flex flex-col space-y-12">
          <TopLevelDropdown title="Services">
            <div className="grid grid-cols-3 gap-8 text-lg">
              <div className="space-y-3">
                <Link
                  href="/services/design"
                  className="text-cyan-400 font-bold uppercase block hover:underline">
                  Web Design
                </Link>
                <ul className="space-y-1">
                  <li>UI/UX</li>
                  <li>Web</li>
                  <li>Mobile App Design</li>
                  <li>Landing Page Design</li>
                  <li>Branding</li>
                </ul>
              </div>
              <div className="space-y-3">
                <Link
                  href="/services/development"
                  className="text-cyan-400 font-bold uppercase block hover:underline">
                  Web Development
                </Link>
                <ul className="space-y-1">
                  <li>Web Development</li>
                  <li>Software Development</li>
                  <li>CMS Development</li>
                  <li>Webflow Development</li>
                  <li>MVP Development</li>
                </ul>
              </div>
              <div className="space-y-3">
                <Link
                  href="/services/marketing"
                  className="text-cyan-400 font-bold uppercase block hover:underline">
                  Marketing
                </Link>
                <ul className="space-y-1">
                  <li>Content Marketing</li>
                  <li>Pitch Deck Design</li>
                  <li>SEO</li>
                  <li>Content & CRO</li>
                </ul>
              </div>
            </div>
          </TopLevelDropdown>

          <Link
            href="/about"
            className="text-3xl font-extrabold uppercase hover:text-cyan-400 transition-colors">
            ABOUT
          </Link>

          {/* <TopLevelDropdown title="Work by Industry">
            <ul className="space-y-2 pl-4 text-lg">
              <li>
                <Link href="#">Retail</Link>
              </li>
              <li>
                <Link href="#">B2B</Link>
              </li>
              <li>
                <Link href="#">Healthcare</Link>
              </li>
              <li>
                <Link href="#">Technology</Link>
              </li>
            </ul>
          </TopLevelDropdown> */}

          <Link
            href="/contact"
            className="text-3xl font-extrabold uppercase hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </div>
        {/* VITANOVA on side vertically */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-1/2 text-[150px] font-extrabold opacity-10 select-none pointer-events-none leading-none rotate-270">
          VITANOVA
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
