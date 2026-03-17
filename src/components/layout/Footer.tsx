import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-300 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Truckora</h2>
          <p className="text-sm leading-relaxed">
            Truckora helps businesses and individuals easily find and reserve
            trucks for logistics, transportation, and moving services.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>

            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>

            <a href="#" className="hover:text-white">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/trucks" className="hover:text-white">
                Browse Trucks
              </Link>
            </li>

            <li>
              <Link href="/reserve" className="hover:text-white">
                Reserve Truck
              </Link>
            </li>

            <li>
              <Link href="/map" className="hover:text-white">
                Truck Map
              </Link>
            </li>

            <li>
              <Link href="/compare" className="hover:text-white">
                Compare Trucks
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/company/about" className="hover:text-white">
                About Us
              </Link>
            </li>

            <li>
              <Link href="/company/careers" className="hover:text-white">
                Careers
              </Link>
            </li>

            <li>
              <Link href="/company/partners" className="hover:text-white">
                Partners
              </Link>
            </li>

            <li>
              <Link href="/company/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/company/help" className="hover:text-white">
                Help Center
              </Link>
            </li>

            <li>
              <Link href="/company/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>

            <li>
              <Link href="/company/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>

            <li>
              <Link href="/company/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-700">
        <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-4 text-2xl">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
            <FaCcAmex />
          </div>

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Truckora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
