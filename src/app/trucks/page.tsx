"use client";

import { useDeferredValue, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { trucks } from "@/data/truck/trucks";
import { TruckGrid } from "@/components/sections/trucks/TruckGrid";
import { TruckSidebar } from "@/components/sections/trucks/TruckSidebar";
import {
  FuelTypeFilter,
  TransmissionFilter,
  TruckCategoryFilter,
  TruckClassFilter,
} from "@/types/truckType";

export default function Trucks() {
  const [truckClass, setTruckClass] = useState<TruckClassFilter>("all");
  const [category, setCategory] = useState<TruckCategoryFilter>("all");
  const [fuelType, setFuelType] = useState<FuelTypeFilter>("all");
  const [transmission, setTransmission] = useState<TransmissionFilter>("all");
  const [search, setSearch] = useState("");

  const deferredSearch = useDeferredValue(search);

  const filteredTrucks = trucks.filter((truck) => {
    const matchClass = truckClass === "all" || truck.truckClass === truckClass;
    const matchCategory = category === "all" || truck.category === category;
    const matchFuel = fuelType === "all" || truck.fuelType === fuelType;
    const matchTransmission =
      transmission === "all" || truck.transmission === transmission;

    const matchSearch =
      truck.name.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.brand.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.series.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.category.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.truckClass.toLowerCase().includes(deferredSearch.toLowerCase());

    return matchClass && matchCategory && matchFuel && matchTransmission && matchSearch;
  });

  return (
    <section
      id="reservation"
      className="relative isolate overflow-y-hidden bg-white py-20 sm:py-26"
    >
      <motion.div
        className="mx-auto md:mx-16 max-w-screen px-4 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-lg lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Available Fleet
          </motion.h2>
          <motion.p
            className="mt-4 text-sm lg:text-lg text-gray-600"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our fleet of dependable trucks built to move your goods
            safely, efficiently, and on time.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TruckSidebar
              truckClass={truckClass}
              setTruckClass={setTruckClass}
              category={category}
              setCategory={setCategory}
              fuelType={fuelType}
              setFuelType={setFuelType}
              transmission={transmission}
              setTransmission={setTransmission}
            />
          </motion.div>

          {/* Truck Grid */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.div
              className="mb-6 flex justify-center align-center px-4 md:px-0"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <input
                type="text"
                placeholder="Search trucks (e.g. Volvo, Dump, FH16...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm
                  focus:outline-none focus:ring-2 focus:ring-black/5
                  focus:border-gray-300 transition"
              />
            </motion.div>

            <AnimatePresence>
              {filteredTrucks.length === 0 ? (
                <motion.p
                  className="text-gray-500 text-lg font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  No trucks found.
                </motion.p>
              ) : (
                <TruckGrid trucks={filteredTrucks} />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}