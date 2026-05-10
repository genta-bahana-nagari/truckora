"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiAward } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="bg-linear-to-br from-gray-900 to-gray-800 text-white py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6">
              <FiAward className="w-4 h-4" />
              <span>Partner with Truckora</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Let&apos;s Transform Logistics Together
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Join leading truck brands and fleet owners who partner with Truckora
              to reach more customers, maximize utilization, and grow their business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/partners/apply"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                Become a Partner
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
              >
                Contact Partnership Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-linear-to-br from-white/10 to-transparent rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-gray-300 text-sm">Active Fleet Partners</div>
                <div className="h-px bg-white/20 my-4" />
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <div className="text-gray-300 text-sm">Trucks on Platform</div>
                <div className="h-px bg-white/20 my-4" />
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-gray-300 text-sm">Truck Brands</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}