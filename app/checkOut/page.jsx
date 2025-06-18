import CheckOutHome from "./CheckOutHome/CheckOutHome";
import DetailsPage from "./DetailsPage/DetailsPage";
export const metadata = {
  title: "Plumbing Repair Check Out",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <div>
      <CheckOutHome />
      <DetailsPage />
    </div>
  )
}
