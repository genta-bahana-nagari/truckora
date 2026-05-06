"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { RiCheckboxCircleFill } from "react-icons/ri";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const truckSlug = searchParams.get("truck");

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center"
      >
        <RiCheckboxCircleFill className="w-20 h-20 text-gray-700 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900">Reservation Confirmed!</h1>
        <p className="text-gray-500 mt-2">
          Thank you for booking with us. You will receive a confirmation email shortly.
        </p>
        <div className="mt-6 space-y-3">
          <Link
            href={`/trucks/${truckSlug || ""}`}
            className="block w-full bg-gray-800 text-white py-2 rounded-xl font-medium hover:bg-black transition"
          >
            Back to Truck Details
          </Link>
          <Link
            href="/trucks"
            className="block w-full border border-gray-300 py-2 rounded-xl font-medium hover:bg-gray-50 transition"
          >
            Browse More Trucks
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ConfirmationContent />
    </Suspense>
  );
}