import React, { useEffect, useState } from 'react';

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const resources = [
      // Video URL - using optimized version
      'https://res.cloudinary.com/dgq2cydfn/video/upload/q_auto,f_auto/v1744284307/Untitled_video_-_Made_with_Clipchamp_1_1_bgpqgg.mp4',
      // Logo URL
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/Yellow%20Text%20Transparent%20Background_Logo.PNG',
      // Testimonial images - using smaller sizes
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/pratik_patel.jpg',
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/deep_shah.jpg',
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/prachi_shah.jpg',
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/prashant.jpg',
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/vandana_shah.jpg',
      'https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/src/assets/saloni_shah.jpg'
    ];

    let loadedCount = 0;

    const preloadResources = async () => {
      const promises = resources.map((url) => {
        return new Promise((resolve) => {
          if (url.endsWith('.mp4')) {
            // For video, just check if it exists
            fetch(url, { method: 'HEAD' })
              .then(() => {
                loadedCount++;
                setProgress((loadedCount / resources.length) * 100);
                resolve(null);
              })
              .catch(() => {
                loadedCount++;
                setProgress((loadedCount / resources.length) * 100);
                resolve(null);
              });
          } else {
            const img = new Image();
            img.onload = () => {
              loadedCount++;
              setProgress((loadedCount / resources.length) * 100);
              resolve(null);
            };
            img.onerror = () => {
              loadedCount++;
              setProgress((loadedCount / resources.length) * 100);
              resolve(null);
            };
            img.src = url;
          }
        });
      });

      await Promise.all(promises);
      setIsComplete(true);
      
      // Add a delay before hiding the loading screen
      setTimeout(() => {
        setIsHidden(true);
      }, 1500); // 1.5 second delay for smooth transition
    };

    preloadResources();
  }, []);

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-1000 ${
        isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="loading-container">
        <div className={`loading-logo ${isComplete ? 'complete' : ''}`}>
          <img
            src="https://cdn.jsdelivr.net/gh/prathamjain416/travel@4e439e43cf8b4fca0988d44415646a1f66f1a34b/Yellow%20Text%20Transparent%20Background_Logo.PNG"
            alt="Travel Aura"
            className="w-auto h-32 md:h-48"
          />
        </div>
        <div className="loading-line">
          <div 
            className="loading-line-progress"
            style={{ transform: `scaleX(${progress / 100})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;