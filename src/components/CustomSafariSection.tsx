import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

const customOptions = [
  { id: "wildlife", label: "Wildlife Safari", icon: "🦁" },
  { id: "kilimanjaro", label: "Kilimanjaro Climbing", icon: "⛰️" },
  { id: "beach", label: "Beach Extension", icon: "🏖️" },
  { id: "culture", label: "Cultural Tours", icon: "🎭" },
  { id: "photography", label: "Photography Safari", icon: "📸" },
  { id: "honeymoon", label: "Honeymoon Package", icon: "💑" },
  { id: "family", label: "Family Safari", icon: "👨‍👩‍👧‍👦" },
  { id: "budget", label: "Budget Safari", icon: "💰" },
  { id: "luxury", label: "Luxury Experience", icon: "✨" },
  { id: "adventure", label: "Adventure Activities", icon: "🎯" }
];

const CustomSafariSection = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const whatsappNumber = "+255123456789";

  const toggleOption = (id: string) => {
    setSelectedOptions(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppContact = () => {
    const selectedLabels = selectedOptions
      .map(id => customOptions.find(opt => opt.id === id)?.label)
      .join(", ");
    const message = encodeURIComponent(
      `Hi! I'd like to create a custom safari package. I'm interested in: ${selectedLabels || "Please help me design my perfect safari"}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-safari-teal/10 via-background to-safari-gold/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Sparkles className="h-8 w-8 text-safari-gold" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Design Your Dream Safari
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every traveler is unique, and so should be your safari. Tell us your preferences, 
            and we'll craft a personalized itinerary that exceeds your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Benefits */}
          <div className="space-y-6 animate-safari-fade-in">
            <Card className="safari-shadow border-0 bg-primary/5">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-safari-teal" />
                  <span>Why Customize?</span>
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-safari-gold mt-0.5">✓</span>
                    <span>Travel at your own pace - no rushing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-safari-gold mt-0.5">✓</span>
                    <span>Choose your preferred accommodations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-safari-gold mt-0.5">✓</span>
                    <span>Focus on your specific interests</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-safari-gold mt-0.5">✓</span>
                    <span>Flexible dates and duration</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-safari-gold mt-0.5">✓</span>
                    <span>Budget-friendly options available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-safari-gold mt-0.5">✓</span>
                    <span>Private or shared safari options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="safari-shadow border-0 bg-safari-gold/10">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">Popular Combinations</h4>
                <div className="space-y-2 text-sm">
                  <Badge variant="secondary" className="w-full justify-start">
                    🦁 Safari + 🏖️ Beach (9-12 days)
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start">
                    ⛰️ Kilimanjaro + 🦁 Safari (10-14 days)
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start">
                    🎭 Culture + 🦁 Wildlife (7-10 days)
                  </Badge>
                  <Badge variant="secondary" className="w-full justify-start">
                    💑 Honeymoon Special (8-12 days)
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Column - Customization Options */}
          <div className="lg:col-span-2 animate-safari-fade-in" style={{ animationDelay: '0.1s' }}>
            <Card className="safari-shadow border-0">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Select Your Interests
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Choose one or more options that interest you. We'll create a perfect combination!
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {customOptions.map((option) => (
                      <div
                        key={option.id}
                        onClick={() => toggleOption(option.id)}
                        className={`
                          cursor-pointer p-4 rounded-lg border-2 safari-transition
                          ${selectedOptions.includes(option.id)
                            ? 'border-safari-teal bg-safari-teal/10'
                            : 'border-border hover:border-safari-teal/50 hover:bg-secondary/30'
                          }
                        `}
                      >
                        <div className="text-center space-y-2">
                          <div className="text-3xl">{option.icon}</div>
                          <div className="text-sm font-semibold text-primary">
                            {option.label}
                          </div>
                          {selectedOptions.includes(option.id) && (
                            <CheckCircle2 className="h-5 w-5 text-safari-teal mx-auto" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedOptions.length > 0 && (
                  <div className="bg-safari-gold/10 p-4 rounded-lg animate-safari-fade-in">
                    <p className="text-sm font-semibold text-primary mb-2">
                      Selected: {selectedOptions.length} {selectedOptions.length === 1 ? 'option' : 'options'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedOptions.map(id => {
                        const option = customOptions.find(opt => opt.id === id);
                        return (
                          <Badge key={id} className="bg-safari-teal text-white">
                            {option?.icon} {option?.label}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-name">Your Name</Label>
                      <Input id="custom-name" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-email">Email</Label>
                      <Input id="custom-email" type="email" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="custom-duration">Preferred Duration</Label>
                      <Input id="custom-duration" placeholder="e.g., 7-10 days" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="custom-budget">Budget Range</Label>
                      <Input id="custom-budget" placeholder="e.g., $2000-3000 per person" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custom-details">Additional Details</Label>
                    <Textarea
                      id="custom-details"
                      placeholder="Tell us about your group size, preferred travel dates, special interests, dietary requirements, or any specific requests..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="safari" 
                    size="lg" 
                    className="flex-1"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    Email Your Request
                  </Button>
                </div>

                <p className="text-xs text-center text-muted-foreground">
                  Our safari experts will respond within 24 hours with a personalized proposal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSafariSection;
