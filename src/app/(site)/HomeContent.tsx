import { HeroSection } from "@/components/home/Hero-section";
import { InvestmentProductsSection } from "@/components/home/Investment-products-section";
import { ManagementTeamSection } from "@/components/home/Management-team-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { InvestmentPlansSection } from "@/components/home/investment-plans-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhySection } from "@/components/home/why-section";

const HomeContent = () => {
  return (
    <>
      <HeroSection />
      <WhySection />

      <InvestmentProductsSection />
      <InvestmentPlansSection />

      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FaqSection />
      <ManagementTeamSection />
      <FinalCtaSection />
    </>
  );
};

export default HomeContent;
