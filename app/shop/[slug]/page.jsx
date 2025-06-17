"use client";
import { Products } from "@/lib/Product";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ChevronUp, ChevronDown, FileText } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import GetQuoteButton from "@/components/GetQouteButton/GetQouteButton";
export default function page({ params }) {
  const { slug } = params;
  const product = Products.find((product) => product.slug === slug);
  if (!product) {
    notFound();
  }
  const [number, setNumber] = useState(1);
  function increase() {
    setNumber(number + 1);
  }
  function decrease() {
    if (number === 1) {
      return number;
    } else {
      setNumber(number - 1);
    }
  }
  return (
    <section className="2xl:p-28 p-8 py-28 bg-gray-100">
      <div className="lg:flex items-center">
        <div className="lg:w-1/2 overflow-hidden" data-aos="fade-right">
          <Image
            src={product.image}
            alt={product.title}
            className="w-[100%] m-auto hover:scale-110 cursor-pointer transition duration-700"
          />
        </div>
        <div className="lg:w-[40%]" data-aos="fade-left">
          <h1 className="text-4xl text-navLinks font-semibold">
            {product.title}
          </h1>
          <h3 className="text-main mt-4 text-2xl font-medium">
            ${product.price}.00
          </h3>
          <p className="text-gray-500 leading-8 mt-4 ">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit
            aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor.
          </p>
          <p className="text-gray-500 leading-8 mt-4 ">
            Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore
            et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et
            justo duo dolores et ea rebum.
          </p>
          <div className="flex gap-4 mt-6 items-center">
            <div className="mt-4">
              <button className="border h-16 px-8 py-2 flex gap-12 items-center text-gray-500">
                <span className="text-lg"> {number} </span>
                <div>
                  <ChevronUp onClick={increase} size={18} />
                  <ChevronDown onClick={decrease} size={18} />
                </div>
              </button>
            </div>
            <div>
              <GetQuoteButton product={product} quantity={number} />
            </div>
          </div>
          <div className="mt-10">
            <span className="mr-2 font-semibold">Category:</span>
            <span className="text-gray-500 hover:text-main transition duration-500">
              {product.category}
            </span>
          </div>
          <div className="mt-2">
            <span className="mr-2 font-semibold"> Tags:</span>
            <span className="text-gray-500 hover:text-main transition duration-500">
              {product.tags}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2
          className="text-5xl text-navLinks font-semibold"
          data-aos="fade-right"
        >
          Related Products
        </h2>
        <div className="md:flex md:flex-wrap">
          {Products.filter((p) => p.slug !== slug)
            .slice(0, 3)
            .map((product) => (
              <div className="p-4 md:w-1/2 xl:w-1/3 mb-8" data-aos="fade-up">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-80 hover:scale-110 transition duration-700 cursor-pointer"
                />
                <div className="ms-4 mt-8">
                  <h2 className="text-lg mb-2 font-semibold text-navLinks hover:text-main transition duration-700 cursor-pointer">
                    {product.title}
                  </h2>
                  <span className="text-gray-500 text-lg">
                    ${product.price}.00
                  </span>
                  <div className="flex gap-4">
                    <Link href={`/shop/${product.slug}`}>
                      <button className="block mt-4 border-0 bg-sky-800 hover:bg-sky-950 transation duration-500 text-white px-6 h-16">
                        Read more
                      </button>
                    </Link>
                    <GetQuoteButton product={product} quantity={number} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
