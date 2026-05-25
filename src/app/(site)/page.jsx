"use client";
import EuropeanCarSpecialist from "./components/EuropeanCarSpecialist";
import FAQ from "./components/FAQ";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import ServicesSection from "./components/ServicesSection";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";
import WhyAutoExperts from "./components/WhyAutoExperts";

export default function Home() {
  return (
    <>
    <EuropeanCarSpecialist />
      <HeroSection />
      <WhoWeAre />
      <ServicesGrid />
      <ServicesSection/>
      <WhyAutoExperts/>
      <FAQ/>
      <Testimonials/>
    </>
  );
}