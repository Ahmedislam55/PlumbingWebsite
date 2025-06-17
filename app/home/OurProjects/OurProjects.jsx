import SliderProject from "./SliderProject/SliderProject";
import styles from "./OurProjects.module.css";
import Link from "next/link";
export default function OurProjects() {
  return (
    <section className={`bg-gray-100 py-24 ${styles.section}`}>
      <div className="md:flex justify-between items-center xl:px-24 p-4">
        <div className="md:w-2/3" data-aos="fade-right">
          <span className="text-lg text-navLinks uppercase font-semibold tracking-wider">
            Work examples
          </span>
          <h1 className="my-6 text-5xl font-bold"> Our Projects </h1>
          <p className="text-gray-500">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
        </div>
        <div
          className="md:w-1/3 md:flex justify-end"
          data-aos="fade"
          data-aos-delay="400"
        >
          <Link href="/projects">
            <button className="btn mt-16 bg-sky-800 hover:bg-sky-950 transition duration-500 text-white py-4 w-48">
              View Projects
            </button>
          </Link>
        </div>
      </div>
      <div className="xl:pl-24">
        <SliderProject />
      </div>
    </section>
  );
}
