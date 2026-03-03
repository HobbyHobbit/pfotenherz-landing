export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  available: boolean;
  comingSoon?: boolean;
  features: string[];
  pricing?: string;
  duration?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  pet: string;
  avatar: string;
  rating: number;
  text: string;
  date?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  petType: 'dog' | 'cat' | 'both' | 'other';
  service: string;
  message: string;
  privacy: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}