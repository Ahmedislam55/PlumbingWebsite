import { projects } from "@/lib/Projects";
import { notFound } from "next/navigation";
import { Facebook, Twitter, Mail, Instagram } from "lucide-react";
import React from "react";
import Image from "next/image";
import image1 from "@/public/assests/image-34-copyright-1536x1146.jpg";
import image2 from "@/public/assests/image-29-copyright-1536x1083.jpg";
import image3 from "@/public/assests/image-30-copyright-1536x1083.jpg";
export default function ProjectsDescrption({ params }) {
  const { id } = params;
  console.log(id);
  const project = projects.find((project) => project.id === Number(id));
  if (!project) {
    notFound();
  }

  return (
    <section className="p-4 2xl:p-16">
      <div className="pt-28">
        <h1 className="md:text-5xl text-3xl font-semibold text-navLinks">
          {project.title}
        </h1>
        <div className="flex flex-wrap justify-between mt-14">
          <div className="md:w-1/3 mb-8">
            <div className="flex gap-12">
              <h5 className="text-lg font-semibold"> Client </h5>
              <h5 className="text-lg text-gray-500 hover:text-main transition duration-700"> {project.client} </h5>
            </div>
            <div className="flex gap-14 mt-4">
              <h5 className="text-lg font-semibold"> Year </h5>
              <h5 className="text-lg text-gray-500 hover:text-main transition duration-700"> {project.year} </h5>
            </div>
            <div className="flex gap-8 mt-4">
              <h5 className="text-lg font-semibold"> Author </h5>
              <h5 className="text-lg text-gray-500 hover:text-main transition duration-700"> {project.author} </h5>
            </div>
            <div className="flex gap-6 mt-8">
              <Twitter className="hover:text-main cursor-pointer transation duration-500" />
              <Facebook className="hover:text-main cursor-pointer transation duration-500" />
              <Instagram className="hover:text-main cursor-pointer transation duration-500" />
              <Mail className="hover:text-main cursor-pointer transation duration-500" />
            </div>
          </div>
          <div className="md:w-2/3">
            <Image src={project.image} alt={project.title} loading="lazy" />
            <h2 className="text-3xl font-semibold mt-8 text-navLinks">
              Lorem ipsum dolor
            </h2>
            <p className="mt-6 text-gray-500 leading-8">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia. Adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 mt-8">
              <Image
                src={image1}
                alt="image1"
                loading="lazy"
                className="w-1/2"
              />
              <Image
                src={image2}
                alt="image2"
                loading="lazy"
                className="w-1/2"
              />
            </div>
            <p className="mt-6 text-gray-500 leading-8">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
              quia. Dicta sunt explicabo. Adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad veniam
              quis nostrud exercitation enim ullamco. Nemo magna ipsam
              Voluptatem Quia Voluptas.
            </p>
            <div className="md:flex justify-between mt-8 gap-8">
              <div className="md:w-1/2">
                <p className="text-gray-500 leading-8">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed quia. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia.
                </p>
                <h3 className="text-2xl font-semibold mt-8 text-navLinks">
                  Excepteur sint occaecat cupidatat
                </h3>
                <p className="text-gray-500 leading-8 mt-6">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed dolore sed do magna
                  quia.
                </p>
                <h3 className="text-2xl font-semibold mt-8 text-navLinks">
                  Duis aute irure dolor in reprehenderit
                </h3>
                <p className="text-gray-500 leading-8 mt-6 mb-8">
                  Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit aut fugit, sed dolore sed do magna
                  quia.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image src={image3} alt="image3" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
