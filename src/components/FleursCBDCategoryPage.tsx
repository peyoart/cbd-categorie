import React, { useState, useCallback, useMemo } from 'react';
import { Star, ShoppingCart, ChevronDown, Eye, Grid, List, SlidersHorizontal } from 'lucide-react';

interface ProductOption {
  weight: string;
  price: string;
  originalPrice: string;
  salePrice: string;
}

interface Product {
  id: number;
  name: string;
  discount: string;
  rating: number;
  reviews: number;
  category: string;
  categoryColor: string;
  image: string;
  inStock: boolean;
  options: ProductOption[];
}

interface Category {
  id: string;
  name: string;
  count: number;
}

const FleursCBDCategoryPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const categories: Category[] = [
    { id: 'all', name: 'Toutes les fleurs', count: 24 },
    { id: 'indica', name: 'Indica', count: 8 },
    { id: 'sativa', name: 'Sativa', count: 7 },
    { id: 'hybrid', name: 'Hybride', count: 9 },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Purple Haze CBD',
      discount: '-25%',
      rating: 4.8,
      reviews: 127,
      category: 'sativa',
      categoryColor: 'bg-green-500',
      image: 'https://images.pexels.com/photos/7667726/pexels-photo-7667726.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      options: [
        { weight: '1g', price: '8.90€', originalPrice: '11.90€', salePrice: '8.90€' },
        { weight: '3g', price: '24.90€', originalPrice: '32.90€', salePrice: '24.90€' },
        { weight: '5g', price: '39.90€', originalPrice: '52.90€', salePrice: '39.90€' },
      ]
    },
    {
      id: 2,
      name: 'OG Kush CBD',
      discount: '-30%',
      rating: 4.9,
      reviews: 203,
      category: 'indica',
      categoryColor: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/7667728/pexels-photo-7667728.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      options: [
        { weight: '1g', price: '9.90€', originalPrice: '13.90€', salePrice: '9.90€' },
        { weight: '3g', price: '27.90€', originalPrice: '38.90€', salePrice: '27.90€' },
        { weight: '5g', price: '44.90€', originalPrice: '62.90€', salePrice: '44.90€' },
      ]
    },
    {
      id: 3,
      name: 'White Widow CBD',
      discount: '-20%',
      rating: 4.7,
      reviews: 89,
      category: 'hybrid',
      categoryColor: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/7667730/pexels-photo-7667730.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      options: [
        { weight: '1g', price: '7.90€', originalPrice: '9.90€', salePrice: '7.90€' },
        { weight: '3g', price: '22.90€', originalPrice: '28.90€', salePrice: '22.90€' },
        { weight: '5g', price: '36.90€', originalPrice: '46.90€', salePrice: '36.90€' },
      ]
    },
    {
      id: 4,
      name: 'Amnesia Haze CBD',
      discount: '-35%',
      rating: 4.6,
      reviews: 156,
      category: 'sativa',
      categoryColor: 'bg-green-500',
      image: 'https://images.pexels.com/photos/7667732/pexels-photo-7667732.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      options: [
        { weight: '1g', price: '10.90€', originalPrice: '16.90€', salePrice: '10.90€' },
        { weight: '3g', price: '29.90€', originalPrice: '45.90€', salePrice: '29.90€' },
        { weight: '5g', price: '47.90€', originalPrice: '72.90€', salePrice: '47.90€' },
      ]
    },
    {
      id: 5,
      name: 'Gorilla Glue CBD',
      discount: '-15%',
      rating: 4.8,
      reviews: 94,
      category: 'hybrid',
      categoryColor: 'bg-blue-500',
      image: 'https://images.pexels.com/photos/7667734/pexels-photo-7667734.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: false,
      options: [
        { weight: '1g', price: '8.50€', originalPrice: '10.00€', salePrice: '8.50€' },
        { weight: '3g', price: '24.50€', originalPrice: '29.00€', salePrice: '24.50€' },
        { weight: '5g', price: '39.50€', originalPrice: '47.00€', salePrice: '39.50€' },
      ]
    },
    {
      id: 6,
      name: 'Northern Lights CBD',
      discount: '-40%',
      rating: 4.9,
      reviews: 178,
      category: 'indica',
      categoryColor: 'bg-purple-500',
      image: 'https://images.pexels.com/photos/7667736/pexels-photo-7667736.jpeg?auto=compress&cs=tinysrgb&w=400',
      inStock: true,
      options: [
        { weight: '1g', price: '11.90€', originalPrice: '19.90€', salePrice: '11.90€' },
        { weight: '3g', price: '32.90€', originalPrice: '54.90€', salePrice: '32.90€' },
        { weight: '5g', price: '52.90€', originalPrice: '87.90€', salePrice: '52.90€' },
      ]
    }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      const basePrice = parseFloat(product.options[0].salePrice.replace('€', ''));
      return basePrice >= priceRange[0] && basePrice <= priceRange[1];
    });
  }, [selectedCategory, priceRange]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => 
          parseFloat(a.options[0].salePrice.replace('€', '')) - 
          parseFloat(b.options[0].salePrice.replace('€', ''))
        );
      case 'price-high':
        return sorted.sort((a, b) => 
          parseFloat(b.options[0].salePrice.replace('€', '')) - 
          parseFloat(a.options[0].salePrice.replace('€', ''))
        );
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const toggleFilters = useCallback(() => {
    setShowFilters(prev => !prev);
  }, []);

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const [selectedOption, setSelectedOption] = useState(0);

    return (
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-800 hover:border-[#08F06C]/30 group">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              {product.discount}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`${product.categoryColor} text-white px-2 py-1 rounded-full text-xs font-medium`}>
              {product.category}
            </span>
          </div>
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                Rupture de stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#08F06C] transition-colors">
            {product.name}
          </h3>
          
          <div className="flex items-center space-x-2 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-600'}
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">
              {product.rating} ({product.reviews} avis)
            </span>
          </div>

          <div className="space-y-2 mb-4">
            <div className="flex space-x-1">
              {product.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(index)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    selectedOption === index
                      ? 'bg-[#08F06C] text-black'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {option.weight}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-[#08F06C] font-bold text-lg">
                {product.options[selectedOption].salePrice}
              </span>
              <span className="text-gray-500 line-through text-sm">
                {product.options[selectedOption].originalPrice}
              </span>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              disabled={!product.inStock}
              className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                product.inStock
                  ? 'bg-[#08F06C] text-black hover:bg-[#08F06C]/90'
                  : 'bg-gray-700 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart size={16} className="inline mr-2" />
              Ajouter
            </button>
            <button className="p-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
              <Eye size={16} />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Fleurs CBD <span className="text-[#08F06C]">Premium</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Découvrez notre sélection exceptionnelle de fleurs CBD françaises, 
              cultivées avec passion et certifiées biologiques.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-[#08F06C]/20 text-[#08F06C] px-4 py-2 rounded-full">
                🇫🇷 Origine France
              </span>
              <span className="bg-[#08F06C]/20 text-[#08F06C] px-4 py-2 rounded-full">
                🌱 Bio certifié
              </span>
              <span className="bg-[#08F06C]/20 text-[#08F06C] px-4 py-2 rounded-full">
                🔬 Testé en laboratoire
              </span>
              <span className="bg-[#08F06C]/20 text-[#08F06C] px-4 py-2 rounded-full">
                📦 Livraison discrète
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-gray-900 rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-[#08F06C]">Filtres</h3>
              
              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Catégories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#08F06C] text-black'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="float-right text-sm opacity-70">
                        ({category.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Prix (€)</h4>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full accent-[#08F06C]"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{priceRange[0]}€</span>
                    <span>{priceRange[1]}€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Controls Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleFilters}
                  className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  <SlidersHorizontal size={16} />
                  <span>Filtres</span>
                </button>
                <span className="text-gray-400">
                  {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-[#08F06C] focus:outline-none"
                >
                  <option value="popularity">Popularité</option>
                  <option value="price-low">Prix croissant</option>
                  <option value="price-high">Prix décroissant</option>
                  <option value="rating">Mieux notés</option>
                  <option value="name">Nom A-Z</option>
                </select>

                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${
                      viewMode === 'grid' ? 'bg-[#08F06C] text-black' : 'text-gray-400'
                    }`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${
                      viewMode === 'list' ? 'bg-[#08F06C] text-black' : 'text-gray-400'
                    }`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  Aucun produit ne correspond à vos critères de recherche.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleursCBDCategoryPage;