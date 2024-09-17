// /components/FeaturedJobs.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export interface FeaturedJobs {
  title: string;
  area: string;
  salary: string;
  image: string;
  location: string;
  schedule: string;
}

export default function FeaturedJobs() {
  const jobs: FeaturedJobs[] = [
    {
      area: "Marketing",
      image: "/spotify.png",
      location: "Glendale, CA",
      schedule: "Full Time",
      salary: "$2,000 - $5,000 / Mensal",
      title: "Product Manager",
    },
    {
      area: "Designer",
      image: "/pinteres.png",
      location: "San Francisco, CA",
      salary: "$2,000 - $5,000 / Mensal",
      schedule: "Part Time",
      title: "Product Designer",
    },
    {
      area: "Customer Service",
      image: "/google.png",
      location: "Mountain View, CA",
      salary: "$2,000 - $5,000 / Mensal",
      schedule: "Full Time",
      title: "Recruiting Coordinator",
    },
    {
      area: "Software Engineer",
      image: "/apple.png",
      location: "Cupertino, CA",
      salary: "$2,000 - $5,000 / Mensal",
      schedule: "Full Time",
      title: "Developer",
    },
    {
      area: "Support",
      image: "/zap.png",
      location: "Menlo Park, CA",
      salary: "$2,000 - $5,000 / Mensal",
      schedule: "Part Time",
      title: "Customer Support",
    },
    {
      area: "Designer",
      image: "/dribbble.png",
      location: "San Francisco, CA",
      salary: "$2,000 - $5,000 / Mensal",
      schedule: "Part Time",
      title: "Product Designer",
    },
  ];
  return (
    <section className="w-full font-inter py-16">
      <h2 className="text-3xl font-bold mb-8 font-martel">Jobs em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {jobs.map((job, index) => (
          <Card key={index} className="border-none shadow-none">
            <CardHeader className="flex flex-col gap-1">
              <div className="flex flex-row gap-4 items-center">
                <div className="w-8 h-8 border-black border-2 rounded-full flex justify-center items-center p-1">
                  <Image src={job.image} alt={job.title} width={16} height={16} className="rounded-full" />
                </div>
                <CardTitle className="font-martel text-lg">{job.title}</CardTitle>
              </div>
              <CardDescription>{job.area}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs">{job.salary}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full rounded-full h-8">Candidatar-se agora</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
