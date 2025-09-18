import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import namirLogo from "@/assets/namir-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 safari-transition">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+255 123 456 789</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@namirtours.com</span>
            </div>
          </div>
          <div className="text-xs">
            📍 Arusha, Tanzania | Licensed Tour Operator
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={namirLogo} 
              alt="Namir Tour & Safari" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Namir Tour & Safari</h1>
              <p className="text-xs text-muted-foreground">Authentic Tanzania Adventures</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary safari-transition font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Get Quote
            </Button>
            <Button variant="default" size="sm" className="hero-gradient">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-safari-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary safari-transition font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Get Quote
                </Button>
                <Button variant="default" size="sm" className="hero-gradient">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;