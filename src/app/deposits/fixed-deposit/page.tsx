"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Lock, Calendar, Shield, TrendingUp, Gift, Calculator, Percent, Clock } from "lucide-react";
import Link from "next/link";

const fdRates = [
  { tenure: "7 Days to 14 Days", rate: "4.50%", seniorRate: "5.00%" },
  { tenure: "15 Days to 29 Days", rate: "4.50%", seniorRate: "5.00%" },
  { tenure: "30 Days to 45 Days", rate: "5.00%", seniorRate: "5.50%" },
  { tenure: "46 Days to 90 Days", rate: "5.50%", seniorRate: "6.00%" },
  { tenure: "91 Days to 180 Days", rate: "6.00%", seniorRate: "6.50%" },
  { tenure: "181 Days to 1 Year", rate: "7.25%", seniorRate: "7.75%" },
  { tenure: "1-2 Years", rate: "7.40%", seniorRate: "7.90%" },
  { tenure: "2-3 Years", rate: "7.50%", seniorRate: "8.00%" },
  { tenure: "3-5 Years", rate: "7.25%", seniorRate: "7.75%" },
  { tenure: "Above 5 Years", rate: "7.00%", seniorRate: "7.50%" },
];

const features = [
  { icon: Lock, title: "Safe & Secure", description: "DICGC insured up to ₹5,00,000 per depositor" },
  { icon: TrendingUp, title: "Higher Returns", description: "Competitive interest rates up to 8.00% for senior citizens" },
  { icon: Calendar, title: "Flexible Tenure", description: "Choose from 7 days to 10 years as per your need" },
  { icon: Gift, title: "Loan Against FD", description: "Get up to 90% loan against your fixed deposit" },
  { icon: Percent, title: "Quarterly Interest", description: "Get interest credited quarterly or monthly" },
  { icon: Shield, title: "Nomination Facility", description: "Add nominee for easy claim settlement" },
];

const fdTypes = [
  { type: "Regular FD", minAmount: "₹1,000", tenure: "7 days - 10 years", special: "Standard FD for all customers" },
  { type: "Senior Citizen FD", minAmount: "₹1,000", tenure: "7 days - 10 years", special: "Extra 0.50% for age 60+" },
  { type: "NRI FD", minAmount: "₹5,000", tenure: "1 year - 10 years", special: "NRE/NRO accounts eligible" },
  { type: "Tax Saver FD", minAmount: "₹1,000", tenure: "5 years", special: "Tax benefit under Section 80C" },
  { type: "Cumulative FD", minAmount: "₹1,000", tenure: "1 year - 10 years", special: "Compound interest on maturity" },
  { type: "Non-Cumulative FD", minAmount: "₹1,000", tenure: "6 months - 10 years", regular: "Monthly/Quarterly interest payout" },
];

export default function FixedDepositPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-crimson to-gold/20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              Fixed Deposit
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Secure Your Future
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Lock in attractive interest rates with our safe and secure Fixed Deposits.
              Guaranteed returns with the backing of DICGC insurance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Book FD Now
                </PremiumButton>
              </Link>
              <a href="#calculator">
                <PremiumButton size="lg" variant="outlined" className="text-white border-white hover:bg-white/10" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Returns
                </PremiumButton>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Interest Rates */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Interest Rates"
            title="FD Interest Rates"
            subtitle="Competitive rates for your fixed deposits. Senior citizens get additional 0.50%."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-crimson/20">
                  <th className="text-left py-4 px-4 font-display font-semibold text-charcoal">Tenure</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">General Rate</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Senior Citizen</th>
                </tr>
              </thead>
              <tbody>
                {fdRates.map((row, index) => (
                  <tr key={row.tenure} className="border-b border-platinum hover:bg-platinum/50 transition-colors">
                    <td className="py-4 px-4 text-charcoal">{row.tenure}</td>
                    <td className="py-4 px-4 text-center font-medium text-crimson">{row.rate}</td>
                    <td className="py-4 px-4 text-center font-medium text-gold">{row.seniorRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Why FD"
            title="Benefits of Fixed Deposit"
            subtitle="Why choose MNS Bank Fixed Deposit?"
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-charcoal">{feature.title}</h3>
                  <p className="text-muted mt-2">{feature.description}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FD Types */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Variants"
            title="Types of Fixed Deposits"
            subtitle="Choose the FD type that suits your needs."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fdTypes.map((fd, index) => (
              <motion.div
                key={fd.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 h-full">
                  <h3 className="font-display text-xl font-semibold text-charcoal">{fd.type}</h3>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="text-xs text-muted">Minimum Amount</p>
                      <p className="font-medium text-charcoal">{fd.minAmount}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Tenure</p>
                      <p className="font-medium text-charcoal">{fd.tenure}</p>
                    </div>
                    <div className="pt-3 border-t border-platinum">
                      <p className="text-sm text-crimson">{fd.special}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Against FD */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedCard variant="stat" className="p-10 bg-gradient-to-br from-charcoal to-charcoal-800">
              <div className="text-center">
                <h3 className="font-display text-3xl font-bold text-white mb-4">Loan Against Fixed Deposit</h3>
                <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
                  Need urgent funds? Avail of our hassle-free loan against your fixed deposit at competitive interest rates.
                  Continue earning interest on your FD while meeting your financial needs.
                </p>
                <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  <div>
                    <p className="text-4xl font-display font-bold text-gold">90%</p>
                    <p className="text-white/60 mt-2">Loan Amount</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-gold">2%</p>
                    <p className="text-white/60 mt-2">Above FD Rate</p>
                  </div>
                  <div>
                    <p className="text-4xl font-display font-bold text-gold">24 Hrs</p>
                    <p className="text-white/60 mt-2">Disbursement</p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionHeader
                eyebrow="Eligibility"
                title="Who Can Open?"
                subtitle="Eligibility criteria for FD."
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <AnimatedCard variant="default" className="p-6 mt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson" />
                      <span>Individual above 18 years</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson" />
                      <span>Senior citizens (60+ years)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson" />
                      <span>NRIs with valid Indian identity</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson" />
                      <span>Joint accounts allowed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson" />
                      <span>Minors (with guardian)</span>
                    </li>
                  </ul>
                </AnimatedCard>
              </motion.div>
            </div>

            <div>
              <SectionHeader
                eyebrow="Documents"
                title="Required Documents"
                subtitle="Documents needed for FD."
              />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <AnimatedCard variant="default" className="p-6 mt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-crimson" />
                      <span>Identity Proof (Aadhaar/PAN)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-crimson" />
                      <span>Address Proof</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-crimson" />
                      <span>Passport Size Photo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-crimson" />
                      <span>Existing Account Details</span>
                    </li>
                  </ul>
                </AnimatedCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="section-padding bg-platinum">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Calculator className="w-16 h-16 text-crimson mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-charcoal">Calculate Your FD Returns</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Use our FD calculator to estimate your returns based on deposit amount and tenure.
            </p>
            <Link href="/emi-calculator" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Open FD Calculator
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}