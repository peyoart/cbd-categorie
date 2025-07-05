import React, { useState } from 'react';
import { Star, ShoppingCart, ChevronDown, Eye, Filter, Grid, List, SlidersHorizontal } from 'lucide-react';

const FleursCBDCategoryPage = () => {
  const [selectedOptions, setSelectedOptions] = useState<{[key: number]: number}>({});
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);

  // Initialize all products with first option selected
  React.useEffect(() => {
    const initialOptions: {[key: number]: number} = {};
    products.forEach(product => {
      initialOptions[product.id] = 0;
    });
    setSelectedOptions(initialOptions);
  }, []);

  const products = [
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
  ];

  const categories = [
    { id: 'all', name: 'Tous les produits', count: products.length },
    { id: 'bons-plans', name: 'Bons Plans', count: products.filter(p => p.category === 'Bons Plans').length },
    { id: 'fleurs-cbd', name: 'Fleurs CBD', count: products.filter(p => p.category === 'Fleurs CBD').length },
  ];

  const priceRanges = [
    { id: 'all', name: 'Tous les prix', min: 0, max: Infinity },
    { id: '0-20', name: '0€ - 20€', min: 0, max: 20 },
    { id: '20-50', name: '20€ - 50€', min: 20, max: 50 },
    { id: '50-100', name: '50€ - 100€', min: 50, max: 100 },
    { id: '100+', name: '100€+', min: 100, max: Infinity },
  ];

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
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Title and Subtitle Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Découvrez nos Fleurs CBD
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4">
            Plonge dans l'élite des fleurs CBD Indoor du Tealer Gang, où pureté et arômes se marient sous un contrôle parfait, pour une relaxation et une saveur inégalées. Comme l'a dit Kendrick Lamar, 'I'm taking control of my destiny,' prend en main ton bien-être avec l'excellence de Tealerlab. Découvrez notre gamme de <span className="text-[#08F06C] font-semibold">fleur cbd trim</span> et notre gamme de <span className="text-[#08F06C] font-semibold">green house</span>.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Hover Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                  <button className="bg-white/20 backdrop-blur-sm text-white p-2 lg:p-3 rounded-full hover:bg-white/30 transition-colors duration-200 border border-white/30">
                    <Eye size={18} className="lg:w-5 lg:h-5" />
                  </button>
                  <button className="bg-[#08F06C] text-black p-2 lg:p-3 rounded-full hover:bg-[#08F06C]/90 transition-colors duration-200 shadow-lg">
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
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={`sm:w-4 sm:h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-500'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-300 ml-2 text-xs sm:text-sm">{product.reviews} avis</span>
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
                      onClick={() => {
                        const dropdown = document.getElementById(`dropdown-${product.id}`);
                        if (dropdown) {
                          dropdown.classList.toggle('hidden');
                        }
                      }}
                    >
                      <span className="text-white font-medium text-xs sm:text-sm">
                        ✓ {product.options[selectedOptions[product.id] || 0]?.weight} ({product.options[selectedOptions[product.id] || 0]?.price})
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-300" />
                    </button>
                    
                    <div 
                      id={`dropdown-${product.id}`}
                      className="hidden absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 shadow-lg z-10 max-h-40 overflow-y-auto"
                    >
                      {product.options.map((option, index) => (
                        <button
                          key={index}
                          className={`w-full p-2 sm:p-3 text-left hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                            (selectedOptions[product.id] || 0) === index ? 'bg-gray-100' : ''
                          }`}
                          onClick={() => {
                            setSelectedOptions(prev => ({
                              ...prev,
                              [product.id]: index
                            }));
                            const dropdown = document.getElementById(`dropdown-${product.id}`);
                            if (dropdown) {
                              dropdown.classList.add('hidden');
                            }
                          }}
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
                >
                  {product.inStock ? 'Ajouter au Panier' : 'Rupture de Stock'}
                </button>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-r from-[#08F06C]/0 via-[#08F06C]/0 to-[#08F06C]/0 group-hover:from-[#08F06C]/10 group-hover:via-transparent group-hover:to-[#08F06C]/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-[#08F06C] hover:bg-[#08F06C]/90 text-black px-8 sm:px-12 py-3 sm:py-4 rounded-xl lg:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            Charger Plus de Produits
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="relative z-20 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#08F06C] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg mb-6">
              NOS GAMMES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Découvrez Nos Catégories
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Une sélection complète de produits CBD pour tous vos besoins et préférences.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                id: 1,
                name: "Bons Plans",
                image: "https://cbdpascher13.fr/wp-content/uploads/2025/04/bons-plans2.png",
                description: "Offres spéciales et promotions"
              },
              {
                id: 2,
                name: "Fleurs CBD",
                image: "https://cbdpascher13.fr/wp-content/uploads/2025/04/fleurs-cbd.png",
                description: "Fleurs premium cultivées en France"
              },
              {
                id: 3,
                name: "Résines CBD",
                image: "https://cbdpascher13.fr/wp-content/uploads/2025/04/resines-cbd.png",
                description: "Résines de qualité supérieure"
              },
              {
                id: 4,
                name: "Get High",
                image: "https://cbdpascher13.fr/wp-content/uploads/2025/04/get-high3.png",
                description: "Produits pour une expérience intense"
              },
              {
                id: 5,
                name: "Accessoires CBD",
                image: "https://cbdpascher13.fr/wp-content/uploads/2025/04/accessoires-cbd.png",
                description: "Tout pour votre consommation CBD"
              }
            ].map((category) => (
              <div
                key={category.id}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl lg:rounded-2xl overflow-hidden border border-gray-700 hover:border-[#08F06C]/50 transition-all duration-500 transform hover:-translate-y-2 lg:hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#08F06C]/25 cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative h-32 sm:h-40 lg:h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compact Reviews Section */}
      <div className="relative z-20 py-16 bg-gradient-to-br from-gray-900/80 to-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#08F06C] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg mb-6">
              ⭐ AVIS CLIENTS ⭐
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex text-amber-400">
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
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-gray-700 hover:border-[#08F06C]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#08F06C]/20"
              >
                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-[#08F06C] font-bold text-sm">
                    ({review.rating}/5)
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-300 mb-3 text-sm leading-relaxed line-clamp-3">
                  "{review.comment}"
                </p>

                {/* Product Badge */}
                <div className="mb-3">
                  <span className="inline-block bg-[#08F06C]/20 text-[#08F06C] px-2 py-1 rounded-full text-xs font-bold border border-[#08F06C]/30">
                    ✅ {review.product}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#08F06C] flex items-center justify-center mr-2">
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
                    <div className="text-gray-400 text-xs">{review.date}</div>
                  </div>
                </div>
              </div>
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
      </div>

      {/* Bottom Information Section */}
      <div className="relative z-20 bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="text-center mb-16 relative z-10">
            {/* Badge */}
            <div className="inline-block bg-[#08F06C] text-black px-6 py-3 rounded-full font-bold text-lg mb-8 shadow-lg">
              💎 QUALITÉ PREMIUM
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-12 leading-tight">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
              <span className="text-[#08F06C] bg-gradient-to-r from-[#08F06C] to-green-400 bg-clip-text text-transparent">
                les adopter.
              </span>
              Acheter les résines de CBD Pas Cher 13 c'est<br />
              les adopter.
            <div className="space-y-8 text-lg sm:text-xl text-gray-300 max-w-5xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-[#08F06C]/20 hover:border-[#08F06C]/40 transition-all duration-300 transform hover:-translate-y-1">
                <p className="leading-relaxed">
                  Nos résines sont soigneusement extraites des fleurs de cannabis pour offrir une 
                  concentration de cannabidiol idéale et une <span className="font-bold text-[#08F06C]">expérience proche de la perfection</span>.
                </p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-[#08F06C]/20 hover:border-[#08F06C]/40 transition-all duration-300 transform hover:-translate-y-1">
                <p className="leading-relaxed">
                  Nos résines offrent un <span className="font-bold text-[#08F06C]">taux de CBD élevé</span> et une <span className="font-bold text-[#08F06C]">expérience ultra relaxante quelque-soit 
                  la variété de Hash CBD</span> commandée.
                </p>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-[#08F06C]/20 hover:border-[#08F06C]/40 transition-all duration-300 transform hover:-translate-y-1">
                <p className="leading-relaxed">
                  Nos résines de CBD conservent les <span className="font-bold text-[#08F06C]">arômes authentiques du kief et des terpènes du 
                  cannabis</span> tout en étant parfaitement conformes à la législation.
                </p>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-gradient-to-br from-[#08F06C]/20 to-green-400/10 backdrop-blur-sm rounded-xl p-6 border border-[#08F06C]/30">
                <div className="w-12 h-12 bg-[#08F06C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">🌿</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">100% Naturel</h3>
                <p className="text-gray-300 text-sm">Extraction pure sans additifs chimiques</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#08F06C]/20 to-green-400/10 backdrop-blur-sm rounded-xl p-6 border border-[#08F06C]/30">
                <div className="w-12 h-12 bg-[#08F06C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">🔬</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Testé en Labo</h3>
                <p className="text-gray-300 text-sm">Analyses complètes de qualité et pureté</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#08F06C]/20 to-green-400/10 backdrop-blur-sm rounded-xl p-6 border border-[#08F06C]/30">
                <div className="w-12 h-12 bg-[#08F06C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Effet Rapide</h3>
                <p className="text-gray-300 text-sm">Concentration optimale pour un effet immédiat</p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-gradient-to-r from-[#08F06C] to-green-400 hover:from-green-400 hover:to-[#08F06C] text-black px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[#08F06C]/25">
                Découvrir Nos Résines Premium
              </button>
            </div>
          </div>
        </div>
      </div>
            <div className="space-y-6 text-base sm:text-lg text-gray-300 max-w-4xl mx-auto">
              linear-gradient(90deg, rgba(8,240,108,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
              <p>
                Nos résines sont soigneusement extraites des fleurs de cannabis pour offrir une 
                concentration de cannabidiol idéale et une <span className="font-bold">expérience proche de la perfection</span>.
              </p>
              
              <p>
                Nos résines offrent un <span className="font-bold">taux de CBD élevé</span> et une <span className="font-bold">expérience ultra relaxante quelque-soit 
                la variété de Hash CBD</span> commandée.
              </p>
              
              <p>
                Nos résines de CBD conservent les <span className="font-bold">arômes authentiques du kief et des terpènes du 
                cannabis</span> tout en étant parfaitement conformes à la législation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-20 bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Service 1 */}
            <div className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">EXPÉDITION EN 24/48H APRÈS PRÉPARATION</h3>
              <p className="text-sm text-gray-300">
                Livraison dans toute l'europe, gratuite à partir de 69€ d'achat
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">ASSURANCE COLIS VOLÉ OU PERDU</h3>
              <p className="text-sm text-gray-300">
                Offerte pour toutes les commandes sans minimum d'achat
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">EMBALLAGE ANONYME ET DISCRET</h3>
              <p className="text-sm text-gray-300">
                Nos emballages sont neutres pour un maximum de discrétion
              </p>
            </div>

            {/* Service 4 */}
            <div className="text-white">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#08F06C]/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#08F06C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">PAIEMENT SÉCURISÉ SSL EN CARTE BLEUE</h3>
              <p className="text-sm text-gray-300">
                Payez de manière sécurisée par carte bleue grâce à nos partenaires
              </p>
            </div>
          </div>
        </div>
      </div>

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