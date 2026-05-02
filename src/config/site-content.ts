export const siteConfig = {
  name: 'Collabli | Influencer Marketplace',
  global: {
    showAnnouncementBar: true,
  },
  announcement: {
    message: '🚀 New Feature Released — Try Influencer Matching AI',
    ctaText: 'Learn More →',
    ctaLink: '#features',
  },
  hero: {
    badge: 'Now in Public Beta',
    title: 'Forge the Future of Your Business Operations',
    subtitle: 'Streamline workflows, automate tedious tasks, and scale your operations with our premium SaaS toolkit designed for modern teams.',
    primaryCTA: {
      text: 'Start Free Trial',
      link: '#signup',
    },
    secondaryCTA: {
      text: 'Watch Demo',
      link: '#demo',
    },
    image: 'hero-dashboard',
  },
  features: {
    title: 'Built for Scale',
    subtitle: 'Everything you need to manage your business effectively.',
    items: [
      {
        title: 'Smart Automation',
        description: 'Automate repetitive tasks with our intelligent workflow engine.',
        icon: 'Zap',
      },
      {
        title: 'Real-time Analytics',
        description: 'Get deep insights into your business performance with live dashboards.',
        icon: 'BarChart3',
      },
      {
        title: 'Team Collaboration',
        description: 'Seamlessly work together with shared workspaces and permissions.',
        icon: 'Users',
      },
    ],
  },
  testimonials: {
    title: 'Trusted by Innovative Teams',
    subtitle: 'See how Collabli is transforming businesses worldwide.',
    items: [
      {
        name: 'Sarah Chen',
        role: 'CTO at TechFlow',
        content: 'Collabli has completely transformed how our team manages complex workflows. The automation tools are unparalleled.',
        avatar: 'avatar-1'
      },
      {
        name: 'Marcus Rodriguez',
        role: 'Founder of ScaleUp',
        content: 'The real-time analytics gave us insights we didn\'t know we were missing. It paid for itself in the first month.',
        avatar: 'avatar-2'
      },
      {
        name: 'Elena Gilbert',
        role: 'Ops Director at Innovate',
        content: 'Finally a toolkit that feels modern and premium. The user interface is a joy to work with every day.',
        avatar: 'avatar-3'
      }
    ]
  },
  pricing: {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the plan that fits your current needs and scale as you grow.',
    plans: [
      {
        name: 'Starter',
        price: '$29',
        features: ['Up to 5 users', 'Basic automation', 'Email support', '1GB Storage'],
        cta: 'Get Started',
        highlight: false,
      },
      {
        name: 'Pro',
        price: '$99',
        features: ['Unlimited users', 'Advanced workflows', 'Priority support', 'Custom integrations', '10GB Storage'],
        cta: 'Go Pro',
        highlight: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        features: ['Dedicated account manager', 'SLA guarantees', 'Advanced security', 'Unlimited Storage'],
        cta: 'Contact Sales',
        highlight: false,
      },
    ],
  },
};
