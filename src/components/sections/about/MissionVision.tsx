"use client";

import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section id="mission-vision" className="bg-gray-50 py-24 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Our Mission & Vision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          >
            We are here to simplify logistics today and
            build smarter transportation solutions for the future.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200"
          >
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group bg-white rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200"
          >
            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
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
