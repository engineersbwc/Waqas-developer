
import { Project, Service, Testimonial, FAQItem, Step, HeroSlide, Blog } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
  },
  {
    url: '/images/showcase-1.jpg',
  },
  {
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
  },
  {
    url: '/images/showcase-2.jpg',
  },
  {
    url: '/images/showcase-3.jpg',
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AI Analysis System',
    description: 'Green mobility for professionals website featuring an e-bike.',
    image: '/images/ai-analysis-v2.jpg',
    tag: 'WEBSITE',
    link: '#'
  },
  {
    id: 'p2',
    title: 'Object Detect',
    description: 'Everything you need to become a more profitable designer.',
    image: '/images/object-detect-v2.jpg',
    tag: 'MOBILE APP',
    link: '#'
  },
  {
    id: 'p3',
    title: 'UX/UI – Code Desk Studio',
    description: 'A social media and marketplace app for items.',
    image: '/images/ux-ui-studio.jpg',
    tag: 'UX/UI',
    link: '#'
  },
  {
    id: 'p4',
    title: 'Game – Would You Rather Squad',
    description: 'A dedicated mobile app gaming project.',
    image: '/images/would-you-rather.jpg',
    tag: 'GAME APP',
    link: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Design & Development',
    description: 'Showcasing responsive web layouts with high performance.',
    image: '/images/web-dev-v4.jpg',
  },
  {
    id: 's2',
    title: 'Mobile App Development',
    description: 'Focused on tailored, high-performance mobile apps.',
    image: '/images/mobile-app-v4.jpg',
  },
  {
    id: 's3',
    title: 'AI-Agents & Automation',
    description: 'Custom AI solutions for enhanced user experience.',
    image: '/images/ai-automation.png',
  },
  {
    id: 's4',
    title: 'UI/UX Design',
    description: 'Figma and Adobe XD design services for modern products.',
    image: '/images/ui-ux-design.png',
  },
  {
    id: 's5',
    title: 'Customer Support',
    description: 'Maintenance and app performance updates to keep you running.',
    image: '/images/customer-support.png',
  }
];

export const STEPS: Step[] = [
  {
    id: 1,
    number: '01',
    title: 'Requirement Analysis',
    description: 'We dive deep into your goals to define the perfect strategy.',
    icon: '📋',
    image: '/images/process/step1.jpg'
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and stunning interfaces your users will love.',
    icon: '🎨',
    image: '/images/process/step2.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'Turning designs into high-performance, scalable code.',
    icon: '💻',
    image: '/images/process/step3.jpg'
  },
  {
    id: 4,
    number: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing to ensure a bug-free, seamless experience.',
    icon: '🧪',
    image: '/images/process/step4.jpg'
  },
  {
    id: 5,
    number: '05',
    title: 'Delivery',
    description: 'Launching your product and providing ongoing assistance.',
    icon: '🚀',
    image: '/images/process/step5.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'CEO at Techflow',
    content: 'The team at Innovita Soft delivered a flawless product. Their clean design and technical expertise surpassed our expectations.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Michael Ross',
    role: 'Founder of Nexus',
    content: 'Professional, responsive, and innovative. They turned our complex idea into a simple, high-impact mobile solution.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'How long does a typical project take?',
    answer: 'Timeline varies by complexity, but most projects are delivered within 4-12 weeks.'
  },
  {
    id: 'f2',
    question: 'Do you offer ongoing maintenance?',
    answer: 'Yes, we provide continuous support and performance updates after delivery.'
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'b1',
    title: 'The Future of AI in Modern Software',
    excerpt: 'How artificial intelligence is reshaping the landscape of application development and user experience.',
    date: 'Jan 24, 2026'
  },
  {
    id: 'b2',
    title: 'Designing for the Dark Mode Era',
    excerpt: 'Best practices for creating stunning, accessible dark-themed user interfaces that users love.',
    date: 'Jan 20, 2026'
  },
  {
    id: 'b3',
    title: 'Scaling Mobile Apps for Global Impact',
    excerpt: 'Top strategies for ensuring your mobile application performs flawlessly across different regions and devices.',
    date: 'Jan 15, 2026'
  }
];
