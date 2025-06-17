import image1 from "@/public/assests/image-42-copyright-qeq4h6sbe29sz12maty1og7h4l8nxzp773y8rg1cia.jpg";
import image2 from "@/public/assests/image-43-copyright-qeq4h6sbe29sz12maty1og7h4l8nxzp773y8rg1cia.jpg";
import Image from "next/image";
export default function PlumbingSystems() {
  return (
    <section className="mt-16 p-12">
      <div className="md:flex flex-wrap justify-center items-center">
        <div className="md:w-1/2 flex gap-8">
          <Image src={image1} alt="image1" className="w-5/12" data-aos="fade-right" loading="lazy" />
          <Image src={image2} alt="image2" className="w-5/12" data-aos="fade-up" data-aos-delay="400" loading="lazy" />
        </div>
        <div className="md:w-1/2 mt-4" data-aos="fade-left">
          <span className="text-navLinks uppercase font-semibold tracking-wider">
            Modern Solutions
          </span>
          <h1 className="my-6 xl:text-5xl text-3xl font-bold">
            Top-notch pipe work & plumbing systems
          </h1>
          <p className="text-gray-500 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <button className="btn mt-8 bg-main hover:bg-sky-950 transition duration-500 text-white py-4 w-56">
            Visit Our Online Store
          </button>
        </div>
      </div>
    </section>
  );
}
