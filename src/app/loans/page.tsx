"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription, CardHeader } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { AnimatedMeshBackground } from "@/components/3d";
import { calculateEMI, formatCurrency } from "@/lib/utils";
import {
  ArrowRight,
  Home,
  Briefcase,
  GraduationCap,
  User,
  Car,
  Gem,
  Calculator,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

const loanTypes = [
  {
    id: "home",
    name: "Home Loan",
    icon: Home,
    rate: "8.50%",
    maxAmount: "₹2 Crore",
    tenure: "Up to 30 years",
    eligibility: "Indian citizens, 21-65 years, salaried or self-employed",
    color: "from-crimson to-crimson-light",
  },
  {
    id: "business",
    name: "Business Loan",
    icon: Briefcase,
    rate: "11.00%",
    maxAmount: "₹50 Lakh",
    tenure: "Up to 7 years",
    eligibility: "Business owners, professionals, self-employed individuals",
    color: "from-charcoal to-charcoal-light",
  },
  {
    id: "education",
    name: "Education Loan",
    icon: GraduationCap,
    rate: "9.00%",
    maxAmount: "₹30 Lakh",
    tenure: "Up to 15 years",
    eligibility: "Students admitted to recognized institutions",
    color: "from-gold to-gold-light",
  },
  {
    id: "personal",
    name: "Personal Loan",
    icon: User,
    rate: "12.00%",
    maxAmount: "₹20 Lakh",
    tenure: "Up to 5 years",
    eligibility: "Salaried individuals with regular income",
    color: "from-crimson to-crimson-light",
  },
  {
    id: "vehicle",
    name: "Vehicle Loan",
    icon: Car,
    rate: "9.50%",
    maxAmount: "₹25 Lakh",
    tenure: "Up to 7 years",
    eligibility: "Indian citizens with stable income",
    color: "from-charcoal to-charcoal-light",
  },
  {
    id: "gold",
    name: "Gold Loan",
    icon: Gem,
    rate: "7.00%",
    maxAmount: "₹1 Crore",
    tenure: "Up to 3 years",
    eligibility: "Owner of gold ornaments, 18+ years",
    color: "from-gold to-gold-light",
  },
];

export default function LoansPage() {
  const [activeTab, setActiveTab] = useState("home");
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenureMonths, setTenureMonths] = useState(60);
  const [annualRate, setAnnualRate] = useState(8.5);

  const activeLoan = loanTypes.find((loan) => loan.id === activeTab) || loanTypes[0];

  const emiResult = calculateEMI(loanAmount, annualRate, tenureMonths);

  return (
    <main id="main-content" className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal-dark via-charcoal to-crimson overflow-hidden">
        <AnimatedMeshBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-crimson/85" />

        {/* Decorative floating orbs */}
        <div className="absolute top-24 right-40 w-48 h-48 bg-gold/15 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.8s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm">
              Loan Products
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Realize Your Dreams
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              From buying your dream home to funding your education, we offer competitive rates
              and flexible terms for all your financial needs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-semibold rounded-full hover:bg-crimson/90 transition-all hover:scale-105 hover:shadow-xl">
                Apply for Loan <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/emi-calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
                <Calculator className="w-4 h-4" /> Calculate EMI
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory via-transparent to-transparent" />

        {/* Animated bottom wave */}
        <div className="absolute bottom-32 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Loan Type Tabs */}
      <section className="section-padding bg-ivory -mt-16 relative z-10">
        <div className="container-premium">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {loanTypes.map((loan) => {
              const Icon = loan.icon;
              return (
                <motion.button
                  key={loan.id}
                  onClick={() => {
                    setActiveTab(loan.id);
                    setAnnualRate(parseFloat(loan.rate));
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeTab === loan.id
                      ? "bg-crimson text-white shadow-lg shadow-crimson/30"
                      : "bg-white text-charcoal hover:bg-platinum border border-platinum"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{loan.name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Loan Details */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Loan Info */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatedCard variant="default">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activeLoan.color} flex items-center justify-center shadow-lg mb-6`}>
                  <activeLoan.icon className="w-8 h-8 text-white" />
                </div>

                <CardHeader>
                  <CardTitle className="text-3xl">{activeLoan.name}</CardTitle>
                </CardHeader>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 bg-platinum rounded-xl">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Interest Rate</p>
                    <p className="font-display text-2xl font-bold text-crimson">{activeLoan.rate}</p>
                    <p className="text-xs text-muted">p.a. onwards</p>
                  </div>
                  <div className="p-4 bg-platinum rounded-xl">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Max Amount</p>
                    <p className="font-display text-2xl font-bold text-crimson">{activeLoan.maxAmount}</p>
                  </div>
                  <div className="p-4 bg-platinum rounded-xl">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Tenure</p>
                    <p className="font-display text-2xl font-bold text-crimson">{activeLoan.tenure}</p>
                  </div>
                  <div className="p-4 bg-platinum rounded-xl">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Processing</p>
                    <p className="font-display text-2xl font-bold text-crimson">Low Fees</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-crimson/5 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-charcoal">Eligibility Criteria</p>
                      <p className="text-sm text-muted mt-1">{activeLoan.eligibility}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact">
                    <PremiumButton rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Apply Now
                    </PremiumButton>
                  </Link>
                  <PremiumButton variant="outlined">
                    Download Brochure
                  </PremiumButton>
                </div>
              </AnimatedCard>
            </motion.div>

            {/* Right: EMI Calculator */}
            <motion.div
              key={`calc-${activeTab}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <AnimatedCard variant="default">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">EMI Calculator</CardTitle>
                    <p className="text-xs text-muted">Calculate your monthly instalment</p>
                  </div>
                </div>

                {/* Loan Amount Slider */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-charcoal">Loan Amount</label>
                    <span className="text-sm font-semibold text-crimson">
                      {formatCurrency(loanAmount, { showSymbol: true })}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={20000000}
                    step={100000}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                    className="w-full h-2 bg-platinum rounded-lg appearance-none cursor-pointer accent-crimson"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>₹1 Lakh</span>
                    <span>₹2 Crore</span>
                  </div>
                </div>

                {/* Tenure Slider */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-charcoal">Tenure</label>
                    <span className="text-sm font-semibold text-crimson">
                      {Math.floor(tenureMonths / 12)} years {tenureMonths % 12 !== 0 ? `${tenureMonths % 12} months` : ""}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={12}
                    max={360}
                    step={6}
                    value={tenureMonths}
                    onChange={(e) => setTenureMonths(parseInt(e.target.value))}
                    className="w-full h-2 bg-platinum rounded-lg appearance-none cursor-pointer accent-crimson"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                {/* Interest Rate Slider */}
                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-charcoal">Interest Rate</label>
                    <span className="text-sm font-semibold text-crimson">{annualRate}% p.a.</span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={18}
                    step={0.25}
                    value={annualRate}
                    onChange={(e) => setAnnualRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-platinum rounded-lg appearance-none cursor-pointer accent-crimson"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>6%</span>
                    <span>18%</span>
                  </div>
                </div>

                {/* EMI Result */}
                <div className="p-6 bg-gradient-to-br from-crimson to-crimson-dark rounded-xl text-white">
                  <p className="text-sm text-white/80 mb-1">Your Monthly EMI</p>
                  <p className="font-display text-4xl font-bold">
                    {formatCurrency(emiResult.emi, { showSymbol: true })}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/20">
                    <div>
                      <p className="text-xs text-white/60">Principal</p>
                      <p className="text-sm font-medium">
                        {formatCurrency(loanAmount, { showSymbol: true })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Total Interest</p>
                      <p className="text-sm font-medium">
                        {formatCurrency(emiResult.totalInterest, { showSymbol: true })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Total Payable</p>
                      <p className="text-sm font-medium">
                        {formatCurrency(emiResult.totalAmount, { showSymbol: true })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-2 text-xs text-muted">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p>EMI calculated is indicative. Actual EMI may vary based on processing fees and final approval.</p>
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Get Started"
            title="Loan Inquiry Form"
            subtitle="Fill out the form below and our team will get back to you within 24 hours."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="default">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Loan Type *</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all">
                      <option value="">Select loan type</option>
                      {loanTypes.map((loan) => (
                        <option key={loan.id} value={loan.id}>{loan.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Loan Amount (₹)</label>
                    <input
                      type="number"
                      placeholder="Enter desired amount"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Nearest Branch</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all">
                      <option value="">Select branch</option>
                      <option value="main">Main Branch</option>
                      <option value="arya-samaj">Arya Samaj Branch</option>
                      <option value="habib-ganj">Habib Ganj Branch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Message (Optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="consent" required className="mt-1 accent-crimson" />
                  <label htmlFor="consent" className="text-sm text-muted">
                    I consent to MNS Bank contacting me regarding this inquiry. I have read and agree to the{" "}
                    <Link href="/legal/privacy" className="text-crimson underline">Privacy Policy</Link>{" "}
                    and{" "}
                    <Link href="/legal/kyc" className="text-crimson underline">KYC Policy</Link>.
                  </label>
                </div>

                <PremiumButton size="lg" className="w-full" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Submit Inquiry
                </PremiumButton>
              </form>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
