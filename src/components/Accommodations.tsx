import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Coffee, Award } from "lucide-react";

const accommodations = [
  {
    id: 1,
    name: "Serengeti Sopa Lodge",
    location: "Serengeti National Park",
    category: "Luxury Lodge",
    rating: 4.8,
    amenities: ["WiFi", "Restaurant", "Pool", "Spa"],
    description: "Nestled in the heart of Serengeti with stunning views of the endless plains. Perfect for witnessing the Great Migration.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
    priceRange: "$$$"
  },
  {
    id: 2,
    name: "Ngorongoro Crater Lodge",
    location: "Ngorongoro Conservation Area",
    category: "Luxury Lodge",
    rating: 4.9,
    amenities: ["WiFi", "Butler Service", "Fireplace", "Gourmet Dining"],
    description: "Perched on the rim of Ngorongoro Crater, offering breathtaking views and unparalleled luxury in the African wilderness.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
    priceRange: "$$$$"
  },
  {
    id: 3,
    name: "Tarangire Treetops",
    location: "Tarangire National Park",
    category: "Luxury Tented Camp",
    rating: 4.7,
    amenities: ["Private Balcony", "Wildlife Viewing", "Restaurant", "Bar"],
    description: "Unique treehouse-style accommodation offering intimate wildlife experiences and panoramic views of Tarangire.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&auto=format&fit=crop",
    priceRange: "$$$"
  },
  {
    id: 4,
    name: "Zanzibar Beach Resort",
    location: "Zanzibar Island",
    category: "Beach Resort",
    rating: 4.6,
    amenities: ["Private Beach", "Water Sports", "Spa", "Pool"],
    description: "Pristine beachfront resort with turquoise waters, perfect for relaxation after your safari adventure.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&auto=format&fit=crop",
    priceRange: "$$"
  },
  {
    id: 5,
    name: "Arusha Coffee Lodge",
    location: "Arusha",
    category: "Boutique Hotel",
    rating: 4.8,
    amenities: ["Coffee Plantation", "Restaurant", "WiFi", "Gardens"],
    description: "Charming lodge set in a working coffee plantation, ideal for pre or post-safari stays near Kilimanjaro Airport.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
    priceRange: "$$"
  },
  {
    id: 6,
    name: "Lake Manyara Serena Lodge",
    location: "Lake Manyara",
    category: "Safari Lodge",
    rating: 4.7,
    amenities: ["Infinity Pool", "Wildlife Viewing", "Restaurant", "Bar"],
    description: "Stunning lodge overlooking the Rift Valley, offering exceptional bird watching and tree-climbing lion sightings.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop",
    priceRange: "$$$"
  }
];

const Accommodations = () => {
  const whatsappNumber = "+255765131391";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to inquire about accommodation options for my safari.");

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Premium Accommodations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience comfort and luxury in Tanzania's most stunning locations. From safari lodges 
            to beachfront resorts, we partner with the finest accommodations for your perfect stay.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card 
              key={accommodation.id} 
              className="group overflow-hidden safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={accommodation.image} 
                  alt={accommodation.name}
                  className="w-full h-56 object-cover group-hover:scale-110 safari-transition"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {accommodation.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{accommodation.rating}</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <Badge variant="secondary" className="font-bold">
                    {accommodation.priceRange}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-safari-teal safari-transition">
                    {accommodation.name}
                  </h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{accommodation.location}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {accommodation.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {accommodation.amenities.slice(0, 4).map((amenity, i) => (
                    <span 
                      key={i}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs flex items-center space-x-1"
                    >
                      {i === 0 && <Wifi className="h-3 w-3" />}
                      {i === 1 && <Coffee className="h-3 w-3" />}
                      {i === 2 && <Award className="h-3 w-3" />}
                      <span>{amenity}</span>
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    Inquire
                  </Button>
                  <Button 
                    variant="safari" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
