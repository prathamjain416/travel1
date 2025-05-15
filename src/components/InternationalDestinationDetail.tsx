import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { internationalDestinations } from './InternationalDestinations';
import ContactPopup from './ContactPopup';

const InternationalDestinationDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const destination = internationalDestinations.find(d => d.id === Number(id));
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('international-destinations');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${destination?.name} destination package.`;
    const whatsappUrl = `https://wa.me/+918866547382?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Destination not found</h2>
          <button
            onClick={handleBackClick}
            className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-all duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleBackClick}
          className="text-gray-900 hover:text-gray-600 transition-all duration-300 flex items-center space-x-2 group"
        >
          <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to International Destinations</span>
        </button>
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
            <div className="container mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light mb-1 sm:mb-2 md:mb-4">{destination.name}</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90">{destination.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-base md:text-lg text-gray-600 mb-12 whitespace-pre-line">
            {destination.description}
          </div>

          <div className="max-w-xl mx-auto">
            <p className="text-gray-600 mb-6 sm:text-base text-[14px] text-center">
              Chat with us on WhatsApp for detailed itinerary, pricing, and more information.
              Our packages are fully customizable according to your interests and preferences.
            </p>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-green-700 transition-all duration-300 flex items-center justify-center"
            >
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default InternationalDestinationDetail;