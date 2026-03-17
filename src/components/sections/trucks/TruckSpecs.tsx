export function TruckSpecs({ truck }: { truck: (typeof trucks)[0] }) {
  const highlights = [
    `${(truck.truckClass + " " + truck.category)
      .replace("-", " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")}`,
    `Maximum Capacity: ${truck.capacityTons}-ton`,
    `Transmission: ${truck.transmission.charAt(0).toUpperCase() + truck.transmission.slice(1)}`,
    `Release Year: ${truck.year}`,
    truck.driverIncluded ? "Driver included" : "No driver included",
    `Fuel: ${truck.fuelType.charAt(0).toUpperCase() + truck.fuelType.slice(1)}`,
  ];

  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
      <div className="mt-4">
        <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
          {highlights.map((highlight) => (
            <li key={highlight} className="text-gray-400">
              <span className="text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
