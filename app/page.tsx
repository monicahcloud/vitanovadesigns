import Hero from "@/components/landingpage/hero/Hero";
import NavBar from "@/components/landingpage/navbar/NavBar";

export default function HomePage() {
  return (
    <>
      {" "}
      <NavBar />
      <main className="min-h-screen bg-gradient-to-br from-purple-700 to-blue-500 text-white ">
        <Hero />
      </main>
    </>
  );
}
