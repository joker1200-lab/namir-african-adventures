import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award, Instagram, Mail } from "lucide-react";
import heroImage from "@/assets/hero-safari.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 78, 95, 0.7), rgba(30, 78, 95, 0.5)), url(${heroImage})`
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 text-white">
          <Star className="h-6 w-6" />
        </div>
      </div>
      
      <div className="absolute bottom-32 left-10 animate-float hidden lg:block" style={{ animationDelay: '1s' }}>
        <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 text-white">
          <Award className="h-6 w-6" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-safari-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-sm">
            <Award className="h-4 w-4" />
            <span>Licensed Tanzania Tour Operator</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Discover the
            <span className="block safari-gradient bg-clip-text text-transparent">
              Magic of Tanzania
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Experience authentic African safari adventures with expert local guides. 
            From Serengeti's endless plains to Kilimanjaro's majestic peak.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm opacity-80">Happy Travelers</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl md:text-3xl font-bold">4.9</div>
              <div className="text-sm opacity-80">Star Rating</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="safari" className="px-8 py-6 text-lg">
              Start Your Safari
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-primary">
              <Play className="h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 pt-4">
            <a 
              href="https://www.instagram.com/namir_tours_and_travel?igsh=MXZkNG56NGFiZGcxMg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 safari-transition hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="http://www.tiktok.com/@namir.tours.and.travel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 safari-transition hover:scale-110"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a 
              href="mailto:namirtourtravel@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 safari-transition hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 opacity-80">
            <div className="flex items-center space-x-2 text-sm">
              <Users className="h-4 w-4" />
              <span>TATO Member</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Award className="h-4 w-4" />
              <span>TripAdvisor Excellence</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Star className="h-4 w-4" />
              <span>100% Local Guides</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;