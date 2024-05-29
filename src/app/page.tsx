import ContentSection from "@/components/main/About/About";
import Features from "@/components/main/Features/Features";
import PricingSection from "@/components/main/Pricing/PricingSection";
import HeroSection from "@/components/main/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
     <HeroSection/>
     <Features/>
     <PricingSection/>
     <ContentSection/>
     
      
    </main>
  );
}
