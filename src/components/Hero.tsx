import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingDown, Shield, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-600 bg-clip-text text-transparent leading-tight">
                ShopSmarter
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                The Deal You Wish You Didn't Miss
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              🛍️ Tired of buying something, only to see it cheaper the next week? 
              With ShopSmarter, never miss a price drop or hidden cashback again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Saving Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Trusted by 50K+ users</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingDown className="w-4 h-4 text-blue-500" />
                <span>₹1.2Cr+ saved</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Live Price Tracking</span>
                </div>
                <div className="bg-white/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">iPhone 15 Pro</span>
                    <span className="text-green-600 font-bold">-12% ↓</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">₹1,29,900</div>
                  <div className="text-sm text-muted-foreground line-through">₹1,47,900</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;