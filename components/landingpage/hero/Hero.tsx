"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <main className="relative min-h-[92vh] overflow-hidden bg-[#050015] text-white">
      {/* Hero image */}
      <Image
        src="/vitanovaHero.png"
        alt="VitaNova AI dashboard visual"
        fill
        priority
        className="object-cover object-right"
      />

      {/* Left readability overlay only */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050015] via-[#050015]/55 to-transparent" />

      {/* Bottom depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050015]/80 via-transparent to-transparent" />

      {/* Light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(168,85,247,0.18),transparent_32%),radial-gradient(circle_at_78%_30%,rgba(34,211,238,0.10),transparent_28%)]" />

      <section className="relative z-10 flex min-h-[92vh] items-center px-6 pt-24 md:px-12 lg:px-14">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
            Strategy. Analytics. Automation. Growth.
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
            Building
            <span
              className="block  hero-gradient-glow
    bg-gradient-to-r
    from-fuchsia-400
    via-blue-400
    to-cyan-300
    bg-[length:200%_200%]
    bg-clip-text
    text-transparent
    animate-gradient-text">
              Smarter
            </span>
            Solutions
          </h1>

          <div className="mt-6 h-1.5 w-40 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.75)]" />

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-100 drop-shadow-[0_0_18px_rgba(0,0,0,0.9)] md:text-2xl">
            We design, automate, and optimize so your business grows on
            autopilot.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3 text-white">
            {[
              "AI Solutions",
              "Data Intelligence",
              "Automation",
              "Business Growth",
            ].map((item, index) => (
              <div key={item} className="flex items-center">
                <span
                  className="
          text-sm
          md:text-base
          uppercase
          font-semibold
          bg-gradient-to-r
          from-purple-400
          via-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
        ">
                  {item}
                </span>

                {index < 3 && (
                  <div
                    className="
            mx-6
            h-10
            w-px
            bg-gradient-to-b
            from-transparent
            via-cyan-400
            to-transparent
            shadow-[0_0_15px_rgba(34,211,238,0.8)]
          "
                  />
                )}
              </div>
            ))}
          </div>

          <Button
            asChild
            className="mt-10 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 px-8 py-6 text-base font-bold text-white shadow-[0_0_35px_rgba(34,211,238,0.35)] hover:scale-105">
            <Link
              href="/contact"
              className="
    group
    mt-8
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-cyan-300/40
    bg-white/[0.08]
    px-7
    py-4
    text-sm
    font-bold
    uppercase
    tracking-[0.16em]
    text-white
    shadow-[0_0_30px_rgba(34,211,238,0.25)]
    backdrop-blur-xl
    transition-all
    duration-300
    hover:border-cyan-300
    hover:bg-gradient-to-r
    hover:from-purple-500
    hover:via-blue-500
    hover:to-cyan-400
    hover:shadow-[0_0_45px_rgba(34,211,238,0.45)]
  ">
              Book Strategy Call
              <span
                className="
      flex
      h-8
      w-8
      items-center
      justify-center
      rounded-full
      bg-cyan-300
      text-[#050015]
      transition-transform
      duration-300
      group-hover:translate-x-1
    ">
                →
              </span>
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
