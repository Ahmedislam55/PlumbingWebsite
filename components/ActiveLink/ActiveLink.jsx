import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./ActiveLink.module.css";
export default function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={`py-2 px-3 transition duration-300 ${
        isActive ? `${styles.active}` : "text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}
