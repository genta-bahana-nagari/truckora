"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiTruck } from "react-icons/hi";

export default function CTA() {
  return (
    <section
      id="cta"
      className="bg-white py-24 sm:py-32 overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-gray-900 via-gray-800 to-black shadow-2xl px-6 py-16 sm:px-16 lg:py-24"
        >

          {/* Floating truck icon */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.15, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-16 -right-16 text-white pointer-events-none"
          >
            <HiTruck className="w-64 h-64 opacity-20" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-2xl md:max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Rent a Truck in Minutes.
              <span className="block text-brand-300">
                {" "}
                Move Anything, Anytime.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base md:text-lg leading-8 text-gray-300"
            >
              Need a truck for moving, deliveries, or business transport? Our
              reliable fleet is ready when you are — easy booking, flexible
              rentals, and transparent pricing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-5"
            >
              <Link
                href="/trucks"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                Get started
                <HiArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/company/about"
                className="inline-flex items-center gap-1 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:scale-105 hover:border-white/50"
              >
                Learn more
                <span className="text-sm">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400"
            >
              <span className="flex items-center gap-1">No hidden fees</span>
              <span className="flex items-center gap-1">
                Insurance included
              </span>
              <span className="flex items-center gap-1">24/7 support</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
