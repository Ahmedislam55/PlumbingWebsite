import Link from "next/link";
function GoogleMapComponent() {
  return (
    <>
      <section className="my-16">
        <div className="relative h-[300px] overflow-hidden">
          <iframe
            title="Youmats Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5293663935114!2d46.614157!3d24.5684381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1980f4b680ed%3A0xc0cf70a369cd9702!2z2KfZhNiv2YXYp9ixICwg2KfZhNix2YrZhdmK2Kk!5e0!3m2!1sen!2ssa!4v1714396219232!5m2!1sen!2ssa"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute opacity-0 md:opacity-100 top-0 right-[20%] text-white bg-main h-[300px] p-12">
            <h3 className="mb-3 text-xl font-bold leading-6">
             Office Address
            </h3>
            <hr className="bg-white w-[30%] border-1 mb-3 " />
            <p className="mb-7 text-lg leading-7">
              Hamzah Ibn Abdul Muttalib Dhahrat <br /> Al Badi'ah Building No
              6249, Riyadh
            </p>
            <span className="mb-7 text-lg leading-7">
              Phone :
              <Link href="https://wa.me/9660115216216" target="_blank" className="hover:text-root transition-all duration-500"> +966 011 521 6216</Link>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
export default GoogleMapComponent;
