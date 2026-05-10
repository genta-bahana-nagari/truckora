"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-gray-100 via-white to-white" />

      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500"
        >
          Careers
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl"
        >
          Join Truckora
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 space-y-5 text-base text-gray-600 sm:text-lg md:mt-8 md:space-y-6"
        >
          <p className="leading-relaxed">
            At Truckora, we’re building the future of logistics and
            transportation. We’re looking for passionate, talented individuals
            to join our team and help revolutionize the way trucks are reserved
            and goods are moved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
