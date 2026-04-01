"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-white py-24 px-6 md:px-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-500 font-medium"
        >
          Company Profile
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
        >
          About {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto space-y-4"
        >
          <p>
            {siteConfig.name} is a modern truck reservation platform that
            provides efficient and reliable solutions for logistics,
            transportation, and moving services.
          </p>

          <p>
            We are committed to simplifying the way individuals and businesses
            manage transportation needs by offering a seamless digital
            experience—from browsing available trucks to completing reservations
            quickly and securely.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
