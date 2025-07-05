import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t border-[#08F06C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="w-8 h-8 text-[#08F06C]" aria-hidden="true" />
              <h3 className="text-2xl font-bold">CBD Premium</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre spécialiste en produits CBD premium. Qualité française, 
              certifiée bio et testée en laboratoire.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                aria-label="Suivez-nous sur Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liens Rapides</h4>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Accueil
                  </a>
                </li>
                <li>
                  <a 
                    href="#products" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Nos Produits
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    À Propos
                  </a>
                </li>
                <li>
                  <a 
                    href="#education" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Éducation CBD
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Informations Légales</h4>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Mentions Légales
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Conditions Générales
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Politique de Confidentialité
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    Livraisons & Retours
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <address className="space-y-4 not-italic">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#08F06C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-300">
                  123 Rue de la Nature<br />
                  13000 Marseille, France
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#08F06C] flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+33491XXXXXX" 
                  className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  +33 4 91 XX XX XX
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#08F06C] flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:contact@cbdpremium.fr" 
                  className="text-gray-300 hover:text-[#08F06C] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#08F06C] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  contact@cbdpremium.fr
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#08F06C]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 CBD Premium. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm">Paiement sécurisé</span>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-3 py-1 rounded text-xs font-medium" aria-label="Visa accepté">VISA</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs font-medium" aria-label="Mastercard accepté">MC</div>
                <div className="bg-gray-800 px-3 py-1 rounded text-xs font-medium" aria-label="PayPal accepté">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Notice */}
      <div className="bg-gray-900 py-4 border-t border-[#08F06C]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            Les produits au CBD ne sont pas des médicaments et ne peuvent remplacer un traitement médical. 
            Consultez votre médecin avant utilisation. Interdit aux mineurs et femmes enceintes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;