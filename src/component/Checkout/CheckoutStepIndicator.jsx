import React from 'react';

const CheckoutStepIndicator = ({ activeStep }) => {
  return (
    <div className="flex items-center justify-between mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex items-center space-x-4 w-full justify-between sm:justify-start">
        {[1, 2, 3].map((step) => (
          <React.Fragment key={step}>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                activeStep >= step 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
              }`}>
                {activeStep > step ? '✓' : step}
              </div>
            </div>
            {step < 3 && (
              <div className={`flex-1 h-1 mx-2 sm:mx-4 rounded-full transition-all duration-300 ${
                activeStep > step ? 'bg-blue-600' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CheckoutStepIndicator;
