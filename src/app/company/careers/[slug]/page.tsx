import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FiMapPin,
  FiBriefcase,
  FiArrowLeft,
  FiCheck,
} from "react-icons/fi";

import { JobMotion } from "./JobMotion";
import { positions } from "@/data/career/positions";

type Props = {
  params: {
    slug: string;
  };
};

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;

  const job = positions.find((p) => p.slug === slug);

  if (!job) return notFound();

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-10">
      <JobMotion>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {job.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <FiMapPin /> {job.location}
              </span>
              <span className="flex items-center gap-1 bg-gray-50 text-gray-600 px-3 py-1 rounded-full font-semibold shadow-sm">
                <FiBriefcase /> {job.type}
              </span>
            </div>

            <p className="pt-2 text-gray-700 leading-relaxed">
              {job.description}
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FiCheck className="mt-1 text-gray-800" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Requirements
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FiCheck className="mt-1 text-gray-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 shadow-md flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Job Overview
              </h3>
              <div className="text-gray-600 space-y-2 text-sm">
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Type:</strong> {job.type}
                </p>
              </div>

              <Link
                href="mailto:hr@truckora.com"
                className="block text-center bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-300 transform hover:scale-102"
              >
                Apply Now
              </Link>
              <Link
                href="/company/careers#open-positions"
                className="flex items-center justify-center gap-2 text-center bg-white text-black border border-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 transform hover:scale-102"
              >
                <FiArrowLeft /> Back to Open Positions
              </Link>
            </div>
          </div>
        </div>
      </JobMotion>
    </section>
  );
}
