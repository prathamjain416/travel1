import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Cruise {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

const cruises: Cruise[] = [
  {
    id: 5,
    name: 'Cordelia Cruise India',
    location: 'Mumbai, Goa, Lakshadweep',
    image: 'https://images.unsplash.com/photo-1745268622063-c6f223994589?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience luxury cruising in Indian waters.'
  },
  {
    id: 6,
    name: 'CroisiEurope River Cruises',
    location: 'Rhine, Danube, Seine',
    image: 'https://images.unsplash.com/photo-1709154958618-8d6b27b598bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Explore Europe\'s most beautiful rivers in style.'
  },
  {
    id: 7,
    name: 'Holland America Line',
    location: 'Alaska, Caribbean, Europe',
    image: 'https://images.unsplash.com/photo-1678570357172-547e33c8edd2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Classic cruising with modern luxury.'
  },
  {
    id: 8,
    name: 'Norwegian Cruise Line',
    location: 'Caribbean, Mediterranean, Alaska',
    image: 'https://images.unsplash.com/photo-1559600088-01f7d8974913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Freedom and flexibility at sea.'
  },
  {
    id: 9,
    name: 'Regent Seven Seas Cruises',
    location: 'Worldwide Destinations',
    image: 'https://www.cruisemapper.com/images/ships/695-4043de256363.jpg',
    description: 'Ultra-luxury cruising experience.'
  },
  {
    id: 10,
    name: 'Resorts World Cruises',
    location: 'Asia Pacific',
    image: 'https://images.unsplash.com/photo-1590910705086-a5f1ffc25fc2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Asian hospitality at sea.'
  },
  {
    id: 11,
    name: 'Uniworld River Cruises',
    location: 'European Rivers',
    image: 'https://www.uniworld.com/dfsmedia/0abe5a49082f4fa787b315e25f74cead/11449-50061/resize/1920x0/options/keepaspectratio.jpg',
    description: 'Boutique river cruising.'
  },
  {
    id: 12,
    name: 'Disney Cruise Line',
    location: 'Caribbean, Mediterranean',
    image: 'https://images.unsplash.com/photo-1579467299604-55d903a6d06e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Magic at sea for the whole family.'
  },
  {
    id: 13,
    name: 'MSC Cruises',
    location: 'Mediterranean, Caribbean',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'European style cruising.'
  },
  {
    id: 14,
    name: 'Oceania Cruises',
    location: 'Worldwide Destinations',
    image: 'https://www.oceaniacruises.com/sites/default/files/hero-1024x480-ship-marina.jpg',
    description: 'Finest cuisine at sea.'
  },
  {
    id: 15,
    name: 'Silversea Cruises',
    location: 'Luxury Worldwide Voyages',
    image: 'https://cdn.sanity.io/images/rd0y3pad/production/5946a7b3eb1ac569f3603639c0962c97c1cd9230-4032x3024.jpg?rect=0,54,4032,2917&w=340&h=246&q=75&fit=max&auto=format',
    description: 'Ultra-luxury small ship cruising.'
  }
];

const Cruises: React.FC = () => {
  const handleWhatsAppClick = (cruise: Cruise) => {
    const message = `Hi, I'm interested in the ${cruise.name} cruise package.`;
    const whatsappUrl = `https://wa.me/+918866547382?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="cruises" className="py-20 px-4 sm:px-8 scroll-section bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">LUXURY CRUISES</h2>
        
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1280: { slidesPerView: 2, spaceBetween: 24 }
          }}
          className="pb-12"
        >
          {cruises.map((cruise) => (
            <SwiperSlide key={cruise.id}>
              <div className="group cursor-pointer relative">
                {/* Window Frame */}
                <div className="relative aspect-[3/2] rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-[12px] sm:border-[16px] border-white drop-shadow-white-2xl bg-white">
                  {/* Content Overlay - Moved to top */}
                  <div className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6 bg-gradient-to-b from-black/70 via-black/20 to-transparent">
                    <h3 className="text-xl sm:text-2xl font-light mb-2 text-white">{cruise.name}</h3>
                    <p className="text-sm text-white/80">{cruise.location}</p>
                  </div>
                  
                  {/* Image */}
                  <img
                    src={cruise.image}
                    alt={cruise.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Bottom Overlay for Button */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <button
                      onClick={() => handleWhatsAppClick(cruise)}
                      className="w-full bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base"
                    >
                      ENQUIRE NOW
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Cruises;
