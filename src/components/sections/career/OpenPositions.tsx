"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMapPin, FiBriefcase, FiArrowRight } from "react-icons/fi";

import { positions } from "@/data/career/positions";

export default function OpenPositions() {
  return (
    <section id="open-positions" className="bg-gray-50 py-20 px-6 md:px-10 scroll-mt-24">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Open Positions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          We’re growing! Explore the roles below and join our mission to
          simplify logistics and make truck booking effortless.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {positions.map((pos, index) => (
            <Link
              key={pos.slug}
              href={`/company/careers/${pos.slug}`}
              className="block"
            >
              <motion.div
                key={pos.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-gray-200 p-6 
                hover:shadow-xl hover:-translate-y-1 hover:border-gray-300 
                transition-all duration-300 bg-white"
              >
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {pos.title}
                </h3>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-gray-400" />
                    <span>{pos.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FiBriefcase className="text-gray-400" />
                    <span className="font-medium text-gray-800">
                      {pos.type}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-medium bg-blue-50 text-gray-600 px-2 py-1 rounded-full">
                    {pos.type}
                  </span>

                  <span className="flex items-center gap-1 text-sm font-semibold text-gray-600 group-hover:gap-2 transition-all">
                    View Role <FiArrowRight />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
