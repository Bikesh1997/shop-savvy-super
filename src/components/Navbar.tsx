import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, TrendingDown, Bell, User } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <TrendingDown className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">ShopSmarter</h1>
              <div className="text-xs text-muted-foreground">Never miss a deal</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#tracking" className="text-foreground hover:text-primary transition-colors">
              Price Tracking
            </a>
            <a href="#savings" className="text-foreground hover:text-primary transition-colors">
              Savings
            </a>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 bg-card/90 backdrop-blur-sm">
            <div className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#tracking" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Price Tracking
              </a>
              <a 
                href="#savings" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Savings
              </a>
              <div className="flex flex-col gap-2 pt-2 border-t border-border/50">
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button variant="default" size="sm">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};