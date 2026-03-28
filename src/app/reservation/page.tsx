"use client";

import { useState } from "react";
import { trucks } from "@/data/truck/trucks";
import TruckListing from "@/components/sections/reservation/TruckListing";
import ReservationForm from "@/components/sections/reservation/ReservationForm";

export default function ReservePage() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weight, setWeight] = useState(0);

  const [showConfirm, setShowConfirm] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

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
    <section className="bg-white py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Reserve Your Truck</h2>
        <p className="text-gray-500 mt-2">Plan your logistics in seconds</p>
      </div>

      <div className="mx-4 space-y-8">
        <ReservationForm
          pickup={pickup}
          dropoff={dropoff}
          startDate={startDate}
          endDate={endDate}
          weight={weight}
          onPickupChange={setPickup}
          onDropoffChange={setDropoff}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onWeightChange={setWeight}
        />

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">Select a Truck</h3>

          <TruckListing
            trucks={filteredTrucks}
            selectedTruckId={selectedTruckId}
            onSelect={setSelectedTruckId}
          />
        </div>

        <div className="shadow-lg rounded-xl p-6 space-y-2 bg-gray-50">
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
          onClick={() => setShowConfirm(true)}
          disabled={!selectedTruck || !days || !pickup || !dropoff}
          className="w-full bg-gray-800 hover:bg-gray-900 hover:cursor-pointer transition duration-300 text-white py-3 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Confirm Reservation
        </button>
      </div>
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg space-y-4">
            <h3 className="text-lg font-semibold">Confirm Reservation</h3>

            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>From:</strong> {pickup}
              </p>
              <p>
                <strong>To:</strong> {dropoff}
              </p>
              <p>
                <strong>Duration:</strong> {days} days
              </p>
              <p>
                <strong>Truck:</strong> {selectedTruck?.name}
              </p>
              <p>
                <strong>Total:</strong> ${totalPrice}
              </p>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="cursor-pointer px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100 duration-300"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowConfirm(false);
                  setShowThanks(true);
                }}
                className="cursor-pointer px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-900 duration-300"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      {showThanks && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg space-y-5 text-center">
            <div className="flex justify-center">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                <span className="text-green-600 text-xl">✓</span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800">
              Reservation Confirmed
            </h3>

            <p className="text-sm text-gray-600">
              Your truck booking has been successfully submitted.
            </p>

            <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-3 space-y-1">
              <p>
                <strong>Route:</strong> {pickup} → {dropoff}
              </p>
              <p>
                <strong>Truck:</strong> {selectedTruck?.name}
              </p>
              <p>
                <strong>Total:</strong> ${totalPrice}
              </p>
            </div>

            <p className="text-xs text-gray-500">
              Our team will contact you shortly with further details.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowThanks(false)}
                className="w-full cursor-pointer px-4 py-2.5 rounded-lg bg-gray-800 text-white hover:bg-gray-900 duration-300"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}