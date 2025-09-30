import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Instagram, 
  Phone, 
  Mail, 
  MapPin,
  Award,
  Users,
  Globe
} from "lucide-react";
import namirLogo from "@/assets/namir-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={namirLogo} 
                alt="Namir Tour & Safari" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Namir Tour & Safari</h3>
                <p className="text-sm opacity-90">Authentic Tanzania Adventures</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Experience the magic of Tanzania with our expert guides. From the Serengeti's endless plains to Kilimanjaro's snow-capped peak, we create unforgettable safari memories.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/namir_tours_and_travel?igsh=MXZkNG56NGFiZGcxMg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 safari-transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="http://www.tiktok.com/@namir.tours.and.travel" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 safari-transition">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="mailto:namirtourtravel@gmail.com" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 safari-transition">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Safari Tours</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 safari-transition">Serengeti Safari</Link></li>
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 safari-transition">Kilimanjaro Climbing</Link></li>
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 safari-transition">Ngorongoro Crater</Link></li>
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 safari-transition">Zanzibar Beach</Link></li>
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 safari-transition">Cultural Tours</Link></li>
              <li><Link to="/tours" className="opacity-80 hover:opacity-100 safari-transition">Custom Packages</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 safari-transition">About Us</Link></li>
              <li><Link to="/blog" className="opacity-80 hover:opacity-100 safari-transition">Travel Blog</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100 safari-transition">Contact</Link></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 safari-transition">Reviews</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 safari-transition">Travel Guide</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 safari-transition">Safety First</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="opacity-80">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-80" />
                <a href="mailto:namirtourtravel@gmail.com" className="opacity-80 hover:opacity-100 safari-transition">namirtourtravel@gmail.com</a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 opacity-80 mt-0.5" />
                <span className="opacity-80">Arusha, Tanzania<br />East Africa</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-medium">Get Safari Updates</p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button size="sm" variant="secondary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4" />
                <span>Licensed Tour Operator</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>TATO Member</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>International Standards</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-6 pt-6 text-center text-sm opacity-80">
          <p>&copy; 2024 Namir Tour & Safari. All rights reserved. | Made with ❤️ for Tanzania Safari Adventures</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;