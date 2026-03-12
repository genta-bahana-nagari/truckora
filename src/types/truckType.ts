export type TruckCategory =
  | "box"
  | "refrigerated"
  | "flatbed"
  | "dump"
  | "trailer";

export type FuelType = "diesel" | "electric";

export type TruckListing = {
  id: string;
  name: string;
  brand: string;
  category: TruckCategory;
  capacityTons: number;
  year: number;
  transmission: "manual" | "automatic";
  pricePerDay: number;
  image: string;
  available: boolean;
  rating: number;
  reviews: number;
  driverIncluded: boolean;
  fuelType: FuelType;
};