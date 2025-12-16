import { useEffect } from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProcessCommitmentSection from "@/components/ProcessCommitmentSection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import SustainabilitySection from "@/components/SustainabilitySection";
import RecipesSection from "@/components/RecipesSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <ProcessCommitmentSection />
      <ProcessSection />
      <ProductsSection />
      <RecipesSection />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
