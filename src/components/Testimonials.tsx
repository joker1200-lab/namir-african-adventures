import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mwamba",
    location: "Nairobi, Kenya",
    image: testimonial1,
    rating: 5,
    text: "Namir Tours exceeded all my expectations! The Serengeti safari was absolutely magical. Our guide was incredibly knowledgeable and passionate about wildlife. We saw the Big Five and witnessed the Great Migration. An unforgettable experience!",
    tour: "Serengeti Safari Adventure"
  },
  {
    id: 2,
    name: "James Wilson",
    location: "London, UK",
    image: testimonial2,
    rating: 5,
    text: "Climbing Kilimanjaro with Namir Tours was the adventure of a lifetime! The guides were professional, supportive, and made sure we reached the summit safely. The sunrise from Uhuru Peak was breathtaking. Highly recommended!",
    tour: "Mount Kilimanjaro Climbing"
  },
  {
    id: 3,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: testimonial3,
    rating: 5,
    text: "Perfect combination of safari and beach! The Ngorongoro Crater tour was incredible, and the Zanzibar extension was the perfect way to relax. The team organized everything seamlessly. Thank you for an amazing trip!",
    tour: "Safari & Beach Package"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Read authentic reviews from adventurers who have experienced the magic of Tanzania with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="bg-card/80 backdrop-blur-sm border-0 safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-safari-gold opacity-60" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Tour Info */}
                <div className="text-sm text-safari-teal font-medium">
                  {testimonial.tour}
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-primary">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Reviews Stats */}
        <div className="mt-16 text-center space-y-4">
          <div className="flex justify-center items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-primary">4.9/5</span>
          </div>
          <p className="text-muted-foreground">
            Based on <span className="font-semibold">500+ verified reviews</span> from TripAdvisor, Google, and direct feedback
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;