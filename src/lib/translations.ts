// English to Hindi translations for common UI elements
// This can be expanded to include all page content translations

export type TranslationKey = keyof typeof en;

export const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    products: "Products",
    digitalBanking: "Digital Banking",
    loans: "Loans",
    deposits: "Deposits",
    members: "Members",
    grievance: "Grievance",
    contact: "Contact",

    // Common Actions
    applyNow: "Apply Now",
    learnMore: "Learn More",
    download: "Download",
    viewAll: "View All",
    submit: "Submit",
    cancel: "Cancel",
    close: "Close",

    // Account Types
    savingsAccount: "Savings Account",
    currentAccount: "Current Account",
    fixedDeposit: "Fixed Deposit",
    recurringDeposit: "Recurring Deposit",

    // Loan Types
    homeLoan: "Home Loan",
    personalLoan: "Personal Loan",
    businessLoan: "Business Loan",
    educationLoan: "Education Loan",
    vehicleLoan: "Vehicle Loan",
    goldLoan: "Gold Loan",

    // Common Words
    features: "Features",
    eligibility: "Eligibility",
    documents: "Documents",
    rates: "Interest Rates",
    charges: "Charges",
    calculate: "Calculate",
    contactUs: "Contact Us",
    faqs: "FAQs",

    // Footer
    quickLinks: "Quick Links",
    legal: "Legal",
    followUs: "Follow Us",

    // Hero Sections
    learnMore: "Learn More",
    applyNow: "Apply Now",
    bookNow: "Book Now",

    // Form Labels
    name: "Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    message: "Message",
  },
  hi: {
    // Navigation
    home: "होम",
    about: "हमारे बारे में",
    products: "उत्पाद",
    digitalBanking: "डिजिटल बैंकिंग",
    loans: "ऋण",
    deposits: "जमा",
    members: "सदस्य",
    grievance: "शिकायत",
    contact: "संपर्क",

    // Common Actions
    applyNow: "अभी आवेदन करें",
    learnMore: "और जानें",
    download: "डाउनलोड",
    viewAll: "सभी देखें",
    submit: "जमा करें",
    cancel: "रद्द करें",
    close: "बंद करें",

    // Account Types
    savingsAccount: "बचत खाता",
    currentAccount: "चालू खाता",
    fixedDeposit: "सावधि जमा",
    recurringDeposit: "आवर्ती जमा",

    // Loan Types
    homeLoan: "गृह ऋण",
    personalLoan: "व्यक्तिगत ऋण",
    businessLoan: "व्यापार ऋण",
    educationLoan: "शिक्षा ऋण",
    vehicleLoan: "वाहन ऋण",
    goldLoan: "सोने का ऋण",

    // Common Words
    features: "विशेषताएं",
    eligibility: "पात्रता",
    documents: "दस्तावेज",
    rates: "ब्याज दर",
    charges: "शुल्क",
    calculate: "गणना करें",
    contactUs: "संपर्क करें",
    faqs: "सामान्य प्रश्न",

    // Footer
    quickLinks: "त्वरित लिंक",
    legal: "कानूनी",
    followUs: "हमारा अनुसरण करें",

    // Hero Sections
    learnMore: "और जानें",
    applyNow: "अभी आवेदन करें",
    bookNow: "अभी बुक करें",

    // Form Labels
    name: "नाम",
    email: "ईमेल",
    phone: "फ़ोन",
    address: "पता",
    message: "संदेश",
  },
} as const;

export type Language = keyof typeof translations;

export function getTranslation(key: TranslationKey, language: Language = "en"): string {
  return translations[language][key] || translations.en[key] || key;
}

// Simple hook for using translations in components
export function useTranslation(language: Language = "en") {
  return {
    t: (key: TranslationKey) => getTranslation(key, language),
    language,
  };
}

// Hindi labels for common page sections
export const hi = {
  nav: {
    home: "होम",
    about: "हमारे बारे में",
    products: "उत्पाद",
    services: "सेवाएं",
    loans: "ऋण",
    deposits: "जमा",
    digital: "डिजिटल बैंकिंग",
    contact: "संपर्क",
    netBanking: "नेट बैंकिंग",
  },
  hero: {
    tagline: "1965 से आपका पड़ोसी बैंक",
    subtitle: "भोपाल के परिवारों और व्यवसायों को विश्वास और उत्कृष्टता के साथ सेवा प्रदान करना।",
  },
  footer: {
    about: "MNS बैंक 1965 से भोपाल के परिवारों और व्यवसायों को विश्वास और उत्कृष्टता के साथ सेवा प्रदान कर रहा है।",
    quickLinks: "त्वरित लिंक",
    products: "उत्पाद",
    services: "सेवाएं",
    legal: "कानूनी",
    contactUs: "संपर्क करें",
    followUs: "हमारा अनुसरण करें",
    allRights: "सर्वाधिकार सुरक्षित",
  },
  common: {
    learnMore: "और जानें",
    applyNow: "अभी आवेदन करें",
    contactUs: "संपर्क करें",
    viewDetails: "विवरण देखें",
  },
};

export default translations;