import Hero from "@/components/sections/home/Hero";
import About from "@/components/sections/home/About";
import QuickBooking from "@/components/sections/home/QuickBooking";
import TruckCategories from "@/components/sections/home/TruckCategories";
import Featured from "@/components/sections/home/Featured";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Testimonials from "@/components/sections/home/Testimonials";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <QuickBooking />
      <TruckCategories />
      <Featured />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}