import plumber from "@/public/assests/plumber.png";
import repiping from "@/public/assests/drop.png";
import connection from "@/public/assests/open-hand.png";
import pipeline from "@/public/assests/plumbing_10722938.png";
import { Ellipsis } from 'lucide-react';
import Image from "next/image";
export default function PipeRepair() {
  const images = [
    {
      id: 1,
      image: plumber,
      title: "Fitting",
      text: "Sed do eiusm od tempor ",
    },
    {
      id: 2,
      image: repiping,
      title: "Repiping",
      text: "Sed do eiusm od tempor ",
    },
    {
      id: 3,
      image: connection,
      title: "Connection",
      text: "Sed do eiusm od tempor ",
    },
    {
      id: 4,
      image: pipeline,
      title: "Pipeline",
      text: "Sed do eiusm od tempor ",
    },
  ];
  return (
    <section className="bg-gray-100 xl:px-24 p-4">
      <div className="text-center mt-12" data-aos="zoom-in" >
        <span className="text-lg text-navLinks uppercase font-semibold tracking-wider">
          Our Services
        </span>
        <h1 className="mt-6 md:text-5xl text-4xl font-bold"> Pipe repair 24/7</h1>
      </div>
      <div className="md:flex justify-center items-center gap-4 mt-8">
        {images.map((image) => (
          <div key={image.id} className="bg-white group cursor-pointer m-4 md:m-0 text-center p-8 rounded md:w-1/4" data-aos="fade-up" data-aos-delay="500">
            <Image
              src={image.image}
              alt="plumber"
              width={80}
              height={80}
              className="mx-auto hover:scale-110 transition duration-700"
              loading="lazy"
            />
            <h5 className="mt-4 my-2 text-2xl font-semibold">
              {image.title}
            </h5>
            <span className="text-gray-500"> {image.text} </span>
            <Ellipsis className="mt-4 m-auto text-gray-500 group-hover:text-main transition duration-500" size={50}  />
          </div>
        ))}
      </div>
    </section>
  );
}
