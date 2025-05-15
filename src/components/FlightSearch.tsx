import React, { useState } from 'react';

interface FlightSearchForm {
  origin: string;
  destination: string;
  date: string;
  passengers: number;
}

const FlightSearch: React.FC = () => {
  const [formData, setFormData] = useState<FlightSearchForm>({
    origin: '',
    destination: '',
    date: '',
    passengers: 1
  });

  const [errors, setErrors] = useState<Partial<FlightSearchForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FlightSearchForm> = {};

    if (!formData.origin) {
      newErrors.origin = 'Please enter origin airport';
    }

    if (!formData.destination) {
      newErrors.destination = 'Please enter destination airport';
    } else if (formData.origin.toLowerCase() === formData.destination.toLowerCase()) {
      newErrors.destination = 'Origin and destination cannot be the same';
    }

    if (!formData.date) {
      newErrors.date = 'Please select travel date';
    }

    if (!formData.passengers || formData.passengers < 1) {
      newErrors.passengers = 'Please select at least 1 passenger';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsAppClick = () => {
    if (validateForm()) {
      const message = `Hi, I'm interested in booking a flight from ${formData.origin} to ${formData.destination} on ${formData.date} for ${formData.passengers} passenger(s).`;
      const whatsappUrl = `https://wa.me/+918866547382?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FlightSearchForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <section id="flight-search" className="py-32 bg-gray-50 px-8 scroll-section">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-light mb-12 text-center">FLIGHT BOOKINGS</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Let our travel experts help you find the best flight deals for your journey.
          Fill in your requirements and connect with us on WhatsApp for personalized assistance.
        </p>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-2">
                Origin <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="origin"
                name="origin"
                value={formData.origin}
                onChange={handleInputChange}
                placeholder="Enter city or airport"
                className={`w-full px-4 py-3 border ${errors.origin ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              />
              {errors.origin && (
                <p className="text-red-500 text-sm mt-1">{errors.origin}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                Destination <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="Enter city or airport"
                className={`w-full px-4 py-3 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              />
              {errors.destination && (
                <p className="text-red-500 text-sm mt-1">{errors.destination}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                Departure Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className={`w-full px-4 py-3 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-2">
                Passengers <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                min="1"
                max="9"
                className={`w-full px-4 py-3 border ${errors.passengers ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
              />
              {errors.passengers && (
                <p className="text-red-500 text-sm mt-1">{errors.passengers}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-600 text-white px-8 py-4 rounded hover:bg-green-700 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FlightSearch;