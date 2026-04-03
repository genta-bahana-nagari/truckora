"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-20 sm:py-24 bg-gray-50 text-center">
      <div className="mx-auto max-w-2xl px-6">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-gray-900"
        >
          Ready to start using Truckora?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-600"
        >
          Explore available trucks and simplify your logistics today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="rounded-md bg-gray-800 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
}