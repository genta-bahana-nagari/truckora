import { TruckListing } from "@/types/truckType";
import { TruckCard } from "./TruckCard";

export function TruckGrid({ trucks }: { trucks: TruckListing[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {trucks.map((truck) => (
        <TruckCard key={truck.id} truck={truck} />
      ))}
    </div>
  );
}