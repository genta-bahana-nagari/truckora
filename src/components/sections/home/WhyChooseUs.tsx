"use client";
import { features } from "@/data/misc/features";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden justify-center bg-white py-20 sm:py-26"
    >
      <div className="mx-auto max-w-3xl md:max-w-7xl px-6 lg:px-8">
        <h2 className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Why Choose Truckora?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Simplifying truck reservations and fleet management for businesses of
          all sizes.
        </p>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg p-8 ${feature.positionClasses}`}
            >
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 text-center">
                {feature.description}
              </p>
              <div className="pointer-events-auto absolute inset-0 rounded-2xl ring-1 ring-black/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
