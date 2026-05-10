"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaShieldAlt,
  FaHandsHelping,
  FaHeart,
} from "react-icons/fa";
import { values } from "@/data/misc/companyvalues";

// Map icons to values
const iconMap = {
  Innovation: FaLightbulb,
  Integrity: FaShieldAlt,
  Collaboration: FaHandsHelping,
  "Customer Focus": FaHeart,
};

export default function CultureValue() {
  return (
    <section id="culture-value" className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
            </span>
            Who We Are
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Our Culture & Values
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
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            At Truckora, we cultivate a culture where people thrive. Our core
            values shape how we work, collaborate, and serve our clients every
            day.
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
                className="cursor-pointer group relative bg-gray-50 rounded-2xl p-6 text-center hover:bg-white transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1"
              >
                {Icon && (
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-gray-200/50 group-hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                )}

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gray-400 rounded-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
