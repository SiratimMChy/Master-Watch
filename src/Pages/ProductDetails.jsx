import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import ProductImage from '../component/ProductDetails/ProductImage';
import ProductInfo from '../component/ProductDetails/ProductInfo';
import ProductFeatures from '../component/ProductDetails/ProductFeatures';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, loading } = useProducts();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-32 text-center bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The timepiece you're looking for doesn't exist or has been removed.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-0 lg:gap-12 pt-6 px-6 pb-2 lg:pt-12 lg:px-12 lg:pb-4">
            <ProductImage 
              image={product.image} 
              name={product.name} 
              stock={product.stock} 
            />

            <div>
              <ProductInfo 
                product={product}
                quantity={quantity}
                setQuantity={setQuantity}
                addedToCart={addedToCart}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>

          <div className="px-4 lg:px-8 pb-4 lg:pb-8">
            <ProductFeatures 
              description={product.description}
              features={product.features}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
