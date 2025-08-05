import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, TrendingDown, TrendingUp, Bell } from 'lucide-react';

const PriceTracker: React.FC = () => {
  const [searchUrl, setSearchUrl] = useState('');
  
  const mockTrackedItems = [
    {
      id: 1,
      name: 'iPhone 15 Pro 128GB',
      currentPrice: 129900,
      originalPrice: 147900,
      discount: 12,
      platform: 'Amazon',
      image: '/placeholder.svg',
      trend: 'down'
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      currentPrice: 114900,
      originalPrice: 119900,
      discount: 4,
      platform: 'Flipkart',
      image: '/placeholder.svg',
      trend: 'down'
    },
    {
      id: 3,
      name: 'Sony WH-1000XM5',
      currentPrice: 29990,
      originalPrice: 27990,
      discount: -7,
      platform: 'Croma',
      image: '/placeholder.svg',
      trend: 'up'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Track Any Product
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Paste any product URL and start tracking prices instantly
          </p>
          
          <div className="max-w-2xl mx-auto flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Paste Amazon, Flipkart, or any product URL here..."
                value={searchUrl}
                onChange={(e) => setSearchUrl(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button className="px-8">
              Track Now
            </Button>
          </div>
        </div>

        <div className="grid gap-6">
          <h3 className="text-2xl font-semibold text-center mb-6">Your Tracked Items</h3>
          
          {mockTrackedItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-lg">{item.name}</h4>
                        <Badge variant="outline" className="mt-1">
                          {item.platform}
                        </Badge>
                      </div>
                      <Button variant="outline" size="sm">
                        <Bell className="w-4 h-4 mr-2" />
                        Alert Me
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">
                          {formatPrice(item.currentPrice)}
                        </span>
                        {item.originalPrice !== item.currentPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(item.originalPrice)}
                          </span>
                        )}
                      </div>
                      
                      <div className={`flex items-center gap-1 ${
                        item.trend === 'down' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.trend === 'down' ? (
                          <TrendingDown className="w-4 h-4" />
                        ) : (
                          <TrendingUp className="w-4 h-4" />
                        )}
                        <span className="font-semibold">
                          {Math.abs(item.discount)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceTracker;