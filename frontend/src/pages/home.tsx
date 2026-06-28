import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import BrandsCarousel from "@/components/BrandsCarousel";
import Gallery from "@/components/Gallery";
import BusinessSolutions from "@/components/BusinessSolutions";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <BrandsCarousel />
        <Gallery />
        <BusinessSolutions />
        <Testimonials />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
