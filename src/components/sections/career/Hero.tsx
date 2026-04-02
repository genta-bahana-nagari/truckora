"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 sm:py-26 my-24 px-6 md:px-10 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          Join Truckora
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto"
        >
          At Truckora, we’re building the future of logistics and transportation. 
          We’re looking for passionate, talented individuals to join our team and help 
          revolutionize the way trucks are reserved and goods are moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="/company/careers/#open-positions"
            className="inline-block mt-4 rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition duration-300"
          >
            View Open Positions
          </a>
        </motion.div>
      </div>
    </section>
  );
}