import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Star, MapPin } from "lucide-react";
import serengetiImage from "@/assets/serengeti-tour.jpg";
import kilimanjaroImage from "@/assets/kilimanjaro-tour.jpg";
import ngorongoroImage from "@/assets/ngorongoro-tour.jpg";
import zanzibarImage from "@/assets/zanzibar-tour.jpg";

const tours = [
  {
    id: 1,
    title: "Serengeti National Park Safari",
    description: "Witness the Great Migration and encounter the Big Five in Tanzania's most famous national park.",
    image: serengetiImage,
    duration: "5 Days",
    groupSize: "2-8 People",
    rating: 4.9,
    price: "$1,250",
    location: "Serengeti",
    highlights: ["Great Migration", "Big Five", "Luxury Camps"]
  },
  {
    id: 2,
    title: "Mount Kilimanjaro Climbing",
    description: "Conquer Africa's highest peak with experienced guides and enjoy breathtaking sunrise views.",
    image: kilimanjaroImage,
    duration: "7 Days",
    groupSize: "1-12 People",
    rating: 4.8,
    price: "$1,850",
    location: "Kilimanjaro",
    highlights: ["Machame Route", "Professional Guides", "Uhuru Peak"]
  },
  {
    id: 3,
    title: "Ngorongoro Crater Adventure",
    description: "Explore the world's largest intact volcanic caldera, home to incredible wildlife diversity.",
    image: ngorongoroImage,
    duration: "3 Days",
    groupSize: "2-6 People",
    rating: 4.9,
    price: "$850",
    location: "Ngorongoro",
    highlights: ["Crater Floor", "Rhino Spotting", "Cultural Visit"]
  },
  {
    id: 4,
    title: "Zanzibar Beach Extension",
    description: "Relax on pristine beaches with crystal-clear waters after your exciting safari adventure.",
    image: zanzibarImage,
    duration: "4 Days",
    groupSize: "2-10 People",
    rating: 4.7,
    price: "$750",
    location: "Zanzibar",
    highlights: ["Spice Tours", "Stone Town", "Beach Resort"]
  }
];

const FeaturedTours = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Featured Safari Adventures
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our most popular tours designed to showcase Tanzania's incredible wildlife, 
            stunning landscapes, and rich cultural heritage.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className="group overflow-hidden safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-64 object-cover group-hover:scale-110 safari-transition"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.location}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{tour.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-safari-teal safari-transition">
                    {tour.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tour.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((highlight, i) => (
                    <span 
                      key={i}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{tour.groupSize}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">From</div>
                    <div className="text-lg font-bold text-primary">{tour.price}</div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Learn More
                  </Button>
                  <Button variant="safari" size="sm" className="flex-1">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Tours Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg" className="px-8">
            View All Tours
            <MapPin className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;