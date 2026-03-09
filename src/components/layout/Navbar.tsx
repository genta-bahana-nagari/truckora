"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  HiTruck,
  HiCalendarDays,
  HiMap,
  HiArrowsRightLeft,
  HiBars3,
  HiXMark,
} from "react-icons/hi2";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    { name: "Trucks", href: "/trucks", icon: HiTruck },
    { name: "Reserve", href: "/reserve", icon: HiCalendarDays },
    { name: "Map", href: "/map", icon: HiMap },
    { name: "Compare", href: "/compare", icon: HiArrowsRightLeft },
  ];

  const linkStyle = (href: string) =>
    `flex items-center gap-2 transition ${
      pathname === href
        ? "text-brand font-semibold"
        : "text-heading hover:text-fg-brand"
    }`;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-default bg-neutral-primary backdrop-blur">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-heading"
        >
          TruckReserve
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {menu.map(({ name, href, icon: Icon }) => (
            <Link key={href} href={href} className={linkStyle(href)} onClick={() => setOpen(false)}>
              <Icon size={20} />
              {name}
            </Link>
          ))}

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
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {menu.map(({ name, href, icon: Icon }) => (
            <Link key={href} href={href} className={linkStyle(href)}>
              <Icon size={20} />
              {name}
            </Link>
          ))}

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
