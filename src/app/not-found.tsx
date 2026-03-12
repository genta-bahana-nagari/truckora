"use effect";

import Link from "next/link";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-20 sm:py-26 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-gray-700">404</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700"
          >
            Go back home
          </Link>
          <Link
            href="/company/help"
            className="text-sm font-semibold text-gray-900"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
