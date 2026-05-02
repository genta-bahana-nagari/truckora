"use client";

import { TruckListing } from "@/types/truckType";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export function TruckRating({ truck }: { truck: TruckListing }) {
  const rating = truck.rating;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="mt-4">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="bg-green-600 text-white px-2 py-0.5 rounded-md text-sm font-semibold">
            {rating.toFixed(1)}
          </div>
          <div className="flex items-center gap-0.5">
            {[...Array(totalStars)].map((_, index) => {
              if (index < fullStars) {
                return <BsStarFill key={index} className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
              } else if (index === fullStars && hasHalfStar) {
                return <BsStarHalf key={index} className="w-4 h-4 text-yellow-400 fill-yellow-400" />;
              } else {
                return <BsStar key={index} className="w-4 h-4 text-gray-300" />;
              }
            })}
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Based on <span className="font-semibold text-gray-700">{truck.reviews}</span> customer reviews
        </p>
      </div>
    </div>
  );
}