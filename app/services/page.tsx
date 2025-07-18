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
    </>
  );
}

export default page;
