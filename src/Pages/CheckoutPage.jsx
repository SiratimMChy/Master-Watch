import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import CheckoutStepIndicator from '../component/Checkout/CheckoutStepIndicator';
import ContactInfoForm from '../component/Checkout/ContactInfoForm';
import ShippingAddressForm from '../component/Checkout/ShippingAddressForm';
import PaymentMethodForm from '../component/Checkout/PaymentMethodForm';
import OrderSummarySidebar from '../component/Checkout/OrderSummarySidebar';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cartItems, cartCount, cartTotal, clearCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    // If cart is empty, redirect to products
    if (cartItems.length === 0) {
      navigate('/products');
    }
  }, [cartItems.length, navigate]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
    specialInstructions: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [activeStep, setActiveStep] = useState(1);

  const shippingCost = cartTotal >= 5000 ? 0 : 50;
  const discount = cartTotal >= 10000 ? Math.floor(cartTotal * 0.05) : 0;
  const finalTotal = cartTotal + shippingCost - discount;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Validate required fields
      const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city'];
      const missingFields = requiredFields.filter(field => !formData[field].trim());
      
      if (missingFields.length > 0) {
        toast.error('Please fill in all required fields.');
        setIsProcessing(false);
        return;
      }

      // Simulate API call and payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate a mock order ID
      const orderId = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();

      toast.success(`Order #${orderId} placed successfully!`);
      clearCart();
      navigate('/products');

    } catch (error) {
      console.error('Order submission error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) return null;

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Secure Checkout</h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Left Side - Checkout Form */}
          <div className="xl:col-span-2 space-y-6">
            <CheckoutStepIndicator activeStep={activeStep} />
            <ContactInfoForm formData={formData} handleInputChange={handleInputChange} />
            <ShippingAddressForm formData={formData} handleInputChange={handleInputChange} />
            <PaymentMethodForm formData={formData} handleInputChange={handleInputChange} />
          </div>

          {/* Right Side - Order Summary */}
          <div className="xl:col-span-1">
            <OrderSummarySidebar 
              cartItems={cartItems}
              cartCount={cartCount}
              cartTotal={cartTotal}
              shippingCost={shippingCost}
              discount={discount}
              finalTotal={finalTotal}
              handleSubmit={handleSubmit}
              isProcessing={isProcessing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
