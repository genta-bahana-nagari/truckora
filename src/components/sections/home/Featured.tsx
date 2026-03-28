"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { trucks } from "@/data/truck/trucks";

export default function Featured() {
  const featuredTrucks = trucks.slice(0, 4);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="featured"
      className="relative isolate overflow-hidden justify-center bg-white py-20 sm:py-26"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-lg lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Our Available Fleet
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-sm lg:text-lg text-gray-600"
          >
            Explore our fleet of dependable trucks built to move your goods
            safely, efficiently, and on time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 lg:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
        >
          {featuredTrucks.map((truck) => (
            <motion.div
              key={truck.id}
              variants={item}
              className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm transition-shadow duration-200 hover:shadow-lg hover:ring-2 hover:ring-black/5"
            >
              <Link
                href={`/trucks/${truck.id}`}
                target="_blank"
                className="block"
              >
                <div className="aspect-square w-full bg-gray-200">
                  <Image
                    src={truck.image}
                    alt={truck.name}
                    width={400}
                    height={200}
                    className="h-full w-full object-cover object-center transition-opacity duration-200 group-hover:opacity-90"
                  />
                </div>

                <div className="mt-4 px-2 pb-4">
                  <h3 className="text-md font-medium text-gray-900">
                    {truck.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {truck.brand} - {truck.series}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5 }}
          className="flex flex-1 flex-col justify-center items-center my-12"
        >
          <a
            href="trucks"
            className="border border-black bg-black text-white px-4 py-2 text-sm md:px-5 md:text-base rounded-lg font-medium
            hover:bg-gray-800 hover:border-gray-800 transition duration-300"
          >
            See More Trucks
          </a>
        </motion.div>
      </div>
    </section>
  );
}
