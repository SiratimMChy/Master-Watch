import React, { useEffect } from "react";
import { Link } from "react-router";
import { HiOutlineCreditCard, HiOutlineShieldCheck } from "react-icons/hi2";
import { FiTruck } from "react-icons/fi";
import CartItem from "../component/Cards/CartItem";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-50 px-4 py-24">
        <div className="text-gray-300 mb-6">
          <svg className="w-32 h-32 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md text-lg">
          Looks like you haven't added any luxury timepieces to your cart yet.
        </p>
        <Link
          to="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
        >
          Explore Watches
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          {/* LEFT : CART ITEMS */}
          <div className="xl:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Cart Items</h2>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{cartCount} items</span>
            </div>
            
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  removeItem={removeFromCart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>
          </div>

          {/* RIGHT : SUMMARY CARD */}
          <div className="xl:col-span-1">
            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-start text-sm"
                  >
                    <div className="flex-1 pr-4">
                      <p className="font-semibold text-gray-800 line-clamp-2">{item.name}</p>
                      <p className="text-gray-500 mt-1 text-xs font-medium">
                        Qty: {item.quantity} × ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <p className="font-bold text-gray-900">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <div className="space-y-4">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold text-gray-900">${cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-bold text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium text-gray-500 text-sm">Calculated at checkout</span>
                  </div>
                  <div className="border-t border-gray-100 pt-6 mt-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Total</span>
                      <span className="text-3xl font-extrabold text-blue-600">${cartTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className={`w-full flex items-center justify-center gap-3 py-4 px-4 rounded-xl font-bold transition-all text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                  cartItems.length > 0
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none hover:translate-y-0'
                }`}
                onClick={(e) => cartItems.length === 0 && e.preventDefault()}
              >
                <HiOutlineCreditCard className="w-6 h-6" />
                Proceed to Checkout
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-center gap-3 bg-green-50 p-3 rounded-lg text-green-700 font-medium border border-green-100">
                    <HiOutlineShieldCheck className="w-5 h-5 shrink-0" />
                    <span>Secure encrypted checkout</span>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg text-blue-700 font-medium border border-blue-100">
                    <FiTruck className="w-5 h-5 shrink-0" />
                    <span>Free global shipping included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
