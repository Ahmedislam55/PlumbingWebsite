import Image from "next/image";
import image from "@/public/assests/plumber-with-his-arms-crossed.jpg";
import CounterSection from "@/components/CounterSection/CounterSection";
import styles from "./SolvePlumbing.module.css";
import Link from "next/link";
export default function SolvePlumbing() {
  return (
    <section className={`2xl:h-screen ${styles.section}`}>
      <div className="md:flex h-full">
        <div
          className="md:w-[40%] flex justify-center items-center overflow-hidden"
          data-aos="fade-right"
        >
          <Image
            src={image}
            alt="plumberMan"
            width={450}
            height={450}
            className="md:mt-12 mt-24"
            priority
          />
        </div>
        <div
          className="md:w-[60%] h-full flex justify-start items-center p-4"
          data-aos="fade-left"
        >
          <div>
            <h1 className="xl:text-6xl text-4xl font-bold lg:mt-48 mt-12 mb-8 text-zinc-900">
              We solve, you evolve — plumbing services
            </h1>
            <p className="text-gray-500 md:tracking-wider md:text-base text-sm">
              At vero eos et accusamus et iusto odio dignissimos ducimus
            </p>
            <p className="text-gray-500 md:tracking-wider mt-2 md:text-base text-sm ">
              qui blanditiis praesentium voluptatum deleniti atque corrupti.
            </p>
            <Link href="/services">
              <button className="btn bg-main mt-8 xl:mb-8 text-white tracking-wider hover:bg-teal-900 transation duration-500 font-bold w-56 py-4">
                More Information
              </button>
            </Link>
            <CounterSection />
          </div>
        </div>
      </div>
    </section>
  );
}
