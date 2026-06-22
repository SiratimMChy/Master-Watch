import React from 'react';
import { Link } from 'react-router';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/products/${item.id}`} className="shrink-0">
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-50 rounded-lg overflow-hidden relative">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      
      <div className="flex flex-col flex-1 min-w-0 justify-between">
        <div className="flex justify-between items-start gap-4">
          <Link to={`/products/${item.id}`} className="truncate block">
            <h3 className="font-semibold text-gray-900 text-sm sm:text-base hover:text-blue-600 transition-colors line-clamp-2">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.category}</p>
          </Link>
          <div className="text-right shrink-0">
            <p className="font-bold text-gray-900 text-sm sm:text-base">${(item.price * item.quantity).toLocaleString()}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 overflow-hidden">
            <button
              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
              className="p-2 sm:p-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-colors"
            >
              <FiMinus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <span className="w-8 sm:w-12 text-center text-xs sm:text-sm font-semibold text-gray-900 bg-white py-2 border-x border-gray-200">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, Math.min(item.stock || 10, item.quantity + 1))}
              className="p-2 sm:p-2.5 text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-colors"
            >
              <FiPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <FiTrash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-sm font-medium">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
