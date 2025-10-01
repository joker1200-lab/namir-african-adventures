import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Thermometer, DollarSign, TrendingUp, TrendingDown, Info } from "lucide-react";

const TravelInfo = () => {
  const [currentTemp] = useState(24); // Default temperature
  const [exchangeRates] = useState([
    { currency: "USD", symbol: "$", rate: 2580, flag: "🇺🇸" },
    { currency: "EUR", symbol: "€", rate: 2820, flag: "🇪🇺" },
    { currency: "GBP", symbol: "£", rate: 3250, flag: "🇬🇧" },
    { currency: "KES", symbol: "KSh", rate: 20, flag: "🇰🇪" }
  ]);

  return (
    <section className="py-12 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Temperature Widget */}
          <Card className="safari-shadow border-0 animate-safari-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-safari-teal/10 p-3 rounded-full">
                    <Thermometer className="h-6 w-6 text-safari-teal" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Current Weather in Tanzania</h3>
                    <p className="text-sm text-muted-foreground">Arusha & Popular Destinations</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-3xl mb-1">☀️</div>
                  <div className="text-2xl font-bold text-primary">{currentTemp}°C</div>
                  <div className="text-xs text-muted-foreground">Arusha</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-3xl mb-1">🌤️</div>
                  <div className="text-2xl font-bold text-primary">26°C</div>
                  <div className="text-xs text-muted-foreground">Serengeti</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-3xl mb-1">⛰️</div>
                  <div className="text-2xl font-bold text-primary">-5°C</div>
                  <div className="text-xs text-muted-foreground">Kilimanjaro</div>
                </div>
                <div className="text-center p-4 bg-secondary/30 rounded-lg">
                  <div className="text-3xl mb-1">🏖️</div>
                  <div className="text-2xl font-bold text-primary">28°C</div>
                  <div className="text-xs text-muted-foreground">Zanzibar</div>
                </div>
              </div>

              <div className="mt-4 flex items-start space-x-2 text-xs text-muted-foreground bg-safari-gold/10 p-3 rounded-lg">
                <Info className="h-4 w-4 text-safari-teal flex-shrink-0 mt-0.5" />
                <p>
                  Tanzania has diverse climates. Coastal areas are hot and humid, while highlands 
                  are cooler. Kilimanjaro summit can reach -20°C. Pack accordingly!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Exchange Rate Widget */}
          <Card className="safari-shadow border-0 animate-safari-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-safari-gold/10 p-3 rounded-full">
                    <DollarSign className="h-6 w-6 text-safari-gold" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">Exchange Rates</h3>
                    <p className="text-sm text-muted-foreground">1 TZS (Tanzanian Shilling)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exchangeRates.map((rate, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 safari-transition"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{rate.flag}</span>
                      <div>
                        <div className="font-bold text-primary">{rate.currency}</div>
                        <div className="text-xs text-muted-foreground">
                          {rate.currency === "USD" ? "US Dollar" : 
                           rate.currency === "EUR" ? "Euro" :
                           rate.currency === "GBP" ? "British Pound" : "Kenyan Shilling"}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">
                        {rate.rate > 100 ? `TZS ${rate.rate.toLocaleString()}` : `1:${rate.rate}`}
                      </div>
                      <div className="flex items-center justify-end text-xs text-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span>Stable</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-start space-x-2 text-xs text-muted-foreground bg-safari-teal/10 p-3 rounded-lg">
                <Info className="h-4 w-4 text-safari-gold flex-shrink-0 mt-0.5" />
                <p>
                  Major credit cards accepted at lodges and hotels. We recommend carrying some 
                  USD cash for tips and small purchases. ATMs available in major cities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
