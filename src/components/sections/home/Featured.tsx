"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";

import { trucks } from "@/data/trucks";
import { TruckListing } from "@/types/truckType";

export default function Featured() {
  const [selectedTruck, setSelectedTruck] = useState<TruckListing | null>(null);

  const featuredTrucks = trucks.slice(0, 4);

  return (
    <section
      id="featured"
      className="relative isolate overflow-hidden justify-center bg-white py-20 sm:py-26"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
            <div
              key={truck.id}
              onClick={() => setSelectedTruck(truck)}
              className="mx-4 my-6 md:mx-0 md:my-0 group relative cursor-pointer rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2
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
            </div>
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

      <Dialog
        open={!!selectedTruck}
        onClose={() => setSelectedTruck(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-xl bg-white p-6">
            {selectedTruck && (
              <>
                <Image
                  src={selectedTruck.image}
                  alt={selectedTruck.name}
                  width={600}
                  height={300}
                  className="w-full h-56 object-cover rounded-lg"
                />

                <Dialog.Title className="mt-4 text-lg font-semibold">
                  {selectedTruck.name}
                </Dialog.Title>

                <p className="text-gray-500">{selectedTruck.brand}</p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p>Category: {selectedTruck.category}</p>
                  <p>Capacity: {selectedTruck.capacityTons} tons</p>
                  <p>Transmission: {selectedTruck.transmission}</p>
                  <p>Fuel: {selectedTruck.fuelType}</p>

                  <p>
                    Driver Included:{" "}
                    {selectedTruck.driverIncluded ? "Yes" : "No"}
                  </p>
                  <p>
                    Rating: ⭐ {selectedTruck.rating} ({selectedTruck.reviews}{" "}
                    reviews)
                  </p>
                </div>

                <p className="mt-4 text-lg font-semibold text-blue-600">
                  ${selectedTruck.pricePerDay} / day
                </p>

                <button
                  onClick={() => setSelectedTruck(null)}
                  className="mt-6 w-full rounded-lg bg-gray-900 text-white py-2"
                >
                  Close
                </button>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
