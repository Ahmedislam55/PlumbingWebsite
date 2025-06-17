import Bosch from "@/public/assests/image-60-copyright.webp";
import Xcmg from "@/public/assests/image-62-copyright.webp";
import John from "@/public/assests/image-61-copyright.webp";
import Image from "next/image";
import styles from "./OurAwards.module.css";
import Link from "next/link";
export default function OurAwards() {
  return (
    <section className={`py-24 ${styles.section}`}>
      <div
        className="md:flex justify-between items-center xl:px-24 p-4"
        data-aos="fade-right"
      >
        <div className="md:w-2/3" data-aos="fade-right">
          <span className="text-lg text-navLinks uppercase font-semibold tracking-wider">
            huge honor
          </span>
          <h1 className="my-6 text-5xl font-bold"> Our awards </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            tincidunt eget nullam non. Quis hendrerit dolor magna eget est.
          </p>
        </div>
        <div
          className="md:w-1/3 md:flex justify-end"
          data-aos="fade"
          data-aos-delay="400"
        >
          <Link href="/services">
            <button className="btn mt-16 bg-sky-800 hover:bg-sky-950 transition duration-500 text-white py-4 w-48">
              View Services
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 justify-evenly items-center mt-12">
        <div
          className="bg-white border group p-14 relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image
            src={Bosch}
            alt="Bosch"
            className="group-hover:opacity-0 transation duration-500"
            loading="lazy"
          />
          <div className="text-center absolute top-[40%] opacity-0 group-hover:opacity-100 transation duration-500">
            <h3 className="text-xl mb-2 font-semibold">Project of the Year</h3>
            <span className="text-zinc-600 text-lg"> 2019 </span>
          </div>
        </div>
        <div
          className="bg-white border group p-14 relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image
            src={Xcmg}
            alt="Bosch"
            className="group-hover:opacity-0 transation duration-500"
            loading="lazy"
          />
          <div className="text-center absolute top-[40%] opacity-0 group-hover:opacity-100 transation duration-500">
            <h3 className="text-xl mb-2 font-semibold">
              Best Idea of the Year
            </h3>
            <span className="text-zinc-600 text-lg"> 2020 </span>
          </div>
        </div>
        <div
          className="bg-white border group p-14 relative"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Image
            src={John}
            alt="Bosch"
            className="group-hover:opacity-0 transation duration-500"
            loading="lazy"
          />
          <div className="text-center absolute top-[40%] opacity-0 group-hover:opacity-100 transation duration-500">
            <h3 className="text-xl mb-2 font-semibold"> Best Production </h3>
            <span className="text-zinc-600 text-lg"> 2018 </span>
          </div>
        </div>
      </div>
    </section>
  );
}
