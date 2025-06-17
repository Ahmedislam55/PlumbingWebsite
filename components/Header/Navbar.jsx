"use client";
import { useContext, useEffect, useState } from "react";
import logo from "@/public/assests/logo-1-retina.webp";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { ShoppingBag, Search, List, AlignJustify } from "lucide-react";
import Links from "../Links/Links";
import { AnimatePresence, motion } from "framer-motion";
import PlumbingModel from "../PlumbingModel/PlumbingModel";
import SearchModel from "../SearchModel/SearchModel";
import ActiveLink from "../ActiveLink/ActiveLink";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [searchModel, setSearchModel] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { cart } = useContext(CartContext);
  console.log(cart.length, "cartcartNAv");
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasAnimated(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.nav
          initial={!hasAnimated ? { opacity: 0, y: -80 } : false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          className={`w-full z-10 border-gray-200 transition-all duration-300 ${
            isScroll
              ? "fixed top-0 left-0 bg-white shadow-md"
              : "absolute bg-transparent"
          }`}
        >
          <div className="md:p-8 py-8 p-4 md:px-12 flex flex-wrap items-center justify-between mx-auto">
            {/* logo */}
            <Image
              src={logo}
              priority
              width={150}
              height={150}
              alt="plumbingLogo"
            />
            {/* icons , button for mobile */}
            <div className="flex justify-between items-center md:gap-8 gap-4">
              <Link href="/cart" className="relative">
                <span className="absolute lg:hidden -top-4 -right-3 p-2 h-5 w-5 text-sm flex justify-center items-center text-white rounded-full bg-main">
                   {cart.length}
                </span>
                <ShoppingBag className="lg:hidden hover:text-main transation duration-700" />
              </Link>
              <Search
                onClick={() => setSearchModel(true)}
                className="lg:hidden cursor-pointer hover:text-main transation duration-700"
              />
              {/*Toggle */}
              <AlignJustify
                className="lg:hidden hover:text-main transation duration-700 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
            <AnimatePresence>
              {isOpen ? <Links setIsOpen={setIsOpen} /> : ""}
            </AnimatePresence>
            <div
              className="w-full lg:block hidden md:w-auto"
              id="navbar-default"
            >
              <ul
                className={`${styles.links} font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse`}
              >
                <li>
                  <ActiveLink href="/home" className="" aria-current="page">
                    Home
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    href="/about"
                    className="block py-2 px-3 text-gray-900"
                  >
                    About
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    href="/services"
                    className="block py-2 px-3 text-gray-900"
                  >
                    Services
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    href="/shop"
                    className="block py-2 px-3 text-gray-900"
                  >
                    Shop
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    href="/contact"
                    className="block py-2 px-3 text-gray-900"
                  >
                    Contact
                  </ActiveLink>
                </li>
              </ul>
            </div>

            {/* Icons desktop*/}
            <div className="hidden lg:flex justify-center items-center gap-8">
              <Link href="/cart">
                <div className="relative">
                  <span className="absolute -top-4 left-4 p-2 h-5 w-5 text-sm flex justify-center items-center text-white rounded-full bg-main">
                    {cart.length}
                  </span>
                </div>
                <ShoppingBag className="hidden lg:block hover:text-main transation duration-700" />
              </Link>
              <Search
                onClick={() => setSearchModel(true)}
                className="hidden lg:block hover:text-main transation duration-700 cursor-pointer"
              />
              <List
                onClick={() => setShowModel(true)}
                className="hidden lg:block hover:text-main cursor-pointer transation duration-700"
              />
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
      <AnimatePresence>
        {showModel ? <PlumbingModel setShowModel={setShowModel} /> : ""}
      </AnimatePresence>
      <AnimatePresence>
        {searchModel ? <SearchModel setSearchModel={setSearchModel} /> : ""}
      </AnimatePresence>
    </>
  );
}
