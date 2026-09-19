"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2,
  PackageCheck
} from "lucide-react";

export default function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart,
    totalItems, 
    totalPrice 
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setTimeout(() => {
      clearCart();
      setOrderSuccess(false);
      setCheckoutModalOpen(false);
      setIsCartOpen(false);
    }, 2800);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
      />

      {/* Slide-out drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-slate-950 border-l border-slate-800 shadow-2xl z-50 flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Your Sourcing Cart</h2>
              <p className="text-[11px] text-slate-400">
                {totalItems} {totalItems === 1 ? "item" : "items"} selected
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-20 px-4">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 mx-auto mb-4">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white">Your Cart is Empty</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                Discover over 500+ viral problem-solving products and add items to your wholesale sourcing bag.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-emerald-500/20"
              >
                <span>Explore Viral Deals</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            cart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 flex gap-3 items-center group"
              >
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded-lg bg-slate-950 shrink-0 border border-slate-800"
                />

                <div className="flex-1 min-w-0">
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={() => setIsCartOpen(false)}
                    className="block text-xs font-semibold text-slate-200 hover:text-emerald-400 truncate"
                  >
                    {product.title}
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-emerald-400">
                      ${product.sourcing.lowestPrice.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-slate-500 line-through">
                      ${product.market.retailPrice.toFixed(2)}
                    </span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 font-bold">
                      Save {product.market.profitMarginPercent.toFixed(0)}%
                    </span>
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-slate-800/50">
                    <div className="flex items-center gap-1.5 bg-slate-950 border border-slate-800 rounded-lg px-2 py-0.5">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-slate-100 min-w-[1.2rem] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="text-slate-400 hover:text-white p-0.5"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary */}
        {cart.length > 0 && (
          <div className="p-4 border-t border-slate-800/80 bg-slate-900/90 space-y-3">
            {/* Free Shipping Progress */}
            <div className="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/60 flex items-center gap-2 text-xs text-emerald-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free Express Worldwide Sourcing Protection Included</span>
            </div>

            {/* Subtotal */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Items Total ({totalItems}):</span>
                <span className="font-bold text-white">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Factory Sourcing Discount:</span>
                <span className="text-emerald-400 font-semibold">Applied Free</span>
              </div>
              <div className="flex items-center justify-between text-sm font-extrabold text-white pt-2 border-t border-slate-800">
                <span>Estimated Subtotal:</span>
                <span className="text-emerald-400 text-base">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/20 hover:scale-[1.01]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Simple Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60] flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white">Order Placed Successfully!</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  Thank you! Your verified factory supplier routing request has been dispatched. Sample orders will be tracked to your destination.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <PackageCheck className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">Express Sourcing Checkout</h3>
                </div>
                <p className="text-xs text-slate-400 mb-5">
                  Confirm your order of {totalItems} items (${totalPrice.toFixed(2)}) directly from verified factory suppliers.
                </p>

                <form onSubmit={handleCheckoutSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Email / WhatsApp</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. john@example.com or +1..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">Shipping Destination / Country</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. United States, UK, Canada, Bangladesh"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20"
                    >
                      Confirm Order (${totalPrice.toFixed(2)})
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
