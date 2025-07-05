import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronDown, Eye, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

const FleursCBDCategoryPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Fleur CBD Premium OG Kush",
      price: 8.50,
      originalPrice: 12.00,
      rating: 4.8,
      reviews: 124,
      image: "/api/placeholder/300/300",
      badge: "Bestseller",
      thc: "< 0.2%",
      cbd: "18-22%",
      category: "Indoor"
    },
    {
      id: 2,
      name: "Amnesia Haze CBD",
      price: 7.90,
      originalPrice: 10.50,
      rating: 4.6,
      reviews: 89,
      image: "/api/placeholder/300/300",
      badge: "Nouveau",
      thc: "< 0.2%",
      cbd: "15-19%",
      category: "Greenhouse"
    },
    {
      id: 3,
      name: "White Widow CBD Bio",
      price: 9.20,
      originalPrice: 13.00,
      rating: 4.9,
      reviews: 156,
      image: "/api/placeholder/300/300",
      badge: "Bio",
      thc: "< 0.2%",
      cbd: "20-24%",
      category: "Indoor"
    },
    {
      id: 4,
      name: "Lemon Haze CBD",
      price: 6.80,
      originalPrice: 9.00,
      rating: 4.5,
      reviews: 67,
      image: "/api/placeholder/300/300",
      thc: "< 0.2%",
      cbd: "16-20%",
      category: "Outdoor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#08F06C]/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Fleurs CBD
              <span className="block text-[#08F06C] text-2xl md:text-3xl font-light mt-2">
                Premium & Artisanales
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre sélection exclusive de fleurs CBD cultivées avec passion. 
              Qualité premium, saveurs authentiques et effets naturels garantis.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Sort Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-[#08F06C]/10 text-[#08F06C] rounded-lg border border-[#08F06C]/30 hover:bg-[#08F06C]/20 transition-all duration-300"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filtres
              </button>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Trier par:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-700 text-white px-3 py-2 rounded-lg border border-gray-600 focus:border-[#08F06C] focus:outline-none"
                >
                  <option value="popularity">Popularité</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="rating">Note</option>
                  <option value="newest">Nouveautés</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Vue:</span>
              <div className="flex bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#08F06C] text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#08F06C] text-black' : 'text-gray-400 hover:text-white'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Prix</label>
                  <div className="flex gap-2">
                    <input type="number" placeholder="Min" className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-[#08F06C] focus:outline-none" />
                    <input type="number" placeholder="Max" className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-[#08F06C] focus:outline-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Taux CBD</label>
                  <select className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-[#08F06C] focus:outline-none">
                    <option>Tous</option>
                    <option>10-15%</option>
                    <option>15-20%</option>
                    <option>20%+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Culture</label>
                  <select className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-[#08F06C] focus:outline-none">
                    <option>Toutes</option>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                    <option>Greenhouse</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Saveur</label>
                  <select className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-[#08F06C] focus:outline-none">
                    <option>Toutes</option>
                    <option>Fruitée</option>
                    <option>Terreuse</option>
                    <option>Citronnée</option>
                    <option>Épicée</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'}`}>
          {products.map((product) => (
            <div key={product.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#08F06C]/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === 'Bestseller' ? 'bg-[#08F06C] text-black' :
                    product.badge === 'Nouveau' ? 'bg-blue-500 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
                <button className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-[#08F06C] hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#08F06C] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-[#08F06C] fill-current' : 'text-gray-600'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-400">({product.reviews})</span>
                </div>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">CBD:</span>
                    <span className="text-[#08F06C] font-semibold">{product.cbd}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">THC:</span>
                    <span className="text-gray-300">{product.thc}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#08F06C]">
                      {product.price.toFixed(2)}€
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice.toFixed(2)}€
                      </span>
                    )}
                  </div>
                  <button className="flex items-center gap-2 bg-[#08F06C] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#06D45A] transition-all duration-300 transform hover:scale-105">
                    <ShoppingCart className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pourquoi Choisir Nos Fleurs CBD ?
            </h2>
            <div className="space-y-8 text-lg sm:text-xl text-gray-300 max-w-5xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-[#08F06C]/20 hover:border-[#08F06C]/40 transition-all duration-300 transform hover:-translate-y-1">
                <p className="leading-relaxed">
                  Nos résines sont soigneusement extraites des fleurs de cannabis pour offrir une 
                  concentration de cannabidiol idéale et une <span className="font-bold text-[#08F06C]">expérience proche de la perfection</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleursCBDCategoryPage;