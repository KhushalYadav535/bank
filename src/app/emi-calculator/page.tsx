"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Calculator, TrendingDown, PieChart, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const loanTypes = [
  { id: "home", label: "Home Loan", rate: 8.5, minAmount: 500000, maxAmount: 50000000, maxTenure: 30 },
  { id: "personal", label: "Personal Loan", rate: 12, minAmount: 50000, maxAmount: 5000000, maxTenure: 7 },
  { id: "business", label: "Business Loan", rate: 11, minAmount: 100000, maxAmount: 10000000, maxTenure: 15 },
  { id: "education", label: "Education Loan", rate: 8, minAmount: 50000, maxAmount: 2000000, maxTenure: 15 },
  { id: "vehicle", label: "Vehicle Loan", rate: 9, minAmount: 100000, maxAmount: 2000000, maxTenure: 7 },
  { id: "gold", label: "Gold Loan", rate: 9, minAmount: 10000, maxAmount: 5000000, maxTenure: 1 },
];

export default function EMICalculatorPage() {
  const [loanType, setLoanType] = useState(loanTypes[0]);
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(loanTypes[0].rate);
  const [tenure, setTenure] = useState(20);

  const emi = useMemo(() => {
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    const emiValue = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return emiValue;
  }, [principal, rate, tenure]);

  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - principal;

  const handleLoanTypeChange = (typeId: string) => {
    const type = loanTypes.find(t => t.id === typeId);
    if (type) {
      setLoanType(type);
      setRate(type.rate);
      setTenure(Math.min(tenure, type.maxTenure));
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              EMI Calculator
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Plan Your Loan Repayment
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Calculate your monthly installments instantly. Plan your finances better
              with our easy-to-use EMI calculator.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Calculator Section */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Inputs */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedCard variant="default" className="p-8">
                  {/* Loan Type */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-charcoal mb-3">Loan Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {loanTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => handleLoanTypeChange(type.id)}
                          className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            loanType.id === type.id
                              ? "bg-crimson text-white"
                              : "bg-platinum text-charcoal hover:bg-platinum/80"
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Principal Amount */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-charcoal mb-3">
                      Loan Amount
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min={loanType.minAmount}
                        max={loanType.maxAmount}
                        step={10000}
                        value={principal}
                        onChange={(e) => setPrincipal(Number(e.target.value))}
                        className="flex-1 h-2 bg-platinum rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="w-40 text-right font-display font-bold text-crimson text-lg">
                        {formatCurrency(principal)}
                      </span>
                    </div>
                    <div className="flex justify-between text-xs text-muted mt-2">
                      <span>{formatCurrency(loanType.minAmount)}</span>
                      <span>{formatCurrency(loanType.maxAmount)}</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-charcoal mb-3">
                      Interest Rate (% p.a.)
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min={5}
                        max={20}
                        step={0.5}
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="flex-1 h-2 bg-platinum rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="w-20 text-right font-display font-bold text-crimson text-lg">
                        {rate}%
                      </span>
                    </div>
                  </div>

                  {/* Tenure */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-charcoal mb-3">
                      Loan Tenure
                    </label>
                    <div className="flex items-center gap-4">
                      <input
                        type="range"
                        min={1}
                        max={loanType.maxTenure}
                        step={1}
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="flex-1 h-2 bg-platinum rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="w-24 text-right font-display font-bold text-crimson text-lg">
                        {tenure} Years
                      </span>
                    </div>
                  </div>

                  {/* Quick Amount Buttons */}
                  <div className="flex flex-wrap gap-2">
                    {[100000, 250000, 500000, 1000000, 2500000, 5000000].map((amount) => (
                      <button
                        key={amount}
                        onClick={() => setPrincipal(amount)}
                        className="px-4 py-2 bg-platinum rounded-lg text-sm text-charcoal hover:bg-crimson/10 transition-colors"
                      >
                        {amount >= 1000000 ? `₹${amount/1000000}Cr` : `₹${amount/1000}K`}
                      </button>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            </div>

            {/* Results */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AnimatedCard variant="stat" className="p-8 bg-gradient-to-br from-crimson to-crimson-light sticky top-24">
                  <h3 className="font-display text-xl font-semibold text-white mb-6">EMI Details</h3>

                  <div className="text-center mb-8 pb-8 border-b border-white/20">
                    <p className="text-white/70 text-sm mb-2">Monthly EMI</p>
                    <p className="text-4xl font-display font-bold text-gold">
                      {formatCurrency(emi)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Principal Amount</span>
                      <span className="font-display font-semibold text-white">{formatCurrency(principal)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Total Interest</span>
                      <span className="font-display font-semibold text-gold">{formatCurrency(totalInterest)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-white/20">
                      <span className="text-white font-medium">Total Payment</span>
                      <span className="font-display font-bold text-white text-xl">{formatCurrency(totalPayment)}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact">
                      <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="w-full justify-center bg-white text-crimson hover:bg-white/90">
                        Apply for Loan
                      </PremiumButton>
                    </Link>
                  </div>
                </AnimatedCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Amortization Chart */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Breakup"
            title="Payment Breakdown"
            subtitle="See how your payments are split between principal and interest."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-crimson" />
                <span className="text-charcoal font-medium">Principal ({((principal/totalPayment)*100).toFixed(1)}%)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-gold" />
                <span className="text-charcoal font-medium">Interest ({((totalInterest/totalPayment)*100).toFixed(1)}%)</span>
              </div>
            </div>

            <div className="mt-8 max-w-xl mx-auto">
              <div className="h-6 bg-platinum rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-crimson"
                  style={{ width: `${(principal/totalPayment)*100}%` }}
                />
                <div
                  className="h-full bg-gold"
                  style={{ width: `${(totalInterest/totalPayment)*100}%` }}
                />
              </div>
            </div>

            <div className="mt-10 grid md:grid-cols-3 gap-6">
              <AnimatedCard variant="default" className="p-6 text-center">
                <PieChart className="w-8 h-8 text-crimson mx-auto mb-4" />
                <p className="text-muted mb-2">Principal</p>
                <p className="font-display text-2xl font-bold text-charcoal">{formatCurrency(principal)}</p>
              </AnimatedCard>
              <AnimatedCard variant="default" className="p-6 text-center">
                <TrendingDown className="w-8 h-8 text-gold mx-auto mb-4" />
                <p className="text-muted mb-2">Interest</p>
                <p className="font-display text-2xl font-bold text-charcoal">{formatCurrency(totalInterest)}</p>
              </AnimatedCard>
              <AnimatedCard variant="default" className="p-6 text-center">
                <ArrowUpRight className="w-8 h-8 text-crimson mx-auto mb-4" />
                <p className="text-muted mb-2">Total</p>
                <p className="font-display text-2xl font-bold text-charcoal">{formatCurrency(totalPayment)}</p>
              </AnimatedCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Tips"
            title="Smart Loan Planning Tips"
            subtitle="Make the most of your loans with these tips."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              { title: "Choose Right Tenure", desc: "Longer tenure = lower EMI but higher interest. Choose based on your monthly capacity." },
              { title: "Prepay When Possible", desc: "Make partial prepayments to reduce principal and save on interest." },
              { title: "Compare Rates", desc: "Check interest rates across different loan types before applying." },
              { title: "Maintain Good CIBIL", desc: "A score above 700 gets you better interest rates and faster approval." },
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <h4 className="font-display font-semibold text-charcoal">{tip.title}</h4>
                  <p className="text-muted mt-2">{tip.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}