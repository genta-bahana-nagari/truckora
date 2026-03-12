"use client";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10">
        <figure className="flex flex-col items-center text-center">
          <blockquote className="text-xl sm:text-2xl font-semibold text-gray-900">
            <p>
              “Truckora made booking our logistics fleet effortless. The
              platform is intuitive, and the trucks arrived exactly when we
              needed them.”
            </p>
          </blockquote>
          <figcaption className="mt-6">
            <div className="flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center text-center">
          <blockquote className="text-xl sm:text-2xl font-semibold text-gray-900">
            <p>
              “I love how Truckora gives me full transparency on truck
              availability and pricing. It has completely streamlined our
              operations.”
            </p>
          </blockquote>
          <figcaption className="mt-6">
            <div className="flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Carlos Mendes</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">
                Manager of Goodies
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
