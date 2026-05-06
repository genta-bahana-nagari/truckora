import Hero from "@/components/sections/about/Hero";
import MissionVision from "@/components/sections/about/MissionVision";
import WhatWeDo from "@/components/sections/about/WhatWeDo";
import Impact from "@/components/sections/about/Impact";
import OurValues from "@/components/sections/about/OurValues";
import CTA from "@/components/sections/about/CTA";

export default function page() {
  return (
    <>
      <Hero />
      <MissionVision />
      <WhatWeDo />
      <Impact />
      <OurValues />
      <CTA />
    </>
  )
}
