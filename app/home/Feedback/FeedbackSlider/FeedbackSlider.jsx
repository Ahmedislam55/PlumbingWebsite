"use client";
import image1 from "@/public/assests/image-56-copyright-150x150.jpg";
import image2 from "@/public/assests/image-17-copyright-150x150.jpg";
import image3 from "@/public/assests/image-74-copyright-150x150.jpg";
import image4 from "@/public/assests/image-6-copyright-150x150.jpg";
import Slider from "react-slick";
import { Quote } from "lucide-react";
import Image from "next/image";
export default function FeedbackSlider() {
  const clients = [
    {
      id: 1,
      image: image1,
      title: "George Caldwell",
      text: "Austin, TX",
      des: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non.",
    },
    {
      id: 2,
      image: image2,
      title: "Felicia Garrett",
      text: "Boston, MA",
      des: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptat cupidatat siten.",
    },
    {
      id: 3,
      image: image3,
      title: "Roland Berry",
      text: "Fresno, CA",
      des: "Itaque earum rerum hic tenetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl eget tincidunt pleasure.",
    },
    {
      id: 4,
      image: image4,
      title: "Owen Palmer",
      text: "New York, NY",
      des: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi cons equatur uis dolorem.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots) => (
      <div className="mt-4" data-aos="fade" data-aos-delay="400">
        <ul className="flex justify-center items-center"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-4 mt-4 h-4 hidden md:block rounded-full bg-slate-300 hover:bg-main transition duration-300" ></div>
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
  return (
    <section className="my-12">
      <div>
        <Slider {...settings}>
          {clients.map((client) => (
            <div key={client.id} data-aos="fade-up" data-aos-delay="400">
              <div className="bg-gray-100 mx-4 p-14">
                <Quote className="text-main mb-8" size={40} />
                <p className="text-gray-800 leading-7"> {client.des} </p>
                <div className="mt-8 flex items-center gap-8">
                  <div>
                    <Image
                      src={client.image}
                      alt={client.title}
                      width={70}
                      height={70}
                      className="rounded-full"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h5 className="text-zinc-800 font-semibold text-lg">{client.title}</h5>
                    <h6 className="text-gray-500"> {client.text} </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
