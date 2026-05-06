"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowRightDoubleFill, RiArrowRightSLine } from "react-icons/ri";
import { trucks } from "@/data/truck/trucks";
import type { TruckListing } from "@/types/truckType";

type Props = {
  params: {
    slug: string;
  };
};

export default function ReservationPage({ params }: Props) {
  const router = useRouter();
  const [slug, setSlug] = useState<string | null>(null);
  const [truck, setTruck] = useState<TruckListing | null>(null);
  const [loading, setLoading] = useState(true);

  const [rentalDays, setRentalDays] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getSlug = async () => {
      const resolved = await params;
      setSlug(resolved.slug);
    };
    getSlug();
  }, [params]);

  useEffect(() => {
    if (slug) {
      const found = trucks.find((t) => t.slug === slug);
      setTruck(found || null);
      setLoading(false);
    }
  }, [slug]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const totalPrice = truck ? truck.pricePerDay * rentalDays : 0;

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    if (!name || !email || !phone || !startDate) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }
    if (rentalDays < 1) {
      setError("Rental days must be at least 1.");
      setIsSubmitting(false);
      return;
    }

    const bookingData = {
      truckId: truck?.slug,
      truckName: truck?.name,
      rentalDays,
      startDate,
      totalPrice,
      customer: { name, email, phone },
      specialRequests,
      bookingDate: new Date().toISOString(),
    };

    console.log("Booking submitted:", bookingData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Error occured:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading reservation form...</p>
        </div>
      </div>
    );
  }

  if (!truck) {
    return (
      <main className="grid min-h-full place-items-center bg-linear-to-b from-gray-50 to-white px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl"
        >
          <p className="text-base font-semibold text-brand">Sorry,</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900">
            Truck Not Found
          </h1>
          <p className="mt-6 text-lg text-gray-500">
            The truck you are trying to book does not exist.
          </p>
          <Link
            href="/trucks"
            className="inline-flex items-center gap-2 mt-8 rounded-xl bg-linear-to-r from-brand to-brand/80 px-8 py-3 text-white font-medium hover:shadow-lg transition-all"
          >
            Back to Fleet
            <RiArrowRightSLine className="w-5 h-5" />
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <div className="bg-linear-to-b from-gray-50 to-white min-h-screen">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-brand transition-colors">
              Home
            </Link>
          </li>
          <RiArrowRightDoubleFill className="text-gray-400 text-xs" />
          <li>
            <Link href="/trucks" className="hover:text-brand transition-colors">
              Trucks
            </Link>
          </li>
          <RiArrowRightDoubleFill className="text-gray-400 text-xs" />
          <li>
            <Link
              href={`/trucks/${truck.slug}`}
              className="hover:text-brand transition-colors"
            >
              {truck.name}
            </Link>
          </li>
          <RiArrowRightDoubleFill className="text-gray-400 text-xs" />
          <li className="font-semibold text-gray-900">Reservation</li>
        </ol>
      </nav>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Left column: Truck summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={truck.images[0] || "/images/placeholder-truck.jpg"}
                  alt={truck.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-900">
                  {truck.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  {truck.brand} {truck.series}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(truck.pricePerDay)}
                  </span>
                  <span className="text-gray-500">/ day</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Capacity</span>
                    <span className="font-medium">
                      {truck.capacityTons} tons
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Transmission</span>
                    <span className="font-medium capitalize">
                      {truck.transmission}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fuel</span>
                    <span className="font-medium capitalize">
                      {truck.fuelType}
                    </span>
                  </div>
                  {truck.driverIncluded && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Driver</span>
                      <span className="font-medium text-green-600">
                        Included
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column: Booking form */}
          <div className="lg:col-span-2 mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Complete Your Reservation
              </h1>
              <p className="text-gray-500 mt-2">
                Fill in the details below to book the {truck.name}.
              </p>

              {error && (
                <div className="mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Rental duration + start date */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Rental days *
                    </label>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          setRentalDays(Math.max(1, rentalDays - 1))
                        }
                        className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-lg font-semibold"
                      >
                        -
                      </button>
                      <span className="text-xl font-semibold w-12 text-center">
                        {rentalDays}
                      </span>
                      <button
                        type="button"
                        onClick={() => setRentalDays(rentalDays + 1)}
                        className="w-10 h-10 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 text-lg font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start date *
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={today}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                </div>

                {/* Customer info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg">
                    Your details
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                        required
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Special requests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Special requests (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="E.g., specific delivery time, loading assistance, etc."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Price summary */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {truck.pricePerDay} USD × {rentalDays} day
                      {rentalDays !== 1 ? "s" : ""}
                    </span>
                    <span className="font-medium">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-gray-900">
                    <span>Total payable</span>
                    <span className="text-xl text-brand">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cursor-pointer bg-gray-800 hover:bg-black text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Processing..." : "Confirm Reservation"}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  By confirming, you agree to our{" "}
                  <Link href="/terms" className="underline hover:text-brand">
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline hover:text-brand">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/50 z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 mb-4">
                  <svg
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Reservation confirmed!
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Your booking for the {truck?.name} has been successfully
                  created. A confirmation email has been sent to {email}.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      setShowSuccessModal(false);
                      router.push(
                        `/reservation/confirmation?truck=${truck?.slug}`,
                      );
                    }}
                    className="inline-flex justify-center w-full rounded-lg bg-brand px-4 py-2 text-sm font-medium cursor-pointer text-white bg-gray-800 hover:bg-black transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
