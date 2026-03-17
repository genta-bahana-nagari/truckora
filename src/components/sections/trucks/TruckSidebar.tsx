"use client";

interface TruckSidebarProps {
  truckClass: string;
  setTruckClass: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  fuelType: string;
  setFuelType: (value: string) => void;
  transmission: string;
  setTransmission: (value: string) => void;
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

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Truck Class</label>
        <select
          value={truckClass}
          onChange={(e) => setTruckClass(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition"
        >
          <option value="all">All</option>
          <option value="light-duty">Light Duty</option>
          <option value="heavy-duty">Heavy Duty</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition"
        >
          <option value="all">All</option>
          <option value="box">Box</option>
          <option value="car-carrier">Car Carrier</option>
          <option value="dump">Dump</option>
          <option value="flatbed">Flatbed</option>
          <option value="logging">Logging</option>
          <option value="refrigerated">Refrigreated</option>
          <option value="tanker">Tanker</option>
          <option value="trailer">Trailer</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Fuel Type</label>
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition"
        >
          <option value="all">All</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-600">Transmission Type</label>
        <select
          value={transmission}
          onChange={(e) => setTransmission(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition"
        >
          <option value="all">All</option>
          <option value="manual">Manual</option>
          <option value="automatic">Automatic</option>
        </select>
      </div>
    </aside>
  );
}
