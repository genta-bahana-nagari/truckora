"use client";

import { category } from "@/data/category";

const TruckCategories = () => {
  return (
    <section
      id="truck-categories"
      className="relative isolate overflow-hidden justify-center bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Truck Categories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the right truck for your transportation needs
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {category.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.name}
                className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition cursor-pointer"
              >
                <Icon className="text-4xl text-black mb-4" />

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.name}
                </h3>

                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TruckCategories;
