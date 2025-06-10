import IconsHome from "../home/Icons/IconsHome";
import OurProjects from "../home/OurProjects/OurProjects";
import AboutNumber from "./AboutNumber/AboutNumber";
import AboutUs from "./AboutUs/AboutUs";
import AboutVedio from "./AboutVedio/AboutVedio";
import OurAwards from "./OurAwards/OurAwards";
import SolvePlumbing from "./SolvePlumbing/SolvePlumbing";

export default function page() {
  return (
    <div>
      <AboutUs />
      <SolvePlumbing />
      <AboutNumber />
      <AboutVedio />
      <OurProjects />
      <IconsHome />
      <OurAwards />
    </div>
  )
}
