"use client";

import Image from "next/image";
import Link from "next/link";

import { trucks } from "@/data/trucks";

export default function Trucks() {
  const featuredTrucks = trucks;

  return (
    <section
      id="featured"
      className="relative isolate overflow-hidden justify-center bg-white py-20 sm:py-26"
    >
      <div className="mx-auto md:mx-16 max-w-screen px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Available Fleet
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our fleet of dependable trucks built to move your goods
            safely, efficiently, and on time.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredTrucks.map((truck) => (
            <Link
              href={`trucks/${truck.id}`}
              key={truck.id}
              className="mx-4 my-auto md:my-6 md:mx-0 md:my-0 group relative cursor-pointer rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2
                  hover:ring-black/5 transition-all duration-200"
            >
              <div className="aspect-square w-full overflow-hidden rounded-t-2xl bg-gray-200">
                <Image
                  src={truck.image}
                  alt={truck.name}
                  width={400}
                  height={200}
                  className="group-hover:opacity-75 h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>

              <div className="mt-4 flex justify-between px-4 mb-4">
                <div>
                  <h3 className="text-sm text-gray-700">{truck.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {truck.brand} {truck.series}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-900">
                  ${truck.pricePerDay} / day
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
