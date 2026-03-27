"use client";

import { useState } from "react";
import { trucks } from "@/data/truck/trucks";

export default function ReservePage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weight, setWeight] = useState(0);

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
    return true;
  });

  const selectedTruck = filteredTrucks.find((t) => t.id === selectedTruckId);

  const totalPrice =
    selectedTruck && days > 0 ? selectedTruck.pricePerDay * days : 0;

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Reserve Your Truck</h2>
        <p className="text-gray-500 mt-2">Plan your logistics in seconds</p>
      </div>

      <div className="border rounded-xl p-6 space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Pickup Location"
            onChange={(e) => setPickup(e.target.value)}
            className="input"
          />

          <input
            placeholder="Drop-off Location"
            onChange={(e) => setDropoff(e.target.value)}
            className="input"
          />

          <input
            type="datetime-local"
            onChange={(e) => setStartDate(e.target.value)}
            className="input"
          />

          <input
            type="datetime-local"
            onChange={(e) => setEndDate(e.target.value)}
            className="input"
          />

          <input
            type="number"
            placeholder="Load Weight (tons)"
            onChange={(e) => setWeight(Number(e.target.value))}
            className="input md:col-span-2"
          />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-lg">Select a Truck</h3>

        <div className="overflow-hidden">
          
        </div>
        {filteredTrucks.length === 0 ? (
          <p className="text-gray-500">No trucks available</p>
        ) : (
          <div className="max-h-96 overflow-y-auto rounded-xl py-2 space-y-3">
            {filteredTrucks.map((truck) => (
              <div
                key={truck.id}
                onClick={() => setSelectedTruckId(truck.id)}
                className={`p-4 border rounded-xl cursor-pointer transition
                  ${
                    selectedTruckId === truck.id
                      ? "border-black bg-gray-50"
                      : "border-gray-200"
                  }
                `}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">{truck.name}</p>
                    <p className="text-sm text-gray-500">
                      {truck.capacityTons} tons • {truck.category}
                    </p>
                  </div>

                  <p className="font-bold">${truck.pricePerDay}/day</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="border rounded-xl p-6 space-y-2 bg-gray-50">
        <p>Duration: {days} days</p>

        {selectedTruck ? (
          <>
            <p className="font-semibold">{selectedTruck.name}</p>
            <p>
              ${selectedTruck.pricePerDay} × {days}
            </p>
            <p className="text-xl font-bold">Total: ${totalPrice}</p>
          </>
        ) : (
          <p className="text-gray-500">Select a truck to see price</p>
        )}
      </div>

      <button
        disabled={!selectedTruck || !days || !pickup || !dropoff}
        className="w-full bg-gray-800 hover:bg-gray-900 hover:cursor-pointer transition duration-300 text-white py-3 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Confirm Reservation
      </button>
    </section>
  );
}
