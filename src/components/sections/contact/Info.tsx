"use client";

import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-6 text-center lg:text-start
      bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-500 p-6 sm:p-8 max-w-md mx-auto lg:mx-0"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Contact information
      </h2>

      <p className="text-gray-600">
        You can also reach us directly through the following channels.
      </p>

      <div className="space-y-4 text-sm text-gray-700">
        <p className="flex items-start gap-3">
          <HiOutlineMail className="text-gray-600 w-5 h-5 mt-1" />
          <span>
            <span className="font-medium text-gray-900">Email:</span>
            <br />
            <a
              href="#"
              className="text-gray-600 hover:text-gray-700 transition duration-300"
            >
              support@truckora.com
            </a>
          </span>
        </p>

        <p className="flex items-start gap-3">
          <HiOutlinePhone className="text-gray-600 w-5 h-5 mt-1" />
          <span>
            <span className="font-medium text-gray-900">Phone:</span>
            <br />
            <a
              href="#"
              className="text-gray-600 hover:text-gray-700 transition duration-300"
            >
              +62 812-3456-7890
            </a>
          </span>
        </p>

        <p className="flex items-start gap-3">
          <HiOutlineLocationMarker className="text-grey-600 w-6 h-6 mt-1" />
          <span>
            <span className="font-medium text-gray-900">Location:</span>
            <br />
            <a
              href="#"
              className="text-gray-600 hover:text-gray-700 transition duration-300"
            >
              123 Maple Street, South Jakarta, Indonesia
            </a>
          </span>
        </p>

        <p className="flex items-start gap-3">
          <span className="font-medium text-gray-900">Office Hours:</span>
          <br />
          Mon - Fri, 9:00 AM - 6:00 PM
        </p>
      </div>

      <div className="flex gap-4 mt-5 text-xl text-gray-700">
        <a href="#" className="hover:text-gray-900 cursor-pointer transition duration-300">
          <FaFacebook />
        </a>

        <a href="#" className="hover:text-gray-900 cursor-pointer transition duration-300">
          <FaInstagram />
        </a>

        <a href="#" className="hover:text-gray-900 cursor-pointer transition duration-300">
          <FaTwitter />
        </a>

        <a href="#" className="hover:text-gray-900 cursor-pointer transition duration-300">
          <FaLinkedin />
        </a>
      </div>
    </motion.div>
  );
}
