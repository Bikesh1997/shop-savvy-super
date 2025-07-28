import { TrendingDown, Mail, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <TrendingDown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">ShopSmarter</h3>
                <div className="text-sm text-muted-foreground">Never miss a deal</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              The ultimate price tracking app for smart shoppers across India. Save money, shop better.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Features</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Price Tracking
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Price Alerts
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Cashback Finder
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Group Deals
              </a>
            </div>
          </div>

          {/* Platforms */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Platforms</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Amazon India
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Flipkart
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Nykaa
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Myntra
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Join 10,000+ smart shoppers saving money every day.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 ShopSmarter. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};