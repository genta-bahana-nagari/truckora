"use client";

import { motion } from "framer-motion";

export default function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 text-center lg:text-start
      bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 p-6 sm:p-8
      "
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Contact information
      </h2>

      <p className="text-gray-600">
        You can also reach us directly through the following channels.
      </p>

      <div className="space-y-4 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Email:</span>
          <br />
          support@truckora.com
        </p>

        <p>
          <span className="font-medium text-gray-900">Phone:</span>
          <br />
          +62 812-3456-7890
        </p>

        <p>
          <span className="font-medium text-gray-900">Location:</span>
          <br />
          Indonesia
        </p>
      </div>
    </motion.div>
  );
}
