"use client";

import Hero from "@/components/sections/partners/Hero";
import PartnerBrands from "@/components/sections/partners/PartnerBrands";
import WhyPartner from "@/components/sections/partners/WhyPartner";
import PartnerBenefits from "@/components/sections/partners/PartnerBenefits";
import HowItWorks from "@/components/sections/partners/HowItWorks";
import Testimonials from "@/components/sections/partners/Testimonials";
import CTA from "@/components/sections/partners/CTA";

export default function PartnersPage() {
  return (
    <main>
      <Hero />
      <PartnerBrands />
      <WhyPartner />
      <PartnerBenefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </main>
  );
}