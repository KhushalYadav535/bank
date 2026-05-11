// Bank Information
export const BANK = {
  name: "Mahanagar Nagrik Sahakari Bank Ltd.",
  shortName: "MNS Bank",
  tagline: "Your Neighbourhood Bank Since 1965",
  location: "Bhopal, Madhya Pradesh",
  website: "mnsbankbhopal.com",
  established: 1965,
  regulatory: "RBI Regulated Urban Cooperative Bank",
  insurance: "DICGC Insured up to ₹5 Lakhs",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products", hasMegaMenu: true },
  { label: "Digital Banking", href: "/digital-banking" },
  { label: "Loans", href: "/loans" },
  { label: "Deposits", href: "/deposits" },
  { label: "Members", href: "/members" },
  { label: "Grievance", href: "/grievance" },
  { label: "Contact", href: "/contact" },
] as const;

// Products Mega Menu Data
export const MEGA_MENU_PRODUCTS = {
  accounts: {
    title: "Accounts",
    items: [
      { name: "Savings Account", href: "/products/savings", icon: "Wallet" },
      { name: "Current Account", href: "/products/current", icon: "Briefcase" },
      { name: "NRI Account", href: "/products/nri", icon: "Globe" },
    ],
  },
  deposits: {
    title: "Deposits",
    items: [
      { name: "Fixed Deposit", href: "/deposits#fixed", icon: "Lock" },
      { name: "Recurring Deposit", href: "/deposits#recurring", icon: "Calendar" },
      { name: "Tax Saver FD", href: "/deposits#tax-saver", icon: "FileText" },
    ],
  },
  loans: {
    title: "Loans",
    items: [
      { name: "Home Loan", href: "/loans#home", icon: "Home" },
      { name: "Business Loan", href: "/loans#business", icon: "TrendingUp" },
      { name: "Personal Loan", href: "/loans#personal", icon: "User" },
      { name: "Education Loan", href: "/loans#education", icon: "GraduationCap" },
      { name: "Vehicle Loan", href: "/loans#vehicle", icon: "Car" },
      { name: "Gold Loan", href: "/loans#gold", icon: "Gem" },
    ],
  },
} as const;

// Current Interest Rates
export const INTEREST_RATES = {
  savings: 3.5,
  fd: {
    "1year": 7.25,
    "2year": 7.40,
    "3year": 7.50,
    "5year": 7.25,
  },
  rd: {
    "1year": 7.0,
    "2year": 7.15,
    "3year": 7.25,
    "5year": 7.0,
  },
  seniorCitizenBonus: 0.5,
} as const;

// Featured Rate Cards
export const RATE_CARDS: Array<{
  id: string;
  title: string;
  rate: number;
  tenure: string;
  description: string;
  icon: string;
  cta: string;
  href: string;
  highlight?: boolean;
}> = [
  {
    id: "savings",
    title: "Savings Account",
    rate: INTEREST_RATES.savings,
    tenure: "Balance maintained",
    description: "Earn interest on your daily balance",
    icon: "Wallet",
    cta: "Open Account",
    href: "/products/savings",
    highlight: false,
  },
  {
    id: "fd-1yr",
    title: "Fixed Deposit",
    rate: INTEREST_RATES.fd["1year"],
    tenure: "1 Year",
    description: "Secure your savings with guaranteed returns",
    icon: "Lock",
    cta: "Book FD",
    href: "/deposits#fixed",
    highlight: false,
  },
  {
    id: "rd",
    title: "Recurring Deposit",
    rate: INTEREST_RATES.rd["1year"],
    tenure: "Monthly",
    description: "Build your savings systematically",
    icon: "Calendar",
    cta: "Start RD",
    href: "/deposits#recurring",
    highlight: false,
  },
  {
    id: "fd-senior",
    title: "Senior Citizen FD",
    rate: INTEREST_RATES.fd["1year"] + INTEREST_RATES.seniorCitizenBonus,
    tenure: "1 Year",
    description: "Extra 0.50% for our senior members",
    icon: "Heart",
    cta: "Book Now",
    href: "/deposits#senior",
    highlight: true,
  },
] as const;

// Products Grid Data
export const PRODUCTS: {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}[] = [
  {
    id: "savings",
    title: "Savings Accounts",
    description: "Grow your wealth with our feature-rich savings accounts",
    icon: "Wallet",
    href: "/products/savings",
  },
  {
    id: "fixed-deposits",
    title: "Fixed Deposits",
    description: "Guaranteed returns with flexible tenure options",
    icon: "Lock",
    href: "/deposits#fixed",
  },
  {
    id: "home-loans",
    title: "Home Loans",
    description: "Make your dream home a reality with affordable EMI",
    icon: "Home",
    href: "/loans#home",
  },
  {
    id: "business-loans",
    title: "Business Loans",
    description: "Fuel your business growth with quick financing",
    icon: "Briefcase",
    href: "/loans#business",
  },
  {
    id: "education-loans",
    title: "Education Loans",
    description: "Invest in knowledge with transparent terms",
    icon: "GraduationCap",
    href: "/loans#education",
  },
  {
    id: "digital",
    title: "Digital Banking",
    description: "Bank anywhere, anytime with our digital services",
    icon: "Smartphone",
    href: "/digital-banking",
  },
];

// Stats Data
export const BANK_STATS: {
  value: number;
  suffix: string;
  label: string;
}[] = [
  { value: 58, suffix: "+", label: "Years of Service" },
  { value: 10000, suffix: "+", label: "Happy Members" },
  { value: 500, suffix: " Cr.", label: "Total Deposits" },
  { value: 3, suffix: "", label: "Branches in Bhopal" },
];

// News/Updates Data
export const NEWS_ITEMS: {
  id: string;
  date: string;
  dateLabel: string;
  title: string;
  excerpt: string;
  href: string;
}[] = [
  {
    id: "1",
    date: "2026-05-01",
    dateLabel: "May 2026",
    title: "New Branch Opening in Kolar Road",
    excerpt:
      "We are excited to announce the opening of our fourth branch to serve you better in the Kolar Road area.",
    href: "/news/kolar-branch",
  },
  {
    id: "2",
    date: "2026-04-15",
    dateLabel: "April 2026",
    title: "Enhanced Mobile Banking Experience",
    excerpt:
      "Our new mobile app version brings improved UI, faster transactions, and new features for your convenience.",
    href: "/news/mobile-app-v2",
  },
  {
    id: "3",
    date: "2026-04-01",
    dateLabel: "April 2026",
    title: "Festival Deposit Rates 2026",
    excerpt:
      "Special festive deposit rates available for a limited period. Hurry!",
    href: "/news/festival-rates-2026",
  },
];

// Fraud Awareness Messages
export const FRAUD_WARNINGS = [
  "Never share your OTP, PIN or password with anyone",
  "MNS Bank will never call asking for your credentials",
  "Report fraud: 0755-XXXXXXX",
  "Beware of phishing links — always check the URL",
  "DICGC insures your deposits up to ₹5 Lakhs",
  "Enable two-factor authentication for net banking",
  "Never click on suspicious links in emails or SMS",
] as const;

// Footer Links
export const FOOTER_LINKS = {
  products: [
    { label: "Savings Account", href: "/products/savings" },
    { label: "Current Account", href: "/products/current" },
    { label: "Fixed Deposit", href: "/deposits/fixed-deposit" },
    { label: "Recurring Deposit", href: "/deposits/recurring-deposit" },
    { label: "Personal Loans", href: "/loans/personal-loan" },
    { label: "Home Loans", href: "/loans#home" },
  ],
  digitalServices: [
    { label: "Net Banking", href: "/digital-banking" },
    { label: "Mobile Banking", href: "/digital-banking" },
    { label: "UPI Payments", href: "/digital-banking" },
    { label: "BBPS Bill Payment", href: "/digital-banking" },
    { label: "EMI Calculator", href: "/emi-calculator" },
  ],
  quickLinks: [
    { label: "About Us", href: "/about" },
    { label: "Membership", href: "/membership" },
    { label: "Interest Rates", href: "/interest-rates" },
    { label: "Service Charges", href: "/service-charges" },
    { label: "Annual Reports", href: "/annual-reports" },
    { label: "Branch Locator", href: "/locator" },
    { label: "Download Forms", href: "/download-forms" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Policy Centre", href: "/policy-centre" },
    { label: "Cyber Awareness", href: "/cyber-awareness" },
    { label: "Fair Practices Code", href: "/policy-centre" },
    { label: "KYC Policy", href: "/policy-centre" },
    { label: "Grievance Redressal", href: "/grievance" },
    { label: "DEAF Policy", href: "/deaf-deposits" },
  ],
} as const;

// Branch Locations
export const BRANCHES = [
  {
    id: "main",
    name: "Main Branch",
    address:
      "MNS Bank Building, Near Old GP, Zone No. 1, Mahasabha Nagar, Bhopal - 462001",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    mapsUrl:
      "https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh",
  },
  {
    id: "arya-samaj",
    name: "Arya Samaj Branch",
    address: "Shop No. 5-6, Arya Samaj Road, Bhopal - 462002",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    mapsUrl:
      "https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh",
  },
  {
    id: "habib-ganj",
    name: "Habib Ganj Branch",
    address: "Near Habib Ganj Railway Station, Bhopal - 462001",
    phone: "0755-XXXXXXX",
    hours: "Mon-Sat: 10:00 AM - 4:00 PM",
    mapsUrl:
      "https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh",
  },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/mnsbankbhopal",
  twitter: "https://twitter.com/mnsbankbhopal",
  instagram: "https://instagram.com/mnsbankbhopal",
} as const;
