import { useState } from 'react';
import { NavLink, Link } from 'react-router';
import { FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Master Watch Logo" className="h-16 w-auto object-contain drop-shadow-md" />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-2 lg:ml-10 flex items-baseline space-x-2 lg:space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 lg:px-3 py-2 rounded-md text-sm lg:text-lg font-medium transition-colors whitespace-nowrap ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/login" 
              className="text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white font-bold px-4 py-[6px] rounded-lg transition-all duration-300"
            >
              Login
            </Link>
            <Link 
              to="/cart" 
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg font-bold px-4 py-2"
            >
              <FiShoppingCart className="w-5 h-5" />
              Cart
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            
            {/* Mobile Auth & Cart Buttons */}
            <div className="pt-4 pb-2 border-t border-gray-200 mt-2 flex flex-col gap-3 px-2">
              <Link
                to="/login"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 border-2 border-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white text-center transition-all duration-300"
              >
                Login
              </Link>
              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;