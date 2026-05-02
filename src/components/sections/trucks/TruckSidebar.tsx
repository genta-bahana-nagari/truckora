"use client";

import { motion } from "framer-motion";
import { HiChevronDown } from "react-icons/hi2";
import { TruckCategory, FuelType, TruckListing } from "@/types/truckType";
import { useState } from "react";

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
  onReset: () => void;
}

const truckClassOptions: {
  label: string;
  value: TruckListing["truckClass"];
  description: string;
}[] = [
  { label: "Light Duty", value: "light-duty", description: "Perfect for small loads & city deliveries" },
  { label: "Medium Duty", value: "medium-duty", description: "Ideal for regional logistics" },
  { label: "Heavy Duty", value: "heavy-duty", description: "Built for heavy cargo & long hauls" },
];

const categoryOptions: { label: string; value: TruckCategory; icon?: string }[] = [
  { label: "Box Truck", value: "box" },
  { label: "Refrigerated", value: "refrigerated" },
  { label: "Flatbed", value: "flatbed" },
  { label: "Dump Truck", value: "dump" },
  { label: "Trailer", value: "trailer" },
  { label: "Tanker", value: "tanker" },
  { label: "Car Carrier", value: "car-carrier" },
  { label: "Logging", value: "logging" },
];

const fuelOptions: { label: string; value: FuelType; icon: string }[] = [
  { label: "Diesel", value: "diesel", icon: "⛽" },
  { label: "Electric", value: "electric", icon: "⚡" },
];

const transmissionOptions: {
  label: string;
  value: TruckListing["transmission"];
  icon: string;
}[] = [
  { label: "Manual", value: "manual", icon: "🎮" },
  { label: "Automatic", value: "automatic", icon: "🔄" },
];

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-100 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-2 text-left font-semibold text-gray-900 hover:text-brand transition-colors"
      >
        <span>{title}</span>
        <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="pt-3 space-y-2">{children}</div>
      </motion.div>
    </div>
  );
}

interface FilterRadioProps {
  label: string;
  value: string;
  currentValue: string;
  onChange: (value: any) => void;
  description?: string;
}

function FilterRadio({ label, value, currentValue, onChange, description }: FilterRadioProps) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="radio"
        name={label}
        value={value}
        checked={currentValue === value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-0.5 w-4 h-4 text-brand focus:ring-brand/20 border-gray-300"
      />
      <div className="flex-1">
        <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors">
          {label}
        </span>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5">{description}</p>
        )}
      </div>
    </label>
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
  onReset,
}: TruckSidebarProps) {
  return (
    <aside className="sticky top-24 h-fit rounded-2xl bg-white p-6 shadow-lg border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Filters</h3>
        <button
          onClick={onReset}
          className="text-sm text-brand hover:text-brand/80 font-medium transition-colors"
        >
          Reset all
        </button>
      </div>

      <div className="space-y-4">
        <FilterSection title="Truck Class" defaultOpen>
          <FilterRadio
            label="All Classes"
            value="all"
            currentValue={truckClass}
            onChange={setTruckClass}
          />
          {truckClassOptions.map((opt) => (
            <FilterRadio
              key={opt.value}
              label={opt.label}
              value={opt.value}
              currentValue={truckClass}
              onChange={setTruckClass}
              description={opt.description}
            />
          ))}
        </FilterSection>

        <FilterSection title="Category">
          <FilterRadio
            label="All Categories"
            value="all"
            currentValue={category}
            onChange={setCategory}
          />
          {categoryOptions.map((opt) => (
            <FilterRadio
              key={opt.value}
              label={opt.label}
              value={opt.value}
              currentValue={category}
              onChange={setCategory}
            />
          ))}
        </FilterSection>

        <FilterSection title="Fuel Type">
          <FilterRadio
            label="All Types"
            value="all"
            currentValue={fuelType}
            onChange={setFuelType}
          />
          {fuelOptions.map((opt) => (
            <FilterRadio
              key={opt.value}
              label={opt.label}
              value={opt.value}
              currentValue={fuelType}
              onChange={setFuelType}
            />
          ))}
        </FilterSection>

        <FilterSection title="Transmission">
          <FilterRadio
            label="All Types"
            value="all"
            currentValue={transmission}
            onChange={setTransmission}
          />
          {transmissionOptions.map((opt) => (
            <FilterRadio
              key={opt.value}
              label={opt.label}
              value={opt.value}
              currentValue={transmission}
              onChange={setTransmission}
            />
          ))}
        </FilterSection>
      </div>

      {/* Price Range Hint */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center">
          Prices start from <span className="font-semibold text-gray-700">$50/day</span>
        </p>
      </div>
    </aside>
  );
}