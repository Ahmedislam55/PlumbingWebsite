"use client";
import { createContext, useState, useEffect } from "react";
export const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, quantity = 1) {
    setCart((prevCart) => {
      const safeQuantity = Number(quantity) || 1;
      const updatedCart = prevCart.map((item) => {
        if (item.slug === product.slug) {
          return {
            ...item,
            quantity: item.quantity + safeQuantity, 
          };
        }
        return item;
      });

      const isProductExist = prevCart.some(
        (item) => item.slug === product.slug
      );

      if (!isProductExist) {
        return [...prevCart, { ...product, quantity: safeQuantity }];
      }

      return updatedCart;
    });
  }

  const removeFromCart = (slug) => {
    setCart((prevCart) => prevCart.filter((item) => item.slug !== slug));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart , setCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
