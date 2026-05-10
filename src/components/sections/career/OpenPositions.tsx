"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiMapPin, FiBriefcase, FiArrowRight, FiClock } from "react-icons/fi";
import { positions } from "@/data/career/positions";

export default function OpenPositions() {
  return (
    <section
      id="open-positions"
      className="bg-gray-50 py-24 px-6 md:px-10 scroll-mt-24"
    >
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
            Open Positions
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
            We&apos;re growing! Explore the roles below and join our mission to
            simplify logistics and make truck booking effortless.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {positions.map((pos, index) => (
            <Link
              key={pos.slug}
              href={`/company/careers/${pos.slug}`}
              className="block group"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative h-full rounded-2xl border border-gray-100 bg-white p-6 
                  hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 
                  transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 leading-tight group-hover:text-gray-800 transition-colors">
                  {pos.title}
                </h3>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiMapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>{pos.location}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FiBriefcase className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="capitalize">{pos.type}</span>
                  </div>

                  {pos.department && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FiClock className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{pos.department}</span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                    {pos.type === "full-time"
                      ? "Full Time"
                      : pos.type === "part-time"
                        ? "Part Time"
                        : pos.type === "contract"
                          ? "Contract"
                          : "Remote"}
                  </span>

                  <span className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-gray-900 group-hover:gap-2 transition-all">
                    View Role
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-0.5 bg-gray-900 rounded-full transition-all duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            Don&apos;t see the right fit?{" "}
            <Link
              href="/company/careers/contact"
              className="text-gray-900 font-semibold underline hover:text-gray-700 transition"
            >
              Send us your resume
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
