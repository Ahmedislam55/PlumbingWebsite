import ProductPage from "./ProductPage/ProductPage";
import ShopHome from "./ShopHome/CategoriesHome";
export const metadata = {
  title: "Plumbing Repair Shop",
  description:
    "Reliable and affordable plumbing repair solutions for homes and businesses. Contact us now for expert service.",
};
export default function page() {
  return (
    <div className="bg-gray-100">
      <ShopHome />
      <ProductPage />
    </div>
  );
}
