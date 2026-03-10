"use client";

import { useState } from "react";
import Link from "next/link";
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

  const menu = [
    { name: "Trucks", href: "/trucks", icon: HiTruck },
    { name: "Reserve", href: "/reserve", icon: HiCalendarDays },
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
          className="text-xl font-bold tracking-tight text-heading"
        >
          Truckora
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
                    <div className="absolute left-0 mt-3 w-56 rounded-lg border border-default bg-white shadow-lg">
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
            href="/reserve"
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
        className={`md:hidden border-t border-default bg-white transition-all duration-300 ${
          open ? "max-h-100 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-4 gap-4 min-h-screen">
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
            href="/reserve"
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
