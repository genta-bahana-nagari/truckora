import { Review } from "@/types/reviewType";

export const reviews: Review[] = [
  {
    id: "review-1",
    truckId: "truck-1",
    user: "Michael T.",
    rating: 5,
    comment:
      "Extremely reliable dump truck. Handled heavy construction loads without any issues.",
    date: "2025-11-03",
  },
  {
    id: "review-2",
    truckId: "truck-1",
    user: "David K.",
    rating: 4,
    comment:
      "Very durable and powerful. The driver was professional and punctual.",
    date: "2025-09-18",
  },

  {
    id: "review-3",
    truckId: "truck-2",
    user: "Sarah L.",
    rating: 5,
    comment:
      "The Volvo FH16 is incredibly comfortable for long hauls. Great performance.",
    date: "2025-12-12",
  },
  {
    id: "review-4",
    truckId: "truck-2",
    user: "LogiTrans Co.",
    rating: 5,
    comment:
      "Perfect for our logistics routes. Powerful engine and smooth automatic transmission.",
    date: "2025-10-01",
  },

  {
    id: "review-5",
    truckId: "truck-3",
    user: "Andi Pratama",
    rating: 5,
    comment:
      "Very efficient for city deliveries. Compact and easy to drive in tight streets.",
    date: "2025-08-14",
  },
];
