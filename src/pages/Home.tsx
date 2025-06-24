import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Users } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import MenuItemCard from '../components/MenuItemCard';
import RecipeCard from '../components/RecipeCard';

const Home: React.FC = () => {
  const { state } = useApp();
  const featuredItems = state.menuItems.slice(0, 3);
  const featuredRecipes = state.recipes.slice(0, 2);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 to-red-600">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg)',
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">HungryOrWot</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Where culinary artistry meets exceptional taste
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Explore Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/recipes"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              View Recipes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose HungryOrWot?</h2>
            <p className="text-xl text-gray-600">Experience the difference that quality makes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">We source only the finest ingredients from trusted suppliers to ensure exceptional taste in every dish</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Fast Service</h3>
              <p className="text-gray-600">Quick preparation without compromising quality. Most orders ready in 15-20 minutes</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Chefs</h3>
              <p className="text-gray-600">Our experienced culinary team brings years of expertise and passion to every creation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Menu</h2>
            <p className="text-xl text-gray-600">Discover our most popular dishes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/menu"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
            >
              View Full Menu
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Chef's Recipes</h2>
            <p className="text-xl text-gray-600">Learn to cook like a professional</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          
          <div className="text-center">
            <Link
              to="/recipes"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
            >
              View All Recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of satisfied customers who trust Savory for their culinary needs
          </p>
          <Link
            to="/menu"
            className="bg-white text-orange-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center text-lg"
          >
            Order Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;