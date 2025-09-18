import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-safari.jpg";

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Tanzania's Great Migration",
    excerpt: "Discover the best times and locations to witness one of nature's most spectacular events - the Great Migration in Serengeti National Park.",
    author: "Joseph Mwalimu",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Wildlife",
    image: heroImage,
    featured: true
  },
  {
    id: 2,
    title: "Kilimanjaro Climbing: Complete Preparation Guide",
    excerpt: "Everything you need to know about preparing for Mount Kilimanjaro, from physical training to gear selection and route choices.",
    author: "Daniel Mollel",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Mountain Climbing",
    image: heroImage,
    featured: false
  },
  {
    id: 3,
    title: "Hidden Gems: Lesser-Known Safari Destinations in Tanzania",
    excerpt: "Explore Tanzania's off-the-beaten-path wildlife destinations that offer incredible experiences away from the crowds.",
    author: "Grace Kilonzo",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Travel Tips",
    image: heroImage,
    featured: false
  },
  {
    id: 4,
    title: "Cultural Immersion: Meeting the Maasai People",
    excerpt: "Learn about authentic cultural experiences with the Maasai people and how to engage respectfully with local communities.",
    author: "Joseph Mwalimu",
    date: "February 28, 2024",
    readTime: "7 min read",
    category: "Culture",
    image: heroImage,
    featured: false
  },
  {
    id: 5,
    title: "Photography Tips for Your African Safari",
    excerpt: "Master the art of wildlife photography with professional tips for capturing stunning images during your Tanzania safari.",
    author: "Grace Kilonzo",
    date: "February 22, 2024",
    readTime: "10 min read",
    category: "Photography",
    image: heroImage,
    featured: false
  },
  {
    id: 6,
    title: "Zanzibar Spice Island: Beyond the Beaches",
    excerpt: "Discover the rich history and culture of Zanzibar, from spice tours to Stone Town's UNESCO World Heritage sites.",
    author: "Daniel Mollel",
    date: "February 18, 2024",
    readTime: "9 min read",
    category: "Travel Tips",
    image: heroImage,
    featured: false
  },
  {
    id: 7,
    title: "Conservation Success Stories in Tanzania",
    excerpt: "Learn about ongoing conservation efforts in Tanzania and how sustainable tourism helps protect wildlife and habitats.",
    author: "Joseph Mwalimu",
    date: "February 12, 2024",
    readTime: "11 min read",
    category: "Conservation",
    image: heroImage,
    featured: false
  },
  {
    id: 8,
    title: "Packing Essentials for Your Tanzania Adventure",
    excerpt: "A comprehensive packing guide for Tanzania safaris, including clothing, gear, and health essentials for every season.",
    author: "Grace Kilonzo",
    date: "February 8, 2024",
    readTime: "5 min read",
    category: "Travel Tips",
    image: heroImage,
    featured: false
  }
];

const categories = ["All", "Wildlife", "Travel Tips", "Mountain Climbing", "Culture", "Photography", "Conservation"];

const Blog = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-safari-teal text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-safari-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Safari Stories & Travel Insights
            </h1>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Discover insider tips, wildlife stories, and travel guides from our expert team. 
              Get inspired for your next Tanzania adventure.
            </p>
            <Button variant="secondary" size="lg" className="px-8">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-secondary/20 sticky top-[120px] z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "safari" : "outline"}
                size="sm"
                className="safari-transition"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Featured Article</h2>
            <div className="w-20 h-1 bg-safari-gold rounded"></div>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="overflow-hidden safari-shadow border-0 animate-safari-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-safari-gold text-primary">Featured</Badge>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-primary">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">By {post.author}</span>
                      </div>
                      <Button variant="safari">
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">Latest Articles</h2>
            <div className="w-20 h-1 bg-safari-gold rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card 
                key={post.id}
                className="group overflow-hidden safari-shadow hover:warm-shadow safari-transition border-0 animate-safari-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 safari-transition"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary group-hover:text-safari-teal safari-transition line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-1 text-xs">
                      <User className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">By {post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-safari-teal p-0 h-auto">
                      Read More
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-safari-teal to-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated with Safari Stories
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Get the latest travel tips, wildlife updates, and exclusive offers 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-primary bg-white focus:outline-none focus:ring-2 focus:ring-safari-gold"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-80 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;