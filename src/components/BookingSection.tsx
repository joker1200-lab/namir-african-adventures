import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Users, Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    travelers: "",
    date: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your safari adventure.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      tour: "",
      travelers: "",
      date: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Booking Form */}
          <div className="animate-safari-fade-in">
            <Card className="safari-shadow border-0">
              <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                  <Calendar className="h-6 w-6" />
                  <span>Book Your Safari Adventure</span>
                </CardTitle>
                <p className="opacity-90">
                  Start planning your dream Tanzania safari experience with our expert team.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="safari-transition focus:ring-safari-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="safari-transition focus:ring-safari-teal"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="safari-transition focus:ring-safari-teal"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="travelers">Number of Travelers</Label>
                      <Select onValueChange={(value) => handleInputChange("travelers", value)}>
                        <SelectTrigger className="safari-transition focus:ring-safari-teal">
                          <SelectValue placeholder="Select travelers" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Traveler</SelectItem>
                          <SelectItem value="2">2 Travelers</SelectItem>
                          <SelectItem value="3-4">3-4 Travelers</SelectItem>
                          <SelectItem value="5-6">5-6 Travelers</SelectItem>
                          <SelectItem value="7+">7+ Travelers</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="tour">Preferred Tour</Label>
                      <Select onValueChange={(value) => handleInputChange("tour", value)}>
                        <SelectTrigger className="safari-transition focus:ring-safari-teal">
                          <SelectValue placeholder="Select a tour" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="serengeti">Serengeti Safari</SelectItem>
                          <SelectItem value="kilimanjaro">Mount Kilimanjaro</SelectItem>
                          <SelectItem value="ngorongoro">Ngorongoro Crater</SelectItem>
                          <SelectItem value="zanzibar">Zanzibar Beach</SelectItem>
                          <SelectItem value="combo">Safari & Beach Combo</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Travel Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="safari-transition focus:ring-safari-teal"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requests or Questions</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your interests, dietary requirements, accommodation preferences, or any other special requests..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="safari-transition focus:ring-safari-teal"
                    />
                  </div>

                  <Button type="submit" variant="safari" size="lg" className="w-full">
                    Send Booking Request
                    <Mail className="h-5 w-5" />
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Info & Features */}
          <div className="space-y-8 animate-safari-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Contact Information */}
            <Card className="safari-shadow border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-muted-foreground">+255 123 456 789</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-muted-foreground">info@namirtours.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Visit Our Office</div>
                      <div className="text-muted-foreground">Arusha, Tanzania</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Office Hours</div>
                      <div className="text-muted-foreground">Mon-Fri: 8AM-6PM EAT</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="safari-shadow border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-6">Why Choose Namir Tours?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-safari-gold/20 p-1 rounded-full mt-1">
                      <Users className="h-4 w-4 text-safari-teal" />
                    </div>
                    <div>
                      <div className="font-semibold">Expert Local Guides</div>
                      <div className="text-sm text-muted-foreground">Born and raised in Tanzania with deep wildlife knowledge</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-safari-gold/20 p-1 rounded-full mt-1">
                      <MapPin className="h-4 w-4 text-safari-teal" />
                    </div>
                    <div>
                      <div className="font-semibold">Customized Itineraries</div>
                      <div className="text-sm text-muted-foreground">Tailored experiences based on your interests and budget</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-safari-gold/20 p-1 rounded-full mt-1">
                      <Calendar className="h-4 w-4 text-safari-teal" />
                    </div>
                    <div>
                      <div className="font-semibold">24/7 Support</div>
                      <div className="text-sm text-muted-foreground">Round-the-clock assistance during your safari adventure</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;