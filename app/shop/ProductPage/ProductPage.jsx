"use client";
import { CartContext } from "@/app/context/CartContext";
import GetQuoteButton from "@/components/GetQouteButton/GetQouteButton";
import { Products } from "@/lib/Product";
import Image from "next/image";
import Link from "next/link";
export default function ProductPage() {
  return (
    <section className="2xl:p-14 py-14">
      <div className="md:flex flex-wrap justify-center items-center">
        {Products.map((product) => (
          <div
            key={product.slug}
            className="p-4 xl:w-1/4 md:w-1/2 lg:w-1/3 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Link href={`/shop/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.title}
                className="h-80 hover:scale-110 transition duration-700"
              />
            </Link>
            <div className="ms-4 mt-8">
              <h2 className="text-lg mb-2 font-semibold text-navLinks hover:text-main transition duration-700 cursor-pointer">
                {product.title}
              </h2>
              <span className="text-gray-500 text-lg">
                ${product.price}.00
              </span>
              <div className="flex justify-between">
                <GetQuoteButton product={product} quantity={1} />
                <Link href={`/shop/${product.slug}`}>
                  <button className="block mt-4 border-0 bg-sky-800 hover:bg-sky-950 transition duration-500 text-white px-6 h-16">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
