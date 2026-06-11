export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  category: 'Sneakers' | 'Running' | 'Casual' | 'Training' | 'New Arrivals';
  image: string;
  images?: string[];
  tags?: string[];
  colors?: string[]; // hex or color names eg ['#ff5722', '#000000']
  colorNames?: string[]; // eg ['Velocity Orange', 'Triple Black']
  sizes?: number[];
  description?: string;
  rating?: number;
  reviewsCount?: number;
  specs?: {
    weight: string;
    offset: string;
    midsole: string;
    plate: string;
    [key: string]: string;
  };
}

export interface CartItem {
  product: Product;
  selectedSize: number;
  selectedColor: string;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  stars: number;
  avatar: string;
}

export type ScreenType = 'home' | 'listing' | 'detail' | 'bag';
