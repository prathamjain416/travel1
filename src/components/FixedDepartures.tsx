import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export interface FixedDeparture {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
  shortDescription: string;
  date: string;
  duration: string;
  price: string;
  priceIncludes?: string[];
  priceDetails?: {
    doubleTriple?: string;
    childWithBed?: string;
    childWithoutBed?: string[];
    singleSupplement?: string;
  };
}

export const fixedDepartures: FixedDeparture[] = [
  {
    id: 1,
    name: 'WONDERS OF MINI – EUROPE',
    location: 'France, Belgium, Netherlands, Germany, Switzerland',
    image: 'https://images.unsplash.com/photo-1563387852576-964bc31b73af?q=80&w=2107&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the best of Mini Europe with this carefully curated 8-night journey through five beautiful countries. From the romantic streets of Paris to the scenic Swiss Alps, this tour offers a perfect blend of history, culture, and natural beauty.',
    shortDescription: 'A perfect 8-night journey through the heart of Europe.',
    date: 'June 3, 10, 17, 24, 2025',
    duration: '8 Nights / 9 Days',
    price: '₹2,20,000 per person',
    priceIncludes: [
      'Visa',
      'Flights',
      'Insurance',
      'Breakfast and dinner'
    ]
  },
  {
    id: 2,
    name: 'WONDERS OF EUROPE',
    location: 'France, Belgium, Netherlands, Germany, Switzerland, Austria, Italy, Vatican',
    image: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?auto=format&fit=crop&q=80&w=2000',
    description: 'Embark on a grand European adventure spanning 12 nights across eight magnificent countries. From the art capitals to ancient ruins, experience the diverse cultures and stunning landscapes of Europe.',
    shortDescription: 'A comprehensive 12-night European journey.',
    date: 'June 4, 11, 18, 25, 2025',
    duration: '12 Nights / 13 Days',
    price: '₹2,85,000 per person',
    priceIncludes: [
      'Visa',
      'Flights',
      'Insurance',
      'Breakfast, lunch and dinner'
    ]
  },
  {
    id: 3,
    name: 'UK: LONDON SCOTLAND IRELAND PACKAGE',
    location: 'United Kingdom, Scotland, Ireland',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000',
    description: 'Discover the magic of the British Isles with this comprehensive 10-night tour. Experience the royal heritage of London, the dramatic landscapes of Scotland, and the warm hospitality of Ireland.',
    shortDescription: 'Experience the best of British Isles in 10 nights.',
    date: 'July 21, August 3, 18, October 17, 2025',
    duration: '10 Nights / 11 Days',
    priceDetails: {
      doubleTriple: '₹2,15,000',
      childWithBed: '₹1,90,000',
      childWithoutBed: ['₹70,000 (0-1.99 years)']
    }
  },
  {
    id: 4,
    name: 'MESMERIZING EUROPE',
    location: 'Multiple European Countries',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000',
    description: 'An extensive 15-night journey through the most mesmerizing destinations in Europe. Perfect for those who want to experience Europe in depth.',
    shortDescription: 'A comprehensive 15-night European exploration.',
    date: 'June 8, 13, July 1, 6, 24, 29, August 13, 21, September 5, 15, October 16, 21, December 21, 2025',
    duration: '15 Nights / 16 Days',
    priceDetails: {
      doubleTriple: '₹2,60,000',
      childWithBed: '₹1,50,000 (5-10 years)',
      childWithoutBed: [
        '₹1,05,000 (5-10 years)',
        '₹60,000 (2-5 years)',
        '₹35,000 (0-2 years)'
      ],
      singleSupplement: '₹70,000'
    }
  },
  {
    id: 5,
    name: 'WONDERS OF EUROPEAN DELIGHT',
    location: 'France, Netherlands, Belgium, Germany, Switzerland, Liechtenstein, Austria, Italy, Vatican',
    image: 'https://images.unsplash.com/photo-1699424495026-0a9358f0777d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the delights of Europe through this carefully crafted journey across nine countries. From cultural highlights to natural wonders, this tour has it all.',
    shortDescription: 'A delightful European journey across nine countries.',
    date: 'June 14, 30, August 5, 2025',
    duration: '15 Nights / 16 Days',
    price: '₹3,50,000 per person'
  },
  {
    id: 6,
    name: 'CHERRY BLOSSOM JAPAN',
    location: 'Osaka, Nagoya, Tokyo',
    image: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the magical cherry blossom season in Japan with this specially curated tour package. From the historic streets of Osaka to the modern marvels of Tokyo.',
    shortDescription: 'Experience Japan during the beautiful cherry blossom season.',
    date: 'September 24, October 18, 24, 2025',
    duration: '8 Nights / 9 Days',
    price: '₹1,95,000 per person'
  }
];

const FixedDepartures: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreClick = (departureId: number) => {
    window.scrollTo(0, 0);
    navigate(`/fixed-departure/${departureId}`);
  };

  return (
    <section id="fixed-departures" className="py-20 px-8 scroll-section">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">FIXED DEPARTURES</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 }
          }}
          className="pb-12"
        >
          {fixedDepartures.map((departure) => (
            <SwiperSlide key={departure.id}>
              <div 
                className="group cursor-pointer relative"
                onClick={() => handleExploreClick(departure.id)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[16/12]">
                  <img
                    src={departure.image}
                    alt={departure.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-light mb-2 text-white">{departure.name}</h3>
                    <p className="text-sm text-white/80">{departure.location}</p>
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

export default FixedDepartures;