import { PhoneCall } from "lucide-react";
import image1 from "@/public/assests/image-9.jpg";
import image2 from "@/public/assests/image-8.jpg";
import Image from "next/image";
import styles from "./PlumbingSolutions.module.css";
import Link from "next/link";
export default function PlumbingSolutions() {
  return (
    <section className={`2xl:px-24 2xl:py-16 m-8 ${styles.section}`}>
      <div className="md:flex">
        <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="400">
          <span className="tracking-wider uppercase text-navLinks font-semibold">
            Quality assurance
          </span>
          <h1 className="2xl:text-6xl text-4xl font-semibold my-8">
            Plumbing solutions <br /> on demand
          </h1>
          <span className="tracking-wider md:text-lg font-semibold text-navLinks">
            We install the best plumbing for your home
          </span>
          <p className="my-6 text-base text-gray-500 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non incididunt ut.
          </p>
          <div className="md:flex gap-8 items-center mb-8">
            <div>
              <Link href="/about">
                <button className="btn bg-sky-800 hover:bg-sky-950 transition duration-500 text-white py-4 w-40">
                  About Us
                </button>
              </Link>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="tracking-wider 2xl:text-lg flex items-center gap-4">
                <PhoneCall className="bg-gray-200 w-14 h-14 p-4" /> 966 011 521
                6216
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-end relative">
          <div data-aos="fade-up" data-aos-delay="400">
            <Image
              src={image2}
              alt="image-8-copyright"
              width={450}
              height={450}
              loading="lazy"
            />
          </div>
          <div
            className="hidden md:block absolute top-[30%] right-[35%]"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <Image
              src={image1}
              alt="image-9-copyright"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
