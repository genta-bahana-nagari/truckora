"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-black"
        >
          Ready to Make an Impact?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-900 text-base md:text-lg max-w-2xl mx-auto"
        >
          Join Truckora and help shape the future of logistics. Explore our open
          positions or get in touch to start your journey with us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            target="blank"
            rel="nonopener"
            href="/company/contact"
            className="inline-block bg-gray-900 text-white hover:bg-black transition duration-300 font-semibold px-8 py-3 rounded-lg shadow"
          >
            Contact Here
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
