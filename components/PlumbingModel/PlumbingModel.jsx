import logo from "@/public/assests/logo-1-retina.webp";
import Image from "next/image";
import { X, Facebook, Twitter, Dribbble, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
export default function PlumbingModel({ setShowModel }) {
  return (
    <motion.section
      initial={{ translateX: "100%" }}
      animate={{ translateX: "0%" }}
      exit={{ translateX: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-gray-100 fixed z-10 top-0 bottom-0 right-0 w-[25rem] hidden lg:block"
    >
      <div className="p-12">
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            loading="lazy"
            width={200}
            height={200}
            alt="plumbingLogo"
          />
          <X
            onClick={() => setShowModel(false)}
            className="cursor-pointer bg-gray-200 w-10 h-10 p-2 rounded-full hover:rotate-[360deg] transition-transform duration-700"
            size={30}
          />
        </div>
        <div className="mt-32 mb-28">
          <div className="flex items-center gap-6 mt-8">
            <Facebook />
            <span className="text-lg font-medium"> Facebook </span>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <Twitter />
            <span className="text-lg font-medium"> Twitter </span>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <Dribbble />
            <span className="text-lg font-medium"> Dribbble </span>
          </div>
          <div className="flex items-center gap-6 mt-8">
            <Instagram />
            <span className="text-lg font-medium"> Instagram </span>
          </div>
        </div>
        <hr />
        <div className="mt-8">
          <Link target="_blank" href="https://wa.me/9660115216216">
            <span className="text-xl font-semibold tracking-wider hover:text-main transition-all duration-500">
              + 966 011 521 6216
            </span>
          </Link>
          <h6 className="text-gray-400 mt-2"> info@youmats.com </h6>
        </div>
      </div>
    </motion.section>
  );
}
