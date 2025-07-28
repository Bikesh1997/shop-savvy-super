import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, TrendingDown, TrendingUp, Minus, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro 128GB",
    currentPrice: 134900,
    originalPrice: 144900,
    lowestPrice: 129900,
    platform: "Amazon",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    trend: "down",
    discount: 7,
    isTracking: false
  },
  {
    id: 2,
    name: "Samsung Galaxy Watch 6",
    currentPrice: 24999,
    originalPrice: 29999,
    lowestPrice: 22999,
    platform: "Flipkart",
    image: "https://images.unsplash.com/photo-1579586337278-3f436f25d4d6?w=400&h=400&fit=crop",
    trend: "up",
    discount: 17,
    isTracking: true
  },
  {
    id: 3,
    name: "Nykaa Fenty Beauty Foundation",
    currentPrice: 3400,
    originalPrice: 3400,
    lowestPrice: 2800,
    platform: "Nykaa",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
    trend: "same",
    discount: 0,
    isTracking: false
  }
];

export const PriceTracker = () => {
  const [searchUrl, setSearchUrl] = useState("");
  const [trackedProducts, setTrackedProducts] = useState(mockProducts);
  const { toast } = useToast();

  const handleTrackProduct = (productId: number) => {
    setTrackedProducts(prev => 
      prev.map(product => 
        product.id === productId 
          ? { ...product, isTracking: !product.isTracking }
          : product
      )
    );
    
    const product = trackedProducts.find(p => p.id === productId);
    toast({
      title: product?.isTracking ? "Stopped Tracking" : "Now Tracking!",
      description: product?.isTracking 
        ? `Removed ${product.name} from your watchlist`
        : `Added ${product.name} to your watchlist`,
    });
  };

  const handleAddProduct = () => {
    if (!searchUrl) return;
    
    toast({
      title: "Product Added!",
      description: "We're now tracking this product for price changes.",
    });
    setSearchUrl("");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'down':
        return <TrendingDown className="w-4 h-4 text-savings" />;
      case 'up':
        return <TrendingUp className="w-4 h-4 text-destructive" />;
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Tracking Your Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Paste any product URL from Amazon, Flipkart, Nykaa or other supported platforms
          </p>
        </div>

        {/* Add Product Form */}
        <Card className="max-w-2xl mx-auto p-6 mb-12 bg-card/50 backdrop-blur-sm">
          <div className="flex gap-4">
            <Input
              placeholder="Paste product URL here (e.g., amazon.in/dp/...)"
              value={searchUrl}
              onChange={(e) => setSearchUrl(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddProduct} className="shrink-0">
              <Search className="w-4 h-4 mr-2" />
              Track Product
            </Button>
          </div>
        </Card>

        {/* Tracked Products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trackedProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-card transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount > 0 && (
                  <Badge className="absolute top-3 left-3 bg-gradient-deal text-deal-foreground">
                    {product.discount}% OFF
                  </Badge>
                )}
                <Badge variant="outline" className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm">
                  {product.platform}
                </Badge>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-card-foreground mb-3 line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-card-foreground">
                          {formatPrice(product.currentPrice)}
                        </span>
                        {getTrendIcon(product.trend)}
                      </div>
                      {product.originalPrice !== product.currentPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Lowest price: <span className="font-semibold text-savings">
                      {formatPrice(product.lowestPrice)}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button
                      variant={product.isTracking ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => handleTrackProduct(product.id)}
                      className="flex-1"
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      {product.isTracking ? "Tracking" : "Track"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
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