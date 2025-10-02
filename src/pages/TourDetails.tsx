import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Calendar, Check } from "lucide-react";

const TourDetails = () => {
  const [searchParams] = useSearchParams();
  const tourId = searchParams.get("id");
  const whatsappNumber = "+255765131391";

  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="safari-shadow border-0">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-primary mb-4">Tour Details</h1>
              <p className="text-muted-foreground mb-6">Complete tour information coming soon...</p>
              <Button 
                variant="safari" 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=Hi!%20I%27d%20like%20more%20details%20about%20tour%20${tourId}`, '_blank')}
              >
                Contact Us for Details
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default TourDetails;
