"use client";

import { motion } from "framer-motion";

export const positions = [
  {
    title: "Logistics Coordinator",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    link: "/careers/logistics-coordinator",
  },
  {
    title: "Marketing Specialist",
    location: "Remote / HQ",
    type: "Contract",
    link: "/careers/marketing-specialist",
  },
  {
    title: "Customer Success Manager",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    link: "/careers/customer-success-manager",
  },
];

export default function OpenPositions() {
  return (
    <section id="open-positions" className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Open Positions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          We’re growing! Explore the roles below and join our mission to simplify
          logistics and make truck booking effortless.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {positions.map((pos, index) => (
            <motion.a
              key={pos.title}
              href={pos.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="block rounded-2xl border border-gray-200 p-6 hover:shadow-lg hover:bg-gray-50 transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900">{pos.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{pos.location}</p>
              <p className="mt-1 text-sm font-medium text-gray-800">{pos.type}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}