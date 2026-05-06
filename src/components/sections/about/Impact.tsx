"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/misc/stats";
import { FaTruck, FaMoneyCheckAlt, FaStar } from "react-icons/fa";

export default function Impact() {
  return (
    <section id="impact" className="bg-gray-50 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Our Impact
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            We are continuously growing and helping individuals and businesses
            move goods more efficiently through our platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer group bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              {stat.icon && (
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-gray-400 group-hover:text-gray-500 transition-colors" />
                </div>
              )}
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-gray-600 font-medium">
                {stat.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border border-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-lg">
                <FaTruck />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Faster Logistics
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Reduced average delivery time by 30% compared to traditional
              booking methods.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border border-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-lg">
                <FaMoneyCheckAlt />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Cost Savings
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Clients save up to 25% on transportation costs through transparent
              pricing and optimized routes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-6 border border-gray-100"
          >
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <span className="text-lg">
                <FaStar />
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              98% customer satisfaction rate with 5,000+ positive reviews across
              our platform.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Our platform is designed to scale with your needs, ensuring
              reliable and efficient logistics solutions whether you`re handling
              small deliveries or large-scale operations. We`re proud to be
              trusted by businesses across the country to move what matters
              most.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
              <span>ISO Certified</span>
              <span>24/7 Support</span>
              <span>Real-time Tracking</span>
              <span>Secure Payments</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
