import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PriceTracker } from "@/components/PriceTracker";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="tracking">
        <PriceTracker />
      </div>
      <div id="savings">
        <SavingsCalculator />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
