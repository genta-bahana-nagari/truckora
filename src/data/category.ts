import { categoryType } from "@/types/categoryType";
import { FaTruckPickup } from "react-icons/fa";
import { FaTruck, FaTrailer } from "react-icons/fa6";
import { AiFillTruck } from "react-icons/ai";
import { BsTruckFlatbed } from "react-icons/bs";
import { GiMineTruck } from "react-icons/gi";

export const category: categoryType[] = [
  {
    name: "Pickup Truck",
    description: "Perfect for small cargo and city deliveries.",
    icon: FaTruckPickup,
  },
  {
    name: "Box Truck",
    description: "Ideal for moving furniture and large packages.",
    icon: FaTruck,
  },
  {
    name: "Refrigerated Truck",
    description: "Temperature-controlled trucks for food and medical goods.",
    icon: AiFillTruck,
  },
  {
    name: "Flatbed Truck",
    description: "Best for transporting heavy equipment and materials.",
    icon: BsTruckFlatbed,
  },
  {
    name: "Dump Truck",
    description: "Used for construction and bulk material transport.",
    icon: GiMineTruck,
  },
  {
    name: "Trailer Truck",
    description: "For long-distance heavy cargo transportation.",
    icon: FaTrailer,
  },
];
