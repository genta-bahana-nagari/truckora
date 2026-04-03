"use client";

import { motion } from "framer-motion";

export default function Form() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <form className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-500 p-6 sm:p-8 flex flex-col gap-5">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-900">
            Send us a message
          </h2>
          <p className="text-sm text-gray-500">
            We’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm 
            focus:border-gray-800 focus:ring-1 focus:ring-gray-800 focus:outline-none transition"
          />

          <input
            type="email"
            placeholder="Your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm 
            focus:border-gray-800 focus:ring-1 focus:ring-gray-800 focus:outline-none transition"
          />

          <textarea
            rows={5}
            placeholder="Your message"
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm 
            focus:border-gray-800 focus:ring-1 focus:ring-gray-800 focus:outline-none resize-none transition"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white 
          hover:bg-gray-800 active:scale-[0.98] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
