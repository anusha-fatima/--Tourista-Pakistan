import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, TrendingUp, MapPin, Star } from 'lucide-react';


const TrendingDeals = () => {
  const navigate = useNavigate();
  
  const trendingHotels = [
    {
      id: "serena-hunza",
      name: "Serena Hotel Hunza",
      location: "Hunza Valley, Gilgit-Baltistan",
      rating: 4.4,
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/574998174.jpg?k=80ea14ab782507b3b548661e85e6c8bddd40bf23667f752e6408ba878822acbb&o=",
      deal: "20% OFF",
      city: "hunza"
    },
    {
      id: "pearl-continental",
      name: "Pearl Continental Lahore",
      location: "Mall Road, Lahore",
      rating: 4.4,
      image: "https://www.pchotels.com/assets/images/lahore-Royal-Suite.png",
      deal: "Free Breakfast",
      city: "lahore"
    },
   {
     id: "Marriott-Hotel",
      name: "Islamabad Marriott Hotel",
      location: "Agha Khan Rd, F-5/1 F-5, Islamabad, 44000, Pakistan",
      rating: 4.6,
      image: "https://cache.marriott.com/is/image/marriotts7prod/mc-isbpk-deluxe-room-26782-16774:Wide-Hor?wid=750&fit=constrain",
      deal: "Safe, security all around",
      city: "Islamabad"
   },
     {
      id: "Mövenpick-Karachi",
      name: "Mövenpick Karachi",
      location: "Club Rd, Civil Lines Karachi, 75530, Pakistan",
      rating: 4.5,
      image: "https://m.ahstatic.com/is/image/accorhotels/Mo%CC%88venpick%20Karachi%20023:3by2?wid=383&hei=255&dpr=on,2&qlt=85&resMode=sharp2&op_usm=0.5,0.3,2,0&iccEmbed=true&icc=sRGB",
      deal: "20% less than usual",
      city: "Karachi"
    },
  ];

  const handleViewDetails = (hotelId: string) => {
    navigate(`/hotels/${hotelId}`);
  };

  return (
    <section className="py-12 bg-pakistan-beige/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <TrendingUp size={24} className="text-pakistan-green mr-2" />
            <h2 className="text-2xl font-bold text-pakistan-gray-900">Trending Deals</h2>
          </div>
          <Button 
            variant="ghost" 
            className="flex items-center text-pakistan-blue"
            onClick={() => navigate("/hotels")}
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingHotels.map(hotel => (
            <div 
              key={hotel.id} 
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleViewDetails(hotel.id)}
            >
              <div className="relative">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                {hotel.deal && (
                  <div className="absolute top-2 right-2 bg-pakistan-orange text-white px-2 py-1 rounded text-xs font-bold">
                    {hotel.deal}
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold">{hotel.name}</h3>
                <div className="flex items-center mt-1 text-sm text-pakistan-gray">
                  <MapPin size={14} className="mr-1" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center mt-2">
                  <Star size={16} className="text-yellow-400 mr-1 fill-current" />
                  <span>{hotel.rating}</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <Button 
                    size="sm" 
                    className="bg-pakistan-green hover:bg-pakistan-green/90"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewDetails(hotel.id);
                    }}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDeals;