import Link from "next/link";

export default function SchedulePage() {
  return (
    <section
      className="bg-[#134B7B] xl:p-16 px-4 py-14 mt-8 xl:px-20"
      data-aos="fade   "
    >
      <div className="text-white md:flex justify-between items-center">
        <div>
          <h2 className="lg:text-3xl md:text-xl text-2xl font-semibold mb-8">
            Schedule an appointment to meet <br /> or email us your questions
          </h2>
        </div>
        <div>
          <Link href="/getQoute">
            <button className="btn bg-white text-zinc-900 mr-8 border-0 p-5 w-48 font-semibold mb-4 md:mb-0">
              Request a Quote
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn bg-transparent border border-white text-white p-5 hover:bg-white hover:text-zinc-900 transition duration-700 w-48 font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
