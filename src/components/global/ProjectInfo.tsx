"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProjectInfo() {
  const [open, setOpen] = useState(true);
  const [tab, setTab] = useState<"info" | "note">("info");

  type TabType = "info" | "note";

  const tabs: { id: TabType; label: string }[] = [
    { id: "info", label: "Notice" },
    { id: "note", label: "Personal Note" },
  ];

  useEffect(() => {
    const seen = localStorage.getItem("project-info-seen");
    if (seen) {
      setTimeout(() => setOpen(false), 0);
    }
  }, []);

  if (!open) return null;

  const handleClose = () => {
    localStorage.setItem("project-info-seen", "true");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-lg font-semibold">Project Information</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        <div className="flex border-b text-sm">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 py-3 text-center transition duration-300 cursor-pointer
                ${
                  tab === t.id
                    ? "border-b-2 border-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-4 text-sm text-gray-600 max-h-[70vh] overflow-y-auto">
          {tab === "info" && (
            <>
              <h3 className="font-semibold text-gray-800">
                Fictional Project Notice
              </h3>
              <p>
                This website is a fictional project. <strong>Truckora</strong>{" "}
                is not a real business and is created solely for portfolio and
                educational purposes.
              </p>
              <p>
                Any resemblance to actual companies or services is coincidental.
                The design and features are built to demonstrate modern web
                development practices.
              </p>
              <p className="text-xs text-gray-500">
                Note: No real bookings or transactions are processed on this
                platform.
              </p>
            </>
          )}

          {tab === "note" && (
            <>
              <h3 className="font-semibold text-gray-800">Personal Note</h3>
              <p className="italic">
                This project is created by{" "}
                <Link
                  target="blank"
                  rel="nonopener"
                  href={"https://www.github.com/genta-bahana-nagari"}
                  className="font-semibold"
                >
                  Genta Bahana Nagari
                </Link>
                . You can find the source code{" "}
                <Link
                  target="blank"
                  rel="nonopener"
                  href={"https://www.github.com/genta-bahana-nagari/truckora"}
                  className="font-semibold"
                >
                  here
                </Link>
                .
              </p>
              <p className="text-right text-gray-500">– Genta Bahana Nagari</p>
            </>
          )}
        </div>

        <div className="p-4 border-t flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
