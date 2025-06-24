import React from 'react';
import { Plus, Star, Clock, Flame } from 'lucide-react';
import { MenuItem } from '../types';
import { useApp } from '../contexts/AppContext';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { dispatch } = useApp();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        menuItem: item,
        quantity: 1,
      },
    });
  };

  const renderSpicyLevel = () => {
    if (item.spicyLevel === 0) return null;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(item.spicyLevel)].map((_, i) => (
          <Flame key={i} className="h-4 w-4 text-red-500" />
        ))}
      </div>
    );
  };

  const renderDietaryTags = () => {
    const tags = [];
    if (item.isVegetarian) tags.push('Vegetarian');
    if (item.isVegan) tags.push('Vegan');
    if (item.isGlutenFree) tags.push('Gluten-Free');
    
    return tags.map((tag, index) => (
      <span
        key={index}
        className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"
      >
        {tag}
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
          <button
            onClick={handleAddToCart}
            className="text-orange-500 hover:text-orange-600 transition-colors"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <span className="text-2xl font-bold text-orange-500">${item.price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="text-sm text-gray-600">{item.rating}</span>
            <span className="text-sm text-gray-400">({item.reviews})</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">{item.cookingTime} min</span>
          </div>

          {renderSpicyLevel()}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {renderDietaryTags()}
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;