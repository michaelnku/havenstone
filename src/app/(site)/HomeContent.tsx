import { HeroSection } from "@/components/home/Hero-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyHavenstoneSection } from "@/components/home/why-havenstone-section";

const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <WhyHavenstoneSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
};

export default HomeContent;
