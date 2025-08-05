import React, { useState, useCallback, useMemo } from 'react';
import { Star, ShoppingCart, ChevronDown, Eye, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

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

interface PriceRange {
  id: string;
  name: string;
  min: number;
  max: number;
}

const FleursCBDCategoryPage: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: number}>({});
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  const products: Product[] = useMemo(() => [
    {
      id: 1,
      name: "Fruit Cake",
      discount: "-70%",
      rating: 4.8,
      reviews: 11,
      category: "Bons Plans",
      categoryColor: "bg-green-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/02/Design-sans-titre-4.png",
      inStock: true,
      options: [
        { weight: "2G", price: "3€/g", originalPrice: "20€", salePrice: "6€" },
        { weight: "5G", price: "2,8€/g", originalPrice: "47€", salePrice: "14€" },
        { weight: "10G", price: "2,5€/g", originalPrice: "83€", salePrice: "25€" },
        { weight: "25G", price: "2,2€/g", originalPrice: "183€", salePrice: "55€" }
      ]
    },
    {
      id: 2,
      name: "Girl Scout Cookies",
      discount: "-70%",
      rating: 4.7,
      reviews: 9,
      category: "Bons Plans",
      categoryColor: "bg-green-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/02/amnesia-fleur.png",
      inStock: true,
      options: [
        { weight: "2G", price: "3,5€/g", originalPrice: "23€", salePrice: "7€" },
        { weight: "5G", price: "3,2€/g", originalPrice: "53€", salePrice: "16€" },
        { weight: "10G", price: "2,9€/g", originalPrice: "97€", salePrice: "29€" }
      ]
    },
    {
      id: 3,
      name: "Pack Californie",
      discount: "-27%",
      rating: 4.6,
      reviews: 11,
      category: "Bons Plans",
      categoryColor: "bg-green-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/02/Design-sans-titre-5.png",
      inStock: true,
      options: [
        { weight: "10G", price: "5,49€/g", originalPrice: "75€", salePrice: "54.99€" },
        { weight: "25G", price: "4,99€/g", originalPrice: "160€", salePrice: "124.75€" }
      ]
    },
    {
      id: 4,
      name: "Pack Classique",
      discount: "-38%",
      rating: 4.8,
      reviews: 13,
      category: "Bons Plans",
      categoryColor: "bg-green-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/06/M-ac-1.png",
      inStock: true,
      options: [
        { weight: "10G", price: "2,49€/g", originalPrice: "40€", salePrice: "24.99€" },
        { weight: "25G", price: "2,19€/g", originalPrice: "75€", salePrice: "54.75€" }
      ]
    },
    {
      id: 5,
      name: "Northern Light",
      discount: "-35%",
      rating: 4.9,
      reviews: 18,
      category: "Fleurs CBD",
      categoryColor: "bg-blue-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/02/Design-sans-titre-3.png",
      inStock: true,
      options: [
        { weight: "2G", price: "3,25€/g", originalPrice: "10€", salePrice: "6.5€" },
        { weight: "5G", price: "3€/g", originalPrice: "23€", salePrice: "15€" },
        { weight: "10G", price: "2,5€/g", originalPrice: "38€", salePrice: "25€" },
        { weight: "25G", price: "2,2€/g", originalPrice: "85€", salePrice: "55€" }
      ]
    },
    {
      id: 6,
      name: "Super Silver Haze",
      discount: "-25%",
      rating: 4.7,
      reviews: 14,
      category: "Fleurs CBD",
      categoryColor: "bg-blue-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/03/super-silver-haze-2.png",
      inStock: true,
      options: [
        { weight: "2G", price: "4€/g", originalPrice: "10.67€", salePrice: "8€" },
        { weight: "5G", price: "3,8€/g", originalPrice: "25.33€", salePrice: "19€" },
        { weight: "10G", price: "3,5€/g", originalPrice: "46.67€", salePrice: "35€" }
      ]
    },
    {
      id: 7,
      name: "White Widow",
      discount: "-30%",
      rating: 4.8,
      reviews: 22,
      category: "Fleurs CBD",
      categoryColor: "bg-blue-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/06/white-widow-1.png",
      inStock: true,
      options: [
        { weight: "2G", price: "3,75€/g", originalPrice: "10.71€", salePrice: "7.5€" },
        { weight: "5G", price: "3,5€/g", originalPrice: "25€", salePrice: "17.5€" },
        { weight: "10G", price: "3,2€/g", originalPrice: "45.71€", salePrice: "32€" },
        { weight: "25G", price: "2,9€/g", originalPrice: "103.57€", salePrice: "72.5€" }
      ]
    },
    {
      id: 8,
      name: "Amnesia Haze",
      discount: "-20%",
      rating: 4.6,
      reviews: 16,
      category: "Fleurs CBD",
      categoryColor: "bg-blue-500",
      image: "https://cbdpascher13.fr/wp-content/uploads/2025/03/Design-sans-titre-20.png",
      inStock: true,
      options: [
        { weight: "2G", price: "6,75€/g", originalPrice: "16.87€", salePrice: "13.5€" },
        { weight: "5G", price: "6,25€/g", originalPrice: "39€", salePrice: "31.25€" },
        { weight: "10G", price: "5,75€/g", originalPrice: "72€", salePrice: "57.5€" }
      ]
    }
  ], []);

  const categories: Category[] = useMemo(() => [
    { id: 'all', name: 'Tous les produits', count: products.length },
    { id: 'bons-plans', name: 'Bons Plans', count: products.filter(p => p.category === 'Bons Plans').length },
    { id: 'fleurs-cbd', name: 'Fleurs CBD', count: products.filter(p => p.category === 'Fleurs CBD').length },
  ], [products]);

  const priceRanges: PriceRange[] = useMemo(() => [
    { id: 'all', name: 'Tous les prix', min: 0, max: Infinity },
    { id: '0-20', name: '0€ - 20€', min: 0, max: 20 },
    { id: '20-50', name: '20€ - 50€', min: 20, max: 50 },
    { id: '50-100', name: '50€ - 100€', min: 50, max: 100 },
    { id: '100+', name: '100€+', min: 100, max: Infinity },
  ], []);

  // Initialize all products with first option selected
  React.useEffect(() => {
    const initialOptions: {[key: number]: number} = {};
    products.forEach(product => {
      initialOptions[product.id] = 0;
    });
    setSelectedOptions(initialOptions);
  }, [products]);

  const handleOptionChange = useCallback((productId: number, optionIndex: number) => {
    setSelectedOptions(prev => ({
      ...prev,
      [productId]: optionIndex
    }));
  }, []);

  const toggleDropdown = useCallback((productId: number) => {
    const dropdown = document.getElementById(`dropdown-${productId}`);
    if (dropdown) {
      dropdown.classList.toggle('hidden');
    }
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      if (selectedCategory !== 'all') {
        const categoryMatch = selectedCategory === 'bons-plans' ? 
          product.category === 'Bons Plans' : 
          product.category === 'Fleurs CBD';
        if (!categoryMatch) return false;
      }

      // Price filter
      if (selectedPriceRange !== 'all') {
        const priceRange = priceRanges.find(range => range.id === selectedPriceRange);
        if (priceRange) {
          const currentOption = product.options[selectedOptions[product.id] || 0];
          const price = parseFloat(currentOption.salePrice.replace('€', '').replace(',', '.'));
          if (price < priceRange.min || price > priceRange.max) return false;
        }
      }

      return true;
    });
  }, [products, selectedCategory, selectedPriceRange, selectedOptions, priceRanges]);

  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.options[selectedOptions[a.id] || 0].salePrice.replace('€', '').replace(',', '.'));
          const priceB = parseFloat(b.options[selectedOptions[b.id] || 0].salePrice.replace('€', '').replace(',', '.'));
          return priceA - priceB;
        });
      case 'price-high':
        return sorted.sort((a, b) => {
          const priceA = parseFloat(a.options[selectedOptions[a.id] || 0].salePrice.replace('€', '').replace(',', '.'));
          const priceB = parseFloat(b.options[selectedOptions[b.id] || 0].salePrice.replace('€', '').replace(',', '.'));
          return priceB - priceA;
        });
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted.sort((a, b) => b.reviews - a.reviews);
    }
  }, [filteredProducts, sortBy, selectedOptions]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/8 to-[#08F06C]/5"></div>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-green-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[700px] h-[700px] bg-lime-500/15 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-400/18 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-teal-400/12 rounded-full blur-3xl"></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative z-20 pt-8 pb-12">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
          <img
            src="https://cbdpascher13.fr/wp-content/uploads/2025/03/fleurs.png"
            alt="Fleurs CBD"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Title and Subtitle Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            🍁 Découvrez nos Fleurs CBD
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4">
            Plonge dans l'élite des fleurs CBD Indoor du Tealer Gang, où pureté et arômes se marient sous un contrôle parfait, pour une relaxation et une saveur inégalées. Comme l'a dit Kendrick Lamar, 'I'm taking control of my destiny,' prend en main ton bien-être avec l'excellence de Tealerlab. Découvrez notre gamme de <span className="text-[#08F06C] font-semibold">fleur cbd trim</span> et notre gamme de <span className="text-[#08F06C] font-semibold">green house</span>.
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="mb-8 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-200"
              aria-expanded={showFilters}
              aria-controls="filters-panel"
            >
              <SlidersHorizontal size={18} />
              <span>Filtres</span>
            </button>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 focus:border-[#08F06C] focus:outline-none"
              aria-label="Filtrer par catégorie"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-gray-900 text-white">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 focus:border-[#08F06C] focus:outline-none"
              aria-label="Filtrer par prix"
            >
              {priceRanges.map(range => (
                <option key={range.id} value={range.id} className="bg-gray-900 text-white">
                  {range.name}
                </option>
              ))}
            </select>
          </div>

          {/* Sorting and View Mode */}
          <div className="flex items-center space-x-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-white/20 focus:border-[#08F06C] focus:outline-none"
              aria-label="Trier par"
            >
              <option value="popularity" className="bg-gray-900 text-white">Popularité</option>
              <option value="price-low" className="bg-gray-900 text-white">Prix croissant</option>
              <option value="price-high" className="bg-gray-900 text-white">Prix décroissant</option>
              <option value="rating" className="bg-gray-900 text-white">Note</option>
              <option value="name" className="bg-gray-900 text-white">Nom</option>
            </select>

            <div className="flex bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-[#08F06C] text-black' : 'text-white hover:bg-white/20'
                }`}
                aria-label="Vue grille"
                aria-pressed={viewMode === 'grid'}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 transition-colors duration-200 ${
                  viewMode === 'list' ? 'bg-[#08F06C] text-black' : 'text-white hover:bg-white/20'
                }`}
                aria-label="Vue liste"
                aria-pressed={viewMode === 'list'}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-300">
            {sortedProducts.length} produit{sortedProducts.length > 1 ? 's' : ''} trouvé{sortedProducts.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-2 lg:grid-cols-4' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {sortedProducts.map((product) => (
            <article
              key={product.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/20 hover:border-[#08F06C]/50 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#08F06C]/25"
            >
              {/* Stock Badge */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                <span className={`px-2 py-1 sm:px-3 rounded-full text-xs font-bold shadow-lg ${
                  product.inStock 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 text-white'
                }`}>
                  {product.inStock ? 'En Stock' : 'Rupture'}
                </span>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                <span className="bg-red-600 text-white px-2 py-1 sm:px-3 rounded-full text-xs font-bold shadow-lg">
                  {product.discount}
                </span>
              </div>

              {/* Product Image */}
              <div className="relative h-40 sm:h-56 lg:h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button 
                    className="bg-white/20 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-white/30 transition-colors duration-200 border border-white/30"
                    aria-label={`Voir les détails de ${product.name}`}
                  >
                    <Eye size={18} className="lg:w-5 lg:h-5" />
                  </button>
                  <button 
                    className="bg-[#08F06C] text-black p-2 lg:p-3 rounded-full hover:bg-[#08F06C]/90 transition-colors duration-200 shadow-lg"
                    aria-label={`Ajouter ${product.name} au panier`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart size={18} className="lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-3 sm:p-4 lg:p-6">
                {/* Product Name */}
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#08F06C] transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="flex text-amber-400" role="img" aria-label={`Note: ${product.rating} sur 5 étoiles`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 ml-2 text-xs sm:text-sm">
                    {product.reviews} avis
                  </span>
                </div>

                {/* Category Badge */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <span className={`${product.categoryColor} text-white px-2 py-1 sm:px-3 rounded-full text-xs font-bold`}>
                    {product.category}
                  </span>
                </div>

                {/* Options Dropdown */}
                <div className="mb-3 sm:mb-4">
                  <div className="relative">
                    <button 
                      className="w-full border border-white/30 rounded-lg p-2 sm:p-3 text-center bg-white/10 hover:bg-white/20 transition-colors duration-200 flex items-center justify-between backdrop-blur-sm"
                      onClick={() => toggleDropdown(product.id)}
                      aria-expanded="false"
                      aria-haspopup="listbox"
                      aria-label={`Sélectionner une option pour ${product.name}`}
                    >
                      <span className="text-white font-medium text-xs sm:text-sm">
                        ✓ {product.options[selectedOptions[product.id] || 0]?.weight} ({product.options[selectedOptions[product.id] || 0]?.price})
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-300" />
                    </button>
                    
                    <div 
                      id={`dropdown-${product.id}`}
                      className="hidden absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10 max-h-40 overflow-y-auto"
                      role="listbox"
                    >
                      {product.options.map((option, index) => (
                        <button
                          key={index}
                          className={`w-full p-2 sm:p-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                            (selectedOptions[product.id] || 0) === index ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => {
                            handleOptionChange(product.id, index);
                            toggleDropdown(product.id);
                          }}
                          role="option"
                          aria-selected={(selectedOptions[product.id] || 0) === index}
                        >
                          <span className="text-gray-700 font-medium text-xs sm:text-sm">
                            {option.weight} ({option.price})
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-4 sm:mb-6">
                  <div className="text-center space-y-1">
                    {product.options[selectedOptions[product.id] || 0]?.originalPrice && (
                      <span className="text-gray-400 line-through text-sm sm:text-lg">
                        {product.options[selectedOptions[product.id] || 0]?.originalPrice}
                      </span>
                    )}
                    <div>
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#08F06C]">
                        {product.options[selectedOptions[product.id] || 0]?.salePrice}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button 
                  className={`w-full py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm lg:text-base transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    product.inStock
                      ? 'bg-[#08F06C] hover:bg-[#08F06C]/90 text-black hover:shadow-[#08F06C]/25'
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!product.inStock}
                  aria-label={product.inStock ? `Ajouter ${product.name} au panier` : 'Produit en rupture de stock'}
                >
                  {product.inStock ? 'Ajouter au Panier' : 'Rupture de Stock'}
                </button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#08F06C]/0 via-[#08F06C]/0 to-[#08F06C]/0 group-hover:from-[#08F06C]/10 group-hover:via-transparent group-hover:to-[#08F06C]/5 transition-all duration-500 pointer-events-none"></div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#08F06C] hover:bg-[#08F06C]/90 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            Charger Plus de Produits
          </button>
        </div>
      </div>

                tabIndex={0}
                aria-label={`Découvrir la catégorie ${category.name}`}
              >
                {/* Image Container */}
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#08F06C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-center">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-[#08F06C] transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                    {category.description}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#08F06C]/0 via-[#08F06C]/0 to-[#08F06C]/0 group-hover:from-[#08F06C]/10 group-hover:via-transparent group-hover:to-[#08F06C]/5 transition-all duration-500 pointer-events-none"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Reviews Section */}
      <section className="relative z-20 py-16 bg-gradient-to-br from-gray-900/80 to-black/90" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#08F06C] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg mb-6">
              ⭐ AVIS CLIENTS ⭐
            </div>
            <h2 id="reviews-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex text-amber-400" role="img" aria-label="Note moyenne: 4.9 sur 5 étoiles">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-[#08F06C]">4.9/5</span>
              <span className="text-gray-300">• 473 avis</span>
            </div>
          </div>

          {/* Compact Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                name: "luc martinez",
                rating: 5,
                comment: "Hola, c'est un magasin de CBD qui de très bonne qualité!! Vraiment top ! Le service client est incroyable.",
                product: "Magasin CBD",
                date: "Il y a 1 mois"
              },
              {
                name: "Carlos Mozer",
                rating: 5,
                comment: "Produits et prix au top, ambiance typique phocéenne, La boutique du peuple !! 😎",
                product: "Boutique CBD",
                date: "Il y a 1 mois"
              },
              {
                name: "Marie-cyrielle giraut",
                rating: 5,
                comment: "Très commerçant j'adore Mika il est trop sympas.... Je marche quand je suis en panne de scooter.",
                product: "Service client",
                date: "Il y a 4 mois"
              },
              {
                name: "Debora Kiener",
                rating: 5,
                comment: "Mika hela gentil! On trouve de tout les goûts dans ce magasin de cbd le meilleur de cour Julien !",
                product: "Magasin CBD",
                date: "Il y a 2 mois"
              },
              {
                name: "Maxime Beliart",
                rating: 5,
                comment: "Premier passage hier sous conseil d'un ami vraiment pas déçu superbe qualité",
                product: "Première visite",
                date: "Il y a 1 mois"
              },
              {
                name: "Melodie Bouafia",
                rating: 5,
                comment: "Super endroit et super qualité. Toujours bien conseillé et avec le sourire en plus !",
                product: "Rapport qualité-prix",
                date: "Il y a 9 mois"
              }
            ].map((review, index) => (
              <article
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-[#08F06C]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#08F06C]/20"
              >
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400" role="img" aria-label={`Note: ${review.rating} sur 5 étoiles`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-[#08F06C] font-bold text-sm">
                    ({review.rating}/5)
                  </span>
                </div>

                {/* Comment */}
                <blockquote className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3">
                  "{review.comment}"
                </blockquote>

                {/* Product Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-[#08F06C]/20 text-[#08F06C] px-2 py-1 rounded-full text-xs font-bold border border-[#08F06C]/30">
                    ✅ {review.product}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#08F06C] flex items-center justify-center mr-2 flex-shrink-0">
                      <span className="text-black font-bold text-xs">
                        {review.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">
                        {review.name}
                      </h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#08F06C] font-bold text-xs">VÉRIFIÉ</div>
                    <time className="text-gray-400 text-xs">{review.date}</time>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#08F06C] mb-1">15,000+</div>
              <div className="text-white text-sm">Clients Satisfaits</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#08F06C] mb-1">4.9/5</div>
              <div className="text-white text-sm">Note Moyenne</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#08F06C] mb-1">99.8%</div>
              <div className="text-white text-sm">Recommandations</div>
            </div>
            <div className="text-center bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
              <div className="text-2xl font-bold text-[#08F06C] mb-1">24H</div>
              <div className="text-white text-sm">Livraison Express</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <button className="bg-[#08F06C] hover:bg-[#08F06C]/90 text-black px-6 sm:px-8 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105">
              Voir Tous les Avis
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Information Section */}
      <section className="relative z-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden" aria-labelledby="info-heading">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#08F06C]/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-300/20 rounded-full blur-xl"></div>
        </div>
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,240,108,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(8,240,108,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="relative text-center mb-16">
            {/* Decorative Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#08F06C] to-green-500 rounded-2xl mb-8 shadow-xl shadow-[#08F06C]/25">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            
            <h2 id="info-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-black to-gray-800 bg-clip-text text-transparent mb-8 leading-tight">
              Acheter les résines de CBD Pas Cher 13<br />
              <span className="text-[#08F06C]">c'est les adopter.</span>
            </h2>
            
            <div className="space-y-8 text-base sm:text-lg text-gray-700 max-w-4xl mx-auto">
              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <article className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#08F06C]/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#08F06C]/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#08F06C] to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Extraction Premium</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos résines sont soigneusement extraites des fleurs de cannabis pour offrir une 
                    concentration de cannabidiol idéale et une <span className="font-bold text-[#08F06C]">expérience proche de la perfection</span>.
                  </p>
                </article>
                
                <article className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#08F06C]/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#08F06C]/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#08F06C] to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Relaxation Optimale</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos résines offrent un <span className="font-bold text-[#08F06C]">taux de CBD élevé</span> et une <span className="font-bold text-[#08F06C]">expérience ultra relaxante</span> quelque-soit 
                    la variété de Hash CBD commandée.
                  </p>
                </article>
                
                <article className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#08F06C]/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-[#08F06C]/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#08F06C] to-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Arômes Authentiques</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Nos résines de CBD conservent les <span className="font-bold text-[#08F06C]">arômes authentiques du kief et des terpènes du 
                    cannabis</span> tout en étant parfaitement conformes à la législation.
                  </p>
                </article>
              </div>
              
              {/* Quality Guarantee Banner */}
              <div className="mt-12 bg-gradient-to-r from-[#08F06C]/10 via-green-50 to-[#08F06C]/10 rounded-2xl p-8 border border-[#08F06C]/20 shadow-lg">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#08F06C] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Garantie Qualité Premium</h3>
                      <p className="text-sm sm:text-base text-gray-600">Testées en laboratoire • Conformes à la législation • Satisfaction garantie</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-amber-400" role="img" aria-label="Note: 4.9 sur 5 étoiles">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-lg font-bold text-[#08F06C]">4.9/5</span>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="text-center mt-12">
                <button className="bg-gradient-to-r from-[#08F06C] to-green-500 hover:from-[#08F06C]/90 hover:to-green-500/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-[#08F06C]/25">
                  Découvrir Nos Résines Premium
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-20 bg-black py-12" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="sr-only">Nos Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Service 1 */}
            <article className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">EXPÉDITION EN 24/48H APRÈS PRÉPARATION</h3>
              <p className="text-sm text-gray-300">
                Livraison dans toute l'europe, gratuite à partir de 69€ d'achat
              </p>
            </article>

            {/* Service 2 */}
            <article className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">ASSURANCE COLIS VOLÉ OU PERDU</h3>
              <p className="text-sm text-gray-300">
                Offerte pour toutes les commandes sans minimum d'achat
              </p>
            </article>

            {/* Service 3 */}
            <article className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">EMBALLAGE ANONYME ET DISCRET</h3>
              <p className="text-sm text-gray-300">
                Nos emballages sont neutres pour un maximum de discrétion
              </p>
            </article>

            {/* Service 4 */}
            <article className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">PAIEMENT SÉCURISÉ SSL EN CARTE BLEUE</h3>
              <p className="text-sm text-gray-300">
                Payez de manière sécurisée par carte bleue grâce à nos partenaires
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Legal Notice Banner */}
      <div className="relative z-20 bg-black border-t border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              INTERDICTION DE VENTE DE CBD AUX MOINS DE 18 ANS. EN ACCÉDANT À NOS OFFRES, VOUS CONFIRMEZ VOTRE ÂGE DE 18 ANS OU PLUS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleursCBDCategoryPage;