"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { projects } from "@/lib/Projects";
import Link from "next/link";
export default function SliderProject() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div className="mt-4" data-aos="fade" data-aos-delay="400">
        <ul className="flex justify-center items-center"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 mt-4 h-4 hidden md:block rounded-full bg-slate-300 hover:bg-main transition duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-8" data-aos="fade-up" data-aos-delay="500">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="pl-4 pr-4 md:pr-0">
            <Link href={`/projects/${project.id}`}>
              <div className="relative overflow-hidden group">
                <Image
                  src={project.image}
                  alt="image.title"
                  className="h-[30rem] cursor-grab hover:scale-110 transition duration-700"
                  loading="lazy"
                />
                <div className="bg-white text-zinc-900 group-hover:translate-x-0 transition duration-1000 px-14 py-6 absolute left-0 bottom-8 z-10 -translate-x-96">
                  <h3 className="text-xl font-semibold"> {project.title} </h3>
                  <h5 className="mt-2 text-gray-600"> {project.slug} </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
