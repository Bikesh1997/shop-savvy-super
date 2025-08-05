import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, PiggyBank, TrendingUp } from 'lucide-react';

const SavingsCalculator: React.FC = () => {
  const [originalPrice, setOriginalPrice] = useState<string>('');
  const [discountPercent, setDiscountPercent] = useState<string>('');
  const [cashbackPercent, setCashbackPercent] = useState<string>('');
  
  const calculateSavings = () => {
    const price = parseFloat(originalPrice) || 0;
    const discount = parseFloat(discountPercent) || 0;
    const cashback = parseFloat(cashbackPercent) || 0;
    
    const discountAmount = (price * discount) / 100;
    const priceAfterDiscount = price - discountAmount;
    const cashbackAmount = (priceAfterDiscount * cashback) / 100;
    const finalPrice = priceAfterDiscount - cashbackAmount;
    const totalSavings = price - finalPrice;
    
    return {
      originalPrice: price,
      discountAmount,
      cashbackAmount,
      finalPrice,
      totalSavings,
      savingsPercent: ((totalSavings / price) * 100) || 0
    };
  };

  const savings = calculateSavings();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much you can save with ShopSmarter's deals and cashback
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Savings Calculator
              </CardTitle>
              <CardDescription>
                Enter product details to calculate potential savings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="originalPrice">Original Price (₹)</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  placeholder="Enter original price"
                  value={originalPrice}
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="discount">Discount (%)</Label>
                <Input
                  id="discount"
                  type="number"
                  placeholder="Enter discount percentage"
                  value={discountPercent}
                  onChange={(e) => setDiscountPercent(e.target.value)}
                />
              </div>
              
              <div>
                <Label htmlFor="cashback">Cashback (%)</Label>
                <Input
                  id="cashback"
                  type="number"
                  placeholder="Enter cashback percentage"
                  value={cashbackPercent}
                  onChange={(e) => setCashbackPercent(e.target.value)}
                />
              </div>
              
              <Button className="w-full" onClick={() => {}}>
                Calculate Savings
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="w-5 h-5" />
                Your Savings Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span className="font-semibold">{formatPrice(savings.originalPrice)}</span>
                </div>
                
                <div className="flex justify-between text-green-600">
                  <span>Discount:</span>
                  <span className="font-semibold">-{formatPrice(savings.discountAmount)}</span>
                </div>
                
                <div className="flex justify-between text-blue-600">
                  <span>Cashback:</span>
                  <span className="font-semibold">-{formatPrice(savings.cashbackAmount)}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Final Price:</span>
                    <span className="text-primary">{formatPrice(savings.finalPrice)}</span>
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Total Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">
                    {formatPrice(savings.totalSavings)}
                  </div>
                  <div className="text-sm text-green-600">
                    ({savings.savingsPercent.toFixed(1)}% off)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="text-sm text-muted-foreground mb-2">Average user saves</div>
            <div className="text-3xl font-bold text-primary mb-2">₹2,400</div>
            <div className="text-sm text-muted-foreground">per month with ShopSmarter</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;