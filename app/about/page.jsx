import IconsHome from "../home/Icons/IconsHome";
import OurProjects from "../home/OurProjects/OurProjects";
import AboutNumber from "./AboutNumber/AboutNumber";
import AboutUs from "./AboutUs/AboutUs";
import OurAwards from "./OurAwards/OurAwards";
import SolvePlumbing from "./SolvePlumbing/SolvePlumbing";

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
