import React, { useEffect, useState } from 'react';
import ProductCard from "../component/ProductCard";
import { useProducts } from '../context/ProductContext';

const ProductsPage = () => {
  const { products, loading } = useProducts();
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    document.title = 'All Products - Master Watch';
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === '' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  const totalItems = filteredProducts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, category]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Discover Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Collection</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find the perfect timepiece that matches your style and personality.
          </p>
        </div>

        {/* Filters */}
        <div className='flex flex-col sm:flex-row justify-between gap-4 mb-10 bg-white p-4 rounded-2xl shadow-sm border border-gray-100'>
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by product name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-64 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer font-medium text-gray-700"
          >
            <option value="">All Categories</option>
            <option value="Men's">Men's Watches</option>
            <option value="Women's">Women's Watches</option>
            <option value="Smartwatches">Smartwatches</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mb-12">
          {currentProducts.map(product => (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No watches found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Pagination */}
        {filteredProducts.length > 0 && totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-gray-700 transition-colors shadow-sm"
            >
              Previous
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl font-bold transition-all shadow-sm ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-gray-700 transition-colors shadow-sm"
            >
              Next
            </button>
          </div>
        )}

        <div className="text-center text-gray-500 mt-6 font-medium">
          Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, totalItems)} of {totalItems} products
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
