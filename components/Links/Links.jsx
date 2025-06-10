"use client";
import logo from "@/public/assests/logo-inverse-retina.webp";
import Image from "next/image";
import { X, Facebook, Twitter, Dribbble, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";

export default function Links({ setIsOpen }) {
  return (
    <motion.section
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      exit={{ translateY: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-navLinks lg:hidden fixed inset-0 z-50"
    >
      <nav className="w-full p-6">
        <div className="flex justify-between items-center">
          <Image
            src={logo}
            loading="lazy"
            width={200}
            height={200}
            alt="plumbingLogo"
          />
          <X
            onClick={() => setIsOpen(false)}
            className="text-white cursor-pointer hover:rotate-[360deg] transition-transform duration-700"
            size={40}
          />
        </div>

        <ul className="text-center text-gray-300 text-2xl font-bold mt-8" onClick={() => setIsOpen(false)}>
          <li>
            <Link
              href="/home"
              className="block py-2 px-3 hover:text-white transition duration-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 hover:text-white transition duration-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="block py-2 px-3 hover:text-white transition duration-700"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/categories"
              className="block py-2 px-3 hover:text-white transition duration-700"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 hover:text-white transition duration-700"
            >
              Contact
            </Link>
          </li>
        </ul>

        <hr className="mt-8 border-gray-400" />

        <div className="flex justify-center items-center mt-8 text-white gap-8">
          <Facebook className="hover:text-main transition duration-700 cursor-pointer" />
          <Twitter className="hover:text-main transition duration-700 cursor-pointer" />
          <Dribbble className="hover:text-main transition duration-700 cursor-pointer" />
          <Instagram className="hover:text-main transition duration-700 cursor-pointer" />
        </div>
      </nav>
    </motion.section>
  );
}
