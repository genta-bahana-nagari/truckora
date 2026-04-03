"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Career Growth",
    description:
      "Opportunities to learn, grow, and advance your career in a fast-paced logistics environment.",
  },
  {
    title: "Flexible Work",
    description:
      "We value work-life balance with flexible schedules and remote-friendly options.",
  },
  {
    title: "Inclusive Culture",
    description:
      "Join a team that celebrates diversity, collaboration, and innovation.",
  },
  {
    title: "Impactful Work",
    description:
      "Be part of a company that transforms how goods are moved efficiently across the globe.",
  },
];

export default function WhyWorkWithUs() {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Why Work With Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          At Truckora, we offer a dynamic, inclusive, and growth-oriented environment. 
          Here’s why our team loves working here:
        </motion.p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm text-center">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}