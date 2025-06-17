import Link from "next/link";
export default function page() {
  return (
    <section className="py-32 text-center">
      <h2 className="md:text-[14rem] text-[10rem] font-semibold text-navLinks"> 404 </h2>
      <h1 className="text-3xl font-semibold mb-4"> Page Not Found </h1>
      <span className="text-gray-500 leading-8">
        We're sorry, but <br /> something went wrong.
      </span>
      <Link href="/home">
        <button className="py-4 px-6 bg-main text-white block mx-auto mt-8"> Home Page </button>
      </Link>
    </section>
  );
}
