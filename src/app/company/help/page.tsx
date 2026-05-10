"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiTruck,
  FiMessageCircle,
  FiArrowRight,
  FiMail,
  FiPhone,
} from "react-icons/fi";

import { faqItems } from "@/data/help/faqItems";
import { categories } from "@/data/help/categories";

export default function page() {
  return (
    <main className="bg-white min-h-screen">
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              How can we help you?
            </h1>
            <p className="text-gray-300 text-base md:text-lg">
              Find answers about truck reservations, payments, bookings, and
              more
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Browse Help Topics
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to your questions about using Truckora
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {category.articles.slice(0, 3).map((article) => (
                      <li key={article.title}>
                        <Link
                          href={article.link}
                          className="text-sm text-gray-600 hover:text-gray-900 transition flex items-center gap-1 group/link"
                        >
                          <span>{article.title}</span>
                          <FiArrowRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/help/category/${category.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-sm font-medium text-gray-900 hover:text-gray-700 transition flex items-center gap-1"
                  >
                    View all
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about Truckora
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition"
              >
                <summary className="cursor-pointer p-5 font-medium text-gray-900 hover:text-gray-700 transition flex items-center justify-between list-none">
                  <span>{item.question}</span>
                  <span className="text-gray-400 group-open:rotate-180 transition-transform text-sm">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                  {item.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/trucks"
              className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition">
                <FiTruck className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Browse Trucks
              </h3>
              <p className="text-sm text-gray-500">
                Find available trucks near you
              </p>
            </Link>

            <Link
              href="/contact"
              className="text-center p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition">
                <FiMessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Contact Support
              </h3>
              <p className="text-sm text-gray-500">
                Still need help? Reach out to us
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our support team is ready to help with any questions about your
              truck reservation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
              >
                <FiMail className="w-5 h-5" />
                Contact Support
              </Link>
              <Link
                href="tel:+6281234567890"
                className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition"
              >
                <FiPhone className="w-5 h-5" />
                Call Us
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              Support hours: Monday - Friday, 9 AM - 6 PM | Average response:
              &lt; 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
