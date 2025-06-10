import SliderClients from "./SliderClients/SliderClients";

export default function ClientsTestimonials() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="text-center" data-aos="fade">
        <span className="text-lg text-navLinks uppercase font-semibold tracking-wider">
          People Say About Us
        </span>
        <h1 className="my-6 md:text-5xl text-3xl font-bold"> Clients' testimonials </h1>
      </div>
      <SliderClients />
    </section>
  );
}
