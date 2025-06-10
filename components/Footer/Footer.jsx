import { Facebook, Twitter, Dribbble, Instagram } from "lucide-react";
function Footer() {
  return (
    <section className="bg-zinc-900 w-full text-white bottom-0 pt-20 px-8 xl:px-28 pb-8">
      <div className="md:flex justify-between xl:pr-24 mb-16">
        <div>
          <h2 className="lg:text-4xl text-3xl font-semibold">
            Plumbing services with <br /> a quality guarantee
          </h2>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-6 md:mt-0 mt-4">Address</h5>
          <span className="leading-8">
            The USA — <br /> 785 15h Street, Office 478 <br /> Boston, MD 02130
          </span>
          <div className="flex gap-4 mt-4">
            <Facebook className="border p-2 w-10 h-10 rounded-full hover:text-blue-400 cursor-pointer transition duration-500" />
            <Twitter className="border p-2 w-10 h-10 rounded-full hover:text-blue-800 cursor-pointer transition duration-500" />
            <Dribbble className="border p-2 w-10 h-10 rounded-full hover:text-red-600 cursor-pointer transition duration-500" />
            <Instagram className="border p-2 w-10 h-10 rounded-full hover:text-purple-600 cursor-pointer transition duration-500" />
          </div>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-6 md:mt-0 mt-4"> Say Hello </h5>
          <span className="text-gray-400 hover:text-white transition duration-500 cursor-pointer"> info@youmats.com </span>
          <h6 className="mt-4 text-xl font-semibold"> + 966 011 521 6216 </h6>
        </div>
      </div>
      <hr className="border-blue-50" />
      <div className="md:flex justify-between items-center mt-8">
        <ul className="flex gap-8 text-gray-400 font-semibold md:mb-0 mb-4">
            <li className="hover:text-white transation duration-700 cursor-pointer"> Home </li>
            <li className="hover:text-white transation duration-700 cursor-pointer"> Services </li>
            <li className="hover:text-white transation duration-700 cursor-pointer"> Shop </li>
            <li className="hover:text-white transation duration-700 cursor-pointer"> Contact </li>
        </ul>
        <span className="text-gray-400">ThemeREX © 2025. All Rights Reserved.</span>
      </div>
    </section>
  );
}

export default Footer;
