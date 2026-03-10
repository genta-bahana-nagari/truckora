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
    <section className="relative w-full">
      <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center md:px-24">
              <div className="max-w-xl px-6 md:px-12 text-white">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-lg mb-6 text-white/90">
                  {slide.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href="/reserve"
                    className="border border-white bg-brand text-white px-5 py-2 rounded-lg font-medium hover:bg-gray-200 hover:text-black transition"
                  >
                    Reserve Truck
                  </a>

                  <a
                    href="trucks"
                    className="border border-white bg-white text-black px-5 py-2 rounded-lg font-medium transition hover:bg-gray-200"
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
          className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        >
          <MdNavigateBefore />
        </button>

        <button
          onClick={next}
          className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full"
        >
          <MdNavigateNext />
        </button>

        <div className="absolute bottom-4 left-1/2 translate-x-1/2 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
