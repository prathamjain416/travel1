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
    name: 'EUROPEAN DELIGHT WITH KITCHEN CARAVAN',
    location: 'Netherlands, Germany, Switzerland, Austria, Italy, Vatican, France',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2000',
    description: 'Experience the ultimate European journey with our signature Kitchen Caravan service. Travel across Europe\'s most iconic destinations with the warmth of Maharaj-cooked Indian meals, specially curated for Veg & Jain travelers. This comprehensive 15-night tour covers 7 countries, featuring visits to the Eiffel Tower, Seine Cruise, Night Illumination in Paris, Frankfurt City Stopover in Germany, Jungfraujoch Top of Europe in Switzerland, Innsbruck & Swarovski Crystal World in Austria, and the Colosseum, Vatican City, and Trevi Fountain in Rome.',
    shortDescription: 'A journey of flavours & sights across 7 European countries with Kitchen Caravan.',
    date: 'April 15, May 02, 05, 08, 18, 28, June 05, 22, July 06, 24, August 05, 23, 2026',
    duration: '15 Nights / 16 Days',
    priceDetails: {
      doubleTriple: '₹3,60,000',
      childWithBed: '₹3,00,000 (Per child below 12 years with bed sharing parents room)',
      childWithoutBed: ['₹2,35,000 (Per child below 06 years without bed sharing parents room)']
    },
    priceIncludes: [
      'Return Flights',
      'Visa + Insurance',
      '3 & 4-Star Hotels',
      'AC Luxury Coach',
      'Hindi/English Tour Manager',
      'Signature Indian Meals by Kitchen Caravan',
      'Maharaj-cooked Indian Veg & Jain Meals',
      'Breakfast + Masala Tea',
      'Chaat, Punjabi, Indo-Chinese, Kathiyawadi, South Indian specialties',
      'Packed Meals for Disneyland Paris & Jungfraujoch',
      'Eiffel Tower visit',
      'Seine Cruise',
      'Paris Night Illumination Tour',
      'Frankfurt City Stopover',
      'Jungfraujoch Top of Europe',
      'Innsbruck & Swarovski Crystal World',
      'Rome Colosseum, Vatican City, Trevi Fountain visits'
    ]
  },
  {
    id: 3,
    name: 'UK: LONDON SCOTLAND IRELAND PACKAGE',
    location: 'United Kingdom, Scotland, Ireland',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2000',
    description: 'Discover the magic of the British Isles with this comprehensive 10-night tour. Experience the royal heritage of London, the dramatic landscapes of Scotland, and the warm hospitality of Ireland.',
    shortDescription: 'Experience the best of British Isles in 10 nights.',
    date: 'October 17, 2025',
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
    date: 'October 16, 21, December 21, 2025',
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
    id: 6,
    name: 'CHERRY BLOSSOM JAPAN',
    location: 'Tokyo, Osaka, Hamamatsu, Nagoya',
    image: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the magical cherry blossom season in Japan with this specially curated tour package. From the historic streets of Osaka to the modern marvels of Tokyo, including visits to iconic temples, bamboo forests, and scenic gardens.',
    shortDescription: 'Experience Japan during the beautiful cherry blossom season.',
    date: 'September 20, 27, October 18, 24, 2025',
    duration: '8 Nights / 9 Days',
    priceDetails: {
      doubleTriple: '₹1,90,000',
      childWithBed: '₹1,75,000 (6-10 years)',
      childWithoutBed: [
        '₹1,50,000 (2-5 years)',
        '₹60,000 (0-2 years)'
      ],
      singleSupplement: '₹60,000'
    },
    priceIncludes: [
      'Tourist Visa Assistance',
      '3-Star Hotels in Tokyo, Osaka, Hamamatsu and Nagoya (8 nights)',
      'Japanese/Continental Breakfast daily',
      '7 Dinners and 6 Lunches in Indian restaurant',
      'All internal transfers on Private Basis',
      'Miyajima Ferry',
      'Kinkakuji Temple',
      'Arashiyama Bamboo Forest',
      'Nara Deer Park',
      'Nagoya Flower Garden',
      'Osaka Umeda Sky',
      'Tokyo TeamLab Planets',
      'Hakone Ropeway',
      'Ashi Cruise',
      'Bullet Train tickets: Hiroshima to Osaka (return)',
      'Airport transfers at fixed time (Narita Airport pick-up at 3pm and 7pm, KIX airport drop at 7am)'
    ]
  },
  {
    id: 7,
    name: 'BALI GROUP DEPARTURE',
    location: 'Kuta, Ubud, Nusa Penida, Uluwatu',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the magic of Bali with this comprehensive 8-day group departure. From thrilling watersports in Kuta to cultural immersion in Ubud, this package includes adventure activities, temple visits, and scenic tours. Enjoy ATV rides, white water rafting, Nusa Penida island tour, and the famous Bali swing experience.',
    shortDescription: 'A complete 8-day Bali adventure with all meals and activities included.',
    date: 'October 23 - 30, 2025',
    duration: '7 Nights / 8 Days',
    price: '₹47,500 per person',
    priceIncludes: [
      'Welcome Garland on Arrival',
      'Daily Breakfast at Hotel',
      '6 Indian Dinners (Veg | 3 Main Course)',
      '4 Indian Lunches (Veg | 3 Main Course)',
      '2 Local Snack Lunches',
      'Daily Water Bottle',
      'Private Transfers with English Speaking Driver & Guide',
      'All Tours on Private Basis',
      'Watersports (Jet Ski, Parasailing, Banana Boat)',
      'Uluwatu Temple & Kecak Dance',
      'Nusa Penida Island (West) Tour',
      'Bedugul Temple, Handara Gate & Tanah Lot Temple',
      'ATV Ride (Couple) + White Water Rafting',
      'Kintamani Volcano + Ubud Tour',
      'Tegalalang Rice Terrace',
      'Tegenungan Waterfall',
      'Bali Desa Swing (Nest + Single Swing)'
    ]
  },
  {
    id: 8,
    name: 'BALI & GILLI - DIWALI SPECIAL',
    location: 'Kuta, Gili Islands, Ubud',
    image: 'https://images.unsplash.com/photo-1672128558055-5d511b8ba02b?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Experience the magic of Bali and the pristine beauty of Gili Islands during the festive Diwali season. This special 7-night package combines the cultural richness of Bali with the tropical paradise of Gili Islands. Enjoy thrilling water sports, explore stunning temples, witness breathtaking sunsets, and experience the famous Bali swing adventure.',
    shortDescription: 'A perfect Diwali getaway combining Bali\'s culture with Gili\'s pristine beaches.',
    date: 'October 23 & 25, 2025 (Ex Mumbai)',
    duration: '7 Nights / 8 Days',
    price: '₹88,999 per person',
    priceDetails: {
      doubleTriple: '₹88,999',
      singleSupplement: 'Alam Puisi or Danakha Villa (One Bedroom Pool Villa): ₹3,500 per person supplement'
    },
    priceIncludes: [
      'Return Air Ticket on Malaysia Airlines (Non-refundable)',
      '7 Nights Accommodation',
      'Kuta (3N) - Anathera Resort 4* Deluxe or Best Western Deluxe Terrace',
      'Gili (2N) - Ombak Sunset',
      'Ubud (2N) - Agung Resort 4* Deluxe Room',
      'Daily Breakfast at Hotel/Resort/Villa',
      'Meet & Greet with Welcome Garland',
      '5 Veg Dinners at Indian Restaurant',
      'Water Sports (Banana Boat, Jet Ski, Parasailing) + Uluwatu Temple',
      'Nusa Penida West Island Tour (Angel Billabong, Broken Beach, Kelingking & Crystal Beach)',
      'Kintamani Volcano + Alas Harum Swing (Single Swing & Nest)',
      'Alasan Adventures ATV (Couple)',
      'Return Speed Boat Transfer Bali-Gili-Bali (IDR 50,000 harbour tax on own)',
      'Daily Water Bottles',
      'English Speaking Driver Assistance',
      'All Tours & Transfers on Private Basis with Entrance Tickets'
    ]
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
