import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Star, ChefHat, Flame } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useApp();
  
  const recipe = state.recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recipe Not Found</h2>
          <Link
            to="/recipes"
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/recipes"
          className="inline-flex items-center text-orange-500 hover:text-orange-600 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Recipes
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
              <div className="p-8 text-white">
                <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
                <p className="text-xl opacity-90">{recipe.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Recipe Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">
                  {recipe.prepTime + recipe.cookTime} minutes total
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">{recipe.servings} servings</span>
              </div>

              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500 fill-current" />
                <span className="text-gray-600">{recipe.rating} ({recipe.reviews} reviews)</span>
              </div>

              <div className="flex items-center space-x-2">
                <ChefHat className="h-5 w-5 text-orange-500" />
                <span className="text-gray-600">Chef {recipe.chef}</span>
              </div>

              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
            </div>

            {/* Time Breakdown */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-1">Prep Time</h3>
                <p className="text-orange-600">{recipe.prepTime} minutes</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-orange-800 mb-1">Cook Time</h3>
                <p className="text-orange-600">{recipe.cookTime} minutes</p>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Ingredients */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">
                        <strong>{ingredient.amount}</strong> {ingredient.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 text-white rounded-full text-sm font-semibold mr-3 flex-shrink-0">
                        {index + 1}
                      </span>
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Chef's Tips */}
            <div className="mt-12 bg-orange-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-orange-800 mb-3">Chef's Tips</h3>
              <p className="text-orange-700">
                For best results, ensure all ingredients are at room temperature before starting. 
                Don't rush the cooking process - good food takes time! Taste as you go and adjust 
                seasonings according to your preference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;