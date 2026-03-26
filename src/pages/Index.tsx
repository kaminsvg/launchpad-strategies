import HeroSection from "@/components/HeroSection";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import HowIThink from "@/components/HowIThink";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhoIWorkWith />
      <HowIThink />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
