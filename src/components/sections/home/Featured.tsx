"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiTruck, HiArrowRight, HiStar, HiMapPin } from "react-icons/hi2";

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

  // Helper function to format price
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section
      id="featured"
      className="relative isolate overflow-hidden bg-linear-to-b from-gray-50 to-white py-20 sm:py-26"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand mb-6"
          >
            <HiTruck className="w-4 h-4" />
            <span>Premium Selection</span>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Our Available Fleet
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
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
          className="grid grid-cols-2 gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {featuredTrucks.map((truck) => (
            <motion.div
              key={truck.slug}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <Link href={`/trucks/${truck.slug}`} className="block">
                <div className="relative aspect-square w-full overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src={truck.images?.[0] || "/images/placeholder-truck.jpg"}
                    alt={truck.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />

                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
                    <HiStar className="w-3 h-3 text-white fill-white" />
                    <span>4.9</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-green-600/90 text-white text-xs px-2 py-1 rounded-md">
                    Available
                  </div>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-brand transition-colors line-clamp-1">
                      {truck.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {truck.brand} {truck.series}
                    </p>
                  </div>

                  <div className="mt-2 md:mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-base md:text-xl font-bold text-gray-900">
                        {formatPrice(truck.pricePerDay)}
                        <span className="text-xs font-normal text-gray-500">
                          /day
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-brand text-xs md:text-sm font-medium group-hover:gap-2 transition-all">
                      <span>Book</span>
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
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
          className="flex justify-center mt-12 lg:mt-16"
        >
          <Link
            href="/trucks"
            className="group inline-flex items-center gap-2 bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all hover:scale-105"
          >
            <span>View All Trucks</span>
            <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600/90 rounded-full"></span>
              Verified Trucks
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600/90 rounded-full"></span>
              Insurance Included
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600/90 rounded-full"></span>
              24/7 Support
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
