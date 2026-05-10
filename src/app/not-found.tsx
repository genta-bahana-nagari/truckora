"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiHome, FiHelpCircle, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <main className="max-h-screen bg-linear-to-b from-white to-gray-50 px-6 py-20 sm:py-40">
      <div className="max-w-3xl mx-auto">
        <div
          className="text-center mb-8"
        >
          <div className="relative inline-block">
            <div className="text-8xl sm:text-9xl font-bold tracking-tighter text-gray-800">
              404
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            Page Not Found
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Lost on the road?
          </h1>

          <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiHome className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/trucks"
            className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            <FiArrowLeft className="w-5 h-5" />
            Browse Trucks
          </Link>

          <Link
            href="/help"
            className="inline-flex items-center justify-center gap-2 bg-gray-50 text-gray-700 border border-gray-200 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            <FiHelpCircle className="w-5 h-5" />
            Help Center
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-gray-200 pt-8 text-center"
        >
          <p className="text-sm text-gray-400 mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: "Home", href: "/" },
              { name: "Browse Trucks", href: "/trucks" },
              { name: "About Us", href: "/company/about" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-500 hover:text-gray-900 transition px-3 py-1 rounded-full hover:bg-gray-100"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-400">
            Error 404 • The page you requested could not be found
          </p>
        </motion.div>
      </div>
    </main>
  );
}
