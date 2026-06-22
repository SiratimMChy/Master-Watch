import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('masterWatchCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('masterWatchCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
      toast.success("Increased product quantity!");
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success("Added to cart successfully!");
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error("Removed from cart!");
  };

  const updateQuantity = (id, action) => {
    setCartItems(cartItems.map((item) => {
      if (item.id === id) {
        if (action === 'increase') return { ...item, quantity: item.quantity + 1 };
        if (action === 'decrease' && item.quantity > 1) return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) =>
    total + (item.price * item.quantity), 0);
  
  const cartCount = cartItems.reduce((count, item) =>
    count + item.quantity, 0);

  return (
    <CartContext value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
