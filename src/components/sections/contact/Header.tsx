"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <section className="py-20 sm:py-26 text-center">
      <div className="mx-auto max-w-3xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-gray-500 uppercase tracking-wider"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-4xl sm:text-6xl font-bold text-gray-900"
        >
          Get in touch with Truckora
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-gray-600"
        >
          Have questions about truck reservations, logistics, or partnerships?
          Our team is here to help you.
        </motion.p>
      </div>
    </section>
  );
}
