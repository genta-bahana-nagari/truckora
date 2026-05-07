// src/components/sections/trucks/TruckCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiStar, HiMapPin, HiCalendar, HiArrowRight } from "react-icons/hi2";
import { TruckListing } from "@/types/truckType";

export function TruckCard({ truck }: { truck: TruckListing }) {
  const classCat = (truck.truckClass + " " + truck.category)
    .replace(/-/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Use the first image as the main thumbnail
  const mainImage = truck.images?.[0] || "/images/placeholder-truck.jpg";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/trucks/${truck.slug}`}
        className="group relative block rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
          <Image
            src={mainImage}
            alt={truck.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {truck.images.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <span>{truck.images.length}</span>
            </div>
          )}

          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <HiStar className="w-3 h-3 text-white fill-white" />
            <span>{truck.rating}</span>
          </div>

          <div className="absolute top-3 right-3 bg-green-600 text-white text-xs px-2 py-1 rounded-md">
            Available
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1">
              {truck.name}
            </h3>
            <p className="text-sm text-gray-500">
              {truck.brand} {truck.series}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {classCat}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {truck.transmission}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-500 mb-1 md:mb-3">
            <div className="flex items-center gap-1">
              <HiMapPin className="w-3 h-3" />
              <span>Free pickup</span>
            </div>
            <div className="flex items-center gap-1">
              <HiCalendar className="w-3 h-3" />
              <span>Flexible returns</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div>
              <p className="text-base md:text-xl font-bold text-gray-900">
                {formatPrice(truck.pricePerDay)}
                <span className="text-xs font-normal text-gray-500">/day</span>
              </p>
            </div>
            <div className="flex items-center gap-1 text-brand text-xs md:text-sm font-medium group-hover:gap-2 transition-all">
              <span>Book</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
