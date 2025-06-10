"use client";
import Navbar from "../Header/Navbar";
import { useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import FooterButton from "../Footer/FooterButton";
export default function ClientLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <FooterButton />
      <Footer />
    </>
  );
}
