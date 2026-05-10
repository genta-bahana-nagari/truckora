"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar, FiMail, FiPrinter } from "react-icons/fi";

export default function TermsOfServicePage() {
  const lastUpdated = "April 15, 2026";

  return (
    <main className="bg-white min-h-screen py-12 md:py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Terms of Service
            </h1>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition"
            >
              <FiPrinter className="w-4 h-4" />
              Print
            </button>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <FiCalendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center gap-1">
              <FiMail className="w-4 h-4" />
              <span>questions@truckora.com</span>
            </div>
          </div>
          <div className="h-px bg-gray-200 mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-gray max-w-none"
        >
          <p className="text-gray-600 leading-relaxed">
            Welcome to Truckora. By accessing or using our platform, website, or
            services, you agree to be bound by these Terms of Service. Please
            read them carefully.
          </p>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              By creating an account, making a reservation, or using
              Truckora&apos;s services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms. If you do not
              agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              2. Definitions
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong className="text-gray-900">&quot;Platform&quot;</strong>{" "}
                refers to Truckora&apos;s website, mobile application, and
                related services.
              </li>
              <li>
                <strong className="text-gray-900">&quot;User&quot;</strong>{" "}
                refers to any individual or entity using the platform, including
                customers and truck owners.
              </li>
              <li>
                <strong className="text-gray-900">&quot;Booking&quot;</strong>{" "}
                refers to a reservation made through our platform for truck
                rental services.
              </li>
              <li>
                <strong className="text-gray-900">
                  &quot;Truck Owner&quot;
                </strong>{" "}
                refers to individuals or companies listing trucks on our
                platform.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              3. Account Registration
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To access certain features of the platform, you must create an
              account. You agree to:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                Provide accurate, current, and complete information during
                registration
              </li>
              <li>Maintain the security of your password and account</li>
              <li>
                Notify us immediately of any unauthorized use of your account
              </li>
              <li>
                Be responsible for all activities that occur under your account
              </li>
              <li>Not create multiple accounts for fraudulent purposes</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              4. Booking and Reservations
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When you make a booking through Truckora, you agree to:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Provide accurate pickup and drop-off information</li>
              <li>
                Ensure you have the legal right to operate the reserved vehicle
              </li>
              <li>Comply with all applicable traffic laws and regulations</li>
              <li>Return the vehicle in the same condition as received</li>
              <li>
                Pay all applicable fees, deposits, and charges associated with
                your booking
              </li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Note:</strong> All bookings
                are subject to truck availability. Confirmation emails will be
                sent upon successful reservation.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              5. Payments and Fees
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Truckora facilitates payments between customers and truck owners.
              You agree to:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Pay all fees associated with your bookings</li>
              <li>Authorize Truckora to charge your selected payment method</li>
              <li>Pay any applicable taxes, surcharges, or additional fees</li>
              <li>
                Understand that prices may vary based on demand, duration, and
                truck type
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              6. Cancellation and Refund Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our cancellation policy is designed to be fair to both customers
              and truck owners:
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Free cancellation:</strong>
                  <span className="text-gray-600">
                    {" "}
                    Cancel up to 24 hours before pickup for full refund
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Late cancellation:</strong>
                  <span className="text-gray-600">
                    {" "}
                    50% refund for cancellations within 24 hours of pickup
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">No-show:</strong>
                  <span className="text-gray-600">
                    {" "}
                    No refund for failure to show at pickup location
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              7. User Responsibilities and Conduct
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You agree not to misuse the platform or help anyone else do so.
              Prohibited activities include:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Using the platform for any illegal purpose</li>
              <li>Damaging or misusing rented vehicles</li>
              <li>Providing false or misleading information</li>
              <li>Interfering with the operation of the platform</li>
              <li>Attempting to bypass our security measures</li>
              <li>Harassing or abusing other users or support staff</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              8. Truck Owner Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you list trucks on Truckora, you agree to:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Provide accurate information about your vehicles</li>
              <li>Maintain your trucks in safe and roadworthy condition</li>
              <li>Honor all confirmed bookings</li>
              <li>Communicate promptly with customers</li>
              <li>Pay applicable commission fees to Truckora</li>
              <li>Have valid insurance coverage for your vehicles</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              9. Liability and Insurance
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Truckora acts as an intermediary platform connecting customers
              with truck owners. We are not responsible for:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                The condition or safety of vehicles listed on our platform
              </li>
              <li>Accidents, damages, or losses occurring during rentals</li>
              <li>Customer or truck owner conduct during transactions</li>
            </ul>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Important:</strong> All users
                are encouraged to maintain appropriate insurance coverage for
                their activities.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              10. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed">
              All content on the Truckora platform, including logos, designs,
              text, graphics, and software, is the property of Truckora and
              protected by intellectual property laws. You may not copy, modify,
              or distribute our content without permission.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              11. Termination
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Truckora reserves the right to suspend or terminate your account
              if you violate these Terms. You may also close your account at any
              time by contacting support.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              12. Modifications to Terms
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update these Terms from time to time. Continued use of the
              platform after changes constitutes acceptance of the modified
              Terms. We will notify users of significant changes via email or
              platform notification.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              13. Governing Law
            </h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with
              the laws of the Republic of Indonesia. Any disputes arising from
              these Terms shall be resolved in the courts of Jakarta, Indonesia.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              14. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> legal@truckora.com
              </p>
              <p className="text-gray-700">
                <strong>Support:</strong> support@truckora.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Maple Street, South Jakarta,
                Indonesia 12190
              </p>
            </div>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By using Truckora, you acknowledge that you have read and
              understood these Terms of Service.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 transition"
              >
                Home
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-gray-700 transition"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300">•</span>
              <Link
                href="/contact"
                className="text-gray-500 hover:text-gray-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
