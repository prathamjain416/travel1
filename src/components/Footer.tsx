import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 md:py-20 bg-gray-900 text-white">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:mb-16 mb-10">
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <img 
src="https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/Yellow Text Transparent Background_Logo.PNG" 
                alt="Travel Aura Logo" 
                className="h-12 w-auto brightness-100"
              />
            </div>
            <p className="text-gray-400">
              Crafting unforgettable travel experiences for the discerning traveler.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-8 tracking-wide">CONTACT</h4>
            <p className="text-gray-400 mb-4">info6.travelaura@gmail.com</p>
            <p className="text-gray-400">+91 8866543282</p>
            <p className="text-gray-400">+91 8469315289</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-8 tracking-wide">FOLLOW US</h4>
            <div className="space-y-4">
              <a href="https://www.instagram.com//travel.aura_/" className="text-gray-400 hover:text-white block hover-link">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white block hover-link">Facebook</a>
              <a href="https://www.youtube.com/@travelaura-06" className="text-gray-400 hover:text-white block hover-link">Youtube</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-8 tracking-wide">NEWSLETTER</h4>
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </div>
        </div>
        <div className="flex justify-between md:flex-row flex-col text-center text-gray-400 text-sm">
          <p>© 2024 Travel Aura. All rights reserved.</p><br></br>
          <p classname="text-sm">Design and developed by Pratham Jain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
