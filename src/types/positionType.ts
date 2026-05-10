export type JobType = "full-time" | "contract" | "part-time";

export type positionType = {
  slug: string;
  title: string;
  location: string;
  type: JobType;
  department: string;
  experience: string;
  postedDate: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};
