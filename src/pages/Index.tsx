import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import TravelInfo from "@/components/TravelInfo";
import FeaturedTours from "@/components/FeaturedTours";
import WeatherSeasons from "@/components/WeatherSeasons";
import Accommodations from "@/components/Accommodations";
import SafariGuides from "@/components/SafariGuides";
import CustomSafariSection from "@/components/CustomSafariSection";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TravelInfo />
      <FeaturedTours />
      <WeatherSeasons />
      <Accommodations />
      <SafariGuides />
      <CustomSafariSection />
      <BlogSection />
      <Testimonials />
      <BookingSection />
      <FAQ />
    </Layout>
  );
};

export default Index;
