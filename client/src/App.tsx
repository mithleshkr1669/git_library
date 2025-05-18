import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import GallerySection from "@/components/sections/GallerySection";
import HoursLocationSection from "@/components/sections/HoursLocationSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import CtaSection from "@/components/sections/CtaSection";

function App() {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-inter text-gray-800 bg-gray-50">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AmenitiesSection />
          <GallerySection />
          <HoursLocationSection />
          <FaqSection />
          <ContactSection />
          <CtaSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
