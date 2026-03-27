"use client";

import { FiMapPin, FiCalendar, FiPackage } from "react-icons/fi";

type Props = {
  pickup: string;
  dropoff: string;
  startDate: string;
  endDate: string;
  weight: number;
  onPickupChange: (val: string) => void;
  onDropoffChange: (val: string) => void;
  onStartDateChange: (val: string) => void;
  onEndDateChange: (val: string) => void;
  onWeightChange: (val: number) => void;
};

export default function ReservationForm({
  pickup,
  dropoff,
  startDate,
  endDate,
  weight,
  onPickupChange,
  onDropoffChange,
  onStartDateChange,
  onEndDateChange,
  onWeightChange,
}: Props) {
  return (
    <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 space-y-6">
      <h3 className="text-lg font-semibold text-gray-800">Trip Details</h3>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="text-sm font-medium text-gray-600">
            Pickup Location
          </label>
          <div className="relative mt-1">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              value={pickup}
              onChange={(e) => onPickupChange(e.target.value)}
              placeholder="City or address"
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm
              focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">
            Drop-off Location
          </label>
          <div className="relative mt-1">
            <FiMapPin className="absolute left-3 top-3 text-gray-400" />
            <input
              value={dropoff}
              onChange={(e) => onDropoffChange(e.target.value)}
              placeholder="City or address"
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm
              focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-gray-600">
              Start Date
            </label>
            <div className="relative mt-1">
              <FiCalendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="datetime-local"
                value={startDate}
                onChange={(e) => onStartDateChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm
                focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              End Date
            </label>
            <div className="relative mt-1">
              <FiCalendar className="absolute left-3 top-3 text-gray-400" />
              <input
                type="datetime-local"
                value={endDate}
                onChange={(e) => onEndDateChange(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm
                focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-600">
            Load Weight
          </label>
          <div className="relative mt-1">
            <FiPackage className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              value={weight}
              onChange={(e) => onWeightChange(Number(e.target.value))}
              placeholder="Enter weight"
              className="w-full pl-10 pr-16 py-2.5 rounded-lg border border-gray-200 text-sm
              focus:ring-2 focus:ring-gray-800 focus:border-transparent outline-none transition"
            />
            <span className="absolute right-3 top-2.5 text-sm text-gray-400">
              tons
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
