import Link from "next/link";
import Image from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";

import { TruckRating } from "@/components/sections/trucks/TruckRating";
import { TruckSpecs } from "@/components/sections/trucks/TruckSpecs";
import { TruckReviews } from "@/components/sections/trucks/TruckReviews";

import { TruckMotion } from "./TruckMotion";
import { trucks } from "@/data/truck/trucks";

type Props = {
  params: {
    slug: string;
  };
};

export default async function TruckPage({ params }: Props) {
  const { slug } = await params;

  const truck = trucks.find((t) => t.slug === slug);

  if (!truck) {
    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-20 sm:py-26 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-gray-700">Sorry,</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Truck Not Found
          </h1>
          <p className="max-w-5xl mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Oops! The truck you’re looking for doesn’t exist in our fleet.
            Please return to our fleet page to explore other dependable trucks
            built to move your goods safely and efficiently.
          </p>
          <Link
            href="/trucks"
            className="inline-block mt-6 rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Back to Fleet
          </Link>
        </div>
      </main>
    );
  }

  return (
    <TruckMotion>
      <div className="bg-white">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
        >
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/trucks" className="hover:text-gray-700 transition">
                Trucks
              </Link>
            </li>
            <RiArrowRightDoubleFill className="text-gray-400" />
            <li>
              <span className="hover:text-gray-700">{truck.brand}</span>
            </li>
            <RiArrowRightDoubleFill className="text-gray-400" />
            <li className="font-medium text-gray-900">{truck.name}</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-2xl px-4 pt-8 pb-12 sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="relative w-full aspect-video md:aspect-16/10 rounded-xl overflow-hidden">
            <Image
              src={truck.image}
              alt={truck.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {truck.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              ${truck.pricePerDay}
            </p>
            <TruckRating truck={truck} />
            <div className="mt-6 flex flex-col gap-3">
              <button className="cursor-pointer w-full rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition duration-300">
                Book This Truck
              </button>
              <Link
                href="/contact"
                className="cursor-pointer w-full text-center rounded-lg border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50 transition"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-6 text-sm text-gray-600 space-y-1">
              <p>✔ Available for immediate booking</p>
              <p>✔ Flexible rental duration</p>
              <p>✔ Professional drivers available</p>
            </div>
            <p className="mt-6 text-xs text-gray-500">
              Trusted by 500+ logistics companies
            </p>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{truck.description}</p>
              </div>
            </div>
            <TruckSpecs truck={truck} />
          </div>

          <div className="py-5 lg:col-span-2">
            <TruckReviews truckId={truck.slug} />
          </div>
        </div>
      </div>
    </TruckMotion>
  );
}
