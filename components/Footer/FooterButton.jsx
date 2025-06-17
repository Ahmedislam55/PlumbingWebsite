import { useEffect, useState } from "react";
import styles from "./FooterButton.module.css";
import { AnimatePresence, motion } from "framer-motion";
export default function FooterButton() {
  const [isScroll, setIsScroll] = useState(false);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 200);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <AnimatePresence>
      {isScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4"
        >
          <button onClick={scrollToTop} className={styles.button}>
            <svg viewBox="0 0 384 512" className={styles.svgIcon}>
              <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
