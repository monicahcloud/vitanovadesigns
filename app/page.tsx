import Hero from "@/components/landingpage/hero/Hero";
import Services from "./services/Services";
import design from "../app/assets/images/design2.png";
import develop from "../app/assets/images/develop2.png";
import marketing from "../app/assets/images/marketing.png";
import ProcessSection from "@/components/ProcessSection";
import SaaSSection from "@/components/SaaSSection";

export default function HomePage() {
  return (
    // Changed bg to a deeper dark theme to let the Hero and Cards pop
    <main className="min-h-screen bg-[#0A0826] text-white">
      {/* 1. Hero Section remains at the top */}
      <Hero />

      {/* 2. Services Section: Using a negative margin to overlap the hero slightly */}
      <section className="relative z-20 px-4 md:px-0 mt-[-100px]">
        <Services
          title="How We Help You Grow"
          subMenu={[
            {
              name: "Digital Products",
              href: "/services/design",
              description: [
                "AI-Powered Automations",
                "Web & Mobile Apps",
                "High-Conversion Websites",
                "User-Friendly Experience Design",
                "Instant-Launch Landing Pages",
              ],
              icon: develop,
            },
            {
              name: "Brand & Marketing",
              href: "/services/marketing",
              description: [
                "Search Engine Mastery (SEO)",
                "Customer Growth Strategy",
                "Brand Messaging & Story",
                "Authority Content Marketing",
                "Premium Visual Presentations",
              ],
              icon: marketing,
            },
            {
              name: "Business Strategy",
              href: "/services/business",
              description: [
                "Real-Time Profit Dashboards",
                "AI Business Intelligence",
                "Growth & Scale Consulting",
                "Operational Workflows",
              ],
              icon: design,
            },
          ]}
        />
      </section>

      {/* 3. Process Section: Moved outside the flex container so it takes full width */}
      <section className="py-10">
        <ProcessSection />
      </section>
      <section className="">
        <SaaSSection />
      </section>
    </main>
  );
}
