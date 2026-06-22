import React from 'react';
import { Link } from 'react-router'; 
import { Watch, Gem, Activity, Gift } from 'lucide-react';

const categories = [
  {
    title: "Men's Watches",
    value: "Men's",
    path: "/category/mens",
    icon: <Watch size={32} />,
    bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Women's Watches",
    value: "Women's",
    path: "/category/womens",
    icon: <Gem size={32} />,
    bgImage: "https://images.unsplash.com/photo-1594534475808-b18fc33b045e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Smartwatches",
    value: "Smartwatches",
    path: "/category/smartwatches",
    icon: <Activity size={32} />,
    bgImage: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=800",
  },
];

const CategoryCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Shop by <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Category</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our exclusive collection of premium timepieces designed for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {categories.map(cat => (
            <div
              key={cat.value}
              className="relative group w-full shadow-lg rounded-2xl overflow-hidden h-72 border border-gray-100"
              style={{
                backgroundImage: `url(${cat.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay with smooth transition (No DaisyUI classes used) */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 ease-in-out"></div>
              
              <Link
                to={cat.path}
                className="relative z-10 flex flex-col items-center justify-center gap-4 p-6 text-center h-full transition-transform duration-500 group-hover:scale-105"
              >
                <div className="text-white bg-blue-600/90 backdrop-blur-sm rounded-full flex items-center justify-center w-16 h-16 shadow-xl mb-2 group-hover:bg-blue-700 transition-colors duration-300">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-2xl text-white drop-shadow-md">
                  {cat.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
