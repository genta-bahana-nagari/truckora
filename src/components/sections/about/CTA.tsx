"use client";

import { motion } from "framer-motion";

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
          Ready to Reserve a Truck?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-900 text-base md:text-lg max-w-2xl mx-auto"
        >
          Join hundreds of businesses and individuals who trust Truckora for
          fast, reliable, and efficient truck bookings.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/reservation"
            className="inline-block bg-gray-900 text-white hover:bg-black transition duration-300 font-semibold px-8 py-3 rounded-lg shadow"
          >
            Reserve Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
