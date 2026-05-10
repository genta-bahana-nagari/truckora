"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";
import { HiMail, HiArrowRight } from "react-icons/hi";

export default function Footer() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <footer className="bg-neutral-900 text-gray-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-neutral-900 to-black pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div {...fadeInUp} transition={{ delay: 0 }}>
            <h2 className="text-2xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
              Truckora
            </h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Truckora helps businesses and individuals easily find and reserve
              trucks for logistics, transportation, and moving services.
            </p>
            <div className="flex gap-4 mt-6 text-gray-400">
              <a
                href="#"
                className="hover:text-white transition-all hover:scale-110 transform duration-200"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-all hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-all hover:scale-110 transform duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition-all hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.1 }}>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand after:rounded">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/trucks"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  Browse Trucks
                </Link>
              </li>
              <li>
                <Link
                  href="/trucks"
                  className="hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                  Reserve Truck
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand after:rounded">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", href: "/company/about" },
                { name: "Careers", href: "/company/careers" },
                { name: "Partners", href: "/company/partners" },
                { name: "Contact", href: "/contact" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
            <h3 className="text-white font-semibold text-lg mb-5 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand after:rounded">
              Support
            </h3>
            <ul className="space-y-3 text-sm mb-6">
              {[
                { name: "Help Center", href: "/company/help" },
                { name: "Terms of Service", href: "/company/terms" },
                { name: "Privacy Policy", href: "/company/privacy-policy" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <HiArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h4 className="text-white text-sm font-medium mb-2">
                Subscribe for updates
              </h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Newsletter demo – integrate your email service");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-brand hover:bg-brand/80 text-white px-3 py-2 rounded-lg transition-all hover:scale-105 disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <HiMail className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex gap-5 text-2xl text-gray-500">
            <FaCcVisa className="hover:text-white transition-colors" />
            <FaCcMastercard className="hover:text-white transition-colors" />
            <FaCcPaypal className="hover:text-white transition-colors" />
            <FaCcAmex className="hover:text-white transition-colors" />
          </div>

          <p className="text-xs text-gray-500 text-center">
            © {new Date().getFullYear()} Truckora. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/company/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/company/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/company/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
