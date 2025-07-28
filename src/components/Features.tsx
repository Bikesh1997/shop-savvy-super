import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingDown, 
  Bell, 
  BarChart3, 
  CreditCard, 
  Heart, 
  Users,
  Sparkles,
  ShoppingBag 
} from "lucide-react";

const features = [
  {
    icon: TrendingDown,
    title: "Smart Price Tracking",
    description: "Track product prices across Amazon, Flipkart, Nykaa & more with real-time monitoring.",
    badge: "Core Feature",
    color: "bg-gradient-primary"
  },
  {
    icon: Bell,
    title: "Instant Price Alerts",
    description: "Get notified the moment prices drop or better deals appear on your wishlist items.",
    badge: "Real-time",
    color: "bg-gradient-deal"
  },
  {
    icon: BarChart3,
    title: "Historical Price Trends", 
    description: "See price history charts to know if it's truly the best time to buy.",
    badge: "Data Insights",
    color: "bg-gradient-savings"
  },
  {
    icon: CreditCard,
    title: "Auto Cashback & Coupons",
    description: "Automatically apply coupons and stack cashback via trusted partners like CashKaro.",
    badge: "Save More",
    color: "bg-gradient-deal"
  },
  {
    icon: Heart,
    title: "Wishlist Sync",
    description: "Sync your Amazon or Flipkart wishlist and track all items in one convenient place.",
    badge: "Convenience",
    color: "bg-gradient-primary"
  },
  {
    icon: Users,
    title: "Group Deal Watching",
    description: "Invite friends to watch the same product — buy together when the price drops.",
    badge: "Social Shopping",
    color: "bg-gradient-savings"
  },
  {
    icon: Sparkles,
    title: "Smart Alternatives",
    description: "AI-powered suggestions for better-rated or cheaper alternatives automatically.",
    badge: "AI Powered",
    color: "bg-gradient-deal"
  },
  {
    icon: ShoppingBag,
    title: "Smart Buy Recommendations",
    description: "Buy smarter, not impulsively with data-driven purchase timing recommendations.",
    badge: "Expert Tips",
    color: "bg-gradient-primary"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Why ShopSmarter Works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Never Miss a Deal Again
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track, compare, and save with our comprehensive suite of smart shopping tools designed for the Indian market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card transition-all duration-300 hover:scale-105 border-0 bg-card/50 backdrop-blur-sm group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${feature.color} text-white shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-card-foreground text-sm">{feature.title}</h3>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {feature.badge}
                    </Badge>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};