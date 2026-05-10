"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-linear-to-r from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Grow Your Fleet Business?
          </h2>
          <div className="w-20 h-1 bg-gray-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of fleet owners already earning more with Truckora
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FiCheckCircle className="w-5 h-5 text-gray-400" />
              <span>No upfront fees</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FiCheckCircle className="w-5 h-5 text-gray-400" />
              <span>Free onboarding</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <FiCheckCircle className="w-5 h-5 text-gray-400" />
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/partners/apply"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Apply to Partner
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition"
            >
              Talk to Partnership Team
            </Link>
          </div>

          <p className="text-gray-400 text-sm mt-6">
            Applications reviewed within 2-3 business days
          </p>
        </motion.div>
      </div>
    </section>
  );
}