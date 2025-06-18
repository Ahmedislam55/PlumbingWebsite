import IconsHome from "../home/Icons/IconsHome";
import OurProjects from "../home/OurProjects/OurProjects";
import AboutNumber from "./AboutNumber/AboutNumber";
import AboutUs from "./AboutUs/AboutUs";
import OurAwards from "./OurAwards/OurAwards";
import SolvePlumbing from "./SolvePlumbing/SolvePlumbing";
export const metadata = {
  title: "Plumbing Repair About",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <>
      <AboutUs />
      <SolvePlumbing />
      <AboutNumber />
      <OurProjects />
      <IconsHome />
      <OurAwards />
    </>
  )
}
