import React from 'react';
import { HiOutlineMapPin, HiOutlineTruck } from 'react-icons/hi2';

const ShippingAddressForm = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-indigo-50 rounded-xl">
            <HiOutlineMapPin className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Delivery Address</h2>
            <p className="text-gray-500 text-sm mt-1">Where should we deliver your order?</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full font-medium">
          <HiOutlineTruck className="w-4 h-4" />
          <span>Insured Delivery</span>
        </div>
      </div>
      
      <div className="space-y-5">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Street Address <span className="text-red-500">*</span></label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
            placeholder="House/Flat no, Street name, Area"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">City <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              placeholder="Enter your city"
            />
          </div>
          
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">Postal/Zip Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all"
              placeholder="Enter postal code"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Special Instructions (Optional)</label>
          <textarea
            name="specialInstructions"
            value={formData.specialInstructions}
            onChange={handleInputChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all resize-none"
            placeholder="Any special delivery instructions..."
          />
        </div>
      </div>
    </div>
  );
};

export default ShippingAddressForm;
