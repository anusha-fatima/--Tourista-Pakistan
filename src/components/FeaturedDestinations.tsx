import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface DestinationCardProps {
  name: string;
  description: string;
  image: string;
  hotelCount: number;
  exploreLink: string; 
}

const DestinationCard: React.FC<DestinationCardProps> = ({ 
  name, 
  description, 
  image, 
  hotelCount,
  exploreLink 
}) => {
  return (
    <div className="relative rounded-xl overflow-hidden group hover-3d">
   
      <img 
        src={image} 
        alt={name}
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-white/80 mb-3 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm">{hotelCount} hotels</span>
          <a href={exploreLink} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Explore <ArrowRight size={14} className="ml-1" />
            </Button>
          </a>
        </div>
      </div>
      
      
      <button className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
        <Heart size={18} className="text-white" />
      </button>
    </div>
  );
};

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Hunza Valley",
      description: "Experience breathtaking mountain views and traditional Pakistani hospitality in the heart of Karakoram.",
      image: "https://images.unsplash.com/photo-1626440847069-d8073e1a0cca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hotelCount: 24,
      exploreLink: "https://www.booking.com/city/pk/hunza.html"
    },
    {
      id: 2,
      name: "Lahore",
      description: "Discover Pakistan's cultural capital with its rich history, magnificent architecture and vibrant food scene.",
      image: "https://images.unsplash.com/photo-1622546758596-f1f06ba11f58?q=80&w=1521&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hotelCount: 36,
      exploreLink: "https://www.tripadvisor.com/SmartDeals-g295413-Lahore_Punjab_Province-Hotel-Deals.html#SPLITVIEWMAP"
    },
    {
      id: 3,
      name: "Swat Valley",
      description: "Explore the 'Switzerland of Pakistan' with lush green meadows, pine forests and crystal clear rivers.",
      image: "https://images.unsplash.com/photo-1680020009117-911d3d3b4927?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      hotelCount: 18,
      exploreLink: "https://www.booking.com/city/pk/swat.html" 
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-pakistan-gray-900">Featured Destinations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(destination => (
            <DestinationCard
              key={destination.id}
              name={destination.name}
              description={destination.description}
              image={destination.image}
              hotelCount={destination.hotelCount}
              exploreLink={destination.exploreLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;