// src/components/sections/trucks/TruckReviews.tsx
"use client";

import { useState, useMemo } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { 
  RiArrowUpSLine, 
  RiArrowDownSLine, 
  RiThumbUpLine, 
  RiThumbUpFill,
  RiShareLine,
  RiFlagLine 
} from "react-icons/ri";
import { HiOutlineClipboardList, HiOutlineChat } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

import { getReviewsByTruckId } from "@/data/truck/reviews";

export function TruckReviews({ truckId }: { truckId: string }) {
  const [showAll, setShowAll] = useState(false);
  const [likedReviews, setLikedReviews] = useState<Set<string>>(new Set());
  
  const reviewStats = useMemo(() => getReviewsByTruckId(truckId, 1, 100), [truckId]);
  const truckReviews = reviewStats.reviews;
  const displayedReviews = showAll ? truckReviews : truckReviews.slice(0, 3);

  const handleLike = (reviewId: string) => {
    setLikedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const sizes = {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    };
    const starSize = sizes[size];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <BsStarFill key={i} className={`${starSize} text-yellow-400 fill-yellow-400`} />;
          } else if (i === fullStars && hasHalfStar) {
            return <BsStarHalf key={i} className={`${starSize} text-yellow-400 fill-yellow-400`} />;
          } else {
            return <BsStarFill key={i} className={`${starSize} text-gray-200`} />;
          }
        })}
      </div>
    );
  };

  // No reviews state
  if (truckReviews.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <div className="flex flex-col items-center justify-center text-center py-16 bg-linear-to-b from-gray-50 to-white rounded-2xl border border-gray-100">
          <div className="text-6xl mb-4 text-gray-300">
            <HiOutlineClipboardList className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Reviews Yet
          </h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">
            This truck hasn`t been reviewed yet. Be the first to share your experience and help others make informed decisions!
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-linear-to-r from-brand to-brand/80 text-white font-medium hover:shadow-lg transition-all hover:scale-105">
            <HiOutlineChat className="w-4 h-4" />
            Write a Review
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mt-12">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Customer Reviews
        </h2>
        <p className="text-gray-500">
          What our customers are saying about this truck
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Rating Summary Card */}
        <div className="lg:w-80">
          <div className="bg-linear-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="text-center lg:text-left">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                {reviewStats.averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center lg:justify-start mb-3">
                {renderStars(reviewStats.averageRating, "lg")}
              </div>
              <p className="text-sm text-gray-500">
                Based on {reviewStats.total} customer review
                {reviewStats.total !== 1 ? "s" : ""}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400">
                  ✓ {Math.round((reviewStats.averageRating / 5) * 100)}% of customers recommend this truck
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1">
          <div className="space-y-3">
            {reviewStats.distribution.map((dist) => (
              <div key={dist.stars} className="flex items-center gap-3 group">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm font-medium text-gray-700">{dist.stars}</span>
                  <BsStarFill className="w-3 h-3 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${dist.percentage}%` }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="h-full bg-linear-to-r from-yellow-400 to-yellow-500 rounded-full"
                    />
                  </div>
                </div>
                <span className="text-sm text-gray-500 w-12 text-right">
                  {dist.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-gray-900">{review.user}</p>
                    {review.verified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs">
                        <span>✓</span>
                        Verified Booking
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 mt-1.5">
                    {renderStars(review.rating, "sm")}
                    <span className="text-xs text-gray-400">
                      {formatDate(review.date)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => handleLike(review.id)}
                  className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-gray-400 hover:text-brand hover:bg-brand/5 transition-all"
                >
                  {likedReviews.has(review.id) ? (
                    <RiThumbUpFill className="w-3.5 h-3.5 text-brand" />
                  ) : (
                    <RiThumbUpLine className="w-3.5 h-3.5" />
                  )}
                  <span className="text-xs">
                    {review.helpful + (likedReviews.has(review.id) ? 1 : 0)}
                  </span>
                </button>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                {review.comment}
              </p>
              
              <div className="flex items-center gap-4 mt-3 pt-2">
                <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  <RiShareLine className="w-3.5 h-3.5" />
                  Share
                </button>
                <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  <RiFlagLine className="w-3.5 h-3.5" />
                  Report
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {truckReviews.length > 3 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowAll(!showAll)}
            className="w-full mt-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-brand transition-all flex items-center justify-center gap-2 group"
          >
            {showAll ? (
              <>
                <RiArrowUpSLine className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                Show Less
              </>
            ) : (
              <>
                <RiArrowDownSLine className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
                Show All {truckReviews.length} Reviews
              </>
            )}
          </motion.button>
        )}
      </div>

      {/* Write a Review CTA */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="bg-linear-to-r from-gray-50 to-white rounded-xl p-5 text-center">
          <p className="text-gray-600 mb-3">Have you driven this truck?</p>
          <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg border-2 border-brand text-brand font-medium hover:bg-black cursor-pointer hover:text-white transition-all">
            <HiOutlineChat className="w-4 h-4" />
            Write Your Review
          </button>
        </div>
      </div>
    </div>
  );
}