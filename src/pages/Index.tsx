import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import SearchHero from '@/components/SearchHero';
import TrendingDeals from '@/components/TrendingDeals';
import MapPreview from '@/components/MapPreview';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import AiFeature from '@/components/AiFeature';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot/Chatbot';


const Index = () => {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <SearchHero />

        <div className="animate-on-scroll">
          <TrendingDeals />
        </div>

        <div className="animate-on-scroll">
          <FeaturedDestinations />
        </div>

        <div className="animate-on-scroll">
          <MapPreview />
        </div>

        <div className="animate-on-scroll">
          <AiFeature />
        </div>
      </main>

      <Footer />
      
      <Chatbot />
    </div>
  );
};

export default Index;
