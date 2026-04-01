"use client";

import { motion } from "framer-motion";

export const values = [
  { title: "Reliability", description: "We ensure every truck reservation is dependable and on time." },
  { title: "Transparency", description: "Clear pricing and information for every booking." },
  { title: "Efficiency", description: "Streamlined platform to save time and simplify logistics." },
  { title: "Customer Focus", description: "We put our users and their needs first." },
];

export default function OurValues() {
  return (
    <section className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-gray-900"
        >
          Our Values
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          At Truckora, our values guide every decision we make, ensuring our
          platform delivers quality, trust, and excellence to our users.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:scale-105 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}