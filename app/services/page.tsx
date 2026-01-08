import Services from "./Services";
import design from "../assets/images/design.jpg";
import develop from "../assets/images/develop.jpg";
import marketing from "../assets/images/marketing.png";
function page() {
  return (
    <>
      <Services
        title="Our Services"
        subMenu={[
          {
            name: "Product & Platform Build",
            href: "/services/design",
            description: [
              "AI-Powered Automation (Save 20+ hours a week)",
              "High-Conversion Website Design",
              "Mobile-First Customer Experiences",
              "Smart Content Systems (Manage your site with ease)",
              "Instant-Load Landing Pages",
            ],
            icon: develop,
          },
          {
            name: "Brand & Market Authority",
            href: "/services/marketing",
            description: [
              "Search Engine Mastery (Get found on Google)",
              "Customer Journey Mapping (Turn clicks into cash)",
              "Messaging that Cuts Through the Noise",
              "Authority-Building Content Strategy",
              "Visual Pitch Decks for Investors",
            ],
            icon: marketing,
          },
          {
            name: "Growth Infrastructure",
            href: "/services/business",
            description: [
              "The 'CEO Dashboard' (Track your real-time profit)",
              "AI-Powered Business Intelligence",
              "Scale-Ready Strategic Consulting",
              "Full Workflow Automation (Connect your tools)",
            ],
            icon: design,
          },
        ]}
      />
    </>
  );
}

export default page;
