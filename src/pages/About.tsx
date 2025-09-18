import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Heart, Globe, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-safari.jpg";
import namirLogo from "@/assets/namir-logo.jpeg";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(30, 78, 95, 0.8), rgba(30, 78, 95, 0.6)), url(${heroImage})`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-safari-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Namir Tour & Safari
            </h1>
            <p className="text-xl leading-relaxed opacity-90">
              Your trusted partner for authentic Tanzania safari adventures since 2009. 
              We're passionate about sharing the magic of our homeland with travelers from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-safari-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009 by local Tanzanian guides who grew up in the shadows of Mount Kilimanjaro, 
                  Namir Tour & Safari was born from a deep love for Tanzania's incredible wildlife and landscapes. 
                  Our name "Namir" means "leopard" in Swahili, symbolizing the grace, strength, and stealth 
                  required for exceptional safari experiences.
                </p>
                <p>
                  What started as a small family business has grown into one of Tanzania's most trusted tour 
                  operators, but we've never lost sight of our core values: authentic experiences, expert 
                  local knowledge, and genuine care for our guests and the environment.
                </p>
                <p>
                  Today, we're proud to be a licensed member of TATO (Tanzania Association of Tour Operators) 
                  and have helped over 500 travelers create unforgettable memories in the heart of East Africa.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="safari" size="lg">
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="animate-safari-scale-in">
              <img 
                src={namirLogo} 
                alt="Namir Tour & Safari Logo" 
                className="w-64 h-64 mx-auto rounded-full object-cover safari-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-safari-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our values guide everything we do, from planning your itinerary to ensuring 
              sustainable tourism practices that benefit local communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Authentic Experiences",
                description: "We believe in genuine, unscripted encounters with Tanzania's wildlife and culture, away from overcrowded tourist paths."
              },
              {
                icon: Users,
                title: "Local Expertise",
                description: "Our guides are born and raised in Tanzania, with generations of knowledge about wildlife behavior and local customs."
              },
              {
                icon: Shield,
                title: "Safety First",
                description: "Your safety is our top priority. We maintain the highest safety standards and carry comprehensive insurance."
              },
              {
                icon: Globe,
                title: "Sustainable Tourism",
                description: "We're committed to responsible tourism that benefits local communities and protects Tanzania's natural heritage."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from planning to execution of your safari adventure."
              },
              {
                icon: Star,
                title: "Personal Touch",
                description: "Every guest is treated like family. We tailor each safari to your interests and ensure personalized attention."
              }
            ].map((value, index) => (
              <Card 
                key={index}
                className="text-center safari-shadow border-0 hover:warm-shadow safari-transition animate-safari-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-safari-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our passionate team of local experts, experienced guides, and wildlife enthusiasts 
              are dedicated to making your Tanzania adventure unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Joseph Mwalimu",
                role: "Founder & Lead Guide",
                experience: "15+ Years Experience",
                specialty: "Big Five & Migration Expert",
                description: "Born in Arusha, Joseph has been guiding safaris since 2009. His deep knowledge of animal behavior and migration patterns makes him one of Tanzania's most sought-after guides."
              },
              {
                name: "Grace Kilonzo",
                role: "Operations Manager",
                experience: "10+ Years Experience", 
                specialty: "Cultural Tours & Logistics",
                description: "Grace ensures every detail of your safari is perfectly planned. Her expertise in cultural tourism and logistics coordination guarantees smooth, authentic experiences."
              },
              {
                name: "Daniel Mollel",
                role: "Kilimanjaro Specialist",
                experience: "12+ Years Experience",
                specialty: "Mountain Climbing & Safety",
                description: "A certified mountain guide with over 200 successful Kilimanjaro summits. Daniel's expertise in high-altitude trekking ensures safe and successful climbs."
              }
            ].map((member, index) => (
              <Card 
                key={index}
                className="safari-shadow border-0 hover:warm-shadow safari-transition animate-safari-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-safari-gold to-safari-teal rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                    <p className="text-safari-teal font-semibold">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                  <div className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-sm font-semibold text-primary mb-1">Specialty</p>
                    <p className="text-sm text-muted-foreground">{member.specialty}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90">
              Recognition for our commitment to excellence and sustainable tourism
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Travelers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">4.9</div>
              <div className="text-sm opacity-80">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">99%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-safari-gold to-sunset-orange text-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Tanzania?
            </h2>
            <p className="text-xl mb-8">
              Join hundreds of satisfied travelers who have discovered the magic of Tanzania with us. 
              Your authentic African adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="px-8">
                Plan Your Safari
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Contact Us Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;