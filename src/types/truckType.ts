export type TruckCategory =
  | "box"
  | "refrigerated"
  | "flatbed"
  | "dump"
  | "trailer"
  | "tanker"
  | "car-carrier"
  | "logging";

export type FuelType = "diesel" | "electric";

export type TruckListing = {
  id: string;
  name: string;
  
  brand: string;
  series: string;
  description: string;
  truckClass: "light-duty" | "medium-duty" | "heavy-duty";
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
