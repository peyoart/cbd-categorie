import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const GoogleReviewsBanner = () => {
  return (
    <div className="hidden md:block bg-gradient-to-r from-[#08F06C] to-[#08F06C]/90 text-black py-3 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden sm:block"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6 text-center">
          {/* Google Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" className="text-blue-600">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span className="font-bold text-lg">Google</span>
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2 order-1 md:order-none">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-current" />
              ))}
            </div>
            <span className="font-bold text-xl">4.9</span>
          </div>

          {/* Reviews Count */}
          <div className="flex items-center space-x-2 order-2 md:order-none">
            <span className="font-bold text-lg">473 avis</span>
            <ExternalLink size={16} className="opacity-70" />
          </div>

          {/* Separator */}
          <div className="hidden lg:block w-px h-6 bg-black/20"></div>

          {/* Recent Review */}
          <div className="hidden xl:flex items-center space-x-3 max-w-md order-3">
            <div className="flex-shrink-0">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50"
                alt="Client"
                className="w-8 h-8 rounded-full border-2 border-white/50"
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium truncate">
                "Excellent service, produits de qualité !" - Marie D.
              </p>
              <p className="text-xs opacity-70">Il y a 2 heures</p>
            </div>
          </div>

          {/* CTA */}
          <button className="bg-black/20 hover:bg-black/30 text-black px-3 py-2 rounded-lg font-bold text-xs sm:text-sm transition-colors duration-200 flex items-center space-x-2 order-4 md:order-none">
            <span>Voir tous les avis</span>
            <ExternalLink size={14} />
          </button>
        </div>
      </div>

      {/* Animated dots */}
      <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 space-x-1">
        <div className="w-2 h-2 bg-black/20 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-black/20 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-black/20 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default GoogleReviewsBanner;