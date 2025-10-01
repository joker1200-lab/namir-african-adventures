import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Your First African Safari",
    excerpt: "Planning your first safari can be overwhelming. Here are the most important things you need to know before embarking on your Tanzania adventure...",
    author: "Ramadhan Hashim",
    date: "March 15, 2024",
    category: "Safari Tips",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "The Great Migration: Nature's Greatest Spectacle",
    excerpt: "Witness millions of wildebeest, zebras, and gazelles traverse the Serengeti ecosystem in one of nature's most incredible displays...",
    author: "Joseph Mwalimu",
    date: "March 10, 2024",
    category: "Wildlife",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Climbing Kilimanjaro: A Complete Guide",
    excerpt: "Everything you need to know about conquering Africa's highest peak, from route selection to altitude acclimatization and what to pack...",
    author: "Daniel Mollel",
    date: "March 5, 2024",
    category: "Adventure",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Zanzibar: Beyond the Beaches",
    excerpt: "Discover the rich history, spice plantations, and cultural treasures of this exotic island paradise off Tanzania's coast...",
    author: "Grace Kimaro",
    date: "February 28, 2024",
    category: "Culture",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1590076215938-e2c8f8eab071?w=800&auto=format&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="h-8 w-8 text-safari-teal" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Safari Stories & Travel Blog
            </h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expert advice, travel tips, and inspiring stories from our team and travelers 
            who have experienced the magic of Tanzania firsthand.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className="group overflow-hidden safari-shadow hover:warm-shadow safari-transition animate-safari-scale-in border-0 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 safari-transition"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-safari-teal safari-transition line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full text-safari-teal hover:text-safari-teal group-hover:bg-safari-teal/10"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 safari-transition" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Articles
            <BookOpen className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
