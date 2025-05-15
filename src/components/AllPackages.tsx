import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search } from 'lucide-react';
import { destinations } from './Destinations';
import { internationalDestinations } from './InternationalDestinations';

type PackageType = 'all' | 'domestic' | 'international';

interface RequestFormData {
  email: string;
  destination: string;
}

const AllPackages: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [packageType, setPackageType] = useState<PackageType>('domestic');
  const [formData, setFormData] = useState<RequestFormData>({
    email: '',
    destination: ''
  });

  // Create a Set of unique IDs to prevent duplicates
  const uniqueDestinations = useMemo(() => {
    const seen = new Set();
    return [...destinations, ...internationalDestinations].filter(dest => {
      if (seen.has(dest.id)) {
        return false;
      }
      seen.add(dest.id);
      return true;
    });
  }, []);

  const filteredDestinations = useMemo(() => {
    let filtered = uniqueDestinations;

    // Filter by type
    if (packageType === 'domestic') {
      filtered = destinations;
    } else if (packageType === 'international') {
      filtered = internationalDestinations;
    }

    // Only filter if search query has 3 or more characters
    if (searchQuery.length >= 3) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(query) ||
        dest.location.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, packageType, uniqueDestinations]);

  const handleExploreClick = (destinationId: number) => {
    window.scrollTo(0, 0);
    navigate(`/destination/${destinationId}`);
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const message = `Hi, I'm interested in a package for ${formData.destination}. My email is ${formData.email}.`;
    const whatsappUrl = `https://wa.me/+919898989898?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleBackClick}
          className="text-gray-900 hover:text-gray-600 transition-all duration-300 flex items-center space-x-2 group mb-8 sm:mb-12"
        >
          <ArrowLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Home</span>
        </button>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-8 sm:mb-12">All Packages</h1>

        {/* Toggle Hint */}
        <div className="mb-4 text-gray-600 text-sm sm:text-base">
           {packageType === 'domestic' ? (
            <p>Looking for international trips? <span className="font-medium text-gray-900">Switch to International</span></p>
        ) : (
          <p>Looking for domestic trips? <span className="font-medium text-gray-900">Switch to Domestic</span></p>
          )}
        </div>


        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Search Bar */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 sm:gap-4 overflow-x-auto pb-2 sm:pb-0">
            {/* <button
              onClick={() => setPackageType('all')}
              className={`px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                packageType === 'all'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              All
            </button> */}
            <button
              onClick={() => setPackageType('domestic')}
              className={`px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                packageType === 'domestic'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              Domestic
            </button>
            <button
              onClick={() => setPackageType('international')}
              className={`px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                packageType === 'international'
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              International
            </button>
          </div>
        </div>

        {filteredDestinations.length === 0 ? (
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-light mb-6">Can't find what you're looking for?</h2>
            <p className="text-gray-600 mb-8">
              Let us know your desired destination, and we'll help you plan the perfect trip.
            </p>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Destination/Package
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  placeholder="Where would you like to go?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-all duration-300"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredDestinations.map((destination) => (
              <div key={destination.id} className="group cursor-pointer">
                <div className="relative overflow-hidden mb-4 rounded-2xl">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full aspect-[16/12] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2">{destination.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{destination.location}</p>
                  <button
                    onClick={() => handleExploreClick(destination.id)}
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-all duration-300"
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPackages;
