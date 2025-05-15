import React from 'react';
import { Shield, Star, Clock, Heart } from 'lucide-react';

const WhyTravelAura: React.FC = () => {
  const reasons = [
    {
      icon: <Shield className="h-12 w-12 mb-6" />,
      title: 'Personalized Experiences',
      description: 'We prioritize creating unique, tailored journeys that match your individual preferences and travel style.'
    },
    {
      icon: <Star className="h-12 w-12 mb-6" />,
      title: 'Exclusive Travel Deals',
      description: 'Access to premium deals and unique opportunities through our strong global network of partners.'
    },
    {
      icon: <Clock className="h-12 w-12 mb-6" />,
      title: 'Seamless Planning',
      description: 'Our dedicated team ensures stress-free travel planning, whether for leisure, adventure, or business.'
    },
    {
      icon: <Heart className="h-12 w-12 mb-6" />,
      title: '24/7 Global Support',
      description: 'Round-the-clock assistance to make your travel dreams a reality with complete peace of mind.'
    }
  ];

  return (
    <section id="why-travel-aura" className="py-64 bg-gray-50 scroll-section">
      <div className="container mx-auto max-w-7xl px-8">
        <h2 className="text-4xl md:text-6xl font-light mb-8 text-center">WHY TRAVEL AURA</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-24">
          At Travel Aura, we believe that travel is more than just visiting a destination—it's about creating lasting memories, 
          immersing in diverse cultures, and experiencing the world in a way that resonates with you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-gray-900">
                {reason.icon}
              </div>
              <h3 className="text-xl font-light mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTravelAura;