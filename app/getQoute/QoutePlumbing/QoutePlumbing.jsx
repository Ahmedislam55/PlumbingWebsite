import {
  Mail,
  PhoneCall,
  PersonStanding,
  Captions,
  Pen,
  Send,
} from "lucide-react";
export default function QoutePlumbing() {
  return (
    <section className="2xl:p-16 py-24 px-4">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-1/2 md:px-14" data-aos="fade-right">
          <span className="text-navLinks tracking-wider uppercase font-semibold ">
            what we do
          </span>
          <h2 className="text-zinc-900 font-semibold xl:text-5xl text-3xl mt-6 leading-[4rem]">
            We solve plumbing puzzles for you
          </h2>
          <p className="mt-6 text-gray-500 leading-8">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Mail className="bg-white p-4" size={60} />
            <span className="text-lg"> info@youmats.com </span>
          </div>
          <div className="mt-4 flex items-center gap-6">
            <PhoneCall className="bg-white p-4" size={60} />
            <span className="text-lg"> 966 011 521 6216 </span>
          </div>
        </div>
        <div className="lg:w-1/2 bg-white md:p-16 py-16 px-8 mt-8" data-aos="fade-left">
          <form>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <div className="flex items-center gap-2">
                  <PersonStanding /> <span className="text-base"> Name </span>
                </div>
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <div className="flex items-center gap-2">
                  <PhoneCall /> <span className="text-base"> Phone </span>
                </div>
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <div className="flex items-center gap-2">
                  <Mail /> <span className="text-base"> Email Address </span>
                </div>
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <div className="flex items-center gap-2">
                  <Captions /> <span className="text-base"> Subject </span>
                </div>
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <textarea
                type="text"
                name="desc"
                id="desc"
                className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-200 dark:focus:border-main focus:outline-none focus:ring-0 focus:border-main peer"
                placeholder=""
                required
              />
              <label
                htmlFor="desc"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-main peer-focus:dark:text-main peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                <div className="flex items-center gap-2">
                  <Pen />
                  <span className="text-base">
                    How can we help you? Feel free to get in touch!
                  </span>
                </div>
              </label>
            </div>

            <button
              type="submit"
              className="px-6 py-4 text-white bg-main  mt-4"
            >
              <div className="flex items-center gap-2">
                <Send />
                <span className="text-lg">Get in Touch</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
