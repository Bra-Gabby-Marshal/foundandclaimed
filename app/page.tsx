import AboutUs from "@/components/AboutUs";
import ActionsSection from "@/components/ActionsSection";
import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import HomeHero from "@/components/HomeHero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import ParcelSection from "@/components/ParcelSection";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <Navbar />
        <HomeHero />
        <HowItWorks />
        {/* <CardSection />
        <ParcelSection /> */}
        <ActionsSection />
        <AboutUs />
        <Footer />
      </main>
  );
}
