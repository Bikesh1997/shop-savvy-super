
import React from 'react';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PriceTracker from '@/components/PriceTracker';
import SavingsCalculator from '@/components/SavingsCalculator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Settings from '@/components/Settings';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <Features />
        <PriceTracker />
        <SavingsCalculator />
        <Footer />
        <Settings />
      </div>
    </ThemeProvider>
  );
};

export default Index;
