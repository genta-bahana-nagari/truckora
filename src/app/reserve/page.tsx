"use client";

import { useState } from "react";
import ReservationForm from "@/components/sections/booking/ReservationForm";
import { TruckSidebar } from "@/components/sections/trucks/TruckSidebar";
import { trucks } from "@/data/truck/trucks";
import { TruckListing } from "@/types/truckType";
import { TruckCarousel } from "@/components/sections/booking/TruckCarousel";

type FilterValue<T extends string> = T | "all";

export default function ReservePage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weight, setWeight] = useState(0);

  const [truckClass, setTruckClass] =
    useState<FilterValue<TruckListing["truckClass"]>>("all");
  const [category, setCategory] =
    useState<FilterValue<TruckListing["category"]>>("all");
  const [fuelType, setFuelType] =
    useState<FilterValue<TruckListing["fuelType"]>>("all");
  const [transmission, setTransmission] =
    useState<FilterValue<TruckListing["transmission"]>>("all");

  const [selectedTruckId, setSelectedTruckId] = useState<string | null>(null);

  const days = calculateDays(startDate, endDate);

  function calculateDays(start: string, end: string) {
    if (!start || !end) return 0;

    const diff = new Date(end).getTime() - new Date(start).getTime();

    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  const filteredTrucks = trucks.filter((truck) => {
    if (!truck.available) return false;
    if (weight && truck.capacityTons < weight) return false;

    if (truckClass !== "all" && truck.truckClass !== truckClass) return false;
    if (category !== "all" && truck.category !== category) return false;
    if (fuelType !== "all" && truck.fuelType !== fuelType) return false;
    if (transmission !== "all" && truck.transmission !== transmission)
      return false;

    return true;
  });

  const selectedTruck = filteredTrucks.find((t) => t.id === selectedTruckId);

  const totalPrice =
    selectedTruck && days > 0 ? selectedTruck.pricePerDay * days : 0;

  return (
    <section
      id="reserve"
      className="relative isolate overflow-hidden justify-center bg-white py-20 sm:py-26"
    >
      <div className="mx-auto md:mx-16 max-w-screen px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Reserve Your Truck
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Explore our fleet of dependable trucks built to move your goods
            safely, efficiently, and on time.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12">
        <div className="lg:col-span-2 space-y-6">
          <ReservationForm
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setWeight={setWeight}
          />
          <div className="space-y-3">
            {filteredTrucks.length === 0 ? (
              <p className="text-gray-500 text-lg font-medium">
                No trucks found.
              </p>
            ) : (
              <TruckCarousel
                trucks={filteredTrucks}
                selectedTruckId={selectedTruckId}
                onSelect={setSelectedTruckId}
              />
            )}
          </div>
        </div>

        <div className="space-y-6">
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

          <div className="p-4 border rounded-xl">
            <p>Duration: {days} days</p>

            {selectedTruck ? (
              <>
                <p className="font-semibold mt-2">{selectedTruck.name}</p>
                <p>
                  ${selectedTruck.pricePerDay} × {days}
                </p>
                <p className="text-xl font-bold mt-2">Total: ${totalPrice}</p>
              </>
            ) : (
              <p className="text-gray-500 mt-2">Select a truck</p>
            )}
          </div>

          <button
            disabled={!selectedTruck || !days}
            className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:bg-gray-300"
          >
            Confirm Reservation
          </button>
        </div>
      </div>
    </section>
  );
}
