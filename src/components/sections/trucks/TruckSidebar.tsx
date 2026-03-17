"use client";

import { TruckCategory, FuelType, TruckListing } from "@/types/truckType";

type FilterValue<T extends string> = T | "all";

interface TruckSidebarProps {
  truckClass: FilterValue<TruckListing["truckClass"]>;
  setTruckClass: (value: FilterValue<TruckListing["truckClass"]>) => void;

  category: FilterValue<TruckListing["category"]>;
  setCategory: (value: FilterValue<TruckListing["category"]>) => void;

  fuelType: FilterValue<TruckListing["fuelType"]>;
  setFuelType: (value: FilterValue<TruckListing["fuelType"]>) => void;

  transmission: FilterValue<TruckListing["transmission"]>;
  setTransmission: (value: FilterValue<TruckListing["transmission"]>) => void;
}

const truckClassOptions: {
  label: string;
  value: TruckListing["truckClass"];
}[] = [
  { label: "Light Duty", value: "light-duty" },
  { label: "Medium Duty", value: "medium-duty" },
  { label: "Heavy Duty", value: "heavy-duty" },
];

const categoryOptions: { label: string; value: TruckCategory }[] = [
  { label: "Box", value: "box" },
  { label: "Refrigerated", value: "refrigerated" },
  { label: "Flatbed", value: "flatbed" },
  { label: "Dump", value: "dump" },
  { label: "Trailer", value: "trailer" },
  { label: "Tanker", value: "tanker" },
  { label: "Car Carrier", value: "car-carrier" },
  { label: "Logging", value: "logging" },
];

const fuelOptions: { label: string; value: FuelType }[] = [
  { label: "Diesel", value: "diesel" },
  { label: "Electric", value: "electric" },
];

const transmissionOptions: {
  label: string;
  value: TruckListing["transmission"];
}[] = [
  { label: "Manual", value: "manual" },
  { label: "Automatic", value: "automatic" },
];

interface FilterSelectProps<T extends string> {
  label: string;
  value: T | "all";
  onChange: (value: T | "all") => void;
  options: { label: string; value: T }[];
}

function FilterSelect<T extends string>({
  label,
  value,
  onChange,
  options,
}: FilterSelectProps<T>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-600">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T | "all")}
        className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                   focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition"
      >
        <option value="all">All</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function TruckSidebar({
  truckClass,
  setTruckClass,
  category,
  setCategory,
  fuelType,
  setFuelType,
  transmission,
  setTransmission,
}: TruckSidebarProps) {
  return (
    <aside className="sticky h-fit rounded-2xl p-6 shadow-lg border border-gray-100 space-y-6">
      <h3 className="text-lg font-semibold text-gray-900">Filter Trucks</h3>

      <FilterSelect
        label="Truck Class"
        value={truckClass}
        onChange={setTruckClass}
        options={truckClassOptions}
      />

      <FilterSelect
        label="Category"
        value={category}
        onChange={setCategory}
        options={categoryOptions}
      />

      <FilterSelect
        label="Fuel Type"
        value={fuelType}
        onChange={setFuelType}
        options={fuelOptions}
      />

      <FilterSelect
        label="Transmission Type"
        value={transmission}
        onChange={setTransmission}
        options={transmissionOptions}
      />
    </aside>
  );
}
