"use client";

import { motion } from "framer-motion";
import { benefits } from "@/data/partners/benefits";

export default function PartnershipBenefits() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partner Benefits
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to grow your fleet business successfully
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}