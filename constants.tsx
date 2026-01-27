
import { Project, Service, Testimonial, FAQItem, Step, HeroSlide, Blog } from './types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    url: '/videos/WhatsApp Video 2026-01-26 at 12.38.06 PM (1).mp4',
    type: 'video',
    poster: '/ai-agents-automation.png',
    title: 'Showcase Video',
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'skip',
    title: 'Wudo — Exotic Minimal Furniture',
    description: 'A premium e-commerce experience for exotic minimal furniture. Features include high-end product visualization, seamless checkout, and a minimalist design aesthetic that highlights craftsmanship.',
    vision: 'WUDO is a premium e-commerce platform dedicated to "Exotic Minimal Furniture." The project focuses on bridging the gap between luxury craftsmanship and digital shopping. The goal was to create a visual-first experience where the furniture isn\'t just displayed but celebrated. By utilizing a minimalist design language, the platform ensures that the high-quality textures and unique designs of the wooden furniture remain the primary focus of the user.',
    image: '/images/skip/furniture-ui-v2.jpg',
    tag: 'WUDO',
    link: '#',
    gallery: [
      '/images/skip/wudo-profile.jpg',
      '/images/skip/problem-solution.jpg',
      '/images/skip/3.png',
      '/images/skip/4.png'
    ],
    client: 'Wudo',
    category: 'E-commerce / Home Decor / Interior Design',
    tag: 'Multi-device (Desktop, Tablet, Mobile)',
    role: 'Lead UI/UX Designer',
    designAesthetic: 'Modern Minimalism, High-End Luxury, Clean Typography',
    corePalette: 'Neutral Off-whites, Midnight Navy, and Soft Charcoal accents',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    problemStatement: 'Online furniture shopping often suffers from several user experience friction points: Visual Overload cluttered with banners, Poor Spatial Awareness making scale judgment difficult, Complex Navigation for technical details, and Mobile Disconnection due to crammed layouts.',
    solution: 'The WUDO interface was designed to solve these issues through a "Less is More" philosophy: Negative Space Mastery for a gallery-like experience, Interactive Visualization with 360-degree rotation, Simplified Information Architecture replacing text with icons, and Mobile-First Precision retaining premium features.',
    features: [
      '360° Product Rotation',
      'Dynamic Dimension Toggle',
      'Interactive Color Swatches',
      'One-Tap Checkout',
      'High-Fidelity Product Gallery'
    ],
    outcomes: [
      'Enhanced Brand Identity',
      'Increased User Retention',
      'Lower Return Rates',
      'Seamless Conversion'
    ],
    targetUsers: [
      'Minimalist Enthusiasts',
      'High-Net-Worth Individuals',
      'Interior Designers',
      'Tech-Savvy Homeowners'
    ],
    futureEnhancements: [
      'AR Integration',
      'AI Style Assistant',
      'Custom Build Preview',
      'Sustainable Sourcing Badge'
    ],
  },
  {
    id: 'p1',
    title: 'Green mobility for professionals',
    description: 'Yoda is an e-mobylette that weighs 28 kilos and goes up to 45 km/h with a range of 80 km. From €149/month, we register, insure, provide and maintain your fleet.',
    image: '/images/projects/yoda.png',
    tag: 'Yoda',
    link: '#',
    gallery: ['/images/projects/yoda.png'],
    client: 'Yoda',
    category: 'Electric Mobility',
    technologies: ['React', 'Three.js'],
    features: ['28kg weight', '45km/h speed', '80km range', '€149/month'],
  },
  {
    id: 'p2',
    title: 'Revamping Joe & The Juice’s Mobile Experience',
    description: 'A complete redesign of the mobile experience for the global coffee and juice bar chain.',
    image: '/images/object-detect-v2.jpg',
    tag: 'MOBILE APP',
    client: 'Joe & The Juice',
    timeline: '2021',
    category: 'Retail & F&B',
    services: ['Mobile App Redesign', 'UX/UI Strategy', '3D Illustrations'],
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    link: '#',
    vision: 'Joe & The Juice is a global lifestyle brand. Our goal was to translate their unique in-store vibe into a digital experience that feels just as energetic, seamless, and premium.',
    problemStatement: 'The legacy app was outdated, suffering from complex navigation, slow purchase flows, and a disconnect from the brand’s vibrant physical identity. Users struggled with loyalty redemption and ordering efficiency.',
    solution: 'We engineered a complete UI/UX overhaul focusing on speed and immersion. We introduced seamless "One-Tap Reorder", integrated 3D interactive elements for product visualization, and simplified the loyalty rewards system to drive engagement.',
    process: [
      { phase: 'Discovery & Prototyping', description: 'Analyzed user behavior data to identify friction points. Created low-fidelity wireframes to test new navigation structures.' },
      { phase: 'Visual Design & 3D', description: 'Developed a high-energy visual language using the brand\'s signature pink and black palette, enhanced with custom 3D juice renders.' },
      { phase: 'Development & Testing', description: 'Built the app using Flutter for cross-platform consistency. Rigorous A/B testing ensured the new flows significantly reduced time-to-order.' },
      { phase: 'Feature Expansion', description: 'Rolled out advanced features like "Order Ahead" and geo-fenced notifications for pickup readiness.' }
    ],
    features: ['Seamless Purchase Flow', '3D Product Visualization', 'One-Tap Reorder', 'Loyalty Integration', 'Live Order Tracking'],
    outcomes: ['5X Higher Engagement', '98% Customer Satisfaction', '100% Eco-Friendly Packaging'],
    targetUsers: ['Daily Commuters', 'Health Enthusiasts', 'Gen Z & Millennials'],
    futureEnhancements: ['Subscription Model', 'AR Menu Experience', 'Social Gifting'],
    faq: [
      { question: 'How long did the redesign take?', answer: 'The entire project, from discovery to launch, was completed in 6 months.' },
      { question: 'Did you build for both iOS and Android?', answer: 'Yes, we used Flutter to ensure a flawless native experience on both platforms simultaneously.' },
      { question: 'What was the biggest challenge?', answer: 'Balancing the high-fidelity 3D visuals with app performance to ensure instant load times on all devices.' },
      { question: 'How did you measure success?', answer: 'We tracked conversion rates, app store ratings, and daily active user (DAU) retention, all of which saw significant growth.' }
    ]
  },
  {
    id: 'p3',
    title: 'UX/UI – Code Desk Studio',
    description: 'A social media and marketplace app for items.',
    image: '/images/ux-ui-studio.jpg',
    tag: 'UX/UI',
    link: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Web Design & Development',
    description: 'Showcasing responsive web layouts with high performance.',
    image: '/web-design-dev.png',
  },
  {
    id: 's2',
    title: 'Mobile App Development',
    description: 'Focused on tailored, high-performance mobile apps.',
    image: '/mobile-app-dev.png',
  },
  {
    id: 's3',
    title: 'AI-Agents & Automation',
    description: 'Custom AI solutions for enhanced user experience.',
    image: '/ai-agents-automation.png',
  },
  {
    id: 's4',
    title: 'UI/UX Design',
    description: 'Figma and Adobe XD design services for modern products.',
    image: '/ui-ux-design.png',
  },
  {
    id: 's5',
    title: 'Customer Support',
    description: 'Maintenance and app performance updates to keep you running.',
    image: '/customer-support.png',
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
