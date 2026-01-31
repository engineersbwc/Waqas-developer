
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
    platform: 'Multi-device (Desktop, Tablet, Mobile)',
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
    title: 'MedOne – Online Pharmacy & Healthcare App',
    description: 'MedOne is a comprehensive mobile healthcare application designed to bridge the gap between patients and pharmacies. It serves as a one-stop digital solution for purchasing medicines, uploading prescriptions, and tracking health essentials.',
    image: '/original-08effa0e1cdcc173bde26311db0f025e.webp',
    tag: 'MedOne',
    link: '#',
    gallery: ['/original-08effa0e1cdcc173bde26311db0f025e.webp'],
    client: 'MedOne',
    category: 'Healthcare / E-Commerce',
    platform: 'Mobile App (iOS & Android)',
    role: 'UI/UX Designer',
    technologies: ['Figma', 'Adobe XD', 'Illustrator'],
    vision: 'MedOne serves as a one-stop digital solution for purchasing medicines, uploading prescriptions, and tracking health essentials. The app aims to make healthcare accessible, affordable, and convenient by allowing users to order medication from the comfort of their homes.',
    problemStatement: 'In the traditional healthcare system, patients often face several challenges: Inconvenience of visiting multiple pharmacies, long queue wait times, physical prescriptions being easily lost or damaged, and lack of transparency about medicine availability and pricing.',
    solution: 'MedOne solves these issues by digitizing the pharmacy experience. The app provides a user-friendly interface where users can search for medicines by category, upload prescriptions for verification, and track their delivery in real-time on a map.',
    features: [
      'Secure Authentication (Email/Social Login)',
      'Smart Search & Product Categories',
      'Prescription Upload & Verification',
      'Multi-Vendor Support (Apollo, Sun Pharma)',
      'Live Order Tracking with Map Interface',
      'Visual Order Status Timeline'
    ],
    targetUsers: [
      'Patients with Chronic Diseases',
      'Elderly People',
      'Busy Professionals',
      'Caregivers'
    ],
    outcomes: [
      'Enhanced Accessibility (24/7 access)',
      'User Safety during health crises',
      'Streamlined ordering efficiency',
      'Trust-building visual clarity'
    ],
    futureEnhancements: [
      'Telemedicine Video Consultations',
      'Pill Reminder Notification System',
      'Lab Test Booking & Sample Collection',
      'AI Chatbot for health queries'
    ],
    designAesthetic: 'The clean, blue-themed UI builds trust and provides a calming user experience associated with healthcare.',
  },
  {
    id: 'p2',
    title: '2Sale — The Unified Smart Marketplace & Community Hub',
    description: 'A pioneering mobile application ecosystem designed to integrate diverse online marketplaces with a robust social communication platform, targeting the Arab world.',
    vision: '2Sale is a pioneering mobile application ecosystem designed to integrate diverse online marketplaces with a robust social communication platform, primarily targeting the Arab world. It aims to simplify and amplify the online selling and buying experience by offering multi-platform advertising, personalized e-stores, and interactive community features.',
    image: '/images/projects/joe-juice.png',
    tag: 'MOBILE APP',
    link: 'https://play.google.com/store/apps/details?id=com.twosale.two_sale&pli=1',
    gallery: ['/images/projects/joe-juice.png'],
    client: '2SaLe - توسيل',
    category: 'Mobile / E-commerce / Marketplace',
    platform: 'Mobile (iOS & Android)',
    role: 'UI/UX Designer & Developer',
    designAesthetic: 'Bold Red Theme, Modern Arabic Typography, Clean Layouts',
    corePalette: 'Vibrant Red, White, Deep Black Accents',
    technologies: ['Flutter', 'Firebase', 'Node.js'],
    problemStatement: 'Individual sellers struggle with fragmented online selling across multiple platforms, limited ad reach, high barriers to e-commerce entry, lack of integrated communication tools, and inefficient trade relationship building in conventional marketplaces.',
    solution: 'We created a unified platform that centralizes advertising across 12 apps with one click, democratizes e-commerce with Smart Store feature, integrates powerful Group Chat for direct communication, and builds trade relationships through integrated chat functionalities.',
    features: [
      'One-Click Multi-Platform Advertising (12 Apps)',
      'Smart Store - Personalized E-commerce',
      'Group Chat - Private & Public Conversations',
      'Smart Market Platform Integration',
      'Real-time Negotiation & Community',
      'Multi-Vendor Support (4Sale, OPSQ, Kuwait Cars)'
    ],
    outcomes: [
      'Increased Visibility & Sales',
      'Empowered Small Businesses',
      'Enhanced User Engagement',
      'Market Leadership in Arab World',
      'Simplified User Experience'
    ],
    targetUsers: [
      'Individual Sellers',
      'Small & Medium Businesses',
      'Service Providers',
      'Buyers & Shoppers',
      'Advertisers'
    ],
    futureEnhancements: [
      'AI-Powered Recommendations',
      'Advanced Analytics for Sellers',
      'Escrow & Secure Payment',
      'Logistics & Delivery Integration',
      'Multilingual Support',
      'Gamification & Loyalty Programs',
      'Voice Search & AI Assistant'
    ]
  },
  {
    id: 'p3',
    title: 'Would You Rather? — Battle of Wits & Choices',
    description: 'A captivating mobile game developed using Flutter, designed to challenge players with thought-provoking dilemmas. Combines quiz-style engagement with strategic decision-making for a fun and competitive experience.',
    vision: '"Would You Rather?" is a captivating mobile game that masterfully combines elements of quiz-style engagement with strategic decision-making. The game boasts diverse content categories, flexible game modes (including tournament mode), and team play capabilities. Its robust backend tracks achievements and offers detailed performance overviews, making every choice meaningful.',
    image: '/images/projects/would-you-rather.png',
    tag: 'UX/UI',
    link: 'https://play.google.com/store/apps/details?id=com.wyrsquad.game&pcampaignid=web_share',
    gallery: ['/images/projects/would-you-rather.png'],
    client: 'Would You Rather?',
    category: 'Mobile Game / Casual / Quiz',
    platform: 'Mobile (Android, iOS)',
    role: 'UI/UX Designer',
    designAesthetic: 'Dark Sophisticated UI, Modern Minimalism, Vibrant Accent Colors',
    corePalette: 'Deep Dark Gray, Vibrant Purple Accents, Golden Highlights',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    problemStatement: 'Many mobile quiz and dilemma games suffer from: Stale UI/UX with generic interfaces causing eye fatigue, Lack of Depth with simple mechanics without strategic elements, Limited Replayability with finite questions, and Poor Performance with sluggish animations and cross-platform inconsistencies.',
    solution: 'We addressed these challenges with: Immersive Dark UI creating a sophisticated, low-distraction environment; Engaging Gameplay Modes with tournament and team play for strategic depth; Extensible Content Categories for high replayability; Clear Progression & Achievements system; and Flutter\'s cross-platform performance advantage.',
    features: [
      'Diverse Dilemma Categories (Dark, Fun, Love, Weird)',
      'Multiple Game Modes (Default, Medium, Hard, Tournament)',
      'Team Play (Team A vs Team B)',
      'Real-time Scoring & Progress',
      'Comprehensive Achievements System',
      'Performance Overview & Statistics',
      'Intuitive Search & Filter',
      'Sleek Dark UI Design'
    ],
    outcomes: [
      'High User Engagement & Retention',
      'Positive User Feedback on Design',
      'Strong Brand Identity',
      'Scalable Architecture',
      'Premium Monetization Potential'
    ],
    targetUsers: [
      'Social Gamers',
      'Casual Gamers',
      'Decision-Making Enthusiasts',
      'Competitive Spirits',
      'Young Adults & Teens'
    ],
    futureEnhancements: [
      'User-Generated Content (UGC)',
      'Friends List & Direct Challenges',
      'In-Game Chat',
      'Themed UI Skins',
      'Timed Challenges Mode',
      'Daily Challenges',
      'Multi-language Localization',
      'Web & Desktop Versions'
    ]
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
    image: '/images/process/requirement-analysis.png'
  },
  {
    id: 2,
    number: '02',
    title: 'UI/UX Design',
    description: 'Creating intuitive and stunning interfaces your users will love.',
    icon: '🎨',
    image: '/images/process/ui-ux-design.png'
  },
  {
    id: 3,
    number: '03',
    title: 'Development',
    description: 'Turning designs into high-performance, scalable code.',
    icon: '💻',
    image: '/images/process/development.png'
  },
  {
    id: 4,
    number: '04',
    title: 'Testing & QA',
    description: 'Rigorous testing to ensure a bug-free, seamless experience.',
    icon: '🧪',
    image: '/images/process/testing-qa.png'
  },
  {
    id: 5,
    number: '05',
    title: 'Delivery',
    description: 'Launching your product and providing ongoing assistance.',
    icon: '🚀',
    image: '/images/process/delivery.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'CEO at Techflow',
    content: 'The team at Innovita Soft delivered a flawless product. Their clean design and technical expertise surpassed our expectations.',
    rating: 5,
    image: ''
  },
  {
    id: 't2',
    name: 'Michael Ross',
    role: 'Founder of Nexus',
    content: 'Professional, responsive, and innovative. They turned our complex idea into a simple, high-impact mobile solution.',
    rating: 5,
    image: ''
  },
  {
    id: 't3',
    name: 'David Wilson',
    role: 'Product Manager',
    content: 'Exceeded all deadlines and provided exceptional code quality. A pleasure to work with from start to finish.',
    rating: 5,
    image: ''
  },
  {
    id: 't4',
    name: 'Emma Thompson',
    role: 'Marketing Director',
    content: 'Transformed our brand identity into a modern, high-converting digital experience. Truly impressive work.',
    rating: 5,
    image: ''
  },
  {
    id: 't5',
    name: 'James Rodriguez',
    role: 'Startup Founder',
    content: 'The fastest delivery I have ever seen. They understood our vision instantly and executed it perfectly.',
    rating: 5,
    image: ''
  },
  {
    id: 't6',
    name: 'Lisa Anderson',
    role: 'Operations Lead',
    content: 'Sophisticated solutions that simplified our entire business process. Their attention to detail is unmatched.',
    rating: 5,
    image: ''
  },
  {
    id: 't7',
    name: 'Robert Taylor',
    role: 'Tech Lead',
    content: 'Deep technical knowledge combined with an eye for design. They are our go-to partner for all critical projects.',
    rating: 5,
    image: ''
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
