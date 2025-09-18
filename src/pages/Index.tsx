import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import FeaturedTours from "@/components/FeaturedTours";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedTours />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </Layout>
  );
};

export default Index;
