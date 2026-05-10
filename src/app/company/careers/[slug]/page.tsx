import { notFound } from "next/navigation";
import Link from "next/link";
import {
  FiMapPin,
  FiBriefcase,
  FiArrowLeft,
  FiCheck,
  FiClock,
  FiUsers,
} from "react-icons/fi";

import { JobMotion } from "./JobMotion";
import { positions } from "@/data/career/positions";
import { siteConfig } from "@/lib/site";

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
    <section className="bg-gray-50 py-16 px-6 md:px-10 min-h-screen">
      <JobMotion>
        <div className="max-w-6xl mx-auto">
          <Link
            href="/company/careers#open-positions"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 transition mb-6 text-sm font-medium group"
          >
            <FiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Open Positions
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  {job.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                    <FiMapPin className="w-4 h-4 text-gray-400" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                    <FiBriefcase className="w-4 h-4 text-gray-400" />
                    <span>
                      {" "}
                      {job.type === "full-time"
                        ? "Full Time"
                        : job.type === "part-time"
                          ? "Part Time"
                          : job.type === "contract"
                            ? "Contract"
                            : "Remote"}
                    </span>
                  </div>
                  {job.department && (
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                      <FiUsers className="w-4 h-4 text-gray-400" />
                      <span>{job.department}</span>
                    </div>
                  )}
                  {job.experience && (
                    <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                      <FiClock className="w-4 h-4 text-gray-400" />
                      <span>{job.experience}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  About the Role
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {job.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    What You&apos;ll Do
                  </h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheck className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    What You&apos;ll Need
                  </h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FiCheck className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {job.benefits && job.benefits.length > 0 && (
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    What We Offer
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {job.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Job Overview
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Location</span>
                      <span className="text-gray-900 font-medium">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Employment Type</span>
                      <span className="text-gray-900 font-medium">
                        {job.type === "full-time"
                        ? "Full Time"
                        : job.type === "part-time"
                          ? "Part Time"
                          : job.type === "contract"
                            ? "Contract"
                            : "Remote"}
                      </span>
                    </div>
                    {job.department && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Department</span>
                        <span className="text-gray-900 font-medium">
                          {job.department}
                        </span>
                      </div>
                    )}
                    {job.experience && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Experience</span>
                        <span className="text-gray-900 font-medium">
                          {job.experience}
                        </span>
                      </div>
                    )}
                    {job.postedDate && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Posted</span>
                        <span className="text-gray-900 font-medium">
                          {new Date(job.postedDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-gray-900 rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Ready to Join?
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Send us your application and become part of the Truckora
                    team.
                  </p>
                  <Link
                    href={`mailto:hr@truckora.com?subject=Application for ${job.title} position`}
                    className="block w-full bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 text-center"
                  >
                    Apply Now
                  </Link>
                  <p className="text-gray-400 text-xs mt-3">
                    Include your resume and a brief cover letter
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <p className="text-gray-500 text-sm mb-3">
                    Know someone perfect for this role?
                  </p>
                  <Link
                    href={`mailto:?subject=Job Opportunity: ${job.title} at Truckora&body=I thought you might be interested in this position: ${siteConfig.url}/company/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition"
                  >
                    Share this job
                    <FiArrowLeft className="rotate-180 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </JobMotion>
    </section>
  );
}
