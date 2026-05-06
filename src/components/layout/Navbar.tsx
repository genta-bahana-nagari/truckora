"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiTruck,
  HiBuildingOffice,
  HiBars3,
  HiXMark,
  HiPhone,
  HiChevronDown,
} from "react-icons/hi2";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (window.innerWidth < 768) return;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCompanyOpen(false);
      }
    }

    if (companyOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [companyOpen]);

  const menu = [
    { name: "Trucks", href: "/trucks", icon: HiTruck },
    { name: "Contact", href: "/company/contact", icon: HiPhone },
    {
      name: "Company",
      icon: HiBuildingOffice,
      children: [
        { name: "About", href: "/company/about" },
        { name: "Careers", href: "/company/careers" },
        { name: "Partners", href: "/company/partners" },
        { name: "FAQ", href: "/company/faq" },
        { name: "Help", href: "/company/help" },
      ],
    },
  ];

  const linkStyle = (href: string) =>
    `flex items-center gap-2 transition-all duration-200 rounded-lg px-3 py-2 ${
      pathname === href
        ? "text-brand bg-brand/10 font-semibold"
        : "text-gray-700 hover:text-brand hover:bg-gray-50"
    }`;

  const isActivePath = (href: string) => pathname === href;

  return (
    <>
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="Home"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-r from-brand to-brand/70 rounded-xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <Image
                  src="/icon-circle.png"
                  alt="Truckora"
                  width={40}
                  height={40}
                  className="relative rounded-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Truckora
                </span>
                <span className="text-xs text-gray-500 -mt-1 hidden sm:block">
                  Logistics Simplified
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {menu.map((item) => {
                const Icon = item.icon;

                if (item.children) {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        onClick={() => setCompanyOpen(!companyOpen)}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                          companyOpen
                            ? "text-brand bg-brand/10"
                            : "text-gray-700 hover:text-brand hover:bg-gray-50"
                        }`}
                        aria-expanded={companyOpen}
                      >
                        <Icon size={20} />
                        <span>{item.name}</span>
                        <HiChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            companyOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {companyOpen && (
                          <motion.div
                            ref={dropdownRef}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-0 mt-2 w-64 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden"
                          >
                            <div className="py-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`flex items-center px-4 py-2.5 text-sm transition-colors ${
                                    isActivePath(child.href)
                                      ? "text-brand bg-brand/5 font-medium"
                                      : "text-gray-700 hover:text-brand hover:bg-gray-50"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={linkStyle(item.href)}
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* CTA Button */}
              <Link
                href="/trucks"
                className="ml-2 bg-gray-800 hover:bg-black text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiXMark size={24} className="text-gray-700" />
              ) : (
                <HiBars3 size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1">
                {menu.map((item) => {
                  const Icon = item.icon;

                  if (item.children) {
                    return (
                      <div key={item.name} className="space-y-2">
                        <button
                          onClick={() => setCompanyOpen(!companyOpen)}
                          className="flex items-center justify-between w-full px-3 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={20} />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <HiChevronDown
                            size={18}
                            className={`transition-transform duration-200 ${
                              companyOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {companyOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-6 space-y-1 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                    isActivePath(child.href)
                                      ? "text-brand bg-brand/10 font-medium"
                                      : "text-gray-600 hover:text-brand hover:bg-gray-50"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                        isActivePath(item.href)
                          ? "text-brand bg-brand/10 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon size={20} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>{" "}
      {/* Spacer to prevent content from hiding under fixed navbar */}
    </>
  );
}
