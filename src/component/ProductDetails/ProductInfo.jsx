import React from 'react';
import { Star, Minus, Plus, ShoppingCart, CheckCircle, Truck, ShieldCheck, RotateCcw } from 'lucide-react';

const ProductInfo = ({ product, quantity, setQuantity, addedToCart, handleAddToCart }) => {
  const { name, category, rating, reviews, price, stock } = product;

  // Render Stars
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 opacity-50" />);
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="flex flex-col mt-8 lg:mt-0">
      {/* Category */}
      <div className="mb-4">
        <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full">
          {category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
        {name}
      </h1>

      {/* Rating & Reviews */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-center gap-1">
          {renderStars()}
        </div>
        <span className="text-base font-bold text-gray-900">{rating}</span>
        <span className="text-base text-gray-500">({reviews} verified reviews)</span>
      </div>

      {/* Price & Stock */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <span className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            ${price.toLocaleString()}
          </span>
          <p className="text-sm text-gray-500 mt-2 font-medium">Taxes included. Free shipping applies.</p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-3 h-3 rounded-full shadow-sm ${stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`text-base font-bold ${stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
          {stock > 0 && <span className="text-sm font-medium text-gray-500">{stock} units available</span>}
        </div>
      </div>

      {/* Quantity Selector & Trust Badges */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Quantity</h3>
          <div className="flex items-center">
            <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={stock === 0}
                className="p-4 hover:bg-gray-50 transition-colors text-gray-600 hover:text-blue-600 disabled:opacity-50"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="w-16 text-center text-lg font-bold text-gray-900 border-x-2 border-gray-200 py-3">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(stock, quantity + 1))}
                disabled={stock === 0 || quantity >= stock}
                className="p-4 hover:bg-gray-50 transition-colors text-gray-600 hover:text-blue-600 disabled:opacity-50"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex gap-3">
          <div className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-sm transition-shadow">
            <Truck className="w-5 h-5 text-blue-600 mb-1" />
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Free Shipping</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-sm transition-shadow">
            <ShieldCheck className="w-5 h-5 text-blue-600 mb-1" />
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Secure Pay</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2.5 bg-gray-50 rounded-xl border border-gray-100 text-center hover:shadow-sm transition-shadow">
            <RotateCcw className="w-5 h-5 text-blue-600 mb-1" />
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Easy Return</span>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mb-0">
        <button
          onClick={handleAddToCart}
          disabled={stock === 0}
          className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 text-base font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
            addedToCart
              ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-200'
              : 'bg-gray-900 text-white hover:bg-gray-800 shadow-gray-300 disabled:bg-gray-300 disabled:text-gray-500 disabled:hover:translate-y-0 disabled:hover:shadow-none'
          }`}
        >
          {addedToCart ? (
            <>
              <CheckCircle className="w-6 h-6" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-6 h-6" />
              {stock === 0 ? 'Out of Stock' : 'Add to Cart'}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
