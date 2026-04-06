export type JobType = "Full-time" | "Contract" | "Part-time";

export type positionType = {
  slug: string;
  title: string;
  location: string;
  type: JobType;
  description: string;
  responsibilities: string[];
  requirements: string[];
};
