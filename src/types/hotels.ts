export interface Hotel {
  id: string;
  name: string;
  location: string;
  rating: number;
  price: number;
  description: string;
  images: string[];
  amenities: string[];
  reviews: {
    id: number;
    user: string;
    date: string;
    rating: number;
    comment: string;
  }[];
  mapEmbed: string;
}

export interface HotelCardProps {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  deal?: string;
}