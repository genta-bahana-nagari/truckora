// import Hero from "@/components/sections/partner/Hero";
// import Benefit from "@/components/sections/partner/Benefit";
// import WhoCanPartner from "@/components/sections/partner/WhoCanPartner";
// import PartnerTypes from "@/components/sections/partner/PartnerTypes";
// import HowItWorks from "@/components/sections/partner/HowItWorks";
// import CTA from "@/components/sections/partner/CTA";

// export default function page() {
//   return (
//     <>
//       <Hero />
//       <Benefit />
//       <WhoCanPartner />
//       <PartnerTypes />
//       <HowItWorks />
//       <CTA />
//     </>
//   );
// }
"use client";

import Link from "next/link";

export default function page() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-20 sm:py-26 lg:px-8">
      <div className="text-center max-w-7xl py-4">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
          Under Development
        </p>

        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
          This page is currently in progress
        </h1>

        <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
          We’re working hard to bring this page to life. Please check back later
          for updates. Thank you for your patience.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="rounded-md bg-gray-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition"
          >
            Back to Home
          </Link>

          <Link
            href="/company/contact"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
