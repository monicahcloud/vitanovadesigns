"use client";

import React from "react";

export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
        <source src="../public/herobg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Over Video */}
      <div className="flex items-center justify-center h-full text-center text-white px-6">
        <div>
          <h1 className="text-5xl font-bold mb-4">
            Your Vision. Our Creation.
          </h1>
          <p className="text-xl max-w-xl mx-auto">
            We craft impactful digital experiences to grow your business.
          </p>
        </div>
      </div>
    </div>
  );
}
