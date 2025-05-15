import React, { useRef, useEffect } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      <div className="video-container">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover scale-video"
        >
          <source src="https://res.cloudinary.com/dgq2cydfn/video/upload/q_auto,f_auto/v1744284307/Untitled_video_-_Made_with_Clipchamp_1_1_bgpqgg.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="absolute inset-0 z-[2] flex items-center justify-center">
        <div className="text-center px-4 fade-in">
          <h1 className="text-5xl md:text-8xl font-light text-white mb-8">
            DISCOVER LUXURY
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto">
            Curated journeys for the discerning traveler
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;