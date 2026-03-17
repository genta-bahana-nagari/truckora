"use client";

import { useState } from "react";
import { trucks } from "@/data/truck/trucks";
import { TruckGrid } from "@/components/sections/trucks/TruckGrid";
import { TruckSidebar } from "@/components/sections/trucks/TruckSidebar";

export default function Trucks() {
  const [truckClass, setTruckClass] = useState("all");
  const [category, setCategory] = useState("all");

  const filteredTrucks = trucks.filter((truck) => {
    const matchClass = truckClass === "all" || truck.truckClass === truckClass;
    const macthCategory = category === "all" || truck.category === category;

    return matchClass && macthCategory;
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
            <TruckGrid trucks={filteredTrucks} />
          </div>
        </div>
      </div>
    </section>
  );
}
