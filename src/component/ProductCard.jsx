import React from 'react';
import { Link } from 'react-router';
import { Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
      <Link to={`/product/${product.id}`} className="relative h-64 overflow-hidden block">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
          {product.category}
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1 hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-bold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          <span className={`text-xs font-semibold px-2 py-1 rounded-md ${product.stock > 10 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {product.stock} in stock
          </span>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-2xl font-extrabold text-gray-900">${product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white p-2.5 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center hover:scale-105 transform duration-300"
            title="Add to Cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
