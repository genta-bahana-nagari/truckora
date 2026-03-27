"use client";

import { TruckListing } from "@/types/truckType";
import Image from "next/image";

export function TruckCarousel({
  trucks,
  selectedTruckId,
  onSelect,
}: {
  trucks: TruckListing[];
  selectedTruckId: string | null;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">Select a Truck</h3>

      <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory py-2">
        {trucks.map((truck) => (
          <div
            key={truck.id}
            onClick={() => onSelect(truck.id)}
            className={`min-w-[260px] max-w-[260px] snap-start rounded-xl border cursor-pointer transition
              ${
                selectedTruckId === truck.id
                  ? "border-black bg-gray-50"
                  : "border-gray-200"
              }
            `}
          >
            <div className="h-40 w-full overflow-hidden rounded-t-xl">
              <Image
                src={truck.image}
                alt={truck.name}
                width={300}
                height={200}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="p-3">
              <p className="font-semibold text-sm">{truck.name}</p>
              <p className="text-xs text-gray-500">
                {truck.capacityTons} tons • {truck.category}
              </p>
              <p className="mt-2 font-bold text-sm">
                ${truck.pricePerDay}/day
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}