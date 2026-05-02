"use client";

import { useDeferredValue, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiAdjustmentsHorizontal, HiXMark } from "react-icons/hi2";

import { trucks } from "@/data/truck/trucks";
import { TruckGrid } from "@/components/sections/trucks/TruckGrid";
import { TruckSidebar } from "@/components/sections/trucks/TruckSidebar";
import {
  FuelTypeFilter,
  TransmissionFilter,
  TruckCategoryFilter,
  TruckClassFilter,
} from "@/types/truckType";

type SortOption = "price-asc" | "price-desc" | "name-asc";

export default function Trucks() {
  const [truckClass, setTruckClass] = useState<TruckClassFilter>("all");
  const [category, setCategory] = useState<TruckCategoryFilter>("all");
  const [fuelType, setFuelType] = useState<FuelTypeFilter>("all");
  const [transmission, setTransmission] = useState<TransmissionFilter>("all");
  const [search, setSearch] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("price-asc");

  const deferredSearch = useDeferredValue(search);

  // Count active filters
  const activeFiltersCount = [
    truckClass !== "all",
    category !== "all",
    fuelType !== "all",
    transmission !== "all",
  ].filter(Boolean).length;

  // Reset filters
  const resetFilters = () => {
    setTruckClass("all");
    setCategory("all");
    setFuelType("all");
    setTransmission("all");
    setSearch("");
  };

  // Close mobile filters on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileFiltersOpen) {
        setMobileFiltersOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileFiltersOpen]);

  // Prevent body scroll when mobile filters are open
  useEffect(() => {
    if (mobileFiltersOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileFiltersOpen]);

  let filteredTrucks = trucks.filter((truck) => {
    const matchClass = truckClass === "all" || truck.truckClass === truckClass;
    const matchCategory = category === "all" || truck.category === category;
    const matchFuel = fuelType === "all" || truck.fuelType === fuelType;
    const matchTransmission =
      transmission === "all" || truck.transmission === transmission;

    const matchSearch =
      truck.name.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.brand.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.series.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.category.toLowerCase().includes(deferredSearch.toLowerCase()) ||
      truck.truckClass.toLowerCase().includes(deferredSearch.toLowerCase());

    return matchClass && matchCategory && matchFuel && matchTransmission && matchSearch;
  });

  // Apply sorting
  filteredTrucks = [...filteredTrucks].sort((a, b) => {
    if (sortBy === "price-asc") return a.pricePerDay - b.pricePerDay;
    if (sortBy === "price-desc") return b.pricePerDay - a.pricePerDay;
    return a.name.localeCompare(b.name);
  });

  // Handle sort change with proper typing
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
  };

  return (
    <>
      <section className="relative isolate bg-linear-to-b from-gray-50 to-white min-h-screen py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-12"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Our Available Fleet
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our fleet of dependable trucks built to move your goods
              safely, efficiently, and on time.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <div className="mb-6 lg:mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search trucks by name, brand, category..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm
                    focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand
                    transition-all duration-200 shadow-sm"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="sm:w-48">
                <select
                  value={sortBy}
                  onChange={handleSortChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm
                    focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand
                    transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                </select>
              </div>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  border border-gray-200 bg-white text-gray-700 hover:bg-gray-50
                  transition-all duration-200 shadow-sm"
              >
                <HiAdjustmentsHorizontal className="w-5 h-5" />
                <span>Filters</span>
                {activeFiltersCount > 0 && (
                  <span className="ml-1 rounded-full bg-brand px-2 py-0.5 text-xs text-white">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>

            {/* Active Filters Tags */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {truckClass !== "all" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    Class: {truckClass.replace("-", " ")}
                    <button onClick={() => setTruckClass("all")} className="hover:text-brand/70">
                      <HiXMark className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {category !== "all" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    Category: {category.replace("-", " ")}
                    <button onClick={() => setCategory("all")} className="hover:text-brand/70">
                      <HiXMark className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {fuelType !== "all" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    Fuel: {fuelType}
                    <button onClick={() => setFuelType("all")} className="hover:text-brand/70">
                      <HiXMark className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {transmission !== "all" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                    Transmission: {transmission}
                    <button onClick={() => setTransmission("all")} className="hover:text-brand/70">
                      <HiXMark className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-xs text-gray-500 hover:text-brand transition-colors"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <TruckSidebar
                truckClass={truckClass}
                setTruckClass={setTruckClass}
                category={category}
                setCategory={setCategory}
                fuelType={fuelType}
                setFuelType={setFuelType}
                transmission={transmission}
                setTransmission={setTransmission}
                onReset={resetFilters}
              />
            </motion.aside>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="mb-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-900">{filteredTrucks.length}</span>{" "}
                  of <span className="font-semibold text-gray-900">{trucks.length}</span> trucks
                </p>
              </div>

              <AnimatePresence mode="wait">
                {filteredTrucks.length === 0 ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-20"
                  >
                    <div className="text-6xl mb-4">🚛</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No trucks found</h3>
                    <p className="text-gray-500 mb-4">
                      Try adjusting your filters or search criteria
                    </p>
                    <button
                      onClick={resetFilters}
                      className="text-brand font-medium hover:underline"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="results"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <TruckGrid trucks={filteredTrucks} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Mobile Layout - Results only */}
          <div className="lg:hidden">
            <div className="mb-4">
              <p className="text-sm text-gray-500">
                Found <span className="font-semibold text-gray-900">{filteredTrucks.length}</span> trucks
              </p>
            </div>

            <AnimatePresence mode="wait">
              {filteredTrucks.length === 0 ? (
                <motion.div
                  key="empty-mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <div className="text-6xl mb-4">🚛</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No trucks found</h3>
                  <p className="text-gray-500 mb-4">Try adjusting your filters</p>
                  <button onClick={resetFilters} className="text-brand font-medium hover:underline">
                    Clear all filters
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="results-mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <TruckGrid trucks={filteredTrucks} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden shadow-xl overflow-y-auto"
            >
              <div className="sticky top-0 bg-white border-b border-gray-100 p-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <HiXMark className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4">
                <TruckSidebar
                  truckClass={truckClass}
                  setTruckClass={setTruckClass}
                  category={category}
                  setCategory={setCategory}
                  fuelType={fuelType}
                  setFuelType={setFuelType}
                  transmission={transmission}
                  setTransmission={setTransmission}
                  onReset={resetFilters}
                />

                <div className="sticky bottom-0 bg-white border-t border-gray-100 pt-4 mt-4 flex gap-3">
                  <button
                    onClick={resetFilters}
                    className="flex-1 px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex-1 px-4 py-2 rounded-xl bg-linear-to-r from-brand to-brand/80 text-white font-medium hover:shadow-md transition-all"
                  >
                    Show Results
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}