"use client";

import { Card } from "@/components/ui/card";
import { RequestDialogue } from "./RequestDialogue";
import { Button } from "@/components/ui/button";

export default function HeroFolder() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 w-full max-w-7xl px-4 items-stretch">
        {/* Folder Card */}
        <div className="w-full h-full flex">
          {/* SVG for clipPath definition */}
          <svg width="0" height="0">
            <clipPath id="folderClip" clipPathUnits="objectBoundingBox">
              <path
                d="
                  M 0.0,0
                  Q 0,0 0,0.02
                  L 0,0.98
                  Q 0,1 0.02,1
                  L 0.98,1
                  Q 1,1 1,0.98
                  L 1,0.13
                  Q 1,0.01 0.93,0.01
                  L 0.80,0.01
                  Q 0.76,0 0.74,0.05
                  L 0.72,0.08
                  L 0.08,0.08
                  Q 0,0.08 0.0,0.2
                  Z
                "
              />
            </clipPath>
          </svg>
          <div
            className="bg-[#493CFF] rounded-3xl px-8 py-10 text-white shadow-xl w-full h-full flex flex-col justify-between"
            style={{
              clipPath: "url(#folderClip)",
              WebkitClipPath: "url(#folderClip)",
            }}>
            <div className="flex flex-col gap-3 h-full">
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase font-bold leading-tight mt-10 mb-0">
                We turn your dream
                <br />
                into reality
                <br />
                <br />
                <span className="text-[#FFD600]">TOP 1%</span>
              </h1> */}
              <section className="text-center mb-24">
                <h2 className="text-5xl font-extrabold mb-4">
                  Building Modern Websites
                </h2>
                <p className="text-xl mb-8">
                  We create high-quality, custom websites tailored to your
                  business needs.
                </p>
                <Button className="text-lg px-6 py-3 bg-blue-600 hover:bg-blue-700">
                  Get Started
                </Button>
              </section>

              <hr className="border-[#6B6BFF] opacity-50 mt-0 mb-0" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                <span className="text-base md:text-lg opacity-90">
                  12 Years Of Design-Driven
                  <br />
                  Development For B2B Products
                </span>

                <RequestDialogue />
              </div>
            </div>
          </div>
        </div>
        {/* Video Preview Card */}
        <div className="w-full h-full flex">
          <Card className="w-full h-full bg-[#FFF8D6] rounded-3xl flex items-center justify-center">
            <div className="relative w-4/5 aspect-[9/16] bg-white rounded-2xl flex items-center justify-center">
              <svg
                className="absolute inset-0 m-auto"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none">
                <circle cx="32" cy="32" r="32" fill="#fff" fillOpacity="0.8" />
                <polygon points="26,20 48,32 26,44" fill="#493CFF" />
              </svg>
              {/* <img src="your-image.jpg" alt="Video preview" className="w-full h-full object-cover rounded-2xl" /> */}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
