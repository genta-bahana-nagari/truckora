"use client";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import { testimonials } from "@/data/partners/testimonials";

export default function Testimonials() {
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
            What Our Partners Say
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from fleet owners and truck brands already on Truckora
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-gray-600 text-gray-600" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-xs text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}