import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import InternationalDestinations from './components/InternationalDestinations';
import FlightSearch from './components/FlightSearch';
import Experience from './components/Experience';
import WhyTravelAura from './components/WhyTravelAura';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DestinationDetail from './components/DestinationDetail';
import InternationalDestinationDetail from './components/InternationalDestinationDetail';
import FixedDepartures from './components/FixedDepartures';
import FixedDepartureDetail from './components/FixedDepartureDetail';
import AllPackages from './components/AllPackages';
import Cruises from './components/Cruises';
import Loading from './components/Loading';
import Founders from './components/Founders';

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const location = useLocation();
  const footerRef = useRef<HTMLDivElement>(null);
  const isDetailsPage = location.pathname.includes('/destination/') || 
                       location.pathname.includes('/international-destination/') ||
                       location.pathname.includes('/fixed-departure/');
  const isFoundersSection = location.pathname === '/' && window.scrollY >= document.getElementById('founders')?.offsetTop;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const foundersSection = document.getElementById('founders');
      const isInFoundersSection = foundersSection && 
        currentScrollPos >= foundersSection.offsetTop && 
        currentScrollPos < (foundersSection.offsetTop + foundersSection.offsetHeight);
      
      setVisible((prevScrollPos > currentScrollPos || currentScrollPos < 50) && !isFooterVisible && !isInFoundersSection);
      setPrevScrollPos(currentScrollPos);
      setScrolled(currentScrollPos > 50);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [prevScrollPos, isFooterVisible]);

  return (
    <div className="min-h-screen bg-white">
      {!location.pathname.includes('/packages') && (
        <Header scrolled={scrolled} visible={visible} isDetailsPage={isDetailsPage} />
      )}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FlightSearch />
            <FixedDepartures />
            <Destinations />
            <InternationalDestinations />
            <Cruises />
            <Founders />
            <Experience />
            <WhyTravelAura />
            <Testimonials />
            <Contact />
          </>
        } />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/international-destination/:id" element={<InternationalDestinationDetail />} />
        <Route path="/fixed-departure/:id" element={<FixedDepartureDetail />} />
        <Route path="/packages" element={<AllPackages />} />
      </Routes>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Function to check if all resources are loaded
    const checkResourcesLoaded = () => {
      if (document.readyState === 'complete') {
        setResourcesLoaded(true);
      }
    };

    // Add event listener for resource loading
    window.addEventListener('load', checkResourcesLoaded);

    // Check initial state
    if (document.readyState === 'complete') {
      setResourcesLoaded(true);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', checkResourcesLoaded);
    };
  }, []);

  useEffect(() => {
    if (resourcesLoaded) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [resourcesLoaded]);

  return (
    <Router>
      {loading ? (
        <Loading />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

export default App;