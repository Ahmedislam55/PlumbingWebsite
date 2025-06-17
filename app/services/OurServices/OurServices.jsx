import piplines from "@/public/assests/image-54-copyright.jpg";
import connection from "@/public/assests/image-45-copyright.jpg";
import repiping from "@/public/assests/image-40-copyright.jpg";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { services } from "@/lib/Services";
import Link from "next/link";
export default function OurServices() {
  return (
    <section className="p-4 md:px-14">
      <div className="text-center mt-8" data-aos="fade">
        <span className="uppercase text-navLinks font-semibold tracking-widest">
          Premium Quality
        </span>
        <h1 className="pt-6 lg:text-5xl md:text-4xl text-2xl font-bold">
          Our services make your life <br /> comfortable
        </h1>
      </div>
      <div className="md:flex mt-8 flex-wrap justify-between items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="md:w-[48%] xl:w-[22%] mt-4 text-center group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link href={`/services/${service.slug}`}>
              <Image
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="rounded-full mb-6 h-52 w-52 m-auto group-hover:scale-110 transition duration-700"
              />
              <span className="text-gray-500 text-lg"> Best Service </span>
              <h3 className="text-2xl text-navLinks font-semibold my-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-8 text-sm">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <MoveRight
                className="m-auto my-4 border p-4 rounded-full group-hover:bg-main group-hover:text-white transition duration-700"
                size={60}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
