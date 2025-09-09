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

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Kashmir',
    location: 'Srinagar, Pahalgam, Gulmarg, Sonmarg',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Kashmir: Paradise on Earth

Kashmir, often called "Paradise on Earth," captivates visitors with its stunning landscapes and rich cultural heritage. Nestled in the Himalayas, this enchanting region boasts serene lakes like Dal Lake, lush meadows in Pahalgam, and snow-capped peaks in Gulmarg.

Experience the warmth of Kashmiri hospitality as you explore vibrant markets filled with exquisite handicrafts, and indulge in traditional cuisine, including the famous Wazwan feast. Whether you're seeking adventure through trekking and skiing or tranquility in its breathtaking natural beauty, Kashmir promises unforgettable memories.

Discover the magic of Kashmir with Travel Aura!`
  },
  {
    id: 2,
    name: 'Himachal Pradesh',
    location: 'Delhi, Amritsar, Shimla, Manali, Kasol, Jibhi, Bir',
    image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Himachal Pradesh: The Land of Majestic Mountains

Nestled in the western Himalayas, Himachal Pradesh is a breathtaking destination known for its stunning landscapes, serene valleys, and charming hill stations. From the pristine beauty of Manali and Dharamshala to the lush orchards of Shimla, this state offers a perfect escape for nature lovers and adventure enthusiasts alike.

Himachal Pradesh is rich in culture and tradition, featuring vibrant festivals, ancient temples, and exquisite handicrafts. Whether you're trekking through scenic trails, enjoying adventure sports, or simply relaxing in its picturesque surroundings, Himachal Pradesh promises an unforgettable experience.

Explore the serene beauty of Himachal Pradesh today!`
  },
  {
    id: 3,
    name: 'Uttarakhand',
    location: 'Delhi, Rishikesh, Haridwar, Mussoorie, Nainital, Auli, Chopta, Dehradun, Jim Corbett, Dalhousie',
    image: 'https://images.unsplash.com/photo-1588487838036-28303ea2f560?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Uttarakhand: The Land of Gods

Uttarakhand, often referred to as "Devbhumi" or the Land of Gods, is a stunning Indian state known for its majestic mountains, pristine rivers, and spiritual heritage. Home to revered pilgrimage sites like Haridwar, Rishikesh, and the Char Dham, it attracts thousands of visitors seeking peace and spirituality.

Beyond its sacred sites, Uttarakhand boasts picturesque hill stations such as Mussoorie and Nainital, where you can enjoy breathtaking views and refreshing air. Adventure seekers can indulge in trekking, rafting, and wildlife exploration in national parks like Jim Corbett and Nanda Devi.

Discover the divine beauty and adventure of Uttarakhand today!`
  },
  {
    id: 4,
    name: 'West Bengal',
    location: 'Sikkim, Darjeeling, Pelling, Gangtok, Siliguri',
    image: 'https://images.unsplash.com/photo-1694858897819-c3b2b01e1832?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to West Bengal: A Cultural Paradise

West Bengal, located in eastern India, is a vibrant state known for its rich history, diverse culture, and breathtaking landscapes. From the bustling metropolis of Kolkata, which serves as its capital, to the serene beauty of the Sundarbans mangrove forest and the majestic Himalayan foothills in Darjeeling, West Bengal offers a unique blend of urban and natural experiences.

Renowned for its contribution to art, literature, and music, West Bengal is home to iconic figures like Rabindranath Tagore and Satyajit Ray. The state is famous for its exquisite cuisine, colorful festivals, and traditions, including the Durga Puja, which draws thousands of visitors each year.

Whether you're exploring the tea gardens of Darjeeling, sailing through the Sundarbans, or savoring mouthwatering Bengali sweets, West Bengal promises a journey filled with culture and beauty.`
  },
  {
    id: 5,
    name: 'Maharashtra',
    location: 'Lonavala, Mahabaleshwar, Igatpuri, Panchgani, Lavasa',
    image: 'https://images.unsplash.com/photo-1629283151312-adcc22231788?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Maharashtra: Land of Infinite Possibilities

Maharashtra, a state that perfectly blends modernity with tradition, offers visitors an incredible array of experiences. From the misty hills of Mahabaleshwar to the pristine beaches of the Konkan coast, Maharashtra's diverse landscape provides a perfect backdrop for memorable adventures.

The hill stations of Lonavala, Mahabaleshwar, and Panchgani offer respite from the summer heat, while the planned city of Lavasa provides a unique European-style retreat. Igatpuri, known for its meditation centers and natural beauty, offers spiritual solace and scenic views.

Experience the rich cultural heritage, taste the diverse local cuisine, and explore the numerous forts that dot the landscape of this magnificent state.`
  },
  {
    id: 6,
    name: 'Goa',
    location: 'North & South',
    image: 'https://images.unsplash.com/photo-1652820330085-82a0c2b88d78?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Goa: The Pearl of the Orient

Goa, India's smallest state, is a paradise that perfectly blends Portuguese heritage with Indian culture. Known for its pristine beaches, vibrant nightlife, and historic architecture, Goa offers something for every type of traveler.

North Goa buzzes with energy, featuring popular beaches like Baga and Calangute, vibrant markets, and exciting water sports. South Goa, in contrast, offers a more serene experience with its pristine beaches, luxury resorts, and peaceful atmosphere.

Beyond the beaches, explore UNESCO World Heritage sites, colonial churches, spice plantations, and wildlife sanctuaries. Indulge in the famous Goan cuisine, featuring fresh seafood and unique Indo-Portuguese flavors.

Whether you're seeking adventure, relaxation, or cultural experiences, Goa's charm will captivate your heart.`
  },
  {
    id: 7,
    name: 'Kerala',
    location: 'Kochi, Munnar, Thekkady, Wayanad, Alleppey, Varkala',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Kerala: God's Own Country

Kerala, often referred to as "God's Own Country," is a tropical paradise located in the southwestern region of India. Renowned for its breathtaking landscapes, rich cultural heritage, and warm hospitality, Kerala is an enchanting destination for travelers seeking tranquility and adventure.

The state is famous for its lush greenery, backwaters, and beautiful beaches. The serene backwaters of Alleppey and Kumarakom, connected by a network of canals and lagoons, offer a unique experience, with houseboat cruises allowing visitors to explore the idyllic surroundings. The coastline features pristine beaches like Varkala, perfect for sunbathing, swimming, and enjoying water sports.

Kerala is also known for its diverse culture, influenced by centuries of various traditions, religions, and communities. The state boasts vibrant festivals, traditional dance forms like Kathakali and Mohiniyattam, and rich culinary delights, including its famous Kerala Sadya, a feast served on a banana leaf.`
  },
  {
    id: 8,
    name: 'South India',
    location: 'Bangalore, Ooty, Mysore, Coorg, Thiruvananthapuram, Kanyakumari',
    image: 'https://plus.unsplash.com/premium_photo-1697729606469-027395aadb6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to South India: A Tapestry of Culture and Nature

South India is a culturally rich and geographically diverse region, comprising the states of Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana. This region offers an incredible mix of ancient temples, colonial heritage, modern cities, and natural wonders.

From the tech hub of Bangalore to the colonial charm of Ooty, from the royal splendor of Mysore to the coffee plantations of Coorg, South India presents diverse experiences. The region's southern tip, Kanyakumari, offers the unique spectacle of watching the sun rise and set over three seas.

Experience the classical dance forms, traditional music, distinctive architecture, and renowned cuisine that make South India a cultural powerhouse. The region's tropical climate, abundant wildlife, and varied landscape from beaches to hill stations provide year-round opportunities for exploration and adventure.`
  },
  {
    id: 9,
    name: 'Gujarat',
    location: 'Kutch, Rann Utsav, Kevadia',
    image: 'https://images.unsplash.com/photo-1604216958967-ee0ec1dd9b64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Gujarat: The Land of Legends

Gujarat, located on India's western coast, is a state rich in history, culture, and natural wonders. From the vast white desert of Kutch to the world's tallest statue at Kevadia, Gujarat offers unique experiences that capture the imagination.

The Rann of Kutch, especially during the Rann Utsav, transforms into a magical landscape where the white salt desert meets the starlit sky. This festival celebrates the region's unique culture with folk performances, handicrafts, and adventure activities.

Kevadia, home to the Statue of Unity, has developed into a complete tourist destination offering river rafting, eco-tourism, tribal culture, and modern amenities. The state's rich textile traditions, distinctive cuisine, and vibrant festivals make it a cultural treasure trove.

Experience the warmth of Gujarati hospitality and discover the perfect blend of tradition and progress in this dynamic state.`
  },
  {
    id: 10,
    name: 'Rajasthan',
    location: 'Udaipur, Jaisalmer, Jodhpur, Jaipur, Ajmer, Pushkar',
    image: 'https://images.unsplash.com/photo-1638904998527-a451c1fbd1cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Rajasthan: The Land of Kings

Rajasthan, India's largest state, is a magnificent showcase of royal heritage and vibrant culture. From the golden sands of Jaisalmer to the blue city of Jodhpur, from the romantic lakes of Udaipur to the pink city of Jaipur, each destination tells a unique story.

The state's majestic forts and palaces stand as testimony to its rich history, while colorful festivals and fairs celebrate its living traditions. Ajmer's sacred shrine and Pushkar's holy lake add spiritual significance to your journey.

Experience the warmth of Rajasthani hospitality, savor the rich local cuisine, witness the intricate craftsmanship in textiles and jewelry, and immerse yourself in folk music and dance. Whether you're exploring ancient architecture, taking a desert safari, or shopping in bustling bazaars, Rajasthan offers unforgettable memories.`
  },
  {
    id: 11,
    name: 'Andaman & Nicobar',
    location: 'Port Blair, Havelock, Neil Island, Ross Island',
    image: 'https://images.unsplash.com/photo-1641715155993-592e4fb6b78e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Andaman & Nicobar: Paradise in the Bay of Bengal

The Andaman & Nicobar Islands offer an unparalleled tropical paradise experience with pristine beaches, crystal-clear waters, and rich marine life. This archipelago combines natural beauty with historical significance and adventure opportunities.

Port Blair, the capital, houses the historic Cellular Jail and other colonial remnants. Havelock Island, renowned for Radhanagar Beach, offers world-class snorkeling and diving experiences. Neil Island charms visitors with its serene beaches and laid-back atmosphere, while Ross Island showcases fascinating colonial ruins.

Whether you're seeking adventure in underwater exploration, relaxation on secluded beaches, or insights into history, the Andaman & Nicobar Islands provide an unforgettable escape.`
  },
  {
    id: 12,
    name: 'Pondicherry',
    location: 'Pondicherry, Auroville',
    image: 'https://images.unsplash.com/photo-1709744873177-714d7ab0fe02?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Pondicherry: A French Colonial Heritage

Pondicherry (Puducherry) is a charming union territory that beautifully blends French colonial heritage with Tamil culture. The French Quarter, with its yellow-walled colonial mansions, tree-lined boulevards, and Mediterranean-style cafes, transports visitors to a different era.

Auroville, the experimental township, offers spiritual enlightenment and sustainable living practices. The city's pristine beaches, historic churches, and vibrant markets create a unique atmosphere that attracts artists, spiritual seekers, and culture enthusiasts.

Experience the unique Indo-French architecture, savor fusion cuisine, explore spiritual centers, and enjoy the peaceful promenades along the Bay of Bengal.`
  },
  {
    id: 13,
    name: 'Meghalaya',
    location: 'Shillong, Cherrapunji, Dawki',
    image: 'https://images.unsplash.com/photo-1608884941702-37653a75a725?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Meghalaya: The Abode of Clouds

Meghalaya, with its rolling hills, cascading waterfalls, and living root bridges, is a nature lover's paradise. This northeastern state offers unique experiences that combine natural wonders with rich tribal culture.

Shillong, the capital, known as the "Scotland of the East," charms visitors with its colonial heritage and vibrant music scene. Cherrapunji, one of the wettest places on Earth, showcases spectacular waterfalls and unique living root bridges. Dawki's crystal-clear river and surrounding landscapes offer pristine natural beauty.

Experience the unique Khasi culture, explore mysterious caves, trek through lush forests, and witness the harmony between nature and human ingenuity in this enchanting state.`
  },
  {
    id: 14,
    name: 'Leh Ladakh',
    location: 'Leh, Nubra Valley, Pangong Lake, Zanskar',
    image: 'https://images.unsplash.com/photo-1653112122775-855a525a5846?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Leh Ladakh: The Land of High Passes

Leh Ladakh, a high-altitude desert in the Trans-Himalayan region, offers a unique landscape of stark beauty and Buddhist culture. This region's dramatic scenery includes snow-capped peaks, pristine lakes, and ancient monasteries.

The town of Leh combines medieval charm with modern amenities. Nubra Valley amazes visitors with its sand dunes and double-humped camels. Pangong Lake's changing colors and vast expanse create an otherworldly experience. The remote Zanskar region offers opportunities for adventure and cultural exploration.

Experience the unique Ladakhi culture, visit ancient Buddhist monasteries, enjoy adventure sports, and witness some of the world's highest motorable passes in this remarkable region.`
  },
  {
    id: 15,
    name: 'Spiti Valley',
    location: 'Kaza, Tabo, Ki, Dhankar',
    image: 'https://images.unsplash.com/photo-1715750108749-0c0935a1bbd7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Spiti Valley: The Middle Land

Spiti Valley, a cold desert mountain valley in Himachal Pradesh, offers a fascinating blend of Buddhist culture and dramatic landscapes. This remote region, often called "Little Tibet," provides an authentic experience of high-altitude desert life.

Kaza, the administrative center, serves as a base for exploring ancient monasteries and villages. The Tabo Monastery, over a millennium old, preserves precious Buddhist art. Ki Monastery, perched dramatically on a hill, offers stunning views and spiritual solace. Dhankar, the former capital, combines historical significance with breathtaking vistas.

Experience the unique culture of this high-altitude desert, visit ancient monasteries, interact with friendly locals, and witness the raw beauty of the Himalayas in this extraordinary valley.`
  },
  {
    id: 16,
    name: 'Kedarnath',
    location: 'Kedarnath',
    image: 'https://images.unsplash.com/photo-1629981352504-b7f5210501c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Kedarnath: A Sacred Himalayan Pilgrimage
Kedarnath, one of the four sacred shrines of the Char Dham pilgrimage, is nestled in the majestic Garhwal Himalayas of Uttarakhand. Renowned for its stunning natural beauty and spiritual significance, Kedarnath is dedicated to Lord Shiva and attracts thousands of devotees each year.

The centerpiece of this holy town is the Kedarnath Temple, an ancient structure believed to have been built in the 8th century. Surrounded by towering peaks and the serene Mandakini River, the temple is a blend of spirituality and breathtaking scenery, making it a perfect destination for both pilgrims and trekkers.

Accessible mainly by a scenic trek from Gaurikund, Kedarnath offers an unforgettable experience of devotion and nature's splendor.`
  },
  {
    id: 17,
    name: 'Jawai Leopard Safari',
    location: 'Jawai, Rajasthan',
    image: 'https://images.unsplash.com/photo-1610331968468-fdc0f47dfdbb?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: `Welcome to Jawai Leopard Safari: India's Leopard Capital

Jawai, located in the Pali district of Rajasthan, is renowned as one of India's premier leopard spotting destinations. This unique landscape of granite hills, seasonal rivers, and rural villages offers an extraordinary wildlife experience where leopards coexist peacefully with local communities.

The Jawai region is home to one of India's highest concentrations of leopards, making it a paradise for wildlife enthusiasts and photographers. Unlike other wildlife destinations, the leopards here are remarkably comfortable around humans, offering excellent viewing opportunities throughout the day.

Stay at the luxurious Praveg Resort, which offers world-class accommodation options including:

**Accommodation Options:**
• Caves with Pool - ₹55,000 per night
• Safari Tent - ₹39,400 per night  
• Caves - ₹52,000 per night

**Package Inclusions:**
• Daily breakfast
• Pick up & drop service (Pali-Pali)
• Leopard safari experiences
• Comfortable accommodation at Praveg Resort

The safari experience takes you through the rocky terrain where leopards rest on granite boulders during the day. The area is also home to various other wildlife including crocodiles in the Jawai Dam, numerous bird species, and the occasional sloth bear.

Experience the thrill of spotting these magnificent big cats in their natural habitat while enjoying the warm hospitality of Rajasthan and the luxury amenities of Praveg Resort.`
  }
];

const Destinations: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreClick = (destinationId: number) => {
    window.scrollTo(0, 0);
    navigate(`/destination/${destinationId}`);
  };

  return (
    <section id="destinations" className="py-20 px-8 scroll-section">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">DOMESTIC DESTINATIONS</h2>
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
          {destinations.map((destination) => (
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
      </div>
    </section>
  );
};

export default Destinations;
