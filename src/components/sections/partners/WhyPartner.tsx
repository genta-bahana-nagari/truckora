"use client";

import { motion } from "framer-motion";
import { reasons } from "@/data/partners/reasons";

export default function WhyPartner() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Partner With Truckora?
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join a growing ecosystem that benefits fleet owners, truck brands,
            and logistics providers
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gray-900 text-white flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {reason.description}
                </p>
                <div className="text-xs font-semibold text-gray-500 bg-gray-50 inline-block px-3 py-1 rounded-full">
                  {reason.stat}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
