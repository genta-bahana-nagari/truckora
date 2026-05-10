"use client";

import { motion } from "framer-motion";
import { steps } from "@/data/partners/steps";

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Become a Partner
          </h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get started in 4 simple steps and join our growing network
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/3 left-0 right-0 h-px bg-gray-200 -translate-y-1/2" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <div className="text-sm font-bold text-gray-400 mb-1">
                    Step {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}