"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const team = [
  {
    name: "Alice Johnson",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Bob Smith",
    role: "CTO",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Carla Lee",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "David Kim",
    role: "Marketing Lead",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

export default function Team() {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-gray-900"
        >
          Meet the Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Our passionate team works tirelessly to make Truckora the most
          reliable and user-friendly truck reservation platform.
        </motion.p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer bg-white rounded-xl p-6 shadow-md text-center hover:z-10 hover:shadow-lg transition duration-300"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
