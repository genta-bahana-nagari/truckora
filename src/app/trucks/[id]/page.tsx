"use client";

import Link from "next/link";

import { useParams } from "next/navigation";
import { trucks } from "@/data/trucks";

export default function TruckPage() {
  const params = useParams();
  const truck = trucks.find((t) => t.id === params?.id);

  if (!truck)
    return (
      <section className="min-h-screen flex flex-col justify-center bg-white py-32">
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
    <div>
      <h1>{truck.name}</h1>
      <p>Brand: {truck.brand}</p>
      <p>Series: {truck.series}</p>
      <p>Price: ${truck.pricePerDay}/day</p>
    </div>
  );
}
