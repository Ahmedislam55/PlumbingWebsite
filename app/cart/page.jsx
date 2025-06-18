import CartHome from "./CartHome/CartHome";
import DisplayCart from "./displayCart/DisplayCart";
export const metadata = {
  title: "Plumbing Repair Cart",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <div>
      <CartHome />
      <DisplayCart />
    </div>
  )
}
