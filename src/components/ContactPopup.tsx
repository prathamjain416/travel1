import React, { useState } from 'react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. Please contact me regarding travel packages.\nPhone: ${formData.phone}\nEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/+918866547382?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        
        <h3 className="text-2xl font-light mb-6">Get Personalized Travel Plans</h3>
        <p className="text-gray-600 mb-6">
          Leave your details and our travel experts will get in touch with you to create your perfect itinerary.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-all duration-300"
          >
            Connect on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;