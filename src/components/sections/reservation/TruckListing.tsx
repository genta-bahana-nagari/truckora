"use client";

type Truck = {
  id: string;
  name: string;
  capacityTons: number;
  category: string;
  pricePerDay: number;
  available: boolean;
};

type Props = {
  trucks: Truck[];
  selectedTruckId: string | null;
  onSelect: (id: string) => void;
};

export default function TruckListing({
  trucks,
  selectedTruckId,
  onSelect,
}: Props) {
  if (trucks.length === 0) {
    return <p className="text-gray-500">No trucks available</p>;
  }

  return (
    <div className="max-h-96 overflow-y-auto rounded-xl py-2 space-y-3">
      {trucks.map((truck) => (
        <div
          key={truck.id}
          onClick={() => onSelect(truck.id)}
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
  );
}