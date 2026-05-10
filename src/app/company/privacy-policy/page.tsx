"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCalendar, FiMail, FiPrinter, FiShield } from "react-icons/fi";

export default function PrivacyPolicyPage() {
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
            <div className="flex items-center gap-3">
              <FiShield className="w-8 h-8 text-gray-400" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                Privacy Policy
              </h1>
            </div>
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
              <span>privacy@truckora.com</span>
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
            At Truckora, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you use our platform, website, and services. Please
            read this policy carefully.
          </p>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We collect information that you provide directly to us, as well as
              information automatically collected when you use our platform.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              Personal Information You Provide
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Name, email address, phone number, and physical address</li>
              <li>Government-issued ID or driver&apos;s license information</li>
              <li>
                Payment information (credit/debit card details, bank account)
              </li>
              <li>Company information if you&apos;re a business customer</li>
              <li>Communication preferences and feedback</li>
              <li>
                Driver&apos;s license and driving history for verification
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">
              Information Automatically Collected
            </h3>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>
                Device information (IP address, browser type, operating system)
              </li>
              <li>Usage data (pages visited, time spent, search queries)</li>
              <li>Location data (with your consent)</li>
              <li>Cookies and similar tracking technologies</li>
              <li>Booking history and transaction records</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Processing and managing truck reservations</li>
              <li>
                Verifying your identity and eligibility to use our services
              </li>
              <li>Processing payments and preventing fraud</li>
              <li>
                Communicating with you about bookings, updates, and promotions
              </li>
              <li>Improving and optimizing our platform</li>
              <li>Providing customer support and resolving disputes</li>
              <li>Complying with legal obligations</li>
              <li>Analyzing usage trends and platform performance</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              3. Sharing Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may share your information in the following circumstances:
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">With Truck Owners:</strong>
                  <span className="text-gray-600">
                    {" "}
                    To facilitate bookings and communication
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Service Providers:</strong>
                  <span className="text-gray-600">
                    {" "}
                    Payment processors, verification services, and analytics
                    providers
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Legal Compliance:</strong>
                  <span className="text-gray-600">
                    {" "}
                    When required by law or to protect rights and safety
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Business Transfers:</strong>
                  <span className="text-gray-600">
                    {" "}
                    In connection with mergers, acquisitions, or asset sales
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong className="text-gray-900">Note:</strong> We never sell
                your personal information to third parties for marketing
                purposes.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information, including:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security assessments and audits</li>
              <li>Employee training on data protection</li>
              <li>PCI compliance for payment processing</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-100">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> While we strive to protect your
                information, no method of transmission over the internet is 100%
                secure. Please keep your account credentials confidential.
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              5. Your Privacy Rights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update inaccurate or incomplete
                information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your data
                (subject to legal obligations)
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing
                communications
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a
                structured format
              </li>
              <li>
                <strong>Restrict Processing:</strong> Limit how we use your
                information
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              To exercise these rights, please contact us at
              privacy@truckora.com.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use cookies and similar technologies to enhance your
              experience. Types of cookies we use include:
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Essential Cookies:</strong>
                  <span className="text-gray-600">
                    {" "}
                    Required for platform functionality
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Analytics Cookies:</strong>
                  <span className="text-gray-600">
                    {" "}
                    Help us understand how users interact with our platform
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2" />
                <div>
                  <strong className="text-gray-900">Preference Cookies:</strong>
                  <span className="text-gray-600">
                    {" "}
                    Remember your settings and preferences
                  </span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed mt-3">
              You can control cookie settings through your browser preferences.
              However, disabling cookies may affect platform functionality.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              7. Data Retention
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information for as long as necessary to:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Provide our services and fulfill transactions</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain security and prevent fraud</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              When data is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              8. International Data Transfers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              for such transfers, including standard contractual clauses where
              required.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              9. Children&apos;s Privacy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are not directed to individuals under 18 years of
              age. We do not knowingly collect personal information from
              children. If you believe a child has provided us with personal
              information, please contact us immediately.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              10. Third-Party Links
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our platform may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these sites.
              We encourage you to review their privacy policies before providing
              any information.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of material changes by:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Posting the updated policy on our platform</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying a notice on our website</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-3">
              The &quot;Last updated&quot; date at the top of this policy
              indicates when changes were made. Continued use of our services
              after changes constitutes acceptance.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              12. Contact Information
            </h2>
            <p className="text-gray-600 leading-relaxed">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> privacy@truckora.com
              </p>
              <p className="text-gray-700">
                <strong>Data Protection Officer:</strong> dpo@truckora.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> 123 Maple Street, South Jakarta,
                Indonesia 12190
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> +62 812-3456-7890
              </p>
            </div>
          </section>

          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              By using Truckora, you consent to the collection and use of your
              information as described in this Privacy Policy.
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
                href="/company/terms-of-service"
                className="text-gray-500 hover:text-gray-700 transition"
              >
                Terms of Service
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
