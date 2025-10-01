import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Sun, Droplets, Wind, Calendar, MapPin } from "lucide-react";

const seasons = [
  {
    name: "Dry Season (June - October)",
    icon: Sun,
    weather: "Sunny & Cool",
    temperature: "15-27°C (59-81°F)",
    rainfall: "Low",
    wildlife: "Excellent",
    description: "Peak season for wildlife viewing. Animals gather around water sources, making them easier to spot. Perfect for the Great Migration in Serengeti.",
    bestFor: ["Great Migration", "Wildlife Photography", "Game Drives", "Kilimanjaro Climbing"],
    color: "bg-safari-gold/20"
  },
  {
    name: "Short Rains (November - December)",
    icon: Cloud,
    weather: "Warm & Wet",
    temperature: "20-30°C (68-86°F)",
    rainfall: "Moderate",
    wildlife: "Good",
    description: "Brief afternoon showers bring lush greenery. Fewer tourists mean better rates and exclusive experiences. Great for bird watching.",
    bestFor: ["Bird Watching", "Lower Rates", "Lush Landscapes", "Fewer Crowds"],
    color: "bg-safari-teal/20"
  },
  {
    name: "Dry Season (January - February)",
    icon: Sun,
    weather: "Hot & Dry",
    temperature: "18-30°C (64-86°F)",
    rainfall: "Very Low",
    wildlife: "Excellent",
    description: "Excellent wildlife viewing with calving season in Southern Serengeti. Warm temperatures and clear skies make for comfortable safaris.",
    bestFor: ["Wildebeest Calving", "Clear Skies", "Beach Extension", "All Activities"],
    color: "bg-sunset-orange/20"
  },
  {
    name: "Long Rains (March - May)",
    icon: Droplets,
    weather: "Humid & Rainy",
    temperature: "17-28°C (63-82°F)",
    rainfall: "High",
    wildlife: "Moderate",
    description: "Low season with dramatic landscapes and incredible photography opportunities. Best rates and ultimate privacy.",
    bestFor: ["Budget Travel", "Photography", "Quiet Experience", "Lush Scenery"],
    color: "bg-primary/20"
  }
];

const destinations = [
  {
    name: "Serengeti National Park",
    bestMonths: "June - October, January - February",
    temperature: "15-27°C",
    highlight: "Great Migration & Big Five",
    icon: MapPin
  },
  {
    name: "Mount Kilimanjaro",
    bestMonths: "January - March, June - October",
    temperature: "-20 to 30°C (Summit to Base)",
    highlight: "Africa's Highest Peak",
    icon: MapPin
  },
  {
    name: "Ngorongoro Crater",
    bestMonths: "Year-round destination",
    temperature: "10-25°C",
    highlight: "UNESCO World Heritage Site",
    icon: MapPin
  },
  {
    name: "Zanzibar Island",
    bestMonths: "June - October, December - February",
    temperature: "25-30°C",
    highlight: "Pristine Beaches & Culture",
    icon: MapPin
  }
];

const WeatherSeasons = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Weather & Best Time to Visit
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tanzania offers incredible experiences year-round. Choose the perfect season 
            for your safari adventure based on weather, wildlife activity, and your interests.
          </p>
        </div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {seasons.map((season, index) => {
            const IconComponent = season.icon;
            return (
              <Card 
                key={index} 
                className={`overflow-hidden safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in border-0 ${season.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {season.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                        <IconComponent className="h-4 w-4" />
                        <span>{season.weather}</span>
                      </div>
                    </div>
                    <Badge className="bg-primary text-primary-foreground">
                      {season.wildlife} Wildlife
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground mb-1">Temperature</div>
                      <div className="font-semibold text-primary">{season.temperature}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Rainfall</div>
                      <div className="font-semibold text-primary flex items-center">
                        <Droplets className="h-4 w-4 mr-1" />
                        {season.rainfall}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">Wildlife</div>
                      <div className="font-semibold text-primary">{season.wildlife}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {season.description}
                  </p>

                  <div>
                    <div className="text-sm font-semibold text-primary mb-2">Best For:</div>
                    <div className="flex flex-wrap gap-2">
                      {season.bestFor.map((item, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Destinations Best Times */}
        <div className="bg-secondary/20 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">
            Best Time by Destination
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <Card 
                key={index}
                className="border-0 safari-shadow hover:warm-shadow safari-transition"
              >
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-primary">
                    <MapPin className="h-5 w-5" />
                    <h4 className="font-bold">{dest.name}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Best Months</div>
                      <div className="font-semibold flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-safari-teal" />
                        {dest.bestMonths}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Temperature</div>
                      <div className="font-semibold flex items-center">
                        <Sun className="h-4 w-4 mr-1 text-sunset-orange" />
                        {dest.temperature}
                      </div>
                    </div>
                    <Badge className="w-full justify-center bg-safari-gold/20 text-primary">
                      {dest.highlight}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherSeasons;
