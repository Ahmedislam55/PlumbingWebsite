import image1 from "@/public/assests/image-13-copyright.jpg";
import image2 from "@/public/assests/image-1-copyright.jpg";
import image3 from "@/public/assests/image-2-copyright.jpg";
import image4 from "@/public/assests/image-4-copyright.jpg";
import image5 from "@/public/assests/image-10-copyright.jpg";
import image6 from "@/public/assests/image-18-copyright.jpg";
import Image from "next/image";
export default function HomeImages() {
  const images = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
  ];
  return (
    <section>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <div key={image.id} className="md:w-1/6 w-1/3" data-aos="fade">
            <Image src={image.image} alt="image" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
