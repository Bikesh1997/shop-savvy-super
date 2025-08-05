import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingDown, Bell, History, Users, Zap, Target } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: TrendingDown,
      title: "Price Tracking",
      description: "Track product prices across Amazon, Flipkart, Nykaa & more with real-time alerts.",
      color: "text-blue-500"
    },
    {
      icon: Bell,
      title: "Instant Alerts",
      description: "Get notified immediately when prices drop or better deals appear.",
      color: "text-green-500"
    },
    {
      icon: History,
      title: "Price History",
      description: "See historical price trends to know if it's truly the best time to buy.",
      color: "text-purple-500"
    },
    {
      icon: Target,
      title: "Auto Coupons",
      description: "Automatically apply coupons and cashback via trusted partners.",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "Group Deals",
      description: "Invite friends to watch products and buy together when prices drop.",
      color: "text-pink-500"
    },
    {
      icon: Zap,
      title: "Smart Alternatives",
      description: "Get suggestions for better-rated or cheaper products automatically.",
      color: "text-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How ShopSmarter Helps You Save
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buy smarter, not impulsively. Stack up affiliate cashback + platform rewards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <feature.icon className={`w-12 h-12 mx-auto mb-4 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;