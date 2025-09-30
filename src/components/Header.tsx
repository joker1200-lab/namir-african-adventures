import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Instagram, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import namirLogo from "@/assets/namir-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Tours", href: "/tours" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
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
              <a href="mailto:namirtourtravel@gmail.com" className="hover:text-primary safari-transition">namirtourtravel@gmail.com</a>
            </div>
            <a 
              href="https://www.instagram.com/namir_tours_and_travel?igsh=MXZkNG56NGFiZGcxMg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-primary safari-transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a 
              href="http://www.tiktok.com/@namir.tours.and.travel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-primary safari-transition"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-xs">
              📍 Arusha, Tanzania | Licensed Tour Operator
            </div>
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1 hover:text-primary safari-transition"
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs">{selectedLanguage}</span>
              </button>
              
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                  <ul className="py-1">
                    {languages.map((lang) => (
                      <li key={lang.code}>
                        <button
                          onClick={() => {
                            setSelectedLanguage(lang.name);
                            setIsLangDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground safari-transition flex items-center space-x-2"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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