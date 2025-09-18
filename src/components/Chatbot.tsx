import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Namir Tour & Safari! I'm here to help you plan your perfect Tanzania adventure. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const quickResponses = [
    "Tell me about safari packages",
    "Kilimanjaro climbing info",
    "Best time to visit Tanzania",
    "Pricing and booking",
    "Contact information"
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes("safari") || message.includes("package")) {
      return "🦁 We offer amazing safari packages including Serengeti National Park, Ngorongoro Crater, and Tarangire! Our 5-day Serengeti safari starts at $1,250 per person. Would you like more details about specific parks or customized itineraries?";
    }
    
    if (message.includes("kilimanjaro") || message.includes("climb")) {
      return "🏔️ Mount Kilimanjaro climbing is our specialty! We offer 7-day Machame route expeditions for $1,850 per person with a 99% success rate. The package includes professional guides, quality equipment, and all meals. When are you planning to climb?";
    }
    
    if (message.includes("time") || message.includes("when")) {
      return "🌍 Tanzania is great year-round! June-October is dry season (best for wildlife viewing and Great Migration). November-May is green season (fewer crowds, better prices, amazing bird watching). What type of experience interests you most?";
    }
    
    if (message.includes("price") || message.includes("cost") || message.includes("book")) {
      return "💰 Our safari packages start from $750 (Zanzibar) to $2,850 (Ultimate Tanzania). Prices include accommodation, meals, park fees, and professional guides. I can connect you with our booking team for a custom quote. What's your budget range?";
    }
    
    if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return "📞 You can reach us at:\n• Phone: +255 123 456 789\n• Email: info@namirtours.com\n• Emergency: +255 987 654 321\n\nOur office hours are Mon-Fri 8AM-6PM EAT. Would you like me to connect you with a safari specialist?";
    }
    
    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! 😊 Great to meet you! I'm excited to help you discover the magic of Tanzania. Are you interested in wildlife safaris, Mount Kilimanjaro climbing, or beach relaxation in Zanzibar?";
    }
    
    return "Thanks for your message! 🌟 I'd love to help you plan your Tanzania adventure. For detailed information about our safari packages, climbing expeditions, or to speak with our expert team, please call +255 123 456 789 or email info@namirtours.com. What specific aspects of Tanzania interest you most?";
  };

  const sendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: currentMessage,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: getBotResponse(currentMessage),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setCurrentMessage("");
  };

  const handleQuickResponse = (response: string) => {
    setCurrentMessage(response);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full safari-gradient safari-shadow hover:scale-110 safari-transition z-50 animate-float"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-primary" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 z-50 animate-safari-scale-in">
      <Card className="h-full flex flex-col safari-shadow border-0">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-safari-gold p-2 rounded-full">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div>
                <CardTitle className="text-sm">Safari Assistant</CardTitle>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-2 ${
                  message.isUser ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div className={`p-1 rounded-full ${
                  message.isUser ? 'bg-safari-gold' : 'bg-primary'
                }`}>
                  {message.isUser ? (
                    <User className="h-3 w-3 text-primary" />
                  ) : (
                    <Bot className="h-3 w-3 text-primary-foreground" />
                  )}
                </div>
                <div className={`max-w-[80%] ${
                  message.isUser ? 'text-right' : ''
                }`}>
                  <div className={`p-2 rounded-lg text-sm ${
                    message.isUser
                      ? 'bg-safari-gold text-primary'
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {message.text}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Responses */}
          {messages.length <= 2 && (
            <div className="p-3 border-t border-border">
              <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1">
                {quickResponses.slice(0, 3).map((response, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs p-1 h-auto"
                    onClick={() => handleQuickResponse(response)}
                  >
                    {response}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <Input
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Ask about safaris..."
                className="text-sm"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                onClick={sendMessage}
                size="icon"
                variant="safari"
                className="h-10 w-10"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Chatbot;