import React from 'react';

const testimonials = [
  {
    name: 'Pratik Patel',
    location: 'New Zealand',
    quote: 'Thank you Kriya and Travel Aura Team for good place and we all really enjoyed the trip. Once again thank you so much. We would love to do our next trip with Travel Aura.',
    image: 'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/pratik_patel.jpg'
  },
  {
    name: 'Deep Shah',
    location: 'Navsari',
    quote: 'The best trip ever. We had amazing time in Kashmir. It was so perfect by Travel Aura. ',
    image: 'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/deep_shah.jpg'
  },
  {
    name: 'Prachi Shah',
    location: 'Pune',
    quote: 'The experience with travel aura has been amazing it\'s great I loved it they have given us amazing places to travel and without any issues. Thank you so much travel aura will surely have so many trips.',
    image: 'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/prachi_shah.jpg'
  },
  {
    name: 'Prashant',
    location: 'Hyderabad',
    quote: 'Fantastic experience! Our guide was knowledgeable and accommodating. The itinerary was well-planned, and we enjoyed every moment. Scenic views, delicious food, and wonderful company – perfect trip. Exceeded expectations! Will definitely recommend Travel Aura. Thank you for the memorable adventure.',
    image: 'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/prashant.jpg'
  },
  {
    name: 'Vandana Shah',
    location: 'Navsari',
    quote: 'Our experience with Travel Aura was one of the best experience till now. The driver always picked us up on time and all the tourist places to visit were amazingly selected by the Travel Aura.',
    image: 'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/vandana_shah.jpg'
  },
  {
    name: 'Saloni Shah',
    location: 'Pune',
    quote: 'It was an amazing experience with you. We would love to go again with Travel Aura. Travel Aura made my honeymoon trip to Bali absolutely magical! From seamless bookings to expert guides, every deatail was perfect.',
    image: 'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/saloni_shah.jpg'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 scroll-section">
      <div className="container mx-auto max-w-7xl px-8">
        <h2 className="text-4xl md:text-6xl font-light mb-24 text-center">TESTIMONIALS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <div className="mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                  loading="lazy"
                  width="96"
                  height="96"
                />
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <h3 className="text-xl font-light mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;