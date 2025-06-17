import styles from "./HaveQuestions.module.css";
export default function HaveQuestions() {
  return (
    <section className={`${styles.section} lg:p-24 p-4`}>
      <div className="md:flex justify-end">
        <div className="bg-white md:w-[50%] p-12" data-aos="fade-left">
          <span className="text-navLinks uppercase font-semibold tracking-wider">
            Contact us
          </span>
          <h1 className="my-6 xl:text-5xl text-3xl font-bold xl:leading-[4rem] text-zinc-800">
            Have questions? <br /> Get in touch!
          </h1>
          <form>
            <div className="flex flex-wrap justify-between">
              <div className="mb-6 w-[48%]">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b pb-2 w-full"
                />
              </div>
              <div className="mb-6 w-[48%]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b pb-2 w-full"
                />
              </div>
              <div className="mb-6 w-[48%]">
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b pb-2 w-full"
                />
              </div>
              <div className="mb-6 w-[48%]">
                <input
                  type="number"
                  placeholder="Phone"
                  className="border-b pb-2 w-full"
                />
              </div>
            </div>
             <button className="btn mt-4 bg-main hover:bg-teal-950 transition duration-500 text-white py-4 w-48"> Get in Touch </button>
          </form>
        </div>
      </div>
    </section>
  );
}
