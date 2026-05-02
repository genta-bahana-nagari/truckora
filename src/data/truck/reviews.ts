// src/data/truck/reviews.ts
import { Review } from "@/types/reviewType";

export const reviews: Review[] = [
  // Kamaz Reviews
  {
    id: "review-1",
    truckId: "kamaz-6520-heavy-dump",
    user: "Michael T.",
    rating: 5,
    comment: "Extremely reliable dump truck. Handled heavy construction loads without any issues. The 14-ton capacity was perfect for our project.",
    date: "2025-11-03",
    helpful: 24,
    verified: true,
  },
  {
    id: "review-2",
    truckId: "kamaz-6520-heavy-dump",
    user: "David K.",
    rating: 4,
    comment: "Very durable and powerful. The driver was professional and punctual. Would definitely recommend for construction sites.",
    date: "2025-09-18",
    helpful: 12,
    verified: true,
  },
  {
    id: "review-3",
    truckId: "kamaz-6520-heavy-dump",
    user: "James Wilson",
    rating: 5,
    comment: "Best dump truck I've rented in years. Fuel efficiency is decent for its size and the truck was in immaculate condition.",
    date: "2025-12-01",
    helpful: 8,
    verified: true,
  },

  // Volvo FH16 Reviews
  {
    id: "review-4",
    truckId: "volvo-fh16-long-haul",
    user: "Sarah L.",
    rating: 5,
    comment: "The Volvo FH16 is incredibly comfortable for long hauls. Great performance, smooth ride, and excellent fuel economy. The automatic transmission made driving effortless.",
    date: "2025-12-12",
    helpful: 45,
    verified: true,
  },
  {
    id: "review-5",
    truckId: "volvo-fh16-long-haul",
    user: "LogiTrans Co.",
    rating: 5,
    comment: "Perfect for our logistics routes. Powerful engine and smooth automatic transmission. The truck arrived clean and well-maintained.",
    date: "2025-10-01",
    helpful: 32,
    verified: true,
  },
  {
    id: "review-6",
    truckId: "volvo-fh16-long-haul",
    user: "Emma Rodriguez",
    rating: 4,
    comment: "Great truck overall. Slightly expensive but worth every penny for cross-country deliveries.",
    date: "2025-11-20",
    helpful: 18,
    verified: true,
  },

  // Isuzu Elf Reviews
  {
    id: "review-7",
    truckId: "isuzu-elf-cargo-box",
    user: "Andi Pratama",
    rating: 5,
    comment: "Very efficient for city deliveries. Compact and easy to drive in tight streets. The 3-ton capacity was just right for our daily routes.",
    date: "2025-08-14",
    helpful: 56,
    verified: true,
  },
  {
    id: "review-8",
    truckId: "isuzu-elf-cargo-box",
    user: "Maria Gonzalez",
    rating: 5,
    comment: "Perfect urban delivery truck. Great fuel efficiency and easy parking. The team at Truckora was very helpful too.",
    date: "2025-11-05",
    helpful: 23,
    verified: true,
  },

  // Scania R500 Reviews
  {
    id: "review-9",
    truckId: "scania-r500-flatbed",
    user: "HeavyHaul Logistics",
    rating: 5,
    comment: "Outstanding flatbed truck. Handled oversized cargo perfectly. The 26-ton capacity is no joke - very stable even at highway speeds.",
    date: "2025-12-10",
    helpful: 34,
    verified: true,
  },
  {
    id: "review-10",
    truckId: "scania-r500-flatbed",
    user: "Robert Chen",
    rating: 4,
    comment: "Very powerful and reliable. Slightly higher fuel consumption but makes up for it in performance.",
    date: "2025-11-15",
    helpful: 12,
    verified: true,
  },

  // Mercedes Actros Reviews
  {
    id: "review-11",
    truckId: "mercedes-actros-tanker",
    user: "PetroExpress",
    rating: 5,
    comment: "Excellent tanker truck for liquid transport. Safety features are top-notch and the truck handles very well.",
    date: "2025-12-05",
    helpful: 28,
    verified: true,
  },
  {
    id: "review-12",
    truckId: "mercedes-actros-tanker",
    user: "Linda Martinez",
    rating: 5,
    comment: "Mercedes quality at its finest. Smooth ride and great safety features. Highly recommend for any liquid transportation needs.",
    date: "2025-10-20",
    helpful: 19,
    verified: true,
  },

  // Volvo FL Electric Reviews
  {
    id: "review-13",
    truckId: "volvo-fl-electric-box",
    user: "GreenLogistics",
    rating: 5,
    comment: "Revolutionary electric truck! Zero emissions, quiet operation, and surprisingly good range. Perfect for our eco-friendly initiative.",
    date: "2025-12-15",
    helpful: 67,
    verified: true,
  },
  {
    id: "review-14",
    truckId: "volvo-fl-electric-box",
    user: "Thomas Green",
    rating: 4,
    comment: "Great electric truck. Charging infrastructure could be better, but the truck itself performs excellently for city deliveries.",
    date: "2025-11-28",
    helpful: 31,
    verified: true,
  },
];

// Helper function to get reviews by truck ID with pagination
export const getReviewsByTruckId = (truckId: string, page: number = 1, limit: number = 5) => {
  const truckReviews = reviews.filter((r) => r.truckId === truckId);
  const start = (page - 1) * limit;
  const end = start + limit;
  
  return {
    reviews: truckReviews.slice(start, end),
    total: truckReviews.length,
    averageRating: truckReviews.length > 0 
      ? truckReviews.reduce((sum, r) => sum + r.rating, 0) / truckReviews.length 
      : 0,
    distribution: [5, 4, 3, 2, 1].map((stars) => ({
      stars,
      count: truckReviews.filter((r) => Math.floor(r.rating) === stars).length,
      percentage: truckReviews.length > 0
        ? (truckReviews.filter((r) => Math.floor(r.rating) === stars).length / truckReviews.length) * 100
        : 0,
    })),
  };
};