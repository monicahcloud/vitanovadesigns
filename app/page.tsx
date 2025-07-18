import Hero from "@/components/landingpage/hero/Hero";
import Services from "./services/Services";
import design from "../app/assets/images/design2.png";
import develop from "../app/assets/images/develop2.png";
import marketing from "../app/assets/images/marketing.png";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white">
        <Hero />

        {/* MegaMenu as standalone services block */}
        <div className="relative z-20 flex justify-center mt-[-80px]">
          <Services
            title="Our Services"
            subMenu={[
              {
                name: "Design/Development",
                href: "/services/design",
                description: [
                  "AI System Integration & Automation",
                  "User Interface & User Experience Design (UI/UX)",
                  "Website and Mobile Application Design",
                  "Content Management Systems (CMS)",
                  "Landing Page Design & Optimization",
                ],
                icon: develop,
              },
              {
                name: "Marketing/Branding",
                href: "/services/marketing",
                description: [
                  "Search Engine Optimization (SEO) & Conversion Strategy",
                  "Customer Journey Research & Mapping",
                  "Brand Messaging & Communication",
                  "Content Marketing",
                  "Visual Presentations",
                ],
                icon: marketing,
              },
              {
                name: "Business Solutions",
                href: "/services/business",
                description: [
                  "Key Performance Indicator (KPI) Development & Tracking",
                  "Business Intelligence (BI) Reporting & Insights",
                  "Consulting & Strategy",
                  "Systems & Automation",
                ],
                icon: design,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
