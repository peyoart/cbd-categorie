import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronDown, Eye, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

const FleursCBDCategoryPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const products = [
    {
      id: 1,
      name: "Purple Haze CBD",
      price: "€24.99",
      originalPrice: "€29.99",
      rating: 4.8,
      reviews: 127,
      image: "https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Bestseller",
      thc: "< 0.2%",
      cbd: "18-22%",
      category: "Indoor"
    },
    {
      id: 2,
      name: "Lemon Skunk CBD",
      price: "€22.50",
      rating: 4.6,
      reviews: 89,
      image: "https://images.pexels.com/photos/7667728/pexels-photo-7667728.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "New",
      thc: "< 0.2%",
      cbd: "15-19%",
      category: "Greenhouse"
    },
    {
      id: 3,
      name: "White Widow CBD",
      price: "€26.99",
      rating: 4.9,
      reviews: 203,
      image: "https://images.pexels.com/photos/7667730/pexels-photo-7667730.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Premium",
      thc: "< 0.2%",
      cbd: "20-24%",
      category: "Indoor"
    },
    {
      id: 4,
      name: "Amnesia CBD",
      price: "€23.75",
      rating: 4.7,
      reviews: 156,
      image: "https://images.pexels.com/photos/7667732/pexels-photo-7667732.jpeg?auto=compress&cs=tinysrgb&w=400",
      thc: "< 0.2%",
      cbd: "16-20%",
      category: "Outdoor"
    },
    {
      id: 5,
      name: "OG Kush CBD",
      price: "€28.50",
      rating: 4.8,
      reviews: 174,
      image: "https://images.pexels.com/photos/7667734/pexels-photo-7667734.jpeg?auto=compress&cs=tinysrgb&w=400",
      badge: "Limited",
      thc: "< 0.2%",
      cbd: "19-23%",
      category: "Indoor"
    },
    {
      id: 6,
      name: "Strawberry Kush CBD",
      price: "€25.99",
      rating: 4.5,
      reviews: 98,
      image: "https://images.pexels.com/photos/7667736/pexels-photo-7667736.jpeg?auto=compress&cs=tinysrgb&w=400",
      thc: "< 0.2%",
      cbd: "17-21%",
      category: "Greenhouse"
    }
  ];

  const categories = [
    { name: "Toutes", count: 156, active: true },
    { name: "Indoor", count: 89 },
    { name: "Greenhouse", count: 45 },
    { name: "Outdoor", count: 22 }
  ];

  const priceRanges = [
    { label: "€0 - €20", count: 23 },
    { label: "€20 - €30", count: 89 },
    { label: "€30 - €40", count: 34 },
    { label: "€40+", count: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Fleurs CBD Premium
                </h1>
                <p className="text-gray-400 mt-2">Découvrez notre sélection de fleurs CBD de haute qualité</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-gray-800/50 rounded-lg p-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-green-500 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-1/4">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-white">Filtres</h3>
                  <SlidersHorizontal className="w-5 h-5 text-gray-400" />
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-white mb-4">Catégories</h4>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <label key={index} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            defaultChecked={category.active}
                            className="w-4 h-4 text-green-500 bg-gray-800 border-gray-600 focus:ring-green-500"
                          />
                          <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-white mb-4">Prix</h4>
                  <div className="space-y-3">
                    {priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center justify-between cursor-pointer group">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                          />
                          <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                            {range.label}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">({range.count})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* CBD Content */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-white mb-4">Taux CBD</h4>
                  <div className="space-y-3">
                    {['< 15%', '15-20%', '20-25%', '> 25%'].map((range, index) => (
                      <label key={index} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                        />
                        <span className="ml-3 text-gray-300 group-hover:text-white transition-colors">
                          {range}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105">
                  Appliquer les filtres
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Sort and Results */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div className="text-gray-300">
                  <span className="text-2xl font-bold text-white">{products.length}</span> produits trouvés
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-gray-800/50 border border-gray-700 text-white px-4 py-2 pr-8 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none"
                    >
                      <option value="featured">Mis en avant</option>
                      <option value="price-low">Prix croissant</option>
                      <option value="price-high">Prix décroissant</option>
                      <option value="rating">Mieux notés</option>
                      <option value="newest">Plus récents</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {products.map((product) => (
                  <div key={product.id} className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Badge */}
                      {product.badge && (
                        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${
                          product.badge === 'Bestseller' ? 'bg-yellow-500 text-black' :
                          product.badge === 'New' ? 'bg-green-500 text-white' :
                          product.badge === 'Premium' ? 'bg-purple-500 text-white' :
                          'bg-red-500 text-white'
                        }`}>
                          {product.badge}
                        </div>
                      )}

                      {/* Quick View */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                          <Eye className="w-5 h-5 text-white" />
                        </button>
                      </div>

                      {/* CBD/THC Info */}
                      <div className="absolute bottom-4 left-4 flex space-x-2">
                        <span className="bg-green-500/20 backdrop-blur-sm text-green-400 px-2 py-1 rounded text-xs font-medium">
                          CBD {product.cbd}
                        </span>
                        <span className="bg-gray-500/20 backdrop-blur-sm text-gray-300 px-2 py-1 rounded text-xs font-medium">
                          THC {product.thc}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-400 text-sm mt-1">{product.category}</p>
                        </div>
                      </div>

                      <div className="flex items-center mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm ml-2">
                          {product.rating} ({product.reviews} avis)
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-white">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                          )}
                        </div>
                        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-110 group">
                          <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
                    Précédent
                  </button>
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        page === 1
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-colors">
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleursCBDCategoryPage;