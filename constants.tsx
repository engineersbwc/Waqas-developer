
import React from 'react';
import { Project, Service, Step, Testimonial, FAQ, Blog } from './types';

// Minimal 3D-style SVG Icons
const Icon3D = ({ children, color = "#4ade80" }: { children?: React.ReactNode, color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
    <defs>
      <linearGradient id={`grad-${color.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="1" />
        <stop offset="100%" stopColor={color} stopOpacity="0.6" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);

export const HERO_SLIDES = [
  {
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
    title: 'iOS & ANDROID MOBILE APPS',
    description: 'Native experience for high-impact mobile solutions'
  },
  {
    url: '/images/showcase-1.jpg',
    title: 'MODERN WEB DASHBOARDS',
    description: 'Powerful SaaS interfaces with real-time analytics'
  },
  {
    url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    title: 'AI & MACHINE LEARNING UI',
    description: 'Intelligent interfaces for the next generation of tech'
  },
  {
    url: '/images/showcase-2.jpg',
    title: 'ENTERPRISE CMS SOLUTIONS',
    description: 'Scalable content management for global organizations'
  },
  {
    url: '/images/showcase-3.jpg',
    title: 'ROBOTICS & AUTOMATION',
    description: 'Next-gen control systems for industrial efficiency'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-analysis',
    title: 'AI Analysis System',
    category: 'Intelligent web-based data analysis and business insight platform.',
    image: '/images/ai-analysis.jpg',
    tag: 'WEBSITE',
    client: 'DataFlow AI',
    services: ['Web Development', 'AI Automation'],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Machine Learning Models'],
    timeline: '4 Months',
    vision: 'To help businesses and individuals make data-driven decisions by converting raw data into meaningful insights through automation.',
    problemStatement: 'Many organizations struggle with manual data analysis, delayed reporting, and lack of actionable insights. Traditional systems are slow, error-prone, and not scalable for growing data needs.',
    solution: 'AI Analysis System provides an automated, scalable, and intelligent web solution that processes data in real time, applies AI models, and presents insights in a clean and user-friendly dashboard.',
    features: [
      'AI-powered data analysis',
      'Interactive dashboards & reports',
      'Automated insight generation',
      'Secure authentication & role management',
      'Fast processing & real-time updates',
      'Web-based access from any device'
    ],
    outcomes: [
      'Reduced manual analysis workload',
      'Faster decision-making',
      'Improved accuracy & efficiency'
    ],
    futureEnhancements: [
      'Predictive analytics',
      'AI-based recommendations',
      'Advanced data visualization',
      'Multi-tenant enterprise support'
    ],
    url: 'https://ai-analysis-demo.io'
  },
  {
    id: 'object-detect',
    title: 'Mobile Application – Object Detect',
    category: 'Intelligent real-time object identification using AI-powered computer vision.',
    image: '/images/object-detect-new.jpg',
    tag: 'Mobile App',
    client: 'SecureScan Labs',
    services: ['AI Integration', 'Mobile Development'],
    technologies: ['Flutter', 'Computer Vision', 'Firebase'],
    timeline: '5 Months',
    vision: 'To identify and detect real-world objects in real time using AI-powered computer vision through the device camera.',
    problemStatement: 'Many users face difficulty in identifying objects quickly, especially in educational, industrial, or accessibility-related scenarios. Traditional apps lack real-time accuracy, speed, or user-friendly interfaces.',
    solution: 'Object Detect solves this problem by providing a fast, accurate, and easy-to-use mobile solution that detects objects through the camera and displays results instantly using AI models.',
    features: [
      'Real-Time Object Detection via Camera',
      'AI & Machine Learning based recognition',
      'Fast and accurate detection results',
      'Clean and simple user interface',
      'Supports multiple object categories',
      'Lightweight and smooth performance'
    ],
    targetUsers: [
      'Students & Learners',
      'Developers & Researchers',
      'Accessibility-focused users',
      'Smart automation projects'
    ],
    outcomes: [
      'Improved object recognition accuracy',
      'Faster real-time detection',
      'Scalable architecture for AI'
    ],
    futureEnhancements: [
      'Voice feedback for detected objects',
      'Offline object detection',
      'iOS version release',
      'Cloud-based AI model improvements'
    ],
    url: 'https://objectdetect.app'
  },
  {
    id: 'code-desk',
    title: 'UX/UI – Code Desk Studio',
    category: 'Visually appealing, user-centered, and conversion-focused digital interfaces.',
    image: '/images/code-desk.jpg',
    tag: 'WEBSITE',
    client: 'CodeDesk Inc',
    services: ['UI/UX Design', 'Interface Architecture'],
    technologies: ['Figma', 'Adobe XD', 'Prototyping'],
    timeline: '3 Months',
    vision: 'Creating high-performance workspaces for elite developers through minimalist and efficient design.',
    problemStatement: 'Many digital products fail due to poor user experience, cluttered interfaces, and lack of usability, leading to low engagement and conversions.',
    solution: 'Code Desk Studio delivers clean, modern, and intuitive UI/UX designs based on user research, usability principles, and industry best practices.',
    features: [
      'Modern & minimal UI design',
      'User journey & wireframing',
      'Responsive design for all devices',
      'Design systems & components',
      'Prototyping & usability testing'
    ],
    outcomes: [
      'Improved user engagement',
      'Better usability and clarity',
      'Enhanced brand identity'
    ],
    futureEnhancements: [
      'Motion UI & micro-interactions',
      'Advanced accessibility design',
      'Design-to-code integration'
    ],
    url: 'https://codedesk.studio'
  },
  {
    id: 'would-you-rather',
    title: 'Game – Would You Rather Squad (Beta)',
    category: 'Social and interactive multiplayer gaming experience.',
    image: '/images/would-you-rather.jpg',
    tag: 'Mobile App',
    client: 'SquadGames',
    services: ['Game Design', 'Backend Integration'],
    technologies: ['Flutter', 'Unity UI', 'Real-time APIs', 'Cloud Storage'],
    timeline: '6 Months',
    vision: 'To entertain users through fun, interactive, and thought-provoking questions while encouraging social connection.',
    problemStatement: 'Most casual games lack social interaction and replay value. Players seek fun experiences that encourage group participation and engagement.',
    solution: 'This game provides a social and interactive gaming experience where players choose between two options and compare answers with friends or groups.',
    features: [
      'Interactive “Would You Rather” questions',
      'Multiplayer squad-based gameplay',
      'Real-time voting system',
      'Result comparison & statistics',
      'Simple and engaging UI',
      'Beta-stage experimental features'
    ],
    outcomes: [
      'High user engagement',
      'Strong social interaction',
      'Fun and replayable experience'
    ],
    futureEnhancements: [
      'Live multiplayer rooms',
      'Custom question creation',
      'Chat & emoji reactions',
      'Leaderboards & achievements'
    ],
    url: 'https://wyr-squad.game'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Full Web Design & Development',
    description: 'We build scalable, secure, and high-performance web solutions tailored to meet your business goals with precision and scalability.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800',
    icon: '💻'
  },
  {
    id: 's2',
    title: 'Mobile App Development',
    description: 'Premium native and cross-platform apps designed for rapid growth, superior usability, and seamless user engagement.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    icon: '📱'
  },
  {
    id: 's3',
    title: 'AI Agents & Automation',
    description: 'Leverage cutting-edge AI to automate workflows, reduce operational costs, and stay ahead of the competitive curve.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    icon: '🤖'
  },
  {
    id: 's4',
    title: 'UI / UX Design',
    description: 'User-centric design systems that convert visitors into loyal customers through intuitive and minimalist digital experiences.',
    image: '/images/ui-ux.jpg',
    icon: '🎨'
  },
  {
    id: 's5',
    title: 'Customer Support',
    description: 'Ongoing technical maintenance, performance audits, and round-the-clock support to ensure your products never sleep.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    icon: '🎧'
  }
];

export const STEPS: Step[] = [
  {
    id: 'p1',
    number: '01',
    title: 'Discovery Call',
    description: 'Understand your problem & goals to align our vision.',
    icon: (
      <Icon3D color="#4ade80">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 4l8 6 8-6" fill="white" fillOpacity="0.1" />
      </Icon3D>
    ),
  },
  {
    id: 'p2',
    number: '02',
    title: 'System Design',
    description: 'Define the best technical & business solution for scale.',
    icon: (
      <Icon3D color="#4ade80">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="9" y="3" width="6" height="4" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Icon3D>
    ),
  },
  {
    id: 'p3',
    number: '03',
    title: 'Build & Iterate',
    description: 'Agile development with clear milestones and feedback.',
    icon: (
      <Icon3D color="#4ade80">
        <path d="M7 8l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Icon3D>
    ),
  },
  {
    id: 'p4',
    number: '04',
    title: 'Launch & Support',
    description: 'Deployment, optimization, and scaling your success.',
    icon: (
      <Icon3D color="#4ade80">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Icon3D>
    ),
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Biryana Wilson',
    location: 'United Kingdom',
    content: 'InnoVita Soft has delivered an exceptional app with great attention to detail and seamless communication. Exceeded my expectations. Highly recommended!',
    rating: 5,
    image: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    id: 't2',
    name: 'Mollie Hall',
    location: 'Limassol, Cyprus',
    content: 'Excellent website development! Clean design, fast performance and user-friendly features. I would recommend them for professional results.',
    rating: 5,
    image: 'https://picsum.photos/seed/person2/100/100',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'What services do you offer?',
    answer: 'We offer full-cycle software development including web design & development, mobile app development, AI & automation tools, and UI/UX design.',
  },
  {
    id: 'f2',
    question: 'How long does it typically take to build a website?',
    answer: 'A standard website takes between 2 to 6 weeks depending on the complexity and features required.',
  },
];

export const BLOGS: Blog[] = [
  {
    id: 'b1',
    title: 'The Future of AI in UI/UX Design',
    excerpt: 'Exploring how generative AI is transforming the way we create digital interfaces and improving efficiency for startups.',
    date: 'Oct 24, 2024'
  },
  {
    id: 'b2',
    title: 'Launching Your Startup in 4 Weeks',
    excerpt: 'A comprehensive guide to MVP development and rapid market entry for founders who value velocity without compromising quality.',
    date: 'Oct 15, 2024'
  },
  {
    id: 'b3',
    title: 'Why Native Mobile Apps Still Win',
    excerpt: 'Comparing native vs hybrid development and why performance often dictates the best choice for scaling businesses.',
    date: 'Sep 28, 2024'
  }
];
