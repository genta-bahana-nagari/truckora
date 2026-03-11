"use client";

import { useState } from "react";
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const slides = [
  {
    image: "/images/carousel/truck1.png",
    title: "Find the Right Truck",
    description: "Browse hundreds of trucks ready for your next job.",
  },
  {
    image: "/images/carousel/truck2.png",
    title: "Fast Reservation",
    description: "Reserve trucks in seconds with our smart booking system.",
  },
  {
    image: "/images/carousel/truck3.png",
    title: "Reliable Logistics",
    description: "Trusted by companies for efficient transportation.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <section id="hero" className="relative w-full">
      <div className="relative w-full h-[65vh] md:h-auto md:aspect-[21/9] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-end md:items-center md:px-24 pb-12 md:pb-0">
              <div className="max-w-md md:max-w-xl px-5 md:px-12 text-white">
                <h1 className="text-xl sm:text-2xl md:text-5xl font-bold mb-2 md:mb-4">
                  {slide.title}
                </h1>
                <p className="text-xs sm:text-sm md:text-lg mb-3 md:mb-6 text-white/90">
                  {slide.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="/reserve"
                    className="border border-white bg-black/20 text-white px-4 py-2 text-sm md:px-5 md:text-base rounded-lg font-medium hover:bg-gray-200 hover:text-black transition duration-300"
                  >
                    Reserve Truck
                  </a>

                  <a
                    href="trucks"
                    className="border border-gray-200 bg-gray-200 text-black px-4 py-2 text-sm md:px-5 md:text-base rounded-lg font-medium hover:bg-black/20 hover:text-white transition duration-300"
                  >
                    Browse Trucks
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prev}
          className="cursor-pointer absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1.5 md:p-2 rounded-full"
        >
          <MdNavigateBefore />
        </button>

        <button
          onClick={next}
          className="cursor-pointer absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-1.5 md:p-2 rounded-full"
        >
          <MdNavigateNext />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
