import Hero from "@/components/sections/career/Hero";
import WhyWorkWithUs from "@/components/sections/career/WhyWorkWithUs";
import CultureValue from "@/components/sections/career/CultureValue";
import OpenPositions from "@/components/sections/career/OpenPositions";
import Hiring from "@/components/sections/career/Hiring";
import CTA from "@/components/sections/career/CTA";

export default function page() {
  return (
    <>
      <Hero />
      <WhyWorkWithUs />
      <CultureValue />
      <OpenPositions />
      <Hiring />
      <CTA />
    </>
  );
}
