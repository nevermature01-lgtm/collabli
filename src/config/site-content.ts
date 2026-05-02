export const siteConfig = {
  name: 'SaaSForge',
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
  pricing: {
    title: 'Simple, Transparent Pricing',
    subtitle: 'Choose the plan that fits your current needs and scale as you grow.',
    plans: [
      {
        name: 'Starter',
        price: '$29',
        features: ['Up to 5 users', 'Basic automation', 'Email support'],
        cta: 'Get Started',
      },
      {
        name: 'Pro',
        price: '$99',
        features: ['Unlimited users', 'Advanced workflows', 'Priority support', 'Custom integrations'],
        cta: 'Go Pro',
        highlight: true,
      },
    ],
  },
};