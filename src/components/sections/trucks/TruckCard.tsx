import Link from "next/link";
import Image from "next/image";

import { TruckListing } from "@/types/truckType";

export function TruckCard({ truck }: { truck: TruckListing }) {
  const classCat = [
    `${(truck.truckClass + " " + truck.category)
      .replace("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`,
  ];

  return (
    <Link
      href={`trucks/${truck.id}`}
      key={truck.id}
      className="mx-4 my-auto md:my-6 md:mx-0 md:my-0 group relative cursor-pointer rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2
        hover:ring-black/5 transition-all duration-200"
    >
      <div className="aspect-square w-full overflow-hidden rounded-t-2xl bg-gray-200">
        <Image
          src={truck.image}
          alt={truck.name}
          width={400}
          height={200}
          className="group-hover:opacity-75 h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity duration-200"
        />
      </div>

      <div className="mt-4 flex justify-between px-4 mb-4">
        <div>
          <h3 className="text-sm text-gray-700">{truck.name}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {truck.brand} {truck.series}
          </p>
          <p className="mt-1 text-sm text-gray-500">{classCat}</p>
        </div>
        <p className="text-sm font-semibold text-gray-900">
          ${truck.pricePerDay} / day
        </p>
      </div>
    </Link>
  );
}
