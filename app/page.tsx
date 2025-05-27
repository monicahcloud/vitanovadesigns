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
                name: "Design",
                href: "/services/design",
                description: [
                  "UI/UX",
                  "Web",
                  "Mobile App Design",
                  "Landing Page Design",
                  "Branding",
                ],
                icon: design,
              },
              {
                name: "Development",
                href: "/services/development",
                description: [
                  "Web Development",
                  "Software Development",
                  "CMS Development",
                  "Webflow Development",
                  "MVP Development",
                ],
                icon: develop,
              },
              {
                name: "Marketing/UX",
                href: "/services/marketing",
                description: [
                  "Content Marketing",
                  "Pitch Deck Design",
                  "SEO",
                  "Content & CRO",
                ],
                icon: marketing,
              },
            ]}
          />
        </div>
      </main>
    </>
  );
}
