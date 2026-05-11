import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes with proper precedence
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency in Indian format
export function formatCurrency(
  amount: number,
  options: {
    currency?: "INR" | "USD";
    showSymbol?: boolean;
    decimals?: number;
  } = {}
): string {
  const { currency = "INR", showSymbol = true, decimals = 0 } = options;

  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);

  if (!showSymbol) return formatted;

  const symbols: Record<string, string> = {
    INR: "₹",
    USD: "$",
  };

  return `${symbols[currency]}${formatted}`;
}

// Format percentage
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`;
}

// Calculate EMI
export function calculateEMI(
  principal: number,
  annualRate: number,
  tenureInMonths: number
): {
  emi: number;
  totalAmount: number;
  totalInterest: number;
  principalAmount: number;
} {
  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return {
      emi: principal / tenureInMonths,
      totalAmount: principal,
      totalInterest: 0,
      principalAmount: principal,
    };
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) /
    (Math.pow(1 + monthlyRate, tenureInMonths) - 1);

  const totalAmount = emi * tenureInMonths;
  const totalInterest = totalAmount - principal;

  return {
    emi: Math.round(emi),
    totalAmount: Math.round(totalAmount),
    totalInterest: Math.round(totalInterest),
    principalAmount: principal,
  };
}

// Calculate FD maturity amount
export function calculateFDMaturity(
  principal: number,
  annualRate: number,
  tenureInMonths: number
): {
  maturityAmount: number;
  interestEarned: number;
  effectiveRate: number;
} {
  const quarterlyRate = annualRate / 4 / 100;
  const quarters = tenureInMonths / 3;

  const maturityAmount = principal * Math.pow(1 + quarterlyRate / 100, quarters) * (quarterlyRate / 100 + 1) / (quarterlyRate / 100 + 1);
  const simpleMaturity = principal * (1 + (annualRate * tenureInMonths) / 1200);
  const compoundMaturity = principal * Math.pow(1 + annualRate / 1200, tenureInMonths / 12);

  const effectiveMaturity = principal * Math.pow(1 + quarterlyRate / 100, quarters);
  const interestEarned = effectiveMaturity - principal;

  return {
    maturityAmount: Math.round(effectiveMaturity),
    interestEarned: Math.round(interestEarned),
    effectiveRate: annualRate,
  };
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3)}...`;
}

// Generate year options (current year + next 5 years)
export function getYearOptions(): number[] {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 6 }, (_, i) => currentYear + i);
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate Indian mobile number
export function isValidMobile(mobile: string): boolean {
  const mobileRegex = /^[6-9]\d{9}$/;
  return mobileRegex.test(mobile.replace(/\D/g, ""));
}

// Format mobile number
export function formatMobile(mobile: string): string {
  const cleaned = mobile.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `+91 ${cleaned.slice(0, 5)} ${cleaned.slice(5)}`;
  }
  return mobile;
}
