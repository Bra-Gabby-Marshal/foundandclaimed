import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <Navbar />
        <HomeHero />
        <HowItWorks />
        <Footer />
      </main>
  );
}
