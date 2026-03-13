"use client";

import Link from "next/link";
import Image from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { TruckRating } from "@/components/trucks/TruckRating";
import { TruckSpecs } from "@/components/trucks/TruckSpecs";

import { useParams } from "next/navigation";
import { trucks } from "@/data/trucks";

export default function TruckPage() {
  const params = useParams();
  const truck = trucks.find((t) => t.id === params?.id);

  if (!truck)
    return (
      <section className="min-h-screen flex flex-col justify-start bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Truck Not Found
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl">
              Oops! The truck you’re looking for doesn’t exist in our fleet.{" "}
              <br />
              Please return to our fleet page to explore other dependable trucks
              built to move your goods safely, efficiently, and on time.
            </p>
            <Link
              href="/trucks"
              className="inline-block mt-6 rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Back to Fleet
            </Link>
          </div>
        </div>
      </section>
    );

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <div className="font-medium text-gray-500 hover:text-gray-600 flex items-center gap-1">
                {truck.brand} <RiArrowRightDoubleFill />
                {truck.name}
              </div>
            </li>
          </ol>
        </nav>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-12 sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="relative w-full aspect-video md:aspect-[16/10] rounded-xl overflow-hidden">
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
        </div>
      </div>
    </div>
  );
}
