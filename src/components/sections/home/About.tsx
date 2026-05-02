"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { links } from "@/data/misc/links";
import { stats } from "@/data/misc/stats";
import { motion } from "framer-motion";
import { HiTruck, HiGlobeAlt, HiUserGroup, HiStar } from "react-icons/hi2";
import Link from "next/link";

export default function About() {
  // Map stats to icons for better visual presentation
  const getStatIcon = (name: string) => {
    if (name.includes("Trucks") || name.includes("Vehicles")) return HiTruck;
    if (name.includes("Cities") || name.includes("Locations"))
      return HiGlobeAlt;
    if (name.includes("Customers") || name.includes("Users"))
      return HiUserGroup;
    return HiStar;
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 sm:py-26"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#f3f4f6_100%)]" />

      <div className="mx-auto max-w-5xl text-center px-4 sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center rounded-full bg-brand/10 px-4 py-1.5 text-sm font-medium text-brand mb-6">
            Who We Are
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
        >
          About Truckora
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 mx-auto max-w-3xl"
        >
          <div className="relative">
            {/* Decorative quote mark */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Truckora is a modern truck reservation platform that connects
              businesses and individuals with reliable trucks for transport,
              logistics, and moving needs. Our platform makes it simple to
              browse available trucks, compare options, and reserve the right
              vehicle in minutes. Whether you’re moving goods across the city or
              managing logistics operations, Truckora helps you get the job done
              efficiently.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl lg:max-w-6xl px-4 sm:px-6 lg:px-0">
        {/* Trusted Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 p-6 sm:p-8 shadow-sm"
        >
          <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
            Trusted & Recognized On
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-base font-medium">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group flex items-center gap-2 text-gray-700 hover:text-brand transition-all duration-200 hover:scale-105"
              >
                <span className="relative">
                  {link.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
                <MdKeyboardArrowRight
                  className="group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = getStatIcon(stat.name);
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="rounded-full bg-brand/10 p-3 mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">
                    {stat.name}
                  </dt>
                  <dd className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              </motion.div>
            );
          })}
        </motion.dl>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex rounded-lg text-xs md:text-sm">
            <Link
              href="/trucks"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 font-semibold text-white shadow-sm hover:shadow-md transition-all hover:scale-105"
            >
              Explore Our Fleet
              <MdKeyboardArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
            <a
              href="/company/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all ml-3"
            >
              Contact Sales
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
