import HaveQuestions from "../home/HaveQuestions/HaveQuestions";
import ContactHome from "./ContactHome/ContactHome";
import GoogleMapComponent from "./LocationPage/LocationPage";

export default function page() {
  return (
    <>
      <ContactHome />
      <HaveQuestions />
      <GoogleMapComponent />
    </>
  )
}
