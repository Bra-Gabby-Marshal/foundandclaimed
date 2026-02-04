import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <Navbar />
        <HomeHero />
        <Footer />
      </main>
  );
}
