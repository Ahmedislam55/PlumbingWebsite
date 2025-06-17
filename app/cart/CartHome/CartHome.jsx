import { ChevronDown } from "lucide-react";
export default function CartHome() {
  return (
    <section className="py-40 flex justify-center items-center">
      <div data-aos="zoom-in">
        <h1 className="md:text-6xl text-4xl text-zinc-800 font-semibold my-8">Our Cart </h1>
        <ChevronDown className="mx-auto" size={40} />
      </div>
    </section>
  )
}
