import { Button } from "@/components/ui/button";
import { Search, TrendingDown, Bell, Users } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-card">
              <TrendingDown className="w-4 h-4 text-savings" />
              <span className="text-sm font-medium text-foreground">
                Save ₹1,300+ on average per purchase
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ShopSmarter
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-white/90">
                The Deal You Wish You Didn't Miss
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
              Never miss a price drop or hidden cashback again. Track prices across Amazon, Flipkart, Nykaa & more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Price Tracking
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                See How It Works
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">₹50K+</div>
                <div className="text-sm text-white/70">Saved by Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-white/70">Products Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
                <div className="text-sm text-white/70">Happy Shoppers</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="ShopSmarter Price Tracking" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 -left-4 bg-gradient-deal text-deal-foreground px-4 py-2 rounded-lg shadow-deal animate-bounce-subtle">
              <Bell className="w-4 h-4 inline mr-2" />
              Price Drop Alert!
            </div>
            
            <div className="absolute bottom-6 -right-4 bg-gradient-savings text-secondary-foreground px-4 py-2 rounded-lg shadow-savings animate-pulse-glow">
              <TrendingDown className="w-4 h-4 inline mr-2" />
              ₹500 Saved
            </div>
            
            <div className="absolute top-1/2 -right-8 bg-card/90 backdrop-blur-sm text-card-foreground px-3 py-2 rounded-lg shadow-card">
              <Users className="w-4 h-4 inline mr-2" />
              5 friends watching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};