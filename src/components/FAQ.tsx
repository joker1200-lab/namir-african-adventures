import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is included in a typical safari package?",
    answer: "Our safari packages typically include professional guide services, park entrance fees, game drives in 4x4 safari vehicles, accommodation (camping or lodge), all meals during the safari, airport transfers, and comprehensive travel insurance. We also provide binoculars, first aid kit, and cool drinks during game drives."
  },
  {
    question: "What is the best time to visit Tanzania for safari?",
    answer: "Tanzania offers excellent safari experiences year-round, but the best time depends on your interests. June to October is the dry season with excellent wildlife viewing and the Great Migration. November to May is the green season with fewer crowds, better prices, and incredible birdwatching. The calving season (January-March) is particularly spectacular in the Serengeti."
  },
  {
    question: "How difficult is climbing Mount Kilimanjaro?",
    answer: "Kilimanjaro climbing is challenging but achievable for people with good fitness levels. No technical climbing experience is required, but physical preparation is essential. We recommend 6-8 months of cardio training. Our success rate is over 95% due to proper acclimatization schedules, experienced guides, and quality equipment. The Machame route typically takes 7 days."
  },
  {
    question: "What should I pack for a Tanzania safari?",
    answer: "Essential items include neutral-colored clothing (khaki, olive, brown), comfortable walking shoes, hat, sunglasses, sunscreen (SPF 50+), insect repellent, personal medications, camera with extra batteries, and binoculars. We provide a detailed packing list upon booking. Laundry services are available at most lodges."
  },
  {
    question: "Do I need any vaccinations or special health preparations?",
    answer: "Yellow fever vaccination is required if coming from infected areas. We recommend malaria prophylaxis, especially for northern circuit parks. Consult your doctor 4-6 weeks before travel. Tanzania requires visitors to have comprehensive travel insurance. Our guides carry first aid kits, and we have partnerships with medical facilities."
  },
  {
    question: "How far in advance should I book my safari?",
    answer: "We recommend booking 6-12 months in advance, especially for peak season (June-October) and special events like the Great Migration. This ensures availability of preferred accommodations and better prices. However, we can sometimes accommodate last-minute bookings (subject to availability) with our local partnerships."
  },
  {
    question: "Can you customize safari itineraries for specific interests?",
    answer: "Absolutely! We specialize in customized safaris based on your interests, budget, and time. Whether you're interested in photography, birdwatching, cultural experiences, luxury camping, or budget-friendly options, we'll create a personalized itinerary. We also offer specialized safaris for families, honeymooners, and solo travelers."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellations made 90+ days before departure: 15% cancellation fee. 60-89 days: 25% fee. 30-59 days: 50% fee. Less than 30 days: 75% fee. We strongly recommend comprehensive travel insurance. In case of emergencies or unforeseen circumstances, we work with clients to find alternative solutions, including rescheduling or partial refunds."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-safari-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get answers to the most common questions about Tanzania safaris, 
            Mount Kilimanjaro climbing, and travel planning.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-safari-scale-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-lg safari-shadow border-0 px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-safari-teal safari-transition py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 animate-safari-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-muted-foreground mb-4">
            Still have questions? Our safari experts are here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+255123456789" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg safari-transition hover:bg-primary/90 safari-shadow"
            >
              📞 Call +255 123 456 789
            </a>
            <a 
              href="mailto:info@namirtours.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg safari-transition hover:bg-secondary/80 border border-border"
            >
              ✉️ Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;