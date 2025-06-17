import image1 from "@/public/assests/image-60-copyright.webp";
import image2 from "@/public/assests/image-63-copyright.webp";
import image3 from "@/public/assests/image-64-copyright.webp";
import image4 from "@/public/assests/image-61-copyright.webp";
import image5 from "@/public/assests/image-65-copyright.webp";
import image6 from "@/public/assests/image-62-copyright.webp";
import Image from "next/image";
export default function IconsHome() {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 5, image: image6 },
  ];
  return (
    <section className="px-8 pb-28  bg-gray-100 2xl:px-14">
      <div className="flex flex-wrap justify-center">
        {images.map((image) => (
          <div
            key={image.id}
            className="flex justify-center pt-4 w-1/2 md:w-1/6"
            data-aos="fade-up"
          >
            <Image
              src={image.image}
              className="opacity-50 hover:opacity-100 transition duration-700"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
