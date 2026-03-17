import { BsStarFill } from "react-icons/bs";

import { reviews } from "@/data/reviews";

export function TruckReviews({ truckId }: { truckId: string }) {
  const truckReviews = reviews.filter((r) => r.truckId === truckId);

  if (truckReviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>;
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>

      <div className="space-y-6">
        {truckReviews.map((review) => (
          <div key={review.id} className="shadow-md rounded-lg p-4 cursor-pointer hover:scale-102 transition duration-200">
            <div className="flex justify-between items-center mb-2">
              <p className="font-semibold">{review.user}</p>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>

            <p className="flex gap-1 text-black mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <BsStarFill key={i} />
              ))}
            </p>

            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
