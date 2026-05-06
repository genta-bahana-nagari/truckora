"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiArrowRightDoubleFill,
  RiCheckboxCircleLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import {
  HiOutlineTruck,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { TruckRating } from "@/components/sections/trucks/TruckRating";
import { TruckSpecs } from "@/components/sections/trucks/TruckSpecs";
import { TruckReviews } from "@/components/sections/trucks/TruckReviews";
import { TruckMotion } from "./TruckMotion";
import { trucks } from "@/data/truck/trucks";

type Props = {
  params: {
    slug: string;
  };
};

export default function TruckPage({ params }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    async function getSlug() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    getSlug();
  }, [params]);

  const truck = trucks.find((t) => t.slug === slug);

  if (!truck && slug !== null) {
    return (
      <main className="grid min-h-full place-items-center bg-linear-to-b from-gray-50 to-white px-6 py-20 sm:py-26 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl"
        >
          <div className="text-8xl mb-6">🚛</div>
          <p className="text-base font-semibold text-brand">Sorry,</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            Truck Not Found
          </h1>
          <p className="mt-6 text-lg font-medium text-gray-500 sm:text-xl/8">
            Oops! The truck you`re looking for doesn`t exist in our fleet.
          </p>
          <Link
            href="/trucks"
            className="inline-flex items-center gap-2 mt-8 rounded-xl bg-linear-to-r from-brand to-brand/80 px-8 py-3 text-white font-medium hover:shadow-lg transition-all hover:scale-105"
          >
            Back to Fleet
            <RiArrowRightSLine className="w-5 h-5" />
          </Link>
        </motion.div>
      </main>
    );
  }

  if (!truck) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-16 h-16 border-4 border-brand border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading truck details...</p>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const images = truck.images || [
    truck.images?.[0] || "/images/placeholder-truck.jpg",
  ];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <TruckMotion>
      <div className="bg-linear-to-b from-white to-gray-50 min-h-screen">
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
              <Link
                href="/trucks"
                className="hover:text-brand transition-colors"
              >
                Trucks
              </Link>
            </li>
            <RiArrowRightDoubleFill className="text-gray-400 text-xs" />
            <li>
              <span className="text-gray-700">{truck.brand}</span>
            </li>
            <RiArrowRightDoubleFill className="text-gray-400 text-xs" />
            <li className="font-semibold text-gray-900">{truck.name}</li>
          </ol>
        </nav>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          {/* Main Content */}
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-16">
            {/* Image Gallery - Auto adjusts based on number of images */}
            <div className="mb-8 lg:mb-0">
              <div className="relative">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg"
                >
                  <Image
                    src={images[selectedImage]}
                    alt={`${truck.name} - View ${selectedImage + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>

                {/* Navigation Arrows (only if multiple images) */}
                {hasMultipleImages && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <HiChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <HiChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery (only if multiple images) */}
              {hasMultipleImages && (
                <div className="flex gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden shrink-0 transition-all duration-200 ${
                        selectedImage === idx
                          ? "ring-2 ring-brand shadow-lg"
                          : "ring-1 ring-gray-200 hover:ring-brand/50"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${truck.name} thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Image counter (only if multiple images) */}
              {hasMultipleImages && (
                <div className="mt-3 text-center text-sm text-gray-500">
                  {selectedImage + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Truck Info - Same as before */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {truck.name}
                    </h1>
                    <p className="text-lg text-gray-500 mt-1">
                      {truck.brand} {truck.series}
                    </p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Available Now
                  </div>
                </div>

                <TruckRating truck={truck} />

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {formatPrice(truck.pricePerDay)}
                  </span>
                  <span className="text-gray-500">/ day</span>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/reservation/${truck.slug}`}
                    className="flex-1 align-center justify-center text-center bg-gray-800 hover:bg-black cursor-pointer text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105"
                  >
                    Book This Truck
                  </Link>
                  <Link
                    href="/contact"
                    className="flex-1 text-center border border-gray-300 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 hover:border-brand transition-all"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Features List */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RiCheckboxCircleLine className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Free cancellation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RiCheckboxCircleLine className="w-5 h-5 text-green-500 shrink-0" />
                    <span>Insurance included</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RiCheckboxCircleLine className="w-5 h-5 text-green-500 shrink-0" />
                    <span>24/7 roadside assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <RiCheckboxCircleLine className="w-5 h-5 text-green-500 shrink-0" />
                    <span>No security deposit</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center">
                    Trusted by 500+ logistics companies
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Description & Specs - Same as before */}
          <div className="mt-12 lg:mt-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Description
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-600 leading-relaxed">
                      {truck.description}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-8"
                >
                  <TruckSpecs truck={truck} />
                </motion.div>
              </div>

              {/* Sidebar Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit sticky top-24"
              >
                <h3 className="font-semibold text-gray-900 mb-4">
                  Why choose this truck?
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <HiOutlineTruck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Well-maintained fleet
                      </p>
                      <p className="text-sm text-gray-500">
                        Regular servicing & cleaning
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineUserGroup className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Professional drivers
                      </p>
                      <p className="text-sm text-gray-500">
                        Experienced & licensed
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineClock className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">
                        Flexible rental
                      </p>
                      <p className="text-sm text-gray-500">
                        Hourly, daily & weekly options
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <HiOutlineShieldCheck className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Full coverage</p>
                      <p className="text-sm text-gray-500">
                        Comprehensive insurance
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Reviews Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <TruckReviews truckId={truck.slug} />
          </motion.div>
        </div>
      </div>
    </TruckMotion>
  );
}
