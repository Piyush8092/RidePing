import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import AppFeatures from "@/components/AppFeatures";
import FAQs from "@/components/FAQs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AppFeatures />
      <WhyChooseUs />
      <TestimonialsSection />
      <PricingSection />
      <FAQs />
    </>
  );
}
