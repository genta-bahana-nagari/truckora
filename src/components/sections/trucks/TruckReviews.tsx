"use client";

import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

import { reviews } from "@/data/truck/reviews";

export function TruckReviews({ truckId }: { truckId: string }) {
  const [showAll, setShowAll] = useState(false);
  const truckReviews = reviews.filter((r) => r.truckId === truckId);
  const displayedReviews = showAll ? truckReviews : truckReviews.slice(0, 3);

  if (truckReviews.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-2xl">
        <div className="text-5xl mb-3">📝</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No reviews yet
        </h3>
        <p className="text-gray-500">Be the first to review this truck!</p>
      </div>
    );
  }

  const averageRating =
    truckReviews.reduce((sum, r) => sum + r.rating, 0) / truckReviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => ({
    stars,
    count: truckReviews.filter((r) => Math.floor(r.rating) === stars).length,
    percentage:
      (truckReviews.filter((r) => Math.floor(r.rating) === stars).length /
        truckReviews.length) *
      100,
  }));

  return (
    <div className="mt-12">
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Rating Summary */}
        <div className="lg:w-64 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex justify-center lg:justify-start gap-0.5 mb-2">
              {[...Array(5)].map((_, i) => (
                <BsStarFill
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(averageRating) ? "text-yellow-400" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Based on {truckReviews.length} review
              {truckReviews.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* Rating Distribution */}
        <div className="flex-1">
          <div className="space-y-2">
            {ratingDistribution.map((dist) => (
              <div key={dist.stars} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-16">
                  <span className="text-sm text-gray-600">{dist.stars}</span>
                  <BsStarFill className="w-3 h-3 text-yellow-400" />
                </div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${dist.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-500 w-12">{dist.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        <AnimatePresence>
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                <div>
                  <p className="font-semibold text-gray-900">{review.user}</p>
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <BsStarFill
                        key={i}
                        className={`w-3.5 h-3.5 ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.comment}</p>
            </motion.div>
          ))}
        </AnimatePresence>

        {truckReviews.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full mt-4 py-3 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 hover:border-brand transition-all flex items-center justify-center gap-2"
          >
            {showAll ? (
              <>
                <RiArrowUpSLine className="w-5 h-5" />
                Show Less
              </>
            ) : (
              <>
                <RiArrowDownSLine className="w-5 h-5" />
                Show All {truckReviews.length} Reviews
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
