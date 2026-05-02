"use client";

import { TruckListing } from "@/types/truckType";
import { 
  RiSpeedLine, 
  RiGasStationLine, 
  RiCalendarLine, 
  RiUserLine,
  RiWeightLine,
  RiRoadMapLine
} from "react-icons/ri";

export function TruckSpecs({ truck }: { truck: TruckListing }) {
  const specs = [
    { 
      icon: RiWeightLine, 
      label: "Capacity", 
      value: `${truck.capacityTons} tons`,
      description: "Maximum load capacity"
    },
    { 
      icon: RiSpeedLine, 
      label: "Type", 
      value: (truck.truckClass + " " + truck.category)
        .replace(/-/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: "Vehicle classification"
    },
    { 
      icon: RiGasStationLine, 
      label: "Fuel Type", 
      value: truck.fuelType.charAt(0).toUpperCase() + truck.fuelType.slice(1),
      description: "Fuel efficiency optimized"
    },
    { 
      icon: RiRoadMapLine, 
      label: "Transmission", 
      value: truck.transmission.charAt(0).toUpperCase() + truck.transmission.slice(1),
      description: "Smooth driving experience"
    },
    { 
      icon: RiCalendarLine, 
      label: "Year", 
      value: truck.year,
      description: "Model year"
    },
    { 
      icon: RiUserLine, 
      label: "Driver", 
      value: truck.driverIncluded ? "Included" : "Optional",
      description: truck.driverIncluded ? "Professional driver provided" : "Self-drive available"
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {specs.map((spec) => {
          const Icon = spec.icon;
          return (
            <div
              key={spec.label}
              className="group p-4 rounded-xl bg-gray-50 hover:bg-brand/5 transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white group-hover:bg-brand/10 transition-colors">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{spec.label}</p>
                  <p className="font-semibold text-gray-900 mt-0.5">{spec.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{spec.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}