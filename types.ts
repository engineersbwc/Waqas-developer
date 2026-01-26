
import React from 'react';

export interface HeroSlide {
  url: string;
  type?: 'image' | 'video';
  poster?: string;
  title?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: 'WEBSITE' | 'UX/UI' | 'MOBILE APP' | 'GAME APP';
  link?: string;
  category?: string;
  client?: string;
  services?: string[];
  technologies?: string[];
  timeline?: string;
  vision?: string;
  problemStatement?: string;
  solution?: string;
  features?: string[];
  targetUsers?: string[];
  futureEnhancements?: string[];
  challenges?: string;
  impact?: string;
  outcomes?: string[];
  gallery?: string[];
  url?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon?: string;
}

export interface Step {
  id: string | number;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  location?: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}
