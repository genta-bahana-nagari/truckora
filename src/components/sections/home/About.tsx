"use client";
import { MdKeyboardArrowRight } from "react-icons/md";

const links = [
  { name: "Browse Trucks", href: "/trucks" },
  { name: "Reserve a Truck", href: "/reserve" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Contact Us", href: "/contact" },
];

const stats = [
  { name: "Trucks Available", value: "100+" },
  { name: "Businesses Served", value: "1,200+" },
  { name: "Reservations Completed", value: "8,500+" },
  { name: "Average Booking Time", value: "5 mins" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden justify-center bg-white py-24 sm:py-32"
    >
      <div className="justify-center text-center mx-auto max-w-3xl">
        <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold tracking-tight text-gray-900">
          About Truckora
        </h2>
        <p className="mt-8 text-xs sm:text-sm md:text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">
          Truckora is a modern truck reservation platform that connects
          businesses and individuals with reliable trucks for transport,
          logistics, and moving needs. Our platform makes it simple to browse
          available trucks, compare options, and reserve the right vehicle in
          minutes. Whether you’re moving goods across the city or managing
          logistics operations, Truckora helps you get the job done efficiently.
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl lg:max-w-none justify-center">
        <div className="flex flex-wrap gap-x-8 gap-y-6 text-base/7 font-semibold text-gray-900 justify-center md:flex lg:gap-x-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="blank"
              rel="nonopener"
              className="flex items-center gap-1"
            >
              {link.name}{" "}
              <span aria-hidden="true">
                <MdKeyboardArrowRight />
              </span>
            </a>
          ))}
        </div>
        <dl className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4 justify-items-center text-center">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col gap-1 items-center">
              <dt className="text-base/7 text-gray-700">{stat.name}</dt>
              <dd className="text-4xl font-semibold tracking-tight text-gray-900">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
