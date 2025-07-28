import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, DollarSign, Gift, Users } from "lucide-react";

const savingsData = [
  {
    category: "Electronics",
    totalSaved: 15400,
    dealsFound: 23,
    avgDiscount: 12,
    color: "bg-gradient-primary"
  },
  {
    category: "Fashion",
    totalSaved: 8900,
    dealsFound: 45,
    avgDiscount: 25,
    color: "bg-gradient-deal"
  },
  {
    category: "Beauty",
    totalSaved: 4200,
    dealsFound: 18,
    avgDiscount: 18,
    color: "bg-gradient-savings"
  },
  {
    category: "Home & Kitchen",
    totalSaved: 12600,
    dealsFound: 31,
    avgDiscount: 15,
    color: "bg-gradient-primary"
  }
];

const testimonials = [
  {
    name: "Ritika",
    role: "Student & Savvy Shopper",
    quote: "ShopSmarter helped me save ₹1,300 on a phone I was going to buy anyway!",
    savings: 1300,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Arjun",
    role: "Tech Professional",
    quote: "The price alerts saved me from buying at the wrong time. Amazing app!",
    savings: 2800,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Priya",
    role: "Shopping Enthusiast",
    quote: "Group deals with friends made shopping so much more fun and affordable.",
    savings: 950,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  }
];

export const SavingsCalculator = () => {
  const totalSaved = savingsData.reduce((sum, item) => sum + item.totalSaved, 0);
  const totalDeals = savingsData.reduce((sum, item) => sum + item.dealsFound, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Real Savings, Real Stories
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            How Much You Could Save
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of smart shoppers who are already saving money with ShopSmarter
          </p>
        </div>

        {/* Savings Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 text-center bg-gradient-primary text-primary-foreground hover:shadow-lg transition-all duration-300">
            <DollarSign className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">{formatPrice(totalSaved)}</div>
            <div className="text-primary-foreground/80">Total Saved This Month</div>
          </Card>
          
          <Card className="p-8 text-center bg-gradient-savings text-secondary-foreground hover:shadow-savings transition-all duration-300">
            <TrendingDown className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">{totalDeals}</div>
            <div className="text-secondary-foreground/80">Deals Found</div>
          </Card>
          
          <Card className="p-8 text-center bg-gradient-deal text-accent-foreground hover:shadow-deal transition-all duration-300">
            <Gift className="w-12 h-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">18%</div>
            <div className="text-accent-foreground/80">Average Discount</div>
          </Card>
        </div>

        {/* Category Breakdown */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {savingsData.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-card-foreground">{category.category}</h3>
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
              </div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold text-card-foreground">
                    {formatPrice(category.totalSaved)}
                  </div>
                  <div className="text-sm text-muted-foreground">Saved</div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{category.dealsFound} deals</span>
                  <span className="font-semibold text-savings">{category.avgDiscount}% avg</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.role}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-savings" />
                    <span className="text-sm font-semibold text-savings">
                      Saved {formatPrice(testimonial.savings)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};