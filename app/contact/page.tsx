"use client";

import ContactForm from "@/components/contact/ContactForm";
import ContactLeftColumn from "@/components/contact/ContactLeftColumn";
import React from "react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-700 to-purple-500 text-white flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px] animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-[100px] animate-pulse delay-2000 -z-10" />

      <section className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
        {/* Left Column */}
        {/* Inside left column container */}
        <ContactLeftColumn />

        {/* Right Column (wider) */}
        <div className="md:col-span-2 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl flex items-center">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
