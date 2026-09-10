export interface ServiceItem {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  description: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export interface AMCPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  highlight?: string;
  description: string;
  features: string[];
  exclusions?: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  sector: string;
  rating: number;
  quote: string;
  date: string;
  serviceUsed: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  sector: string;
  roBrand: string;
  serviceNeeded: string;
  preferredTime: string;
  notes?: string;
}
