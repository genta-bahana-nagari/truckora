"use client";

import { motion } from "framer-motion";
import { values } from "@/data/misc/ourValues";
import { FaShieldAlt, FaEye, FaRocket, FaHeart } from "react-icons/fa";

const iconMap = {
  Reliability: FaShieldAlt,
  Transparency: FaEye,
  Efficiency: FaRocket,
  "Customer Focus": FaHeart,
};

export default function OurValues() {
  return (
    <section id="our-values" className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Our Values
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            At Truckora, our values guide every decision we make, ensuring our
            platform delivers quality, trust, and excellence to our users.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = iconMap[value.title as keyof typeof iconMap];

            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer group relative bg-gray-50 rounded-2xl p-6 lg:p-7 hover:bg-white transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1"
              >
                {Icon && (
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gray-400 rounded-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            These core principles drive us to continuously improve and deliver
            the best possible experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
