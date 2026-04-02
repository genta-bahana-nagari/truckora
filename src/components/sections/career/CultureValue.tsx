"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Innovation", description: "We embrace creativity and forward-thinking solutions in logistics." },
  { title: "Integrity", description: "Honesty and transparency guide every decision we make." },
  { title: "Collaboration", description: "Teamwork drives our success and strengthens our community." },
  { title: "Customer Focus", description: "We prioritize the needs of our clients above all else." },
];

export default function CultureValue() {
  return (
    <section id="culture-value" className="relative isolate overflow-hidden bg-white py-20 sm:py-26 my-24 px-6 md:px-10 text-center">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Culture & Values
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          At Truckora, we cultivate a culture where people thrive. Our core values shape
          how we work, collaborate, and serve our clients every day.
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}