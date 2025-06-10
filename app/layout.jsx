import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import ClientLayout from "@/components/ClientLayout/ClientLayout";
import { Cairo } from "next/font/google";
import { Poppins } from "next/font/google";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-cairo",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Plumbing Repair Services",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      className={`${cairo.variable} ${poppins.variable}`}
    >
      <head>
        <ThemeModeScript />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
