"use client";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
export default function SliderClients() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div className="mt-4" data-aos="fade" data-aos-delay="400">
        <ul className="flex justify-center items-center"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 mt-4 h-4 hidden md:block rounded-full bg-slate-300 hover:bg-main transition duration-300"></div>
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const items = [
    {
      id: 0,
      des: "At vero eos et accusamus iusto dignissimos ducimus qui blanditiis du quas praesentium voluptatum deleniti atque corrupti quos dolores se adipiscing.",
      title: "Marcia Hensley",
      subTitle: "Boulder, CO",
    },
    {
      id: 1,
      des: "Sed ut perspiciatis accusantium voluptatem natus error sit natus error siten beatae.",
      title: "Martin Flowers",
      subTitle: "Dallas, TX",
    },
    {
      id: 3,
      des: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.",
      title: "Barrie Mcbride",
      subTitle: "Atlanta, GA",
    },
    {
      id: 4,
      des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      title: "Abner Quinn",
      subTitle: "Stowe, VT",
    },
    {
      id: 5,
      des: "Excepteur sint occaecat cupi noproident, sunt in culpa qui officia deser tempora.",
      title: "Flora Shepherd",
      subTitle: "Seattle, WA",
    },
  ];
  return (
    <section>
      <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="flex">
            <div className="bg-white p-16 mx-6" data-aos="fade-up" data-aos-delay="400">
              <div className="flex gap-1 text-yellow-300 mb-8">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-gray-500 leading-7 mb-8"> {item.des} </p>
              <h2 className="text-zinc-900 font-semibold text-lg mb-4"> {item.title} </h2>
              <span className="text-gray-500"> {item.subTitle} </span>
            </div>
            </div>
          ))}
      </Slider>
    </section>
  );
}
