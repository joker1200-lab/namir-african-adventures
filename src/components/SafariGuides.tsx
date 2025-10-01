import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Star, Camera, BookOpen, Heart } from "lucide-react";

const guides = [
  {
    id: 1,
    name: "Ramadhan Hashim Ramadhan",
    role: "CEO & Operational Manager",
    age: 23,
    location: "Dar es Salaam",
    experience: "3+ Years",
    specialty: "Safari Operations & Customer Experience",
    rating: 5.0,
    tours: "100+ Tours Led",
    languages: ["English", "Swahili", "French"],
    description: "Young and passionate founder of NAMIR TOURS AND TRAVEL. Despite his age, Ramadhan brings fresh energy and innovative approaches to safari tourism while maintaining traditional hospitality values.",
    achievements: ["Founded Company 2024", "Licensed Tour Operator", "100% Customer Satisfaction"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Joseph Mwalimu",
    role: "Senior Safari Guide",
    experience: "8+ Years",
    specialty: "Big Five & Wildlife Tracking",
    rating: 4.9,
    tours: "300+ Tours Led",
    languages: ["English", "Swahili", "German"],
    description: "Expert wildlife tracker with encyclopedic knowledge of animal behavior. Joseph's passion for conservation and storytelling brings safaris to life.",
    achievements: ["Wildlife Photography Expert", "Conservation Advocate", "Bird Watching Specialist"],
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Daniel Mollel",
    role: "Kilimanjaro Climbing Guide",
    experience: "10+ Years",
    specialty: "Mountain Climbing & Safety",
    rating: 4.9,
    tours: "250+ Successful Summits",
    languages: ["English", "Swahili"],
    description: "Certified mountain guide with exceptional safety record. Daniel's encouragement and expertise help climbers achieve their Kilimanjaro dreams.",
    achievements: ["250+ Summit Success", "Wilderness First Aid Certified", "Altitude Medicine Training"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Grace Kimaro",
    role: "Cultural Tourism Specialist",
    experience: "6+ Years",
    specialty: "Maasai Culture & Community Tours",
    rating: 4.8,
    tours: "200+ Cultural Tours",
    languages: ["English", "Swahili", "Maa"],
    description: "Bridging cultures with warmth and authenticity. Grace provides deep insights into Tanzania's rich cultural heritage and Maasai traditions.",
    achievements: ["Community Development Advocate", "Cultural Ambassador", "Women's Empowerment Leader"],
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop"
  }
];

const stories = [
  {
    title: "The Great Migration Miracle",
    author: "Joseph Mwalimu",
    excerpt: "Witnessing thousands of wildebeest crossing the Mara River is breathtaking. But one crossing stands out in my memory...",
    date: "March 2024",
    category: "Wildlife",
    readTime: "5 min read"
  },
  {
    title: "Summit Sunrise on Kilimanjaro",
    author: "Daniel Mollel",
    excerpt: "At 19,341 feet, as the sun rises over Africa, every step of the journey becomes worth it. This is the story of an unforgettable summit...",
    date: "February 2024",
    category: "Adventure",
    readTime: "7 min read"
  },
  {
    title: "Maasai Wisdom Under Acacia Trees",
    author: "Grace Kimaro",
    excerpt: "Traditional knowledge passed down through generations offers profound insights into living harmoniously with nature...",
    date: "January 2024",
    category: "Culture",
    readTime: "6 min read"
  }
];

const SafariGuides = () => {
  const whatsappNumber = "+255123456789";
  const requestGuideMessage = encodeURIComponent("Hi! I'd like to request a specific guide for my safari tour.");

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Meet Our Expert Guides
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our passionate team of professional guides brings Tanzania's wildlife, mountains, 
            and culture to life with expertise, enthusiasm, and authentic local knowledge.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {guides.map((guide, index) => (
            <Card 
              key={guide.id} 
              className="group overflow-hidden safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={guide.image} 
                  alt={guide.name}
                  className="w-full h-64 object-cover group-hover:scale-110 safari-transition"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{guide.rating}</span>
                </div>
                {index === 0 && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-safari-gold text-primary font-bold">
                      Founder
                    </Badge>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {guide.name}
                  </h3>
                  <p className="text-sm text-safari-teal font-semibold">{guide.role}</p>
                  {guide.age && (
                    <p className="text-xs text-muted-foreground">Age: {guide.age} • {guide.location}</p>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-semibold text-primary">{guide.experience}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Tours Led:</span>
                    <span className="font-semibold text-primary">{guide.tours}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {guide.description}
                </p>

                <div>
                  <div className="text-xs text-muted-foreground mb-2">Specialty:</div>
                  <Badge variant="secondary" className="text-xs">
                    {guide.specialty}
                  </Badge>
                </div>

                <div>
                  <div className="text-xs text-muted-foreground mb-2">Languages:</div>
                  <div className="flex flex-wrap gap-1">
                    {guide.languages.map((lang, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="safari" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${requestGuideMessage}`, '_blank')}
                >
                  Request This Guide
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safari Stories Section */}
        <div className="bg-background rounded-lg p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Safari Stories & Experiences
              </h3>
              <p className="text-muted-foreground">
                Real adventures from our guides sharing their memorable moments
              </p>
            </div>
            <BookOpen className="h-8 w-8 text-safari-teal" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <Card 
                key={index}
                className="safari-shadow hover:warm-shadow safari-transition border-0 group cursor-pointer"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-primary/10 text-primary">
                      {story.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{story.readTime}</span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-primary group-hover:text-safari-teal safari-transition">
                    {story.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2">
                    <div className="flex items-center space-x-1">
                      <Camera className="h-3 w-3" />
                      <span>{story.author}</span>
                    </div>
                    <span>{story.date}</span>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full text-safari-teal hover:text-safari-teal">
                    Read Full Story →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariGuides;
