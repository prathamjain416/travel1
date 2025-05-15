import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { fixedDepartures } from './FixedDepartures';

const FixedDepartureDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const departure = fixedDepartures.find(d => d.id === Number(id));

  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('fixed-departures');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in the ${departure?.name} package scheduled for ${departure?.date}.`;
    const whatsappUrl = `https://wa.me/+918866547382?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!departure) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Fixed Departure not found</h2>
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
      <div className="container mx-auto max-w-7xl px-8 py-6">
        <button
          onClick={handleBackClick}
          className="text-gray-900 hover:text-gray-600 transition-all duration-300 flex items-center space-x-2 group"
        >
          <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Fixed Departures</span>
        </button>
      </div>
      <div className="container mx-auto max-w-7xl px-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={departure.image}
            alt={departure.name}
            className="w-full md:h-[70vh] aspect-[3/2] md:aspect-auto object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 text-white">
            <div className="container mx-auto">
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-light mb-1 sm:mb-2 md:mb-4">{departure.name}</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90">{departure.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-8 py-8 md:py-16">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-gray-600 mb-8">{departure.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Available Dates</h3>
              <p className="text-gray-600">{departure.date}</p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">Duration</h3>
              <p className="text-gray-600">{departure.duration}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">Pricing Details</h3>
            <p className="text-gray-500 text-sm italic mb-4">*Prices are dynamic and subject to change based on availability, season, and current market conditions.</p>
            {departure.price && (
              <p className="text-gray-800 mb-2">{departure.price}</p>
            )}
            {departure.priceDetails && (
              <div className="space-y-2">
                <p className="text-gray-800">Double/Triple Sharing: {departure.priceDetails.doubleTriple}</p>
                {departure.priceDetails.childWithBed && (
                  <p className="text-gray-800">Child with Bed: {departure.priceDetails.childWithBed}</p>
                )}
                {departure.priceDetails.childWithoutBed && (
                  <div>
                    <p className="text-gray-800 mb-1">Child without Bed:</p>
                    <ul className="list-disc list-inside pl-4">
                      {departure.priceDetails.childWithoutBed.map((price, index) => (
                        <li key={index} className="text-gray-600">{price}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {departure.priceDetails.singleSupplement && (
                  <p className="text-gray-800">Single Supplement: {departure.priceDetails.singleSupplement}</p>
                )}
              </div>
            )}
            {departure.priceIncludes && (
              <div className="mt-4">
                <p className="text-gray-800 font-medium mb-2">Price Includes:</p>
                <ul className="list-disc list-inside pl-4">
                  {departure.priceIncludes.map((item, index) => (
                    <li key={index} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="text-gray-600 mb-6 text-center">
            Chat with us on WhatsApp for detailed itinerary, pricing, and more information. 
            Our packages are fully customizable according to your interests and preferences.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded hover:bg-green-700 transition-all duration-300"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default FixedDepartureDetail;