import React from 'react';
import { HiOutlineCreditCard, HiOutlineGift } from 'react-icons/hi2';

const PaymentMethodForm = ({ formData, handleInputChange }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-50 rounded-xl">
          <HiOutlineCreditCard className="w-6 h-6 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
          <p className="text-gray-500 text-sm mt-1">All transactions are secure and encrypted.</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${formData.paymentMethod === 'stripe' ? 'border-blue-500 bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="stripe"
            checked={formData.paymentMethod === 'stripe'}
            onChange={handleInputChange}
            className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300"
          />
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <HiOutlineCreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="font-bold text-gray-900">Credit / Debit Card</span>
                  <p className="text-sm text-gray-500 mt-0.5">Pay securely with Stripe</p>
                </div>
              </div>
              <div className="hidden sm:block">
                <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </span>
              </div>
            </div>
          </div>
        </label>

        <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 ${formData.paymentMethod === 'cod' ? 'border-gray-900 bg-gray-50' : 'border-gray-200 hover:border-gray-300'}`}>
          <input
            type="radio"
            name="paymentMethod"
            value="cod"
            checked={formData.paymentMethod === 'cod'}
            onChange={handleInputChange}
            className="w-5 h-5 text-gray-900 focus:ring-gray-900 border-gray-300"
          />
          <div className="ml-4 flex-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm border border-gray-100">
                  <HiOutlineGift className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <span className="font-bold text-gray-900">Cash on Delivery</span>
                  <p className="text-sm text-gray-500 mt-0.5">Pay when you receive the package</p>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethodForm;
