import React, { useEffect, useRef } from 'react';
import { Plane } from 'lucide-react';

const milestones = [
  {
    description: 'We are two sisters who dared to dream of a life full of adventures, stories, and sunsets from around the globe. From the very beginning, travel wasn\'t just a passion—it was our purpose. We worked hard, took chances, and turned our wanderlust into a thriving business: Travel Aura.',
    position: { top: '50px', left: '5%' }
  },
  {
    description: 'But for us, Travel Aura isn’t just a travel company. It’s a community. It’s where dreams take flight, stories are shared, and connections are made.',
    position: { top: '400px', right: '5%' }
  },
  {
    description: 'Every itinerary we design is crafted with care, honesty, and heart. We’ve been where you want to go, and we pour our experiences into creating trips that feel personal, meaningful, and unforgettable.',
    position: { top: '800px', left: '5%' }
  },
  {
    description: 'Travel Aura is more than a company—it\'s our journey, and now, it can be yours too.\n\nCome travel the world with us.\n\nLet your story begin with Travel Aura.',
    position: { top: '1200px', right: '5%' }
  }
];

const Founders: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const lastProgress = useRef<number>(0);
  const animationFrameRef = useRef<number>();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
  const animate = () => {
    if (!sectionRef.current || !pathRef.current || !trailRef.current || !planeRef.current) return;

    const section = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let scrollProgress = (windowHeight - section.top) / (section.height + windowHeight);
    scrollProgress = Math.max(0, Math.min(1, scrollProgress));

    const smoothFactor = 0.1;
    lastProgress.current += (scrollProgress - lastProgress.current) * smoothFactor;

    const pathElement = pathRef.current;
    const pathLength = pathElement.getTotalLength();
    const currentLength = pathLength * lastProgress.current;

    // Animate trail
    trailRef.current.setAttribute('stroke-dasharray', `${currentLength}, ${pathLength}`);
    trailRef.current.setAttribute('stroke-dashoffset', '0');

    // Get position on screen by scaling SVG coordinates to container size
    const svg = pathElement.closest('svg');
    const svgRect = svg?.getBoundingClientRect();
    const point = pathElement.getPointAtLength(currentLength);
    const nextPoint = pathElement.getPointAtLength(Math.min(pathLength, currentLength + 1));

    if (svgRect) {
      const scaleX = svgRect.width / 1200; // SVG viewBox width
      const scaleY = svgRect.height / 1600; // SVG viewBox height

      const screenX = point.x * scaleX;
      const screenY = point.y * scaleY;
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

      planeRef.current.style.transform = `translate3d(${screenX}px, ${screenY}px, 0) rotate(${angle}deg)`;
    }

    // Animate cards
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const threshold = 0.1 + i * 0.175;
      const visible = lastProgress.current >= threshold;
      card.style.opacity = visible ? '1' : '0';
      card.style.transform = visible ? 'translateY(0)' : 'translateY(30px)';
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  animationFrameRef.current = requestAnimationFrame(animate);
  return () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
  };
}, []);


  return (
    <section
      ref={sectionRef}
      className="py-32 px-4 sm:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-light mb-16 text-center">OUR JOURNEY</h2>

        <div className="relative h-[1600px] sm:h-[1800px] md:h-[1600px] overflow-visible">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 1600"
            preserveAspectRatio="none"
          >
            {/* Invisible base path */}
            <path
              ref={pathRef}
                d="M 100,50 
     C 300,200 600,300 800,500 
     C 1000,700 600,900 400,1100 
     C 300,1200 700,1300 1050,1200"
              fill="none"
              stroke="none"
            />
            {/* Animated trail */}
            <path
              ref={trailRef}
                d="M 100,50 
     C 300,200 600,300 800,500 
     C 1000,700 600,900 400,1100 
     C 300,1200 700,1300 1050,1200"
              fill="none"
              stroke="#2563eb"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Plane */}
          <div
            ref={planeRef}
            className="absolute top-0 left-0 z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ willChange: 'transform' }}
          >
            <div className="bg-blue-600 p-3 rounded-full shadow-lg rotate-90">
              <Plane className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Milestone cards */}
          {milestones.map((milestone, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className="absolute transition-all duration-700 ease-out w-11/12 sm:max-w-sm"
              style={{
                top: milestone.position.top,
                ...(milestone.position.left
                  ? { left: milestone.position.left }
                  : { right: milestone.position.right }),
                opacity: 0,
                transform: 'translateY(30px)',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="bg-white rounded-lg shadow-xl p-4 sm:p-6 border border-gray-100">
                <p className="text-gray-600 text-sm whitespace-pre-line">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
