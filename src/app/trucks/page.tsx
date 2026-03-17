"use client";

import { useDeferredValue } from "react";
import { useState } from "react";

import { trucks } from "@/data/truck/trucks";
import { TruckGrid } from "@/components/sections/trucks/TruckGrid";
import { TruckSidebar } from "@/components/sections/trucks/TruckSidebar";

export default function Trucks() {
  const [truckClass, setTruckClass] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const filteredTrucks = trucks.filter((truck) => {
    const matchClass = truckClass === "all" || truck.truckClass === truckClass;
    const macthCategory = category === "all" || truck.category === category;

    const matchSearch =
      truck.name.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.brand.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.series.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.category.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.truckClass.toLowerCase().includes(deferredSearch.toLowerCase());

    return matchClass && macthCategory && matchSearch;
  });

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

        <div className="grid lg:grid-cols-4 gap-10">
          <TruckSidebar
            truckClass={truckClass}
            setTruckClass={setTruckClass}
            category={category}
            setCategory={setCategory}
            className="self-start"
          />

          <div className="lg:col-span-3">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search trucks (e.g. Volvo, Dump, FH16...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm
                 focus:outline-none focus:ring-2 focus:ring-black/5
                 focus:border-gray-300 transition"
              />
            </div>
            {filteredTrucks.length === 0 ? (
              <p className="text-gray-500 text-lg font-medium">
                No trucks found.
              </p>
            ) : (
              <TruckGrid trucks={filteredTrucks} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
