"use client";

import { MdKeyboardArrowRight } from "react-icons/md";
import { links } from "@/data/misc/links";
import { stats } from "@/data/misc/stats";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-26"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-5xl font-semibold tracking-tight text-gray-900"
        >
          About Truckora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-6 md:mx-0 mt-4 md:mt-8 text-sm sm:text-base md:text-lg font-medium text-gray-700"
        >
          Truckora is a modern truck reservation platform that connects businesses
          and individuals with reliable trucks for transport, logistics, and moving
          needs. Our platform makes it simple to browse available trucks, compare
          options, and reserve the right vehicle in minutes. Whether you’re moving
          goods across the city or managing logistics operations, Truckora helps
          you get the job done efficiently.
        </motion.p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl md:max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-6 text-base font-semibold text-gray-900 lg:gap-x-10"
        >
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-1 hover:text-gray-700 transition"
            >
              {link.name} <MdKeyboardArrowRight />
            </motion.a>
          ))}
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center text-center sm:mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex flex-col gap-1 items-center"
            >
              <dt className="text-gray-700 text-base">{stat.name}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}