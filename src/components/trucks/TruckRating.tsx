import { BsStarFill } from "react-icons/bs";

export function TruckRating({ truck }: { truck: (typeof trucks)[0] }) {
  const fullStars = Math.floor(truck.rating);
  const totalStars = 5;

  return (
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[...Array(totalStars)].map((_, index) => (
            <BsStarFill
              key={index}
              aria-hidden="true"
              className={`h-5 w-5 ${
                index < fullStars ? "text-gray-900" : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="ml-3 text-sm font-medium text-gray-800">
          {truck.reviews} reviews
        </p>
      </div>
    </div>
  );
}
