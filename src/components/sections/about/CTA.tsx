"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-gray-50 py-24 px-6 md:px-10"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200/50 text-gray-700 text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          Trusted by 100+ customers
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
        >
          Ready to Experience Smarter Logistics?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4"
        >
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Join hundreds of businesses and individuals who trust Truckora for
          fast, reliable, and efficient truck bookings. Whether you`re moving
          once or managing a fleet, we`re here to help.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
        >
          <Link
            href="/trucks"
            className="inline-flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 transition-all duration-300 font-semibold px-8 py-3 rounded-xl shadow-md"
          >
            Browse Available Trucks
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-gray-900 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold px-8 py-3 rounded-xl"
          >
            Talk to Our Team
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500"
        >
          No commitment required. Free consultation available.
        </motion.p>
      </div>
    </section>
  );
}
