import React from 'react';
import { ChefHat, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">HungryOrWot</span>
            </div>
            <p className="text-gray-300 text-sm">
              Experience culinary excellence with our carefully crafted dishes made from the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="/menu" className="text-gray-300 hover:text-orange-500 transition-colors">Menu</a></li>
              <li><a href="/recipes" className="text-gray-300 hover:text-orange-500 transition-colors">Recipes</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-orange-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">+91 8542879866</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">sumitkanojiya113@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-300">Street no. 13342 Nepalgunj,Nepal</span>
              </li>
            </ul>
          </div>

          {/* Hours and Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours & Social</h3>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p>Fri-Sat: 11:00 AM - 11:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1HdYJSYrjT/" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/sumit.kanojiya.9843?igsh=MTJ3b3c1YmV6M2ljNw==" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 HungryOrWot Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;