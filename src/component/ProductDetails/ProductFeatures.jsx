import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductFeatures = ({ description, features }) => {
  return (
    <div className="border-t border-gray-100 pt-6 mt-2 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: Key Features */}
      {features && features.length > 0 ? (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
          <ul className="grid grid-cols-1 gap-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="hidden md:block"></div>
      )}

      {/* Right Column: About this Timepiece */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">About this Timepiece</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductFeatures;
