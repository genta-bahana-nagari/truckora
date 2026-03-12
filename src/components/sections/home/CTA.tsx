"use client";
import Image from "next/image";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden justify-center bg-white"
    >
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-black sm:text-4xl">
              Boost your productivity. Start using our app today.
            </h2>
            <p className="mt-6 text-lg/8 text-pretty text-gray/85">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-md border border-gray-100 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 transition duration-300
                shadow-xs hover:bg-gray-100"
              >
                Get started
              </a>
              <a
                href="#"
                className="rounded-md border border-black bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 transition duration-300
                shadow-xs hover:bg-black hover:text-white"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              src="/images/carousel/truck2.png"
              alt="CTA Image"
              width={1824}
              height={1080}
              className="absolute top-0 left-0 w-228 max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
