
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
    id: 'p1',
    title: 'Skip',
    description: 'A revolutionary fintech app simplification for seamless payments.',
    image: '/images/skip/cover.png',
    tag: 'UX/UI',
    link: '#',
    gallery: [
      '/public/images/project/ux-ui-skip/1.png',
      '/public/images/project/ux-ui-skip/2.png',
      '/public/images/project/ux-ui-skip/3.png',
      '/public/images/project/ux-ui-skip/4.png'
    ],
    client: 'Skip',
    timeline: '2023',
    category: 'Fintech',
    services: ['UX/UI Design', 'App Redesign', 'User Research'],
    technologies: ['Figma', 'Protopie', 'React Native'],
    vision: 'Skip aims to remove friction from digital payments. The goal was to create an interface that feels invisible, allowing users to focus on the transaction rather than the tool.',
    problemStatement: 'Previous iterations were cluttered and confusing. Users found it hard to navigate basic payment flows.',
    solution: 'We stripped away the noise, focusing on a minimal, gesture-based interface. Large, clear actions and subtle haptics guide the user confidently.',
    features: ['Gesture-based Navigation', 'Dark Mode Default', 'Biometric Quick-Pay'],
    outcomes: ['40% Faster Checkout', 'Award-Winning Design'],
    targetUsers: ['Digital Natives', 'Small Business Owners'],
    futureEnhancements: ['Voice Payments', 'Smart Watch Integration']
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
