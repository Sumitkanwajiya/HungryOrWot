import React from 'react';
import { Star, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Marco Rossi',
      role: 'Head Chef',
      image: 'https://images.pexels.com/photos/4253299/pexels-photo-4253299.jpeg',
      bio: '15+ years of culinary experience in Italian cuisine',
    },
    {
      name: 'Sarah Johnson',
      role: 'Sous Chef',
      image: 'https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg',
      bio: 'Specializes in fusion cuisine and innovative dishes',
    },
    {
      name: 'David Chen',
      role: 'Pastry Chef',
      image: 'https://images.pexels.com/photos/4253301/pexels-photo-4253301.jpeg',
      bio: 'Award-winning pastry chef with French training',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-6">About HungryOrWot</h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto">
            Where passion meets plate. We've been serving exceptional cuisine and creating memorable dining experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Welcome to HungryOrWot, your go-to destination where food, flavor, and innovation come together. Founded by Sumit Kanwajiya, HungryOrWot was created with a simple yet powerful vision — to bring people closer to great food through a modern, seamless, and delightful experience.
              </p>
              <p className="text-lg text-gray-600 mb-6">
              Whether you're discovering new recipes, exploring diverse cuisines, or ordering your favorite meal online, HungryOrWot makes every step vibrant and personal. More than just a platform, it's a journey built on passion, taste, and the joy of sharing something truly delicious.
              </p>
              <p className="text-lg text-gray-600">
               Our Mission is to make food discovery and dining effortless, enjoyable, and inspiring — connecting people through flavors, one bite at a time.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Restaurant interior"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">We never compromise on the quality of our ingredients or preparation methods.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">We believe in building strong relationships with our guests and local community.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in every dish we serve and every interaction we have.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tradition</h3>
              <p className="text-gray-600">We honor culinary traditions while embracing innovation and creativity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The talented chefs behind your favorite dishes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">We're honored to be recognized by our peers and community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Award className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Restaurant 2023</h3>
              <p className="text-gray-600">City Food & Wine Magazine</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">5-Star Rating</h3>
              <p className="text-gray-600">Local Dining Guide</p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">People's Choice</h3>
              <p className="text-gray-600">Annual Food Festival 2022</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;