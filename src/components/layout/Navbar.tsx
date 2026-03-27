"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  HiTruck,
  HiCalendarDays,
  HiMap,
  HiArrowsRightLeft,
  HiBuildingOffice,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

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
    { name: "Reserve", href: "/reservation", icon: HiCalendarDays },
    { name: "Map", href: "/map", icon: HiMap },
    { name: "Compare", href: "/compare", icon: HiArrowsRightLeft },
    {
      name: "Company",
      icon: HiBuildingOffice,
      children: [
        { name: "About Us", href: "/company/about" },
        { name: "Careers", href: "/company/careers" },
        { name: "Partners", href: "/company/partners" },
        { name: "Contact", href: "/company/contact" },
      ],
    },
  ];

  const linkStyle = (href: string) =>
    `flex items-center gap-2 transition ${
      pathname === href
        ? "text-brand font-semibold"
        : "text-heading hover:text-fg-brand"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-default bg-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-heading"
        >
          <Image src="/icon-circle.png" alt="Truckora" width={40} height={40} />
          <span>Truckora</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => {
            const Icon = item.icon;

            if (item.children) {
              return (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="flex items-center gap-2 text-heading hover:text-fg-brand cursor-pointer"
                  >
                    <Icon size={20} />
                    {item.name}
                  </button>

                  {companyOpen && (
                    <div
                      ref={dropdownRef}
                      className="absolute left-0 mt-3 w-56 rounded-lg border border-default bg-white shadow-lg"
                    >
                      <div className="flex flex-col p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="px-3 py-2 rounded-md text-body hover:bg-black hover:text-white transition"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
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
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/reservation"
            onClick={() => setOpen(false)}
            className="rounded-lg border border-black bg-brand px-4 py-2 font-medium transition hover:bg-black hover:text-white"
          >
            Reserve Truck
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-neutral-secondary-soft transition"
          aria-label="Toggle menu"
        >
          {open ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </div>

      <div
        className={`md:hidden border-t border-default bg-white overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {menu.map((item) => {
            const Icon = item.icon;

            if (item.children) {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setCompanyOpen(!companyOpen)}
                    className="flex items-center gap-2 w-full text-heading"
                  >
                    <Icon size={20} />
                    {item.name}
                  </button>

                  {companyOpen && (
                    <div className="ml-6 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-body hover:text-fg-brand"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
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
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/reservation"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-lg border border-black bg-brand px-4 py-2 text-center font-medium transition hover:bg-black hover:text-white"
          >
            Reserve Truck
          </Link>
        </div>
      </div>
    </nav>
  );
}
