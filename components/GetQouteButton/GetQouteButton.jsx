"use client";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/context/CartContext";
import { FileText } from "lucide-react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
export default function GetQuoteButton({ product, quantity }) {
  const router = useRouter();
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const handleAddToCart = () => {
    if (loading) return;
    setLoading(true);
    const productData = {
      slug: product.slug,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category,
      tags: product.tags,
    };
    setTimeout(() => {
      setLoading(false);
      toast.success("Product added successfully", {
        theme: "light",
      });
    }, 900);
    addToCart(productData, quantity);
    // router.push("/cart");
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={loading}
      className={`block mt-4 border-0 bg-main hover:bg-teal-900 transition duration-500 text-white w-36 h-16 ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <ClipLoader
            color="#fff"
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <span className="flex items-center gap-2 justify-center">
            <FileText /> Get Qoute
          </span>
        </>
      )}
    </button>
  );
}
