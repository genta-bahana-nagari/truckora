"use client";

import { TruckListing } from "@/types/truckType";
import { TruckCard } from "./TruckCard";
import { motion } from "framer-motion";

export function TruckGrid({ trucks }: { trucks: TruckListing[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {trucks.map((truck, index) => (
        <motion.div
          key={truck.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <TruckCard truck={truck} />
        </motion.div>
      ))}
    </div>
  );
}