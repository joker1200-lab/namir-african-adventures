import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
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
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-safari-teal text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-safari-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Ready to start planning your Tanzania adventure? Our expert team is here to help 
              you create the perfect safari experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="safari-shadow border-0 animate-safari-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary flex items-center space-x-2">
                    <MessageCircle className="h-6 w-6" />
                    <span>Send us a Message</span>
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
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
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          type="text"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => handleInputChange("subject", e.target.value)}
                          required
                          className="safari-transition focus:ring-safari-teal"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your travel plans, questions, or special requests..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        rows={6}
                        className="safari-transition focus:ring-safari-teal"
                      />
                    </div>

                    <Button type="submit" variant="safari" size="lg" className="w-full">
                      Send Message
                      <Send className="h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-safari-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <Card className="safari-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Call Us</h4>
                        <p className="text-muted-foreground">+255 765 131 391</p>
                        <p className="text-xs text-muted-foreground">Available daily</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email Us</h4>
                        <p className="text-muted-foreground">namirtourtravel@gmail.com</p>
                        <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Visit Our Office</h4>
                        <p className="text-muted-foreground">
                          Dar es Salaam, Tanzania<br />
                          East Africa
                        </p>
                        <p className="text-xs text-muted-foreground">By appointment only</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Office Hours</h4>
                        <p className="text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 4:00 PM<br />
                          Sunday: Emergency only
                        </p>
                        <p className="text-xs text-muted-foreground">East Africa Time (EAT)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="safari-shadow border-0 bg-gradient-to-br from-sunset-orange/10 to-safari-gold/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Emergency Contact</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For guests currently on safari or urgent matters:
                  </p>
                  <div className="space-y-2">
                    <p className="font-semibold text-primary">📱 +255 765 131 391</p>
                    <p className="text-xs text-muted-foreground">Available 24/7 for emergencies</p>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="safari-shadow border-0">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-4">Follow Our Journey</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Stay updated with our latest safari stories and adventures:
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 safari-transition">
                      <span className="text-primary">📘</span>
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 safari-transition">
                      <span className="text-primary">📷</span>
                    </a>
                    <a href="#" className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full hover:bg-primary/20 safari-transition">
                      <span className="text-primary">🐦</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Find Us in Dar es Salaam</h2>
            <p className="text-muted-foreground">
              Our office is located in Dar es Salaam, Tanzania.
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p>Interactive map would be displayed here</p>
              <p className="text-sm">Showing our location in Dar es Salaam, Tanzania</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-safari-teal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Don't wait! The African wilderness is calling. Contact us today to begin 
              planning your unforgettable Tanzania safari experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8">
                Get Custom Quote
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-white text-white hover:bg-white hover:text-primary">
                Book Consultation Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;