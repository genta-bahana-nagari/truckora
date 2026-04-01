"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Truck Reservation",
    description:
      "Easily browse and reserve trucks based on your logistics needs, including capacity, availability, and duration.",
  },
  {
    title: "Logistics Support",
    description:
      "Simplify your transportation planning with a platform designed to streamline logistics operations efficiently.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose your preferred pickup and drop-off times with flexible booking options tailored to your schedule.",
  },
  {
    title: "Wide Range of Trucks",
    description:
      "Access various types of trucks suitable for small deliveries, large shipments, or moving services.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Know exactly what you pay with clear, upfront pricing based on duration and truck selection.",
  },
  {
    title: "Reliable Service",
    description:
      "We ensure dependable service so your goods are transported safely and on time.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-gray-900"
          >
            What We Do
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            At Truckora, we provide a complete platform to help you manage transportation and logistics with ease.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg hover:z-10 transition duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
