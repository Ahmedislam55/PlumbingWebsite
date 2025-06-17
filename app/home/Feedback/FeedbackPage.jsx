import FeedbackSlider from "./FeedbackSlider/FeedbackSlider";
export default function FeedbackPage() {
  return (
    <section className="xl:p-24 p-4">
      <div className="text-center" data-aos="fade">
        <span className="text-navLinks uppercase tracking-wider font-semibold text-lg"> Testimonials</span>
        <h1 className="my-6 md:text-5xl text-4xl font-bold"> Feedback from our clients </h1>
      </div>
      <FeedbackSlider />
    </section>
  );
}
