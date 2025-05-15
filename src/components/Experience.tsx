import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="bg-gray-50 scroll-section">
      <div className="container mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-light mb-12">THE EXPERIENCE</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every journey with Travel Aura is meticulously crafted to exceed expectations. 
              We believe in creating moments that transcend ordinary travel, delivering 
              experiences that become cherished memories.
            </p>
            {/* <button className="text-gray-900 border border-gray-900 px-12 py-4 hover:bg-gray-900 hover:text-white transition-all duration-300">
              LEARN MORE
            </button> */}
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&q=80&w=1200"
              alt="Luxury Experience"
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;