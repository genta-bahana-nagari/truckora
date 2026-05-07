"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoClose,
  IoInformationCircleOutline,
  IoCodeSlash,
} from "react-icons/io5";

export default function ProjectInfo() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<"info" | "about">("info");

  type TabType = "info" | "about";

  const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
    {
      id: "info",
      label: "Notice",
      icon: <IoInformationCircleOutline />,
    },
    {
      id: "about",
      label: "About",
      icon: <IoCodeSlash />,
    },
  ];

  useEffect(() => {
    const seen = localStorage.getItem("project-info-seen");
    if (seen) return;

    const timer = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    localStorage.setItem("project-info-seen", "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                  <IoInformationCircleOutline className="text-lg" />
                </div>
                <h2 className="text-base md:text-lg font-semibold text-gray-900">
                  Project Information
                </h2>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                aria-label="Close"
              >
                <IoClose className="text-xl" />
              </button>
            </div>

            <div className="flex border-b border-gray-100">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`cursor-pointer flex-1 py-3.5 text-center relative transition flex items-center justify-center gap-2 text-sm md:text-base ${
                    tab === t.id
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span
                    className={`text-base transition-all duration-200 ${
                      tab === t.id ? "text-gray-900" : "text-gray-500"
                    }`}
                  >
                    {t.icon}
                  </span>
                  <span>{t.label}</span>
                  {tab === t.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-5 md:p-6 max-h-[60vh] md:max-h-[70vh] overflow-y-auto">
              <AnimatePresence mode="wait">
                {tab === "info" && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-3">
                        Fictional Project Notice
                      </h3>
                      <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed">
                        <p>
                          This website is a fictional project.{" "}
                          <strong className="text-gray-800">Truckora</strong> is
                          not a real business and is created solely for
                          portfolio and educational purposes.
                        </p>
                        <p>
                          Any resemblance to actual companies or services is
                          coincidental. The design demonstrates modern web
                          practices and component-based architecture.
                        </p>
                        <p className="text-xs md:text-sm text-gray-500">
                          Note: No real transactions are processed on this
                          platform.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {tab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-3">
                        About Truckora
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Truckora is a truck reservation platform that
                        connects businesses and individuals with reliable trucks
                        for transport, logistics, and moving needs.
                      </p>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-3">
                        This project is built by{" "}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.github.com/genta-bahana-nagari"
                          className="font-semibold text-gray-900 underline hover:text-gray-700 transition"
                        >
                          Genta Bahana Nagari
                        </Link>
                        . You can explore the source code{" "}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.github.com/genta-bahana-nagari/truckora"
                          className="font-semibold text-gray-900 underline hover:text-gray-700 transition"
                        >
                          here
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-3">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Next.js",
                          "React",
                          "TypeScript",
                          "Tailwind CSS",
                          "Framer Motion",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs md:text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-900 text-base mb-3">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <ul className="space-y-2">
                          {[
                            "Modern responsive UI",
                            "Interactive truck browsing",
                            "Smooth animations",
                          ].map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm md:text-base text-gray-600"
                            >
                              <span className="text-gray-400 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-2">
                          {[
                            "Optimized UX & performance",
                            "Dynamic modal & carousel",
                            "Scalable component architecture",
                          ].map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm md:text-base text-gray-600"
                            >
                              <span className="text-gray-400 mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-2 text-right">
                      <p className="text-gray-400 text-xs italic">
                        – Genta Bahana Nagari
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="px-5 py-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={handleClose}
                className="px-5 py-2 rounded-xl bg-gray-900 text-white text-sm md:text-base font-medium hover:bg-gray-800 transition-all duration-300 cursor-pointer"
              >
                Got it
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
