import Hero from "@/components/sections/partner/Hero";
import Benefit from "@/components/sections/partner/Benefit";
import WhoCanPartner from "@/components/sections/partner/WhoCanPartner";
import PartnerTypes from "@/components/sections/partner/PartnerTypes";
import HowItWorks from "@/components/sections/partner/HowItWorks";
import CTA from "@/components/sections/partner/CTA";

export default function page() {
  return (
    <>
      <Hero />
      <Benefit />
      <WhoCanPartner />
      <PartnerTypes />
      <HowItWorks />
      <CTA />
    </>
  );
}
