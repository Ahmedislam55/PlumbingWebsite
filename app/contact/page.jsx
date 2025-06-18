import HaveQuestions from "../home/HaveQuestions/HaveQuestions";
import ContactHome from "./ContactHome/ContactHome";
import GoogleMapComponent from "./LocationPage/LocationPage";
export const metadata = {
  title: "Plumbing Repair Contact",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <>
      <ContactHome />
      <HaveQuestions />
      <GoogleMapComponent />
    </>
  )
}
