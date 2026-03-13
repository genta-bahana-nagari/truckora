"use client";

export default function CTA() {
  return (
    <section id="cta" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl px-6 py-16 shadow-xl sm:px-16 flex items-center lg:py-20 justify-center items-center">
          <div className="mx-auto max-w-xl text-center lg:mx-0 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
              Rent a Truck in Minutes. Move Anything, Anytime.
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Need a truck for moving, deliveries, or business transport? Our
              reliable trucks are ready when you are—easy booking, flexible
              rentals, and affordable pricing.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/reserve"
                className="rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Get started
              </a>

              <a
                href="#"
                className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
