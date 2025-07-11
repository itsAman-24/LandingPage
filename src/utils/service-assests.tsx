import { Globe, Smartphone, Megaphone, Palette} from "lucide-react";


export const services = [
    {
      icon: <Globe className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. Responsive, fast, and optimized for search engines.',
      features: [
        'React & Next.js Development',
        'E-commerce Solutions',
        'CMS Development',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'],
      startingPrice: '$5,000'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
      features: [
        'React Native Development',
        'Flutter Applications',
        'Native iOS/Android',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Redux'],
      startingPrice: '$8,000'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that convert visitors into customers. User research, wireframing, and prototyping.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Design Systems',
        'Usability Testing',
        'Brand Identity Design',
        'Responsive Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      startingPrice: '$3,000'
    },
    {
      icon: <Megaphone className="h-12 w-12" />,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your online presence and drive qualified traffic.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'Mailchimp'],
      startingPrice: '$2,000'
    }
  ];