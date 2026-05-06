"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <section className="py-16 sm:py-24 text-center bg-white">
        <div className="mx-auto max-w-3xl px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold text-gray-500 uppercase tracking-wider"
          >
            Contact
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
          >
            Get in touch with Truckora
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about truck reservations, logistics, or partnerships?
            Our team is here to help you.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <form className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 p-6 sm:p-8 flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Send us a message
                </h2>
                <p className="text-sm text-gray-500">
                  We`ll get back to you as soon as possible.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm 
                    focus:border-gray-800 focus:ring-1 focus:ring-gray-800 focus:outline-none transition"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm 
                    focus:border-gray-800 focus:ring-1 focus:ring-gray-800 focus:outline-none transition"
                />

                <textarea
                  rows={5}
                  placeholder="Your message"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm 
                    focus:border-gray-800 focus:ring-1 focus:ring-gray-800 focus:outline-none resize-none transition"
                />
              </div>

              <button
                type="submit"
                className="mt-2 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white 
                  hover:bg-gray-800 active:scale-[0.98] transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 p-6 sm:p-8"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Contact information
              </h2>
              <div className="w-12 h-0.5 bg-gray-300 mt-2 rounded-full" />
            </div>

            <p className="text-gray-600">
              You can also reach us directly through the following channels.
            </p>

            <div className="space-y-5 text-sm text-gray-700">
              <div className="flex items-start gap-4">
                <HiOutlineMail className="text-gray-500 w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Email:</span>
                  <br />
                  <a
                    href="mailto:support@truckora.com"
                    className="text-gray-600 hover:text-gray-900 transition duration-300"
                  >
                    support@truckora.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiOutlinePhone className="text-gray-500 w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Phone:</span>
                  <br />
                  <a
                    href="tel:+6281234567890"
                    className="text-gray-600 hover:text-gray-900 transition duration-300"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <HiOutlineLocationMarker className="text-gray-500 w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">Location:</span>
                  <br />
                  <span className="text-gray-600">
                    123 Maple Street, South Jakarta, Indonesia
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-5 h-5 shrink-0" />
                <div>
                  <span className="font-medium text-gray-900">
                    Office Hours:
                  </span>
                  <br />
                  <span className="text-gray-600">
                    Monday - Friday, 9:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-2">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 sm:py-28 bg-gray-50 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900"
          >
            Ready to get started?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Explore our fleet of trucks and book the perfect vehicle for your
            needs in just a few clicks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/trucks"
              className="rounded-xl bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white 
          hover:bg-gray-800 transition-all duration-300 cursor-pointer shadow-md"
            >
              Browse Trucks
            </Link>

            <Link
              href="/contact"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 
          border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
