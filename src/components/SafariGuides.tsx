import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Star, Camera, BookOpen, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const guides = [
  {
    id: 1,
    name: "Ramadhan Hashim Ramadhan",
    role: "CEO & Operational Manager",
    age: 23,
    location: "Dar es Salaam, Tanzania",
    experience: "2+ Years",
    specialty: "Safari Operations & Customer Experience"
  },
  {
    id: 2,
    name: "Azim Murtaza Fidahussein",
    role: "Finance Specialist",
    experience: "2+ Years",
    specialty: "Financial Management & Operations"
  },
  {
    id: 3,
    name: "Julio John",
    role: "Safari Guide",
    experience: "2+ Years",
    specialty: "Wildlife & Safari Experiences"
  },
  {
    id: 4,
    name: "Nagib Abdul Dollah",
    role: "Tour Coordinator",
    experience: "2+ Years",
    specialty: "Tour Planning & Coordination"
  }
];

const stories = [
  {
    title: "The Great Migration Miracle",
    author: "Azim Murtaza Fidahussein",
    excerpt: "Witnessing thousands of wildebeest crossing the Mara River is breathtaking. But one crossing stands out in my memory...",
    date: "March 2024",
    category: "Wildlife",
    readTime: "5 min read"
  },
  {
    title: "Summit Sunrise on Kilimanjaro",
    author: "Julio John",
    excerpt: "At 19,341 feet, as the sun rises over Africa, every step of the journey becomes worth it. This is the story of an unforgettable summit...",
    date: "February 2024",
    category: "Adventure",
    readTime: "7 min read"
  },
  {
    title: "Maasai Wisdom Under Acacia Trees",
    author: "Nagib Abdul Dollah",
    excerpt: "Traditional knowledge passed down through generations offers profound insights into living harmoniously with nature...",
    date: "January 2024",
    category: "Culture",
    readTime: "6 min read"
  }
];

const SafariGuides = () => {
  const navigate = useNavigate();

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
              <CardContent className="p-8 space-y-4 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-safari-gold to-safari-teal rounded-full mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  {guide.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {guide.name}
                  </h3>
                  <p className="text-sm text-safari-teal font-semibold mb-2">{guide.role}</p>
                  {guide.age && guide.location && (
                    <p className="text-xs text-muted-foreground">Age: {guide.age} • {guide.location}</p>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-semibold text-primary">{guide.experience}</span>
                  </div>
                </div>

                <div className="bg-secondary/50 rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">Specialty</div>
                  <p className="text-sm font-semibold text-primary">
                    {guide.specialty}
                  </p>
                </div>
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
                onClick={() => navigate("/blog")}
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
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-safari-teal hover:text-safari-teal"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/blog");
                    }}
                  >
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
