import { notFound } from "next/navigation";
import { services } from "@/lib/Services";
import image1 from "@/public/assests/image-55-copyright-1536x1146.jpg";
import image2 from "@/public/assests/image-51-copyright-1536x1146.jpg";
import Image from "next/image";
import VideoPage from "@/components/video/VideoPage";
export default function ServicePage({ params }) {
  const { slug } = params;
  const service = services.find((service) => service.slug === slug);
  if (!service) {
    notFound();
  }
  return (
    <section className="lg:p-24 py-24 p-4 bg-gray-100 min-h-screen">
      <div className="mt-16">
        <div className="lg:flex justify-between">
          <div className="lg:w-1/2" data-aos="fade-right">
            <Image src={service.image} alt={service.title} />
          </div>
          <div className="lg:w-1/2 2xl:w-1/3 pl-4 pt-16" data-aos="fade-left">
            <h1 className="text-5xl mb-4 text-navLinks font-semibold">
              {service.slug}
            </h1>
            <span className="text-main font-semibold text-xl">
              {service.text}
            </span>
            <p className="text-gray-500 leading-9 mt-8"> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sed
              placeat corrupti fugiat accusantium, eveniet obcaecati officiis
              possimus! Sequi similique inventore consequuntur laudantium magni
              suscipit est ullam, corporis voluptatem dignissimos.
            </p>
          </div>
        </div>
        <h2 className="mt-8 font-semibold text-5xl text-navLinks" data-aos="fade-right">
          {service.title}
        </h2>
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          Mauris eu nisi eget nisi imperdiet vestibulum. Nunc sodales vehicula
          risus. Suspendisse id mauris sodales, blandit tortor eu, sodales
          justo. Morbi tincidunt, ante vel suscipit volutpat, turpis enim
          volutpSectetur adipiscing elit, sed do eiusm onsectetur adipiscing
          elit, sed do eiusm od tempor incididunt ut labore. Ut vel placerat
          eros, eu tincidunt velit. Consectetur adipiscing elit, adipiscing
          elit, sed do.
        </p>
        <h3 className="mt-8 text-navLinks font-semibold text-2xl" data-aos="fade-right">
          Sed ut perspiciatis unde omnis iste natus et
        </h3>
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          Aliquam laoreet sed neque ac vehicula. Cras congue eros nec quam
          laoreet, in viverra erat bibendum. Cras turpis urna, vulputate at est
          vitae, posuere lobortis erat.
        </p>
        <div className="mt-8 flex justify-between" data-aos="fade-up">
          <Image src={image1} alt="image1" className="w-[48%]" />
          <Image src={image2} alt="image2" className="w-[48%]" />
        </div>
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <h3 className="mt-8 text-navLinks font-semibold text-2xl" data-aos="fade-right">
          Aliquam quis lobortis quam
        </h3>
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          Curabitur pellentesque odio magna, id malesuada arcu sodales ut. Sed
          sed quam ut ex bibendum commodo id id magna. Aliquam sed ligula sed
          ante blandit volutpat. Ut bibendum, nisi et mattis vulputate, odio
          arcu aliquet metus, nec dapibus risus risus quis lectus.
        </p>
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <VideoPage />
        <p className="mt-8 leading-8 text-gray-500" data-aos="fade-right">
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.
        </p>
      </div>
    </section>
  );
}
