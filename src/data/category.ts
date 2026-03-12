import { categoryType } from "@/types/categoryType";
import { FaTruck, FaTrailer } from "react-icons/fa6";
import { AiFillTruck } from "react-icons/ai";
import { BsTruckFlatbed } from "react-icons/bs";
import { GiMineTruck, GiOilDrum, GiWoodPile } from "react-icons/gi";
import { MdDirectionsCar } from "react-icons/md";

export const categories: categoryType[] = [
  {
    slug: "box",
    name: "Box Truck",
    description: "Ideal for moving furniture and large packages.",
    icon: FaTruck,
  },
  {
    slug: "refrigerated",
    name: "Refrigerated Truck",
    description: "Temperature-controlled trucks for food and medical goods.",
    icon: AiFillTruck,
  },
  {
    slug: "flatbed",
    name: "Flatbed Truck",
    description: "Best for transporting heavy equipment and materials.",
    icon: BsTruckFlatbed,
  },
  {
    slug: "dump",
    name: "Dump Truck",
    description: "Used for construction and bulk material transport.",
    icon: GiMineTruck,
  },
  {
    slug: "trailer",
    name: "Trailer Truck",
    description: "For long-distance heavy cargo transportation.",
    icon: FaTrailer,
  },
  {
    slug: "tanker",
    name: "Tanker Truck",
    description: "Designed to transport liquids such as fuel, chemicals, or water.",
    icon: GiOilDrum,
  },
  {
    slug: "carrier",
    name: "Car Carrier",
    description: "Specialized trucks for transporting multiple vehicles safely.",
    icon: MdDirectionsCar,
  },
  {
    slug: "logging",
    name: "Logging Truck",
    description: "Built for hauling timber and large logs from forests.",
    icon: GiWoodPile,
  },
];