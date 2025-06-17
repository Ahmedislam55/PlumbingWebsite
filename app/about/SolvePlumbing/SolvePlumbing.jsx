import image1 from "@/public/assests/image-36-copyright.jpg";
import image2 from "@/public/assests/image-19-copyright.jpg";
import Image from "next/image";
import styles from "./SolvePlumbing.module.css";
import Link from "next/link";
export default function SolvePlumbing() {
  return (
    <section className={`2xl:px-14 2xl:py-16 m-8 ${styles.section}`}>
      <div className="md:flex">
        <div className="md:w-1/2 flex relative mb-16">
          <div data-aos="fade-up" data-aos-delay="400">
            <Image
              src={image1}
              alt="image-8-copyright"
              width={450}
              height={450}
              loading="lazy"
            />
          </div>
          <div
            className="absolute top-[30%] right-[5%]"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <Image
              src={image2}
              alt="image-9-copyright"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="400">
          <span className="tracking-wider uppercase text-navLinks font-semibold">
            Premium quality
          </span>
          <h1 className="2xl:text-6xl text-4xl font-semibold my-4">
            We solve plumbing <br /> puzzles for you
          </h1>
          <p className="my-6 text-base text-gray-500 tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <h6 className="my-6 uppercase text-base text-gray-500 tracking-wider">
            Mon-Fri: 9 AM – 10 PM
          </h6>
          <h6 className="my-6 uppercase text-base text-gray-500 tracking-wider">
            Saturday: 9 AM – 6 PM
          </h6>
          <Link href="/cart">
          <button className="btn bg-sky-800 hover:bg-sky-950 transition duration-500 text-white py-4 w-52">
            Visit Our Store Now
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
