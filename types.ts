
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: 'WEBSITE' | 'Mobile App';
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
  id: string;
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  content: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

// Added Blog interface for the Blogs component
export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}
