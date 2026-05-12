"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription, CardHeader } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { GeometricBackground } from "@/components/3d";
import { INTEREST_RATES } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";
import {
  ArrowRight,
  Lock,
  Calendar,
  Calculator,
  Shield,
  AlertCircle,
  CheckCircle,
  Star,
} from "lucide-react";
import Link from "next/link";

const fdRates = [
  { tenure: "7 days to 45 days", general: 4.50, senior: 5.00 },
  { tenure: "46 days to 179 days", general: 5.50, senior: 6.00 },
  { tenure: "180 days to 1 year", general: 7.25, senior: 7.75 },
  { tenure: "1 year to 2 years", general: 7.40, senior: 7.90 },
  { tenure: "2 years to 3 years", general: 7.50, senior: 8.00 },
  { tenure: "3 years to 5 years", general: 7.25, senior: 7.75 },
  { tenure: "5 years to 10 years", general: 7.25, senior: 7.75 },
];

const rdRates = [
  { tenure: "6 months", general: 6.00, senior: 6.50 },
  { tenure: "1 year", general: 7.00, senior: 7.50 },
  { tenure: "2 years", general: 7.15, senior: 7.65 },
  { tenure: "3 years", general: 7.25, senior: 7.75 },
  { tenure: "5 years", general: 7.00, senior: 7.50 },
];

const savingsFeatures = [
  { name: "Minimum Balance", value: "₹1,000" },
  { name: "Interest Rate", value: "3.5% p.a." },
  { name: "Debit Card", value: "Free" },
  { name: "Internet Banking", value: "Free" },
  { name: "Mobile Banking", value: "Free" },
  { name: "UPI Transfers", value: "Free" },
];

export default function DepositsPage() {
  const [activeTab, setActiveTab] = useState<"fd" | "rd" | "savings">("fd");
  const [depositAmount, setDepositAmount] = useState(100000);
  const [tenureMonths, setTenureMonths] = useState(12);
  const [selectedRate, setSelectedRate] = useState(7.25);

  const calculateMaturity = () => {
    const quarterlyRate = selectedRate / 4 / 100;
    const quarters = tenureMonths / 3;
    const maturityAmount = depositAmount * Math.pow(1 + quarterlyRate / 100, quarters);
    return Math.round(maturityAmount);
  };

  const interestEarned = calculateMaturity() - depositAmount;

  return (
    <main id="main-content" className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson-dark overflow-hidden">
        <GeometricBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-crimson-dark/85" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm">
              Deposit Products
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Grow Your Savings Securely
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Choose from Fixed Deposits, Recurring Deposits, and Savings Accounts with
              competitive interest rates and DICGC insurance up to ₹5 lakhs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-semibold rounded-full hover:bg-crimson/90 transition-all hover:scale-105 hover:shadow-xl">
                Open FD Today <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/emi-calculator" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
                <Calculator className="w-4 h-4" /> Calculate Returns
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

      {/* Deposit Tabs */}
      <section className="section-padding bg-ivory -mt-16 relative z-10">
        <div className="container-premium">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "fd", name: "Fixed Deposit", icon: Lock },
              { id: "rd", name: "Recurring Deposit", icon: Calendar },
              { id: "savings", name: "Savings Account", icon: Star },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-crimson text-white shadow-lg shadow-crimson/30"
                    : "bg-white text-charcoal hover:bg-platinum border border-platinum/60 hover:border-crimson/30"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium">{tab.name}</span>
              </motion.button>
            ))}
          </div>

          {activeTab === "fd" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* FD Rates Table */}
              <div className="mb-12 overflow-x-auto">
                <AnimatedCard variant="default">
                  <CardHeader>
                    <CardTitle className="text-2xl">Fixed Deposit Interest Rates</CardTitle>
                    <CardDescription className="mt-2">
                      Effective from May 2026. Rates are per annum.
                    </CardDescription>
                  </CardHeader>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-platinum">
                          <th className="text-left py-4 px-4 text-sm font-medium text-muted">Tenure</th>
                          <th className="text-center py-4 px-4 text-sm font-medium text-muted">General Public</th>
                          <th className="text-center py-4 px-4 text-sm font-medium text-crimson">Senior Citizens</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fdRates.map((row, index) => (
                          <tr key={index} className="border-b border-platinum/50 hover:bg-platinum/50 transition-colors">
                            <td className="py-4 px-4 font-medium">{row.tenure}</td>
                            <td className="py-4 px-4 text-center">{row.general}%</td>
                            <td className="py-4 px-4 text-center font-semibold text-crimson">
                              <div className="flex items-center justify-center gap-2">
                                <Star className="w-4 h-4 text-gold" />
                                {row.senior}%
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-6 flex items-start gap-3 p-4 bg-gold/10 rounded-xl">
                    <Star className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal">
                      <strong>Senior Citizen Benefit:</strong> Additional 0.50% p.a. on all fixed deposit tenures.
                      Age proof required at the time of deposit.
                    </p>
                  </div>
                </AnimatedCard>
              </div>

              {/* FD Calculator */}
              <div className="max-w-3xl mx-auto">
                <AnimatedCard variant="default">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <Calculator className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">FD Maturity Calculator</CardTitle>
                      <p className="text-xs text-muted">Calculate your FD returns</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-charcoal">Deposit Amount</label>
                      <span className="text-sm font-semibold text-crimson">
                        {formatCurrency(depositAmount)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1000}
                      max={10000000}
                      step={1000}
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-platinum rounded-lg appearance-none cursor-pointer accent-crimson"
                    />
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium text-charcoal">Tenure</label>
                      <span className="text-sm font-semibold text-crimson">
                        {tenureMonths < 12
                          ? `${tenureMonths} days`
                          : `${Math.floor(tenureMonths / 12)} years ${tenureMonths % 12 !== 0 ? `${tenureMonths % 12} months` : ""}`}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={30}
                      max={120}
                      step={30}
                      value={tenureMonths}
                      onChange={(e) => setTenureMonths(parseInt(e.target.value))}
                      className="w-full h-2 bg-platinum rounded-lg appearance-none cursor-pointer accent-crimson"
                    />
                    <div className="flex justify-between text-xs text-muted mt-1">
                      <span>30 days</span>
                      <span>10 years</span>
                    </div>
                  </div>

                  <div className="p-6 bg-gradient-to-br from-crimson to-crimson-dark rounded-xl text-white">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-sm text-white/80">Principal Amount</p>
                        <p className="font-display text-2xl font-bold mt-1">
                          {formatCurrency(depositAmount)}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-white/80">Interest Earned</p>
                        <p className="font-display text-2xl font-bold text-gold mt-1">
                          {formatCurrency(interestEarned)}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-white/80">Maturity Amount</p>
                        <p className="font-display text-4xl font-bold mt-1">
                          {formatCurrency(calculateMaturity())}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact" className="inline-block mt-6 w-full">
                    <PremiumButton size="lg" className="w-full" rightIcon={<ArrowRight className="w-5 h-5" />}>
                      Book Fixed Deposit
                    </PremiumButton>
                  </Link>
                </AnimatedCard>
              </div>
            </motion.div>
          )}

          {activeTab === "rd" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatedCard variant="default">
                <CardHeader>
                  <CardTitle className="text-2xl">Recurring Deposit Interest Rates</CardTitle>
                  <CardDescription className="mt-2">
                    Effective from May 2026. Start your RD with as little as ₹100/month.
                  </CardDescription>
                </CardHeader>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-platinum">
                        <th className="text-left py-4 px-4 text-sm font-medium text-muted">Tenure</th>
                        <th className="text-center py-4 px-4 text-sm font-medium text-muted">General Public</th>
                        <th className="text-center py-4 px-4 text-sm font-medium text-crimson">Senior Citizens</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rdRates.map((row, index) => (
                        <tr key={index} className="border-b border-platinum/50 hover:bg-platinum/50 transition-colors">
                          <td className="py-4 px-4 font-medium">{row.tenure}</td>
                          <td className="py-4 px-4 text-center">{row.general}%</td>
                          <td className="py-4 px-4 text-center font-semibold text-crimson">
                            <div className="flex items-center justify-center gap-2">
                              <Star className="w-4 h-4 text-gold" />
                              {row.senior}%
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Link href="/contact" className="inline-block mt-6">
                  <PremiumButton rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Start Recurring Deposit
                  </PremiumButton>
                </Link>
              </AnimatedCard>
            </motion.div>
          )}

          {activeTab === "savings" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AnimatedCard variant="default">
                <CardHeader>
                  <CardTitle className="text-2xl">Savings Account Features</CardTitle>
                  <CardDescription className="mt-2">
                    Earn interest on your daily balance with our feature-rich savings accounts.
                  </CardDescription>
                </CardHeader>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {savingsFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 bg-platinum rounded-xl flex items-center justify-between"
                    >
                      <span className="text-charcoal">{feature.name}</span>
                      <span className="font-semibold text-crimson">{feature.value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gold/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal">
                      <strong>Interest Rate:</strong> 3.5% p.a. calculated on daily balance and credited
                      quarterly.
                    </p>
                  </div>
                </div>

                <Link href="/contact" className="inline-block mt-6">
                  <PremiumButton rightIcon={<ArrowRight className="w-4 h-4" />}>
                    Open Savings Account
                  </PremiumButton>
                </Link>
              </AnimatedCard>
            </motion.div>
          )}
        </div>
      </section>

      {/* DICGC Insurance Section */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeader
                eyebrow="Deposit Safety"
                title="Your Deposits Are Protected"
                align="left"
                subtitle="All deposits with MNS Bank are insured by DICGC up to ₹5 lakhs per depositor."
              />

              <div className="mt-6 space-y-4">
                {[
                  "Insurance cover of ₹5,00,000 per depositor",
                  "Covers principal and interest amount",
                  "Automatic coverage - no separate application needed",
                  "Valid across all branches of the bank",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-crimson shrink-0" />
                    <span className="text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <AnimatedCard variant="default">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-crimson to-crimson-light flex items-center justify-center shadow-xl mb-6">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-3xl">₹5,00,000</CardTitle>
                  <CardDescription className="mt-2">
                    DICGC Insurance Coverage per depositor
                  </CardDescription>
                  <p className="mt-4 text-sm text-muted">
                    Deposit Insurance and Credit Guarantee Corporation (DICGC) is a wholly-owned
                    subsidiary of Reserve Bank of India.
                  </p>
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-platinum border-t border-b border-platinum">
        <div className="container-premium">
          <div className="flex items-start gap-3 text-xs text-muted">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              * Rates are subject to change. The rates mentioned above are for general public. Senior citizens
              (60 years and above) are eligible for additional 0.50% p.a. on select deposits. For NRI deposits,
              separate rates apply. Please visit nearest branch or contact us for current applicable rates.
              TDS is applicable on interest earned as per Income Tax regulations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
