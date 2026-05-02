export type TruckClass = "light-duty" | "medium-duty" | "heavy-duty";
export type TruckClassFilter = "all" | TruckClass;

export type TruckCategory = "box" | "refrigerated" | "flatbed" | "dump" | "trailer" | "tanker" | "car-carrier" | "logging";
export type TruckCategoryFilter = "all" | TruckCategory;

export type FuelType = "diesel" | "electric";
export type FuelTypeFilter = "all" | FuelType;

export type Transmission = "manual" | "automatic";
export type TransmissionFilter = "all" | Transmission;

export type TruckListing = {
  slug: string;
  name: string;

  brand: string;
  series: string;
  description: string;
  truckClass: TruckClass;
  category: TruckCategory;
  capacityTons: number;
  year: number;

  transmission: Transmission;
  pricePerDay: number;
  images: string[];
  available: boolean;
  rating: number;
  reviews: number;
  driverIncluded: boolean;
  fuelType: FuelType;
};
