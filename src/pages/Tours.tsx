import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Camera, Mountain, Waves, TreePine } from "lucide-react";
import serengetiImage from "@/assets/serengeti-tour.jpg";
import kilimanjaroImage from "@/assets/kilimanjaro-tour.jpg";
import ngorongoroImage from "@/assets/ngorongoro-tour.jpg";
import zanzibarImage from "@/assets/zanzibar-tour.jpg";

const tours = [
  {
    id: 1,
    title: "Serengeti National Park Safari",
    description: "Experience the Great Migration and encounter the Big Five in Tanzania's most iconic national park. Witness millions of wildebeest and zebras crossing the plains.",
    image: serengetiImage,
    duration: "5 Days",
    groupSize: "2-8 People",
    rating: 4.9,
    price: "$1,250",
    originalPrice: "$1,400",
    category: "Wildlife Safari",
    difficulty: "Easy",
    highlights: ["Great Migration", "Big Five", "Luxury Camps", "Expert Guide"],
    icon: Camera,
    featured: true
  },
  {
    id: 2,
    title: "Mount Kilimanjaro Climbing",
    description: "Conquer Africa's highest peak via the scenic Machame route. Professional guides, quality equipment, and high success rates guaranteed.",
    image: kilimanjaroImage,
    duration: "7 Days",
    groupSize: "1-12 People",
    rating: 4.8,
    price: "$1,850",
    originalPrice: "$2,100",
    category: "Mountain Climbing",
    difficulty: "Challenging",
    highlights: ["Machame Route", "Uhuru Peak", "Professional Guides", "99% Success Rate"],
    icon: Mountain,
    featured: true
  },
  {
    id: 3,
    title: "Ngorongoro Crater Adventure",
    description: "Explore the world's largest intact volcanic caldera, a UNESCO World Heritage site teeming with wildlife in a natural amphitheater.",
    image: ngorongoroImage,
    duration: "3 Days",
    groupSize: "2-6 People",
    rating: 4.9,
    price: "$850",
    originalPrice: "$950",
    category: "Wildlife Safari",
    difficulty: "Easy",
    highlights: ["Crater Floor", "Rhino Spotting", "Cultural Visit", "Luxury Lodge"],
    icon: TreePine,
    featured: false
  },
  {
    id: 4,
    title: "Zanzibar Beach Extension",
    description: "Relax on pristine white sand beaches with crystal-clear turquoise waters. Perfect complement to your safari adventure.",
    image: zanzibarImage,
    duration: "4 Days",
    groupSize: "2-10 People",
    rating: 4.7,
    price: "$750",
    originalPrice: "$850",
    category: "Beach & Culture",
    difficulty: "Relaxing",
    highlights: ["Spice Tours", "Stone Town", "Beach Resort", "Snorkeling"],
    icon: Waves,
    featured: false
  },
  {
    id: 5,
    title: "Ultimate Tanzania Safari",
    description: "The complete Tanzania experience combining Serengeti, Ngorongoro, and Tarangire for the ultimate wildlife adventure.",
    image: serengetiImage,
    duration: "10 Days",
    groupSize: "2-8 People",
    rating: 5.0,
    price: "$2,850",
    originalPrice: "$3,200",
    category: "Wildlife Safari",
    difficulty: "Moderate",
    highlights: ["3 National Parks", "Great Migration", "Big Five", "Cultural Experience"],
    icon: Camera,
    featured: true
  },
  {
    id: 6,
    title: "Safari & Beach Combo",
    description: "Perfect combination of thrilling wildlife safari in Serengeti and relaxing beach time in Zanzibar.",
    image: zanzibarImage,
    duration: "9 Days",
    groupSize: "2-8 People",
    rating: 4.8,
    price: "$1,950",
    originalPrice: "$2,200",
    category: "Combo Package",
    difficulty: "Easy",
    highlights: ["Serengeti Safari", "Zanzibar Beach", "Stone Town", "Best of Both"],
    icon: Waves,
    featured: false
  }
];

const Tours = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-safari-teal text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-safari-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tanzania Safari Tours
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Discover our carefully crafted safari adventures designed to showcase Tanzania's 
              incredible wildlife, stunning landscapes, and rich cultural heritage.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-white/20 text-white border-white/30">
                🏆 Licensed Tour Operator
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                ⭐ 4.9/5 Rating
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30">
                🌍 500+ Happy Travelers
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button variant="safari" size="sm">All Tours</Button>
            <Button variant="outline" size="sm">Wildlife Safari</Button>
            <Button variant="outline" size="sm">Mountain Climbing</Button>
            <Button variant="outline" size="sm">Beach & Culture</Button>
            <Button variant="outline" size="sm">Combo Packages</Button>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => {
              const IconComponent = tour.icon;
              return (
                <Card 
                  key={tour.id} 
                  className={`group overflow-hidden safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in border-0 ${
                    tour.featured ? 'ring-2 ring-safari-gold/50' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tour.featured && (
                    <div className="bg-safari-gold text-primary text-center py-2 text-sm font-semibold">
                      ⭐ Featured Tour
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
                    <img 
                      src={tour.image} 
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-110 safari-transition"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <Badge className="bg-primary text-primary-foreground">
                        {tour.category}
                      </Badge>
                      <Badge variant="secondary">
                        {tour.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{tour.rating}</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2">
                      <IconComponent className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-safari-teal safari-transition">
                        {tour.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tour.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.slice(0, 3).map((highlight, i) => (
                        <span 
                          key={i}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{tour.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{tour.groupSize}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">{tour.price}</span>
                          {tour.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {tour.originalPrice}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground">per person</div>
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(`https://wa.me/+255123456789?text=Hi!%20I%27d%20like%20details%20about%20${encodeURIComponent(tour.title)}`, '_blank')}
                      >
                        View Details
                      </Button>
                      <Button 
                        variant="safari" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => window.open(`https://wa.me/+255123456789?text=Hi!%20I%27d%20like%20to%20book%20${encodeURIComponent(tour.title)}`, '_blank')}
                      >
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Tours
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-safari-teal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find Your Perfect Safari?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              We specialize in custom itineraries tailored to your interests, budget, and timeline. 
              Let our experts design your dream Tanzania adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-8"
                onClick={() => window.open('https://wa.me/+255123456789?text=Hi!%20I%27d%20like%20to%20create%20a%20custom%20itinerary', '_blank')}
              >
                Custom Itinerary
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://wa.me/+255123456789?text=Hi!%20I%27d%20like%20to%20speak%20with%20a%20safari%20expert', '_blank')}
              >
                Contact Our Experts
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;