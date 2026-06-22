import React from 'react';

const ProductImage = ({ image, name, stock }) => {
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden bg-gray-100 shadow-inner group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        {stock <= 5 && stock > 0 && (
          <div className="absolute top-6 left-6 z-10">
            <span className="bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
              Low Stock
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductImage;
