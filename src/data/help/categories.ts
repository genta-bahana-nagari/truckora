import {
  FiCreditCard,
  FiBookOpen,
  FiCalendar,
} from "react-icons/fi";

export const categories = [
  {
    title: "Getting Started",
    icon: FiBookOpen,
    color: "bg-blue-50 text-blue-600",
    articles: [
      { title: "How to create an account", link: "/help/create-account" },
      { title: "How to browse available trucks", link: "/help/browse-trucks" },
      {
        title: "Understanding truck types & capacities",
        link: "/help/truck-types",
      },
      {
        title: "Setting up your business profile",
        link: "/help/business-profile",
      },
    ],
  },
  {
    title: "Making a Reservation",
    icon: FiCalendar,
    color: "bg-green-50 text-green-600",
    articles: [
      { title: "How to reserve a truck", link: "/help/reserve-truck" },
      {
        title: "Choosing pickup & drop-off locations",
        link: "/help/locations",
      },
      { title: "Selecting rental duration", link: "/help/duration" },
      {
        title: "Special requests & instructions",
        link: "/help/special-requests",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    icon: FiCreditCard,
    color: "bg-purple-50 text-purple-600",
    articles: [
      { title: "How pricing works", link: "/help/pricing" },
      { title: "Accepted payment methods", link: "/help/payment-methods" },
      { title: "Getting an invoice", link: "/help/invoice" },
      { title: "Cancellation & refund policy", link: "/help/cancellation" },
    ],
  },
  // {
  //   title: "Managing Bookings",
  //   icon: FiClock,
  //   color: "bg-orange-50 text-orange-600",
  //   articles: [
  //     { title: "Viewing your reservations", link: "/help/view-bookings" },
  //     { title: "Modifying a booking", link: "/help/modify-booking" },
  //     { title: "Extending rental period", link: "/help/extend-booking" },
  //     { title: "Canceling a reservation", link: "/help/cancel-booking" },
  //   ],
  // },
  // {
  //   title: "Account & Security",
  //   icon: FiShield,
  //   color: "bg-red-50 text-red-600",
  //   articles: [
  //     { title: "Resetting your password", link: "/help/reset-password" },
  //     { title: "Updating account information", link: "/help/update-account" },
  //     { title: "Payment security", link: "/help/security" },
  //     { title: "Privacy settings", link: "/help/privacy" },
  //   ],
  // },
  // {
  //   title: "For Truck Owners",
  //   icon: FiUserCheck,
  //   color: "bg-teal-50 text-teal-600",
  //   articles: [
  //     { title: "Listing your truck", link: "/help/list-truck" },
  //     { title: "Setting availability", link: "/help/availability" },
  //     { title: "Managing reservations", link: "/help/manage-reservations" },
  //     { title: "Understanding payouts", link: "/help/payouts" },
  //   ],
  // },
];