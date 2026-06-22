import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router';
import ProductCard from '../component/ProductCard';
import { useProducts } from '../context/ProductContext';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { products, loading } = useProducts();


  const getCategoryString = (slug) => {
    if (slug === 'mens') return "Men's";
    if (slug === 'womens') return "Women's";
    if (slug === 'smartwatches') return "Smartwatches";
    return ""; 
  };


  const exactCategory = getCategoryString(categoryName);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${exactCategory || 'Category'} Watches - Master Watch`;
  }, [exactCategory]);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <span className="loading loading-spinner loading-lg text-blue-600"></span>
      </div>
    );
  }


  if (!exactCategory) {
    return (
      <div className="container mx-auto px-4 py-32 text-center bg-gray-50 min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p className="text-gray-600 mb-8">The category you are looking for does not exist.</p>
        <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          View All Products
        </Link>
      </div>
    );
  }

 
  const filteredProducts = products.filter(
    (product) => product.category === exactCategory
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-gray-500">
            <li><Link to="/" className="hover:text-blue-600 transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/products" className="hover:text-blue-600 transition-colors">Categories</Link></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{exactCategory}</li>
          </ol>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
              {exactCategory} Collection
            </h1>
            <p className="text-gray-600">
              Showing {filteredProducts.length} exquisite timepieces
            </p>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">No watches found</h3>
            <p className="text-gray-500">We couldn't find any watches in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
