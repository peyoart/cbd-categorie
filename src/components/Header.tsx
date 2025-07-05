import React, { useState, useCallback } from 'react';
import { ShoppingCart, Menu, X, User, Search, Phone, Truck } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [cartCount] = useState<number>(3);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#08F06C] text-black py-2 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span className="text-xs sm:text-sm">Livraison gratuite dès 50€</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:0665354964" 
                  className="text-xs sm:text-sm hover:underline focus:underline focus:outline-none"
                >
                  Service client: 06 65 35 49 64
                </a>
              </div>
            </div>
            <div className="hidden sm:block text-xs sm:text-sm text-center">
              <span>🇫🇷 Produits français • 100% légal</span>
            </div>
          </div>
        </div>
      </div>
      
      <header className="bg-black/95 backdrop-blur-sm border-b border-[#08F06C]/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#08F06C] hover:text-[#08F06C]/80 transition-colors duration-200 cursor-pointer">
                  <a href="/" className="focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded">
                    CBD Pas Cher 13
                  </a>
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block" role="navigation" aria-label="Navigation principale">
              <div className="ml-6 lg:ml-10 flex items-center space-x-2 lg:space-x-4 xl:space-x-6">
                <a 
                  href="#" 
                  className="text-white hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Tous les produits
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Bons Plans
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Fleurs CBD
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Résines CBD
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Huiles CBD
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Get High
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-[#08F06C] px-2 lg:px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  Accessoires
                </a>
              </div>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden sm:flex items-center space-x-2 md:space-x-4">
              <button 
                className="text-gray-300 hover:text-[#08F06C] p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Rechercher"
              >
                <Search size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button 
                className="text-gray-300 hover:text-[#08F06C] p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Mon compte"
              >
                <User size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button 
                className="text-gray-300 hover:text-[#08F06C] p-2 relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label={`Panier avec ${cartCount} article${cartCount > 1 ? 's' : ''}`}
              >
                <ShoppingCart size={18} className="sm:w-5 sm:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#08F06C] text-black text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold text-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Cart Icon */}
              <button 
                className="sm:hidden text-gray-300 hover:text-[#08F06C] p-1 relative transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label={`Panier avec ${cartCount} article${cartCount > 1 ? 's' : ''}`}
              >
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#08F06C] text-black text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-[#08F06C] p-2 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden bg-black/98 backdrop-blur-sm border-t border-[#08F06C]/20 shadow-lg"
          >
            <nav className="px-4 pt-4 pb-6 space-y-2" role="navigation" aria-label="Navigation mobile">
              <a 
                href="#" 
                className="text-white block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Tous les produits
              </a>
              <a 
                href="#" 
                className="text-gray-300 block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Bons Plans
              </a>
              <a 
                href="#" 
                className="text-gray-300 block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Fleurs CBD
              </a>
              <a 
                href="#" 
                className="text-gray-300 block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Résines CBD
              </a>
              <a 
                href="#" 
                className="text-gray-300 block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Huiles CBD
              </a>
              <a 
                href="#" 
                className="text-gray-300 block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Get High
              </a>
              <a 
                href="#" 
                className="text-gray-300 block px-4 py-3 text-base font-medium rounded-lg hover:bg-[#08F06C]/10 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black"
                onClick={closeMenu}
              >
                Accessoires
              </a>
              
              {/* Mobile Action Buttons */}
              <div className="pt-4 border-t border-[#08F06C]/20 space-y-3">
                <button className="w-full flex items-center justify-center space-x-2 bg-[#08F06C]/20 text-[#08F06C] px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black">
                  <Search size={18} />
                  <span>Rechercher</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-3 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black">
                  <User size={18} />
                  <span>Mon Compte</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;