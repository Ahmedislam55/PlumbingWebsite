import PlumbingSolutions from "../home/PlumbingSolutions/PlumbingSolutions";
import ClientsTestimonials from "./ClientsTestimonials/ClientsTestimonials";
import OurServices from "./OurServices/OurServices";
import PlumbingSystems from "./PlumbingSystems/PlumbingSystems";
import SchedulePage from "./SchedulePage/SchedulePage";
import ServicesHome from "./ServicesHome/ServicesHome";
import ServicesIcons from "./ServicesIcons/ServicesIcons";
export const metadata = {
  title: "Plumbing Repair Services",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <>
      <ServicesHome />
      <PlumbingSolutions />
      <OurServices />
      <SchedulePage />
      <PlumbingSystems />
      <ServicesIcons />
      <ClientsTestimonials />
    </>
  )
}
