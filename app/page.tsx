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
              // {
              //   name: "Design",
              //   href: "/services/design",
              //   description: [
              //     "UI/UX",
              //     "Web",
              //     "Mobile App Design",
              //     "Landing Page Design",
              //     "Branding",
              //   ],
              //   icon: design,
              // },
              {
                name: "Design/Development",
                href: "/services/design",
                description: [
                  "User Interface & User Experience Design",
                  "Website and Mobile Application Design",
                  "Website Development & Content Management Systems",
                  "Custom Software & Prototype Development",
                  "Landing Page Design & Optimization",
                ],
                icon: develop,
              },
              {
                name: "Marketing/Branding",
                href: "/services/marketing",
                description: [
                  "Content Marketing Strategy",
                  "Search Engine Optimization & Conversion Strategy",
                  "Pitch Decks & Visual Presentations",
                  "Customer Journey Research & Mapping",
                  "Brand Messaging & Communication",
                ],
                icon: marketing,
              },
              {
                name: "Business Intelligence & Strategy",
                href: "/services/business",
                description: [
                  "Key Performance Indicator Development & Tracking",
                  "Business Intelligence Reporting & Insights",
                  "Workflow & Process Improvement",
                  "Data Analysis & Visual Reporting",
                  "Support for Strategic Decision-Making",
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
