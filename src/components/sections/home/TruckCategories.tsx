"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiTruck } from "react-icons/hi2";
import { categories } from "@/data/truck/category";

const TruckCategories = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="truck-categories"
      className="relative isolate overflow-hidden bg-linearto-b from-white to-gray-50 py-20 sm:py-26"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
            <span>Browse by Type</span>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Truck Categories
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Choose the right truck for your transportation needs
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {categories.map((category, idx) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.slug}
                variants={item}
                onHoverStart={() => setHoveredIndex(idx)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <Link href={`/trucks?category=${category.slug}`}>
                  <div className="relative h-full rounded-2xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">

                    {/* Icon Container */}
                    <div className="relative">
                      <div className="mb-4 inline-flex rounded-xl bg-linearto-br from-brand/10 to-brand/5 p-3 group-hover:from-brand group-hover:to-brand/80 transition-all duration-300">
                        <Icon className="text-3xl text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-brand transition-colors duration-300">
                        {category.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Learn More Link */}
                      <div className="mt-4 flex items-center gap-1 text-brand opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                        <span className="text-sm font-medium">Learn More</span>
                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="rounded-2xl bg-linearto-r from-brand/5 to-transparent p-8 max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
              Need help choosing the right truck?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find the perfect vehicle for your needs
            </p>
            <Link
              href="/company/contact"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all group"
            >
              <span>Contact Our Experts</span>
              <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-900">{categories.length}+</p>
              <p className="text-sm text-gray-500">Truck Categories</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">100+</p>
              <p className="text-sm text-gray-500">Available Trucks</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">24/7</p>
              <p className="text-sm text-gray-500">Customer Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TruckCategories;