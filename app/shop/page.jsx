import ProductPage from "./ProductPage/ProductPage";
import ShopHome from "./ShopHome/CategoriesHome";

export default function page() {
  return (
    <div className="bg-gray-100">
      <ShopHome />
      <ProductPage />
    </div>
  );
}
