"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/misc/stats"; 

export default function Impact() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold text-gray-900"
          >
            Our Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We are continuously growing and helping individuals and businesses
            move goods more efficiently through our platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-600">{stat.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-600">
            Our platform is designed to scale with your needs, ensuring reliable
            and efficient logistics solutions whether you`re handling small
            deliveries or large-scale operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
