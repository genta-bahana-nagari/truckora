"use client";
import Image from "next/image";

import { trucks } from "@/data/truck/trucks";
import Link from "next/link";

export default function Featured() {
  const featuredTrucks = trucks.slice(0, 4);

  return (
    <section
      id="featured"
      className="relative isolate overflow-hidden justify-center bg-white py-20 sm:py-26"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Available Fleet
          </h2>
          <p className="mt-4 text-sm lg:text-lg text-gray-600">
            Explore our fleet of dependable trucks built to move your goods
            safely, efficiently, and on time.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredTrucks.map((truck) => (
            <Link
              href={`/trucks/${truck.id}`}
              target="blank"
              key={truck.id}
              className="mx-4 md:mx-0 group relative cursor-pointer rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2
              hover:ring-black/5 transition-all duration-200"
            >
              <div className="aspect-square w-full overflow-hidden rounded-t-2xl bg-gray-200">
                <Image
                  src={truck.image}
                  alt={truck.name}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-200"
                />
              </div>

              <div className="mt-4 px-2 pb-4">
                <h3 className="text-md font-medium text-gray-900">
                  {truck.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {truck.brand} - {truck.series}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-1 flex-col justify-center items-center my-12">
          <a
            href="trucks"
            className="border border-gray-700 bg-gray-700 text-white px-4 py-2 text-sm md:px-5 md:text-base rounded-lg font-medium hover:bg-black hover:border-black transition duration-300"
          >
            Browse Trucks
          </a>
        </div>
      </div>
    </section>
  );
}
