
import React from 'react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface HotelCardProps {
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  deal?: string;
  className?: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  name,
  location,
  price,
  rating,
  image,
  deal,
  className = ""
}) => {
  return (
    <div className={`glass-card rounded-xl overflow-hidden hover-3d ${className}`}>
      <div className="relative">
        {/* Image */}
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        
        {/* Deal Badge */}
        {deal && (
          <Badge className="absolute top-3 left-3 bg-pakistan-orange text-white">
            {deal}
          </Badge>
        )}

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/60 text-white px-2 py-1 rounded-md flex items-center">
          <Star size={14} className="text-yellow-400 mr-1" fill="currentColor" />
          <span className="text-sm font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 text-pakistan-gray-900">{name}</h3>
        <div className="flex items-center text-pakistan-gray text-sm mb-3">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-bold text-pakistan-green">${price}</span>
            <span className="text-pakistan-gray text-xs ml-1">/ night</span>
          </div>
          <Button variant="ghost" className="p-0 h-auto text-pakistan-blue hover:text-pakistan-blue/80">
            View Details <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
