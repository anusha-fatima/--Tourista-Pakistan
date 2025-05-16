import { useState } from 'react';
import { ArrowLeft, Star, MapPin, Calendar, Users, Heart, Share, CircleCheck, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { hotelsData } from '@/data/hotels';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const HotelDetail = () => {
  const { id } = useParams();
  const [showMapPopup, setShowMapPopup] = useState(false);

  // Get hotel data based on ID
  if (!id || !hotelsData[id as keyof typeof hotelsData]) {
    return (
      <div className="min-h-screen flex flex-col">
      
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold">Hotel not found</h1>
          <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to home
          </Link>
        </main>
     
      </div>
    );
  }

  const hotel = hotelsData[id as keyof typeof hotelsData];

  return (
    <div className="min-h-screen flex flex-col">
   

      <main className="flex-grow container mx-auto px-4 py-8">
        <Link to="/" className="flex items-center text-gray-600 hover:text-green-600 mb-6">
          <ArrowLeft size={18} className="mr-2" />
          Back to Hotels
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hotel Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded">
                <Star size={16} className="mr-1" fill="currentColor" />
                <span className="font-medium">{hotel.rating}</span>
                <span className="text-gray-500 text-sm ml-1">({hotel.reviews.length} reviews)</span>
              </div>
              <div className="flex items-center ml-4 text-gray-600">
                <MapPin size={16} className="mr-1" />
                <span>{hotel.location}</span>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-8">
              <div className="grid grid-cols-12 gap-2 h-80">
                <div className="col-span-8 h-full">
                  <img 
                    src={hotel.images[0]} 
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-l-xl"
                  />
                </div>
                <div className="col-span-4 grid grid-rows-2 gap-2 h-full">
                  <img 
                    src={hotel.images[1]} 
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-tr-xl"
                  />
                  <img 
                    src={hotel.images[2]} 
                    alt={hotel.name}
                    className="w-full h-full object-cover rounded-br-xl"
                  />
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3">About this hotel</h2>
              <p className="text-gray-600">{hotel.description}</p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CircleCheck size={16} className="text-green-600 mr-2" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <div 
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: hotel.mapEmbed }} 
                />
              </div>
              <Button 
                onClick={() => setShowMapPopup(true)}
                variant="outline" 
                className="mt-4 flex items-center gap-2"
              >
                <MapPin size={16} />
                View Larger Map
              </Button>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-bold mb-4">Guest Reviews</h2>
              <div className="space-y-4">
                {hotel.reviews.map(review => (
                  <div key={review.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium">{review.user}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="flex items-center mb-2">
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-2xl font-bold text-green-600">${hotel.price}</span>
                  <span className="text-gray-500 text-sm"> / night</span>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50">
                    <Heart size={18} className="text-gray-500" />
                  </button>
                  <button className="p-2 bg-white rounded-full border border-gray-200 hover:bg-gray-50">
                    <Share size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Booking form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Dates</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input 
                      type="text" 
                      className="w-full pl-10 p-2 border border-gray-200 rounded-lg"
                      placeholder="Select dates"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Guests</label>
                  <div className="relative">
                    <Users size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <select className="w-full pl-10 p-2 border border-gray-200 rounded-lg appearance-none">
                      <option>2 adults</option>
                      <option>2 adults, 1 child</option>
                      <option>Family (4 people)</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Check Availability
                </Button>
                
                <hr className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">${hotel.price} x 5 nights</span>
                    <span>$600</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span>$50</span>
                  </div>
                  <div className="flex justify-between font-bold mt-3 pt-3 border-t">
                    <span>Total</span>
                    <span className="text-green-600">$650</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Popup */}
      {showMapPopup && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-bold">{hotel.name} Location</h3>
              <button 
                onClick={() => setShowMapPopup(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="aspect-video w-full">
              <div 
                className="w-full h-full"
                dangerouslySetInnerHTML={{ __html: hotel.mapEmbed }} 
              />
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default HotelDetail;