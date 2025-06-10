"use client";
import React from "react";
import Slider from "react-slick";
import image1 from "@/public/assests/image-3-copyright.jpg";
import image2 from "@/public/assests/image-11-copyright.jpg";
import image3 from "@/public/assests/image-5-copyright.jpg";
import image4 from "@/public/assests/image-12-copyright.jpg";
import image5 from "@/public/assests/image-14-copyright.jpg";
import Image from "next/image";
export default function SliderProject() {
  const images = [
    {
      id: 1,
      image: image1,
      title: "Skillful pipe installations",
      text: "Projects",
    },
    {
      id: 2,
      image: image2,
      title: "Plumbing valve work",
      text: "Quality",
    },
    {
      id: 3,
      image: image3,
      title: "The latest plumbing",
      text: "Quality",
    },
    {
      id: 4,
      image: image4,
      title: "Exceptional plumbing work",
      text: "Pipleline, Plumbing",
    },
    {
      id: 5,
      image: image5,
      title: "Kitchen faucet gallery",
      text: "Quality",
    },
  ];
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
        {images.map((image) => (
          <div key={image.id} className="pl-4 pr-4 md:pr-0">
            <div className="relative overflow-hidden group">
              <Image
                src={image.image}
                alt="image.title"
                className="h-[30rem] cursor-grab hover:scale-110 transition duration-700"
                loading="lazy"
              />
              <div className="bg-white text-zinc-900 group-hover:translate-x-0 transition duration-1000 px-14 py-6 absolute left-0 bottom-8 z-10 -translate-x-96">
                <h3 className="text-xl font-semibold"> {image.title} </h3>
                <h5 className="mt-2 text-gray-600"> {image.text} </h5>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
