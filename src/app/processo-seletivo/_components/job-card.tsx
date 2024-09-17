// /app/processo-seletivo/_components/JobCard.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProgressBar from "./progress-bar";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function JobCard() {
  const jobs = [
    {
      title: "Product Manager",
      area: "Marketing",
      salary: "$2,000 - $5,000 / Mensal",
      status: "in-progress",
    },
    {
      title: "UI/UX Designer",
      area: "Design",
      salary: "$2,000 - $5,000 / Mensal",
      status: "pending",
    },
  ];

  return (
    <section className="w-full py-16">
      <h2 className="text-3xl font-bold mb-8 font-martel">Processo Seletivo</h2>
      {jobs.map((job, index) => (
        <Card key={index} className="mb-8 shadow-none border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-martel">{job.title}</CardTitle>
            <CardDescription>{job.area}</CardDescription>
            <CardDescription>{job.salary}</CardDescription>
          </CardHeader>
          {job.status === "in-progress" && (
            <>
              <CardContent>
                <ProgressBar />
                <p className="mt-8 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="rounded-full">
                  Ver feedback <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardFooter>
            </>
          )}
          {job.status === "pending" && (
            <CardFooter>
              <Button variant="ghost" className="rounded-full">
                Ver Mais <ChevronDown className="ml-2" size={16} />
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </section>
  );
}
