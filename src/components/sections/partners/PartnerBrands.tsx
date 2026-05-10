"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { truckBrands } from "@/data/partners/truckBrands";

const FallbackIcon = ({ name }: { name: string }) => (
  <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center">
    <span className="text-xl font-bold text-gray-400">{name.charAt(0)}</span>
  </div>
);

export default function PartnerBrands() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Leading Truck Brands
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with the most trusted names in the commercial vehicle industry
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {truckBrands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 relative">
                  {/* Use Image if you have actual images, otherwise fallback */}
                  <div className="w-full h-full bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{brand.name}</span>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{brand.name}</h3>
              <p className="text-sm text-gray-500">{brand.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          And many more partners across Indonesia
        </motion.p>
      </div>
    </section>
  );
}