import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
  visible: boolean;
  isDetailsPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled, visible, isDetailsPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experience' },
    { name: 'About', href: '#why-travel-aura' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (href: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${href}`;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getHeaderStyles = () => {
    if (isDetailsPage) {
      return {
        background: 'bg-white shadow-lg',
        transform: 'none',
        transition: 'none'
      };
    }
    
    return {
      background: scrolled ? 'bg-white shadow-lg' : 'bg-transparent',
      transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out'
    };
  };

  const headerStyles = getHeaderStyles();

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-40 ${headerStyles.background}`}
        style={{
          transform: headerStyles.transform,
          transition: headerStyles.transition
        }}
      >
        <nav className={`container mx-auto px-8 py-4 ${isDetailsPage ? 'flex justify-center' : 'flex justify-between'} items-center`}>
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/Yellow%20Text%20Transparent%20Background_Logo.PNG" 
              alt="Travel Aura" 
              className={`h-16 w-auto transition-all duration-300 ${
                scrolled || isDetailsPage ? 'brightness-50' : 'brightness-100'
              }`}
              width="64"
              height="64"
            />
          </Link>

          {!isDetailsPage && (
            <div className="hidden md:flex space-x-12">
              {menuItems.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleMenuItemClick(item.href)}
                  className={`hover-link text-sm tracking-wide transition-colors duration-300 ${
                    scrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {item.name.toUpperCase()}
                </button>
              ))}
            </div>
          )}

          {!isDetailsPage && (
            <button 
              className="md:hidden z-[100]"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-900" />
              ) : (
                <Menu className={`h-6 w-6 transition-colors duration-300 ${
                  scrolled ? 'text-gray-900' : 'text-white'
                }`} />
              )}
            </button>
          )}
        </nav>
      </header>

      {!isDetailsPage && (
        <div className={`fixed inset-0 z-[90] md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMenu}
          />
          
          <div 
            className={`absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col h-full">
              <div className="p-8">
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
                >
                  <X className="h-6 w-6 text-gray-900" />
                </button>
                <div className="flex flex-col space-y-6 mt-8">
                  {menuItems.map((item) => (
                    <button 
                      key={item.name} 
                      onClick={() => handleMenuItemClick(item.href)}
                      className="text-gray-900 text-lg hover:text-gray-600 transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;