"use client";
import { CartContext } from "@/app/context/CartContext";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { Trash2 } from "lucide-react";
import Link from "next/link";
export default function DisplayCart() {
  const { cart, setCart, removeFromCart, clearCart } = useContext(CartContext);
  function deleteProduct(slug) {
    removeFromCart(slug);
  }
  function deleteAllProduct() {
    clearCart();
  }
  function decrease(slug) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.slug === slug && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      // delete product
      return updatedCart.filter(
        (item) => !(item.slug === slug && item.quantity === 1)
      );
    });
  }
  function increase(slug) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.slug === slug) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedCart;
    });
  }
  return (
    <section className="2xl:p-14 py-14">
      {cart.length === 0 ? (
        <>
          <p className="text-center text-2xl text-main font-semibold mt-10">
            🛒 Your cart is empty! Let’s go shopping and grab some awesome stuff
            😍🔥
          </p>
        </>
      ) : (
        <div className="relative overflow-x-auto ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="bg-main text-white text-xl uppercase text-center">
              <tr>
                <th scope="col" className="px-16 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {cart.map((cart, index) => (
              <tbody key={index}>
                <tr className="bg-gray-100 text-navLinks text-center">
                  <td className="p-4">
                    <Image
                      src={cart.image}
                      className="w-16 md:w-32 max-w-full max-h-full m-auto"
                      alt={cart.title}
                      loading="lazy"
                    />
                  </td>
                  <td className="text-lg font-semibold">{cart.title}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center w-28 m-auto">
                      <button
                        className="inline-flex items-center justify-center p-2 me-3 text-sm font-medium h-7 w-14 text-white bg-main rounded-full"
                        type="button"
                        onClick={() => decrease(cart.slug)}
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 2"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h16"
                          />
                        </svg>
                      </button>
                      <div>
                        <input
                          type="number"
                          min="1"
                          className="bg-gray-100 m-auto w-14 text-center text-main font-semibold text-lg"
                          value={cart.quantity}
                          onChange={(e) => {
                            const newQty = Number(e.target.value);
                            if (newQty >= 1) {
                              setCart((prevCart) =>
                                prevCart.map((item) =>
                                  item.slug === cart.slug
                                    ? { ...item, quantity: newQty }
                                    : item
                                )
                              );
                            }
                          }}
                          onKeyDown={(e) => {
                          }}
                          required
                        />
                      </div>
                      <button
                        className="inline-flex items-center justify-center p-2 me-3 text-sm font-medium h-7 w-14 text-white bg-main rounded-full"
                        type="button"
                        onClick={() => increase(cart.slug)}
                      >
                        <span className="sr-only">Quantity button</span>
                        <svg
                          className="w-3 h-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 1v16M1 9h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td className="font-semibold text-lg">
                    <span className="text-main"> $ </span>{" "}
                    {cart.price * cart.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => deleteProduct(cart.slug)}
                      className="font-medium text-red-600 hover:scale-125 transition duration-700 hover:text-red-950  "
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <button
            onClick={deleteAllProduct}
            className="mt-6 mr-4 bg-red-600 text-white border-0 px-6 py-3 hover:bg-red-950 transition duration-500"
          >
            Clear All
          </button>
          <Link href="/checkOut">
            <button className="mt-6 bg-main text-white border-0 px-6 py-3 hover:bg-teal-900 transition duration-500">
              Get Price
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}
