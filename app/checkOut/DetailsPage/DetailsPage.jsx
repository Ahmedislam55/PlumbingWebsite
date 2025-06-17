export default function DetailsPage() {
  return (
    <section className="md:px-16 p-4">
      <div>
        <h1 className="text-4xl text-navLinks font-semibold">
          Billing details
        </h1>
        <div className="mt-8">
          <form action="">
            <input
              type="text"
              placeholder="Your Name"
              className="md:w-[90%] w-full border p-4 mt-4"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="md:w-[90%] w-full border p-4 mt-4"
            />

            <input
              type="tel"
              placeholder="Your Phone"
              className="md:w-[90%] w-full border p-4 mt-4"
            />
            <textarea
              placeholder="Details"
              className="md:w-[90%] w-full border p-4 mt-4"
            />
            <button className="btn bg-main text-white px-6 py-4 my-6"> Place Order </button>
          </form>
        </div>
      </div>
    </section>
  );
}
