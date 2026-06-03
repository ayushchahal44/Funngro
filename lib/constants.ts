export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface BenefitCard {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectTypeCard {
  title: string;
  description: string;
  averagePay: string;
  skillsNeeded: string[];
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  city: string;
  project: string;
  amountEarned: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface CaseStudy {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const STATS_DATA: Stat[] = [
  { value: 50000, suffix: "+", label: "Teen Talents Registered" },
  { value: 1000, suffix: "+", label: "Active Companies" },
  { value: 5, suffix: " Crore+", label: "Paid Out in Earnings" },
  { value: 20000, suffix: "+", label: "Projects Completed" }
];

export const TRUSTED_BRANDS = [
  { name: "Reliance", logo: "RC" },
  { name: "Tata", logo: "TT" },
  { name: "HDFC Bank", logo: "HB" },
  { name: "Paytm", logo: "PT" },
  { name: "Swiggy", logo: "SG" },
  { name: "Zomato", logo: "ZM" },
  { name: "Flipkart", logo: "FK" },
  { name: "Razorpay", logo: "RZ" }
];

export const PROJECT_CATEGORIES = [
  { title: "Web Development", count: "4,200+ Projects", icon: "Code", color: "from-green-500 to-emerald-600" },
  { title: "Graphic Design", count: "3,800+ Projects", icon: "Palette", color: "from-lime-500 to-green-600" },
  { title: "SEO Optimization", count: "2,100+ Projects", icon: "TrendingUp", color: "from-emerald-500 to-teal-600" },
  { title: "Content Writing", count: "3,100+ Projects", icon: "PenTool", color: "from-green-600 to-lime-600" },
  { title: "Market Research", count: "1,500+ Projects", icon: "Search", color: "from-teal-500 to-emerald-600" },
  { title: "Social Media Marketing", count: "2,900+ Projects", icon: "Share2", color: "from-lime-600 to-emerald-700" },
  { title: "Video Editing", count: "2,400+ Projects", icon: "Video", color: "from-emerald-600 to-green-500" },
  { title: "UI/UX Design", count: "1,800+ Projects", icon: "Layers", color: "from-green-500 to-lime-500" }
];

export const TEEN_BENEFITS: BenefitCard[] = [
  { title: "Earn Money", description: "Get compensated fairly for your deliverables on real-world projects. Build financial independence early.", icon: "IndianRupee" },
  { title: "Build Portfolio", description: "Replace standard resumes with verifiable client case studies and work experience before you graduate.", icon: "Briefcase" },
  { title: "Work With Brands", description: "Collaborate directly with top startups and mature companies. Put recognized corporate names on your CV.", icon: "Award" },
  { title: "Learn Real Skills", description: "Apply textbook knowledge to actual business challenges. Learn by doing, under expert guidance.", icon: "BookOpen" },
  { title: "Professional Networking", description: "Connect with founders, project heads, and creators. Open doors for future internships or job offers.", icon: "Users" },
  { title: "Official Certification", description: "Receive official certificates of completion from Funngro and hiring brands for every successful gig.", icon: "FileCheck" }
];

export const TEEN_PROJECT_TYPES: ProjectTypeCard[] = [
  { title: "Web Development", description: "Build landing pages, write frontend React code, or test websites for tech-enabled companies.", averagePay: "₹5,000 - ₹12,000", skillsNeeded: ["HTML/CSS", "JavaScript", "Tailwind CSS", "React"] },
  { title: "Graphic Design", description: "Create marketing collateral, social media banners, logos, and digital product assets.", averagePay: "₹3,000 - ₹8,000", skillsNeeded: ["Figma", "Canva", "Photoshop", "Illustrator"] },
  { title: "Social Media Marketing", description: "Plan campaigns, post content, engage with communities, and drive follower growth.", averagePay: "₹4,000 - ₹10,000", skillsNeeded: ["Instagram Insights", "Content Creation", "Copywriting"] },
  { title: "Content Writing", description: "Write blog posts, newsletters, website copy, and scripts for YouTube or TikTok.", averagePay: "₹2,500 - ₹7,000", skillsNeeded: ["SEO Copywriting", "Grammar", "Researching"] },
  { title: "SEO Optimization", description: "Do keyword research, metadata optimizations, and link-building checks for search rankings.", averagePay: "₹3,500 - ₹9,000", skillsNeeded: ["Google Analytics", "Ahrefs/Semrush", "On-page SEO"] },
  { title: "Video Editing", description: "Edit engaging YouTube videos, reels, ads, and interactive promotional content.", averagePay: "₹4,000 - ₹12,000", skillsNeeded: ["Premiere Pro", "CapCut", "After Effects"] },
  { title: "Market Research", description: "Collect customer feedback, analyze competitor pricing, and compile market trends.", averagePay: "₹3,000 - ₹8,000", skillsNeeded: ["Data Analysis", "Google Sheets", "Survey Design"] }
];

export const TEEN_JOURNEY: TimelineStep[] = [
  { step: "01", title: "Create Profile", description: "Sign up and build your interactive digital profile, highlighting your skills, hobbies, and top interests." },
  { step: "02", title: "Apply to Projects", description: "Browse live projects listed by companies and submit brief applications showing how you can help." },
  { step: "03", title: "Brief Interview", description: "Participate in a simple text or video screening with the brand's manager to align on goals." },
  { step: "04", title: "Project Assigned", description: "Get officially onboarded, receive detailed instructions, and access the workspace dashboard." },
  { step: "05", title: "Submit Work", description: "Execute your tasks, share drafts, implement comments, and upload your finalized deliverables." },
  { step: "06", title: "Get Paid & Certified", description: "Receive secure payments directly to your wallet alongside feedback and verified job certificates." }
];

export const SUCCESS_STORIES: Testimonial[] = [
  {
    name: "Rohan Mehta",
    city: "Mumbai",
    project: "Web Development",
    amountEarned: "₹18,500",
    rating: 5,
    quote: "Working with a tech startup through Funngro was an incredible experience. I built their landing page, got paid on time, and now have code running in production!",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
  },
  {
    name: "Ananya Iyer",
    city: "Bengaluru",
    project: "Graphic Design",
    amountEarned: "₹12,400",
    rating: 5,
    quote: "I designed social posts for a popular food brand. It helped me build an amazing design portfolio. My parents were shocked when I bought my own drawing tablet!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    name: "Kabir Sharma",
    city: "Delhi NCR",
    project: "Video Editing",
    amountEarned: "₹24,000",
    rating: 5,
    quote: "Funngro connected me with clients who needed reels and product ads. The payment system is ultra-secure, and I got my certificate in just two weeks.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    project: "Content Writing",
    amountEarned: "₹8,900",
    rating: 4.8,
    quote: "As a student, writing blogs for real brands taught me more than any classroom assignment. The experience helped me secure my next internship seamlessly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
  }
];

export const COMPANY_BENEFITS: BenefitCard[] = [
  { title: "Cost Effective", description: "Access high-quality digital talent at optimized budgets. Pay for outputs, not idle hours.", icon: "PiggyBank" },
  { title: "Fast Hiring", description: "Post a project and receive qualified Gen-Z applications in under 24 hours. Zero recruitment lag.", icon: "Zap" },
  { title: "Verified Talent", description: "All teens undergo basic skills vetting. Our system ensures serious, pre-screened applications.", icon: "ShieldCheck" },
  { title: "Fresh Perspectives", description: "Get authentic Gen-Z input, trending designs, and creative social ideas from the people who live them.", icon: "Sparkles" },
  { title: "Scalable Workforce", description: "Scale your team up or down based on current project loads. No long-term headcount overhead.", icon: "Expand" },
  { title: "Results Driven", description: "Funds are held securely and only disbursed when you approve the submitted deliverables. Zero risk.", icon: "Target" }
];

export const COMPANY_TALENT_CATEGORIES = [
  { title: "Development", desc: "Landing pages, simple HTML/JS widgets, QA testing, blog setups." },
  { title: "Design", desc: "UI/UX prototypes, social banners, icons, brand presentations." },
  { title: "Marketing", desc: "Influencer outreach, community moderation, growth hacks." },
  { title: "SEO Setup", desc: "Keyword research, metadata entries, competitor tracking." },
  { title: "Research", desc: "Market surveys, lead lists compilation, customer feedback calls." },
  { title: "Video Editing", desc: "Instagram reels, YouTube shorts, promotional explainers, ads." },
  { title: "Content Writing", desc: "Blog drafts, newsletter writing, copy ideas, translation." },
  { title: "Social Media", desc: "Daily postings scheduling, graphic assembly, trends tracking." }
];

export const COMPANY_HIRING_PROCESS: TimelineStep[] = [
  { step: "01", title: "Post Project", description: "Describe your requirements, specify the deliverables, timeline, and set your fixed project budget." },
  { step: "02", title: "Receive Applications", description: "Dozens of vetted teens apply with custom pitches showing why they are the perfect fit." },
  { step: "03", title: "Select Best Talent", description: "Review applicant profiles, previous works, and certificates. Chat and assign the project instantly." },
  { step: "04", title: "Receive Deliverables", description: "Review drafts in the dashboard. Approve the work to release funds and get clean, completed assets." }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    company: "FitMe India",
    industry: "D2C Health & Wellness",
    challenge: "High cost of agency contract for daily social media graphics and short product reels.",
    solution: "Onboarded three Gen-Z designers and editors on Funngro to handle creative assets production.",
    results: [
      "70% reduction in design overhead costs",
      "Content volume increased from 2 posts/week to daily updates",
      "Organic Instagram reach grew by 140% in two months"
    ],
    logo: "FM"
  },
  {
    company: "Z-Tech Solutions",
    industry: "SaaS Platform",
    challenge: "Needed database entry verification and manual testing across 50 simulated customer paths.",
    solution: "Hired 15 tech-focused teens to run validation tests, log bugs, and record interface issues.",
    results: [
      "120 hours of manual testing completed in 48 hours",
      "Identified 18 crucial UI bugs before production release",
      "Highly scalable testing completed at 80% lower cost than traditional QA vendors"
    ],
    logo: "ZT"
  },
  {
    company: "EcoPack Brands",
    industry: "Eco-Friendly D2C",
    challenge: "Needed local market research and surveys across college students in five major cities.",
    solution: "Deployed 25 teen researchers on Funngro to survey peers, photograph retailer shelfs, and gather opinions.",
    results: [
      "1,200 valid customer survey responses collected",
      "Discovered key pricing preference details within one week",
      "Successful launch of student-targeted packaging in major cities"
    ],
    logo: "EP"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "project base platform fee",
    description: "Perfect for single projects or testing the waters with young digital talent.",
    features: [
      "Post up to 3 projects",
      "Access to standard student catalog",
      "Standard application review dashboard",
      "Secured escrow system",
      "Standard support"
    ],
    isPopular: false,
    ctaText: "Post Project"
  },
  {
    name: "Growth",
    price: "₹14,999",
    period: "quarterly membership",
    description: "Designed for scaling startups and teams with recurring design, content, and code needs.",
    features: [
      "Unlimited project listings",
      "Priority matching with top 10% vetted performers",
      "Dedicated account helper manager",
      "Advanced candidate filters & screening",
      "Official brand certifications signed by Funngro",
      "24/7 priority customer support"
    ],
    isPopular: true,
    ctaText: "Get Unlimited Access"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "custom enterprise quotes",
    description: "For mid-to-large corporates requiring custom bulk hiring, compliance integration, and audits.",
    features: [
      "Managed project delivery & team lead assigned",
      "Automated tax, onboarding & NDAs paperwork",
      "Custom bulk payouts and single monthly invoices",
      "Strict legal compliance & verification audits",
      "SLA-driven completion guarantees"
    ],
    isPopular: false,
    ctaText: "Book Enterprise Call"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "What is Funngro and how does it work?",
    answer: "Funngro is a platform that connects talented teens (aged 14-22) with startup businesses and brands for freelance projects. Teens get to earn real money, gain corporate experience, and build their portfolio, while companies hire Gen-Z talent for digital tasks like coding, design, social media, and writing."
  },
  {
    question: "Who can register as a Teen on Funngro?",
    answer: "Any student or teen between the ages of 14 and 22 who has basic digital skills (like writing, design, programming, video editing) and wants to gain experience and earn pocket money can register."
  },
  {
    question: "Is it legal for teenagers to earn money on projects?",
    answer: "Yes, absolutely. Funngro operates in complete compliance with local laws. The tasks are digital, remote, micro-gigs that function like online freelancing or virtual student internships, which are fully educational and legal."
  },
  {
    question: "How do teens receive payments for their completed work?",
    answer: "All project payouts are held in Funngro's secure escrow vault. Once a brand reviews the completed work and marks it as approved, the funds are instantly released to the teen's secure wallet, which can be withdrawn to bank accounts or wallets."
  },
  {
    question: "What type of projects can companies post on Funngro?",
    answer: "Companies can post digital-first projects including Web Development, UI/UX Design, Social Media Management, Graphic Design, Content Writing, SEO Keyword Audits, Video Editing, and Competitor Research."
  },
  {
    question: "How are the skills of registered teens verified?",
    answer: "We pre-screen registered users based on mock challenges and previous portfolio uploads. Those who complete projects successfully also build a system feedback rating and receive certified skill badges."
  },
  {
    question: "What are the costs/fees for companies using the platform?",
    answer: "Companies pay a flat platform fee per project under our Starter tier, or subscribe to our popular Growth tier for unlimited listings. The actual project budget goes directly to the student upon successful completion."
  },
  {
    question: "What happens if a project deliverable is not satisfactory?",
    answer: "Funngro protects both parties with our Escrow policy. If a deliverable doesn't meet the project brief, brands can request revisions. Our support team can intervene if necessary to resolve disputes fairly."
  },
  {
    question: "Do students get a certificate for their work?",
    answer: "Yes, every successfully completed project awards the teen with an official, verifiable work certificate co-signed by Funngro and the hiring company. This is a massive boost for resumes."
  },
  {
    question: "How do I get started as a parent or guardian?",
    answer: "Parents can support their kids by reviewing their profile, helping them link a withdrawal account for earnings, and encouraging them to study real-world digital skills through active projects."
  }
];
