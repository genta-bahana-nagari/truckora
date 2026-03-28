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
        >
          <motion.div
            className="bg-white w-full max-w-2xl rounded-md shadow-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex justify-between items-center p-5 border-b">
              <div className="flex items-center gap-2">
                <IoInformationCircleOutline className="text-2xl" />
                <h2 className="text-lg font-semibold">Project Information</h2>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition duration-300 cursor-pointer"
              >
                <IoClose className="text-xl" />
              </button>
            </div>

            <div className="flex border-b text-sm">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`cursor-pointer flex-1 py-3 text-center relative transition flex items-center justify-center gap-2 ${
                    tab === t.id
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span
                    className={`text-base transition-transform ${
                      tab === t.id ? "scale-110" : "scale-100"
                    }`}
                  >
                    {t.icon}
                  </span>

                  <span>{t.label}</span>

                  {tab === t.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="p-6 text-sm text-gray-600 h-[220px] overflow-y-auto">
              <AnimatePresence mode="wait">
                {tab === "info" && (
                  <motion.div
                    key="info"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <h3 className="font-semibold text-gray-800">
                      Fictional Project Notice
                    </h3>
                    <p>
                      This website is a fictional project.{" "}
                      <strong>Truckora</strong> is not a real business and is
                      created solely for portfolio and educational purposes.
                    </p>
                    <p>
                      Any resemblance to actual companies or services is
                      coincidental. The design demonstrates modern web
                      practices.
                    </p>
                    <p className="text-xs text-gray-500">
                      Note: No real transactions are processed.
                    </p>
                  </motion.div>
                )}

                {tab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-800">About</h3>
                      <p className="italic">
                        Truckora is a modern truck reservation platform that
                        connects businesses and individuals with reliable trucks
                        for transport, logistics, and moving needs. Our platform
                        makes it simple to browse available trucks, compare
                        options, and reserve the right vehicle in minutes.
                        Whether you’re moving goods across the city or managing
                        logistics operations, Truckora helps you get the job
                        done efficiently.
                      </p>
                      <p className="mt-2 italic">
                        This project is created by{" "}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.github.com/genta-bahana-nagari"
                          className="font-semibold underline"
                        >
                          Genta Bahana Nagari
                        </Link>
                        . You can explore the source code{" "}
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.github.com/genta-bahana-nagari/truckora"
                          className="font-semibold underline"
                        >
                          here
                        </Link>
                        .
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          "Next.js",
                          "React",
                          "TypeScript",
                          "Tailwind CSS",
                          "Framer Motion",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">Features</h3>
                      <div className="grid grid-cols-2 gap-4 mt-2 text-sm">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Modern responsive UI</li>
                          <li>Interactive truck browsing</li>
                          <li>Smooth animations</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-1">
                          <li>Optimized UX & performance</li>
                          <li>Dynamic modal & carousel system</li>
                          <li>Scalable component architecture</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Additional Notes
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        This project focuses on building a clean UI system with
                        reusable components, smooth animations, and scalable
                        architecture using modern frontend tools. Future
                        improvements may include backend integration, real
                        booking systems, and authentication features.
                      </p>
                    </div>

                    <p className="text-right text-gray-400 text-xs">
                      – Genta Bahana Nagari
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-4 border-t flex justify-end">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
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
