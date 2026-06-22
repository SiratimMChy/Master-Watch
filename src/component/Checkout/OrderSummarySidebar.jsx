import React from 'react';
import { HiOutlineStar, HiOutlineCheckCircle, HiOutlineShieldCheck } from 'react-icons/hi2';
import { FiAward } from 'react-icons/fi';

const OrderSummarySidebar = ({ 
  cartItems, 
  cartCount, 
  cartTotal, 
  shippingCost, 
  discount, 
  finalTotal, 
  handleSubmit, 
  isProcessing 
}) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
        <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full font-medium border border-blue-100">
          <HiOutlineStar className="w-4 h-4" />
          <span>{cartCount} items</span>
        </div>
      </div>
      
      {/* Order Items */}
      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4">
            <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 relative shrink-0 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-gray-900 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-bl-lg">
                {item.quantity}
              </div>
            </div>
            
            <div className="flex-1 min-w-0 py-1">
              <h3 className="font-semibold text-gray-900 text-sm line-clamp-1 mb-1">
                {item.name}
              </h3>
              <p className="text-xs text-gray-500">
                ${item.price.toLocaleString()} each
              </p>
            </div>
            
            <div className="text-right py-1">
              <p className="font-bold text-gray-900 text-sm">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="border-t border-gray-100 pt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold text-gray-900">${cartTotal.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className={`font-bold ${shippingCost === 0 ? 'text-green-600' : 'text-gray-900'}`}>
            {shippingCost === 0 ? 'Free' : `$${shippingCost}`}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount (5%)</span>
            <span className="font-bold text-green-600">-${discount.toLocaleString()}</span>
          </div>
        )}
        
        <div className="border-t border-gray-100 pt-4 mt-2">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-lg font-bold text-gray-900 block">Total</span>
              <span className="text-xs text-gray-500">Including all taxes</span>
            </div>
            <span className="text-3xl font-extrabold text-blue-600">${finalTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Place Order Button */}
      <form onSubmit={handleSubmit} className="mt-8">
        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-gray-900 hover:bg-black text-white py-4.5 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          style={{ paddingTop: '1.125rem', paddingBottom: '1.125rem' }}
        >
          {isProcessing ? (
            <>
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              <HiOutlineCheckCircle className="w-6 h-6" />
              Place Order
            </>
          )}
        </button>
      </form>

      {/* Trust Badges */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <HiOutlineShieldCheck className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Secure Checkout</p>
              <p className="text-xs text-gray-500 mt-0.5">Your payment information is encrypted and secure.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FiAward className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-gray-900">Authenticity Guarantee</p>
              <p className="text-xs text-gray-500 mt-0.5">100% authentic luxury timepieces.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummarySidebar;
