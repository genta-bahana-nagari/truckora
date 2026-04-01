"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
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
            Our Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            We are driven by a clear purpose—to simplify logistics today and
            build smarter transportation solutions for the future.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To make truck reservation simple, fast, and accessible for
              everyone. We aim to eliminate the complexity of logistics by
              providing a seamless platform where users can find, compare, and
              book trucks in just a few steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted logistics platform that empowers businesses
              and individuals with efficient, reliable, and technology-driven
              transportation solutions across cities and regions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
