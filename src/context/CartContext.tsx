"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductItem } from "@/types/product";

export interface CartItem {
  product: ProductItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  addToCart: (product: ProductItem, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("aratbazar_cart");
      if (savedCart) setCart(JSON.parse(savedCart));

      const savedWishlist = localStorage.getItem("aratbazar_wishlist");
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("aratbazar_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart, isLoaded]);

  // Save wishlist to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("aratbazar_wishlist", JSON.stringify(wishlist));
    } catch (e) {
      console.error("Failed to save wishlist", e);
    }
  }, [wishlist, isLoaded]);

  const addToCart = (product: ProductItem, quantity = 1) => {
    setCart((prev: CartItem[]) => {
      const existing = prev.find((item: CartItem) => item.product.id === product.id);
      if (existing) {
        return prev.map((item: CartItem) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev: CartItem[]) => prev.filter((item: CartItem) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev: CartItem[]) =>
      prev.map((item: CartItem) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev: string[]) =>
      prev.includes(productId)
        ? prev.filter((id: string) => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  const totalItems = cart.reduce((sum: number, item: CartItem) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum: number, item: CartItem) => sum + item.product.sourcing.lowestPrice * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isWishlisted,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
