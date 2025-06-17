import { services } from "@/lib/Services";
import { Ellipsis } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function PipeRepair() {
  return (
    <section className="bg-gray-100 xl:px-24 p-4">
      <div className="text-center mt-12" data-aos="zoom-in">
        <span className="text-lg text-navLinks uppercase font-semibold tracking-wider">
          Our Services
        </span>
        <h1 className="mt-6 md:text-5xl text-4xl font-bold">
          Pipe repair 24/7
        </h1>
      </div>
      <div className="md:flex justify-center items-center gap-4 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white group cursor-pointer m-4 md:m-0 text-center p-8 rounded md:w-1/4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Link href={`/services/${service.slug}`}>
              <Image
                src={service.icon}
                alt={service.slug}
                width={80}
                height={80}
                className="mx-auto hover:scale-110 transition duration-700"
                loading="lazy"
              />
              <h5 className="mt-4 my-2 text-2xl font-semibold">
                {service.slug}
              </h5>
              <span className="text-gray-500"> {service.text} </span>
              <Ellipsis
                className="mt-4 m-auto text-gray-500 group-hover:text-main transition duration-500"
                size={50}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
