"use client";

import { motion } from "framer-motion";
import { benefits } from "@/data/career/benefits";

export default function WhyWorkWithUs() {
  return (
    <section className="bg-gray-50 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200/50 text-gray-700 text-sm font-medium mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            Join Our Team
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Why Work With Us
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
            At Truckora, we offer a dynamic, inclusive, and growth-oriented
            environment. Here&apos;s why our team loves working here:
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer group relative bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gray-100 group-hover:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
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
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Ready to join us? Check out our{" "}
            <a
              href="/careers"
              className="text-gray-900 font-semibold underline hover:text-gray-700 transition"
            >
              open positions
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
