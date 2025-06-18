import { projects } from "@/lib/Projects";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Plumbing Repair Projects",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function ProjectsPage() {
  return (
    <section className="bg-gray-100">
      <div className="py-40 flex justify-center items-center">
        <div data-aos="zoom-in">
          <h1 className="md:text-6xl text-4xl text-zinc-800 font-semibold my-8">
            Our Projects
          </h1>
          <ChevronDown className="mx-auto" size={40} />
        </div>
      </div>
      <div className="xl:px-16 p-4 pt-32">
        <div className="md:flex flex-wrap gap-4 justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 shadow-lg md:w-[45%]  xl:w-[32%] mb-8"
              data-aos="fade-up"
            >
              <Link href={`/projects/${project.id}`}>
                <Image
                  className="h-[20rem]"
                  src={project.image}
                  alt={project.title}
                />
              </Link>
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-900">
                    {project.title}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-main border-0"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
