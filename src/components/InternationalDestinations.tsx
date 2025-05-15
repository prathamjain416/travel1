import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

export const internationalDestinations: Destination[] = [
  {
    id: 1,
    name: 'Azerbaijan',
    location: 'Baku, Gabala, Sheki, Shahdag',
    image: 'https://images.unsplash.com/photo-1607207685852-51dd32267d26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXplcmJhaWphbnxlbnwwfDB8MHx8fDA%3D',
    description: `Welcome to Azerbaijan: Land of Fire

Azerbaijan, known as the "Land of Fire," is a captivating blend of ancient history and modern innovation. Located at the crossroads of Eastern Europe and Western Asia, this fascinating country offers visitors a unique mix of cultural experiences, natural wonders, and architectural marvels.

In Baku, the capital city, you'll find a stunning contrast of old and new - the UNESCO-listed Old City (Icheri Sheher) with its medieval walls standing alongside the ultra-modern Flame Towers. The city's contemporary architecture, including the iconic Heydar Aliyev Center, showcases Azerbaijan's forward-thinking vision.

Beyond Baku, discover the natural beauty of Gabala, with its lush forests and mountain landscapes perfect for outdoor adventures. In Sheki, explore the historic Khan's Palace, famous for its intricate decorations and stained-glass windows. The Shahdag Mountain Resort offers year-round activities, from skiing in winter to hiking in summer.`
  },
  {
    id: 2,
    name: 'Bali',
    location: 'Ubud, Kuta, Gili, Nusa, Penida, Canggu',
    image: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Bali: Island of the Gods

Bali, Indonesia's most famous island, is a paradise that offers an enchanting blend of natural beauty, rich culture, and spiritual atmosphere. This tropical haven attracts visitors from around the world with its diverse landscape of hills and mountains, rugged coastlines and sandy beaches, lush rice terraces, and volcanic hillsides.

In Ubud, the cultural heart of Bali, immerse yourself in traditional arts and crafts, visit ancient temples, and explore the famous Monkey Forest. The trendy beach areas of Kuta and Canggu offer world-class surfing, vibrant nightlife, and stunning sunsets.

The Gili Islands provide a perfect escape with their crystal-clear waters ideal for snorkeling and diving. Nusa Penida amazes visitors with its dramatic coastline and unique beaches, including the famous Kelingking Beach.`
  },
  {
    id: 3,
    name: 'Thailand',
    location: 'Bangkok, Pattaya, Phuket, Krabi, Koh Samui, Koh Phangan, Phi Phi Island',
    image: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VGhhaWxhbmR8ZW58MHwwfDB8fHww',
    description: `Welcome to Thailand: The Land of Smiles

Thailand captivates visitors with its perfect blend of traditional culture, modern cities, tropical beaches, and world-renowned cuisine. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers an incredible variety of experiences for every type of traveler.

Bangkok, the vibrant capital, amazes with its ornate temples, floating markets, and dynamic street life. The city's modern shopping centers and rooftop bars contrast beautifully with its historic temples and palaces.

The southern islands and beaches offer paradise-like settings. Phuket and Krabi feature dramatic limestone cliffs and crystal-clear waters perfect for swimming and snorkeling. The Phi Phi Islands present some of the world's most beautiful beaches and amazing diving opportunities.`
  },
  {
    id: 4,
    name: 'Vietnam',
    location: 'Hanoi, Da Nang, Halong Bay, Phu Quoc, Hoi An, Ho Chi Minh, Sapa',
    image: 'https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Vietnam: A Land of Natural Wonder and Rich Heritage

Vietnam is a country of breathtaking natural beauty and complex history, offering travelers an unforgettable Southeast Asian experience. From the terraced rice fields of the north to the bustling cities of the south, Vietnam presents a captivating mix of adventure, culture, and culinary excellence.

In Hanoi, the capital city, explore the charming Old Quarter, sample delicious street food, and visit historic sites like the Temple of Literature. Ha Long Bay, a UNESCO World Heritage site, amazes visitors with its emerald waters and thousands of towering limestone islands.

The ancient town of Hoi An enchants with its well-preserved architecture, colorful lanterns, and excellent tailoring services. Da Nang offers beautiful beaches and serves as a gateway to the stunning Marble Mountains.`
  },
  {
    id: 5,
    name: 'Kazakhstan',
    location: 'Almaty',
    image: 'https://images.unsplash.com/photo-1530480667809-b655d4dc3aaa?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Kazakhstan: Heart of Central Asia

Kazakhstan, the world's largest landlocked country, offers visitors an extraordinary journey through vast steppes, modern cities, and ancient Silk Road sites. This Central Asian nation combines natural wonders with rich cultural heritage and rapidly developing urban centers.

Almaty, the country's largest city and former capital, is a modern metropolis set against the stunning backdrop of the Tian Shan mountains. The city offers excellent shopping, dining, and cultural attractions, including the iconic Zenkov Cathedral and the Central State Museum.

Experience the city's vibrant cafe culture, visit the high-altitude Medeu skating rink, and take a cable car to Kok Tobe hill for panoramic views. The nearby mountains provide opportunities for skiing, hiking, and mountain biking.`
  },
  {
    id: 6,
    name: 'Europe',
    location: 'Spain, France, Portugal, Poland, Iceland, Netherlands, Finland, Ireland, Switzerland, Italy, Austria, Belgium, Greece, Germany, Turkey, Morocco, Egypt',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Europe: A Continent of Endless Discovery

Europe offers an incredible diversity of experiences, from ancient historical sites to cutting-edge modern culture, from Mediterranean beaches to Alpine peaks. This grand tour encompasses some of the continent's most captivating destinations.

Explore Spain's vibrant cities and coastal charm, France's romantic capital Paris and wine regions, and Portugal's historic ports and beautiful coastline. Journey through Poland's medieval cities and tragic history, and experience Iceland's otherworldly landscapes of fire and ice.

Discover the Netherlands' canal-lined cities and famous art museums, Finland's pristine wilderness and Northern Lights, and Ireland's green landscapes and friendly pubs. Switzerland amazes with its Alpine beauty and precision, while Italy captivates with its art, architecture, and cuisine.`
  },
  {
    id: 7,
    name: 'Australia',
    location: 'Sydney, Melbourne, Canberra, Bunbury',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Australia: Land Down Under

Australia, a continent of extraordinary contrasts, offers visitors an unparalleled adventure combining vibrant cities, unique wildlife, and stunning natural wonders. From the iconic Sydney Opera House to the vast outback, Australia presents endless opportunities for exploration and discovery.

Sydney, the country's largest city, dazzles with its harbor-side location, famous beaches like Bondi, and world-class dining and entertainment. The Sydney Harbour Bridge and Opera House create one of the world's most recognizable cityscapes.

Melbourne, known for its cultural scene, offers hidden laneways filled with cafes and street art, beautiful Victorian architecture, and a packed calendar of sporting events. The city's food scene and coffee culture are internationally renowned.`
  },
  {
    id: 8,
    name: 'Bhutan',
    location: 'Thimphu, Paro, Punakha, Bumthang',
    image: 'https://images.unsplash.com/photo-1608659377506-3b4fec4f7634?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Bhutan: The Last Shangri-La

Bhutan, the Land of the Thunder Dragon, is a unique Himalayan kingdom where ancient traditions blend seamlessly with progressive values. This mystical country, known for its philosophy of Gross National Happiness, offers visitors an authentic glimpse into a living Buddhist culture.

Thimphu, the world's only capital city without traffic lights, combines modern development with traditional architecture. Visit the massive Tashichho Dzong, the Giant Buddha statue, and experience the vibrant Weekend Market.

In Paro, hike to the iconic Tiger's Nest Monastery (Taktsang), clinging dramatically to a cliff face. The valley also houses the National Museum and numerous ancient temples.`
  },
  {
    id: 9,
    name: 'Oman',
    location: 'Muscat, Nizwa, Salalah, Sur, Sohar, Khasab',
    image: 'https://images.unsplash.com/photo-1585685629537-0a67b4303867?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Oman: The Jewel of Arabia

Oman, with its rich heritage and stunning landscapes, offers visitors an authentic Arabian experience combining traditional culture with modern comfort. From ancient forts to pristine coastlines, Oman presents a unique blend of history and natural beauty.

Muscat, the capital city, impresses with its blend of traditional and modern architecture. Visit the magnificent Sultan Qaboos Grand Mosque, explore the historic Muttrah Souq, and stroll along the picturesque Corniche.

Nizwa, the ancient capital, is famous for its 17th-century fort and traditional souk, especially known for silver jewelry. The surrounding region offers dramatic mountain scenery and ancient villages.`
  },
  {
    id: 10,
    name: 'Sri Lanka',
    location: 'Colombo, Sigiriya & Dambulla, Kandy, Bentota & Negombo',
    image: 'https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Sri Lanka: Pearl of the Indian Ocean

Sri Lanka, an island nation of incredible diversity, offers visitors a rich tapestry of experiences from ancient cities and temple ruins to tropical beaches and lush tea plantations. This compact country packs an extraordinary variety of attractions into its modest size.

Colombo, the commercial capital, is a vibrant city where colonial architecture meets modern development. Experience the bustling markets, visit historic temples, and enjoy the city's emerging food scene.

The Cultural Triangle, including Sigiriya and Dambulla, showcases Sri Lanka's ancient civilization. Climb the iconic Sigiriya Rock Fortress, a UNESCO World Heritage site, and explore the magnificent cave temples of Dambulla.`
  },
  {
    id: 11,
    name: 'New Zealand',
    location: 'Auckland, Queenstown, Christchurch, Wellington',
    image: 'https://plus.unsplash.com/premium_photo-1661964091508-b77d484a3003?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to New Zealand: Land of the Long White Cloud

New Zealand is a country of breathtaking landscapes, rich Maori culture, and endless adventure opportunities. From the subtropical north to the alpine south, this remarkable country offers diverse experiences for every traveler.

Auckland, the "City of Sails," combines urban sophistication with natural beauty. Queenstown, the adventure capital, offers year-round activities from skiing to bungee jumping. Christchurch showcases resilience and innovation in its rebuild, while Wellington, the cultural capital, charms with its arts scene and culinary delights.

Experience the country's stunning fjords, pristine beaches, rolling vineyards, and majestic mountains. Whether you're seeking adrenaline-pumping adventures or peaceful nature encounters, New Zealand delivers unforgettable memories.`
  },
  {
    id: 12,
    name: 'Japan',
    location: 'Tokyo, Kyoto, Osaka, Nagoya, Hiroshima',
    image: 'https://images.unsplash.com/photo-1669682241284-cdb0c8a1b082?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Japan: Land of the Rising Sun

Japan is a fascinating blend of ancient traditions and cutting-edge modernity. This unique country offers visitors an incredible journey through time, from historic temples and traditional gardens to futuristic cities and technological marvels.

Tokyo, the dynamic capital, showcases Japan's innovative spirit with its neon-lit streets, high-tech gadgets, and trendy fashion districts. Kyoto, the cultural heart, preserves Japan's traditional side with its numerous temples, shrines, and geisha districts.

Osaka delights food lovers with its vibrant culinary scene, while Nagoya impresses with its industrial heritage and samurai history. Hiroshima stands as a symbol of peace and resilience, offering powerful historical insights and beautiful modern attractions.`
  },
  {
    id: 13,
    name: 'Singapore',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1552415274-73ad7198cb93?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Singapore: The Lion City

Singapore, a dynamic city-state where East meets West, offers visitors a unique blend of cultures, cuisines, and experiences. This modern metropolis combines efficient urban planning with lush green spaces, creating a perfect harmony of nature and development.

Explore iconic attractions like Marina Bay Sands, Gardens by the Bay, and Sentosa Island. Experience the rich cultural heritage in neighborhoods like Chinatown, Little India, and Kampong Glam. Indulge in world-famous street food at hawker centers and luxury dining at Michelin-starred restaurants.

From shopping on Orchard Road to exploring the Night Safari, Singapore offers endless entertainment options in a safe, clean, and efficient environment.`
  },
  {
    id: 14,
    name: 'Malaysia',
    location: 'Kuala Lumpur, Penang, Langkawi, Malacca, Borneo',
    image: 'https://images.unsplash.com/photo-1723383820442-8470664bdc19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Malaysia: Truly Asia

Malaysia offers a vibrant mix of cultures, cuisines, and landscapes. From modern cities to ancient rainforests, from highland retreats to tropical islands, Malaysia presents diverse experiences for every traveler.

Kuala Lumpur impresses with its iconic Petronas Towers and vibrant street life. Penang delights with its UNESCO-listed George Town and famous food scene. Langkawi offers pristine beaches and duty-free shopping, while Malacca preserves its rich colonial heritage.

Experience the unique wildlife of Borneo, explore tea plantations in the Cameron Highlands, and enjoy some of the world's best street food. Malaysia's warm hospitality and cultural diversity make it a must-visit destination.`
  },
  {
    id: 15,
    name: 'South Korea',
    location: 'Seoul, Busan, Jeju Island, Gyeongju',
    image: 'https://images.unsplash.com/photo-1641773861272-d2ce368924bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to South Korea: Land of Morning Calm

South Korea seamlessly blends ancient traditions with modern innovations. From bustling metropolises to serene temples, from K-pop culture to traditional hanok villages, South Korea offers a fascinating journey through time.

Seoul, the dynamic capital, features ancient palaces alongside modern shopping districts and trendy neighborhoods. Busan attracts with its beaches, seafood markets, and temple complexes. Jeju Island charms with its volcanic landscapes and unique culture.

Experience Korean temple stays, indulge in Korean BBQ and street food, explore traditional markets, and immerse yourself in the exciting world of K-culture.`
  },
  {
    id: 16,
    name: 'Dubai',
    location: 'Dubai, Abu Dhabi, Sharjah',
    image: 'https://images.unsplash.com/photo-1694834394112-efef3fbb26f2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Dubai: City of Gold

Dubai, a city of superlatives, represents the perfect blend of traditional Arabian culture and ultra-modern development. This dynamic emirate offers visitors an unforgettable experience of luxury, adventure, and cultural discovery.

Marvel at architectural wonders like the Burj Khalifa and Palm Jumeirah, experience traditional souks and desert safaris, and enjoy world-class shopping at enormous malls. Visit the Dubai Museum for insights into the city's remarkable transformation from a fishing village to a global metropolis.

Whether you're seeking adventure at water parks, relaxation at luxury resorts, or cultural experiences in the old town, Dubai promises extraordinary memories.`
  },
  {
    id: 17,
    name: 'United Kingdom',
    location: 'London, Edinburgh, Manchester, Liverpool, Bath',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to the United Kingdom: A Royal Adventure

The United Kingdom offers a rich tapestry of history, culture, and modern innovation. From royal palaces to rolling countryside, from ancient castles to vibrant cities, the UK provides diverse experiences for every visitor.

London, the historic capital, combines royal heritage with contemporary culture. Edinburgh charms with its medieval Old Town and Georgian New Town. Manchester and Liverpool showcase industrial heritage and popular culture, while Bath impresses with its Roman and Georgian architecture.

Experience afternoon tea, explore world-class museums, visit historic universities, and discover the landscapes that inspired countless writers and artists.`
  },
  {
    id: 18,
    name: 'Maldives',
    location: 'Male, Ari Atoll, Baa Atoll',
    image: 'https://images.unsplash.com/photo-1647729007898-a0054af34084?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to the Maldives: Paradise on Earth

The Maldives, an archipelago of 26 natural atolls, offers the ultimate tropical getaway. This island nation is renowned for its pristine beaches, crystal-clear waters, and luxury resorts, each sitting on its own private island.

Experience world-class snorkeling and diving among vibrant coral reefs, indulge in spa treatments, and stay in iconic overwater villas. Male, the capital, provides insights into local life and culture through its markets and museums.

Whether you're seeking a romantic honeymoon, a luxury escape, or an underwater adventure, the Maldives provides an unforgettable paradise experience.`
  },
  {
    id: 19,
    name: 'Hong Kong & Macau',
    location: 'Hong Kong Island, Kowloon, Macau Peninsula, Taipa',
    image: 'https://plus.unsplash.com/premium_photo-1661887292499-cbaefdb169ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Hong Kong & Macau: Where East Meets West

Hong Kong and Macau offer unique blends of Chinese and European influences, creating distinctive cultural experiences. These special administrative regions combine ultra-modern city life with traditional Chinese heritage.

Hong Kong impresses with its dramatic skyline, efficient transportation, and diverse experiences from high-end shopping to local markets. Visit Victoria Peak for panoramic views, explore traditional temples, and enjoy world-class dining.

Macau, known as the "Las Vegas of Asia," offers more than just gaming. Explore UNESCO World Heritage sites, taste unique Macanese cuisine, and experience the perfect blend of Portuguese and Chinese cultures.`
  },
  {
    id: 20,
    name: 'Northern Africa',
    location: 'Egypt, Morocco, Tunisia, Algeria',
    image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Northern Africa: Where Ancient Meets Modern

Northern Africa is a region of extraordinary historical depth and cultural richness, where ancient civilizations have left their mark on modern societies. This fascinating area encompasses the Mediterranean coastline and the Sahara Desert, offering visitors an incredible diversity of experiences.

In Egypt, explore the magnificent Pyramids of Giza, cruise along the timeless Nile River, and discover the treasures of ancient pharaohs in the Egyptian Museum. Morocco enchants with its colorful medinas, bustling souks, and the magical Sahara Desert experience. The ancient Roman ruins of Tunisia and the stunning coastal cities of Algeria add to the region's allure.

Experience the warm hospitality of the local people, savor the unique flavors of North African cuisine, and witness the seamless blend of traditional customs with contemporary life. From the bustling streets of Cairo to the serene desert oases, Northern Africa offers an unforgettable journey through time.`
  },
  {
    id: 21,
    name: 'West Africa',
    location: 'Nigeria, Ghana, Senegal, Ivory Coast',
    image: 'https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to West Africa: A Tapestry of Culture and Tradition

West Africa pulses with vibrant energy, rich cultural heritage, and dynamic contemporary life. This diverse region offers visitors an authentic African experience, from bustling modern cities to traditional villages, from pristine beaches to lush rainforests.

Nigeria, Africa's largest economy, showcases its cultural diversity through art, music, and fashion. Lagos, its commercial hub, is a center of innovation and creativity. Ghana welcomes visitors with its historic slave castles, colorful markets, and beautiful beaches. The country's rich cultural heritage is evident in its traditional festivals and ceremonies.

Senegal captivates with its colonial architecture, particularly in Saint-Louis, and the vibrant art scene of Dakar. The Ivory Coast combines modern urban life with traditional villages and stunning national parks.

Experience the legendary West African hospitality, immerse yourself in the region's rich musical traditions, and discover the birthplace of many African cultural movements. From traditional ceremonies to contemporary art galleries, West Africa offers a unique blend of experiences that will leave lasting impressions.`
  },
  {
    id: 22,
    name: 'East Africa',
    location: 'Kenya, Tanzania, Uganda, Rwanda, Ethiopia',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to East Africa: Wildlife and Natural Wonders

East Africa is a region of spectacular landscapes, incredible wildlife, and diverse cultures. From the endless savannas of the Serengeti to the snow-capped peak of Kilimanjaro, from pristine beaches to ancient historical sites, East Africa offers an unparalleled African adventure.

Kenya's Masai Mara and Tanzania's Serengeti provide the stage for the greatest wildlife show on Earth - the annual wildebeest migration. Uganda and Rwanda offer the rare opportunity to trek with mountain gorillas in their natural habitat. Ethiopia showcases its ancient Christian heritage and unique cultural traditions, including the rock-hewn churches of Lalibela.

The region's diverse peoples, including the Maasai, Samburu, and many others, maintain their traditional ways of life while embracing modernity. The Indian Ocean coastline offers pristine beaches and historic Swahili towns, while the interior features dramatic landscapes from the Great Rift Valley to volcanic mountains.

Whether you're on safari, climbing Kilimanjaro, or exploring historic sites, East Africa promises unforgettable experiences and encounters with some of Africa's most iconic wildlife and cultures.`
  },
  {
    id: 23,
    name: 'Southern Africa',
    location: 'South Africa, Namibia, Botswana, Zimbabwe, Mozambique',
    image: 'https://images.unsplash.com/photo-1591742708307-ce49d19450d4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Southern Africa: Adventure and Natural Beauty

Southern Africa offers an incredible diversity of experiences, from world-class safaris to vibrant cities, from desert landscapes to tropical coastlines. This region combines natural wonders with modern comforts, making it a perfect destination for all types of travelers.

South Africa captivates with its stunning Cape Town, world-renowned wine regions, and excellent game viewing in Kruger National Park. The country's rich history, diverse culture, and modern infrastructure make it a gateway to exploring the region.

Namibia amazes visitors with the world's oldest desert, the Namib, and its iconic red dunes at Sossusvlei. Botswana offers exclusive safari experiences in the Okavango Delta and Chobe National Park. Zimbabwe's Victoria Falls, one of the world's natural wonders, and its rich wildlife areas provide unforgettable experiences.

From luxury lodges to camping under the stars, from wildlife photography to adrenaline sports, Southern Africa offers adventures for every interest. The region's excellent infrastructure, combined with its natural wonders and cultural heritage, creates an perfect blend of comfort and excitement.`
  }
];

const InternationalDestinations: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreClick = (destinationId: number) => {
    window.scrollTo(0, 0);
    navigate(`/international-destination/${destinationId}`);
  };

  const handleViewAllPackages = () => {
    window.scrollTo(0, 0);
    navigate('/packages');
  };

  return (
    <section id="international-destinations" className="py-20 px-8 scroll-section bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">INTERNATIONAL DESTINATIONS</h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 24 }
          }}
          className="pb-12"
        >
          {internationalDestinations.map((destination) => (
            <SwiperSlide key={destination.id}>
              <div 
                className="group cursor-pointer h-full flex flex-col"
                onClick={() => handleExploreClick(destination.id)}
              >
                <div className="relative overflow-hidden mb-4 rounded-2xl">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full aspect-[16/12] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-light mb-2">{destination.name}</h3>
                  <p className="text-sm text-gray-500 mb-4 truncate">{destination.location}</p>
                  <button
                    className="w-full bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-all duration-300 mt-auto"
                  >
                    EXPLORE
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-center mt-12">
          <button
            onClick={handleViewAllPackages}
            className="bg-gray-900 text-white px-12 py-4 rounded hover:bg-gray-800 transition-all duration-300"
          >
            VIEW ALL PACKAGES
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternationalDestinations;