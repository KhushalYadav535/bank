"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Calendar, TrendingUp, Shield, PiggyBank, Clock, Calculator, Percent } from "lucide-react";
import Link from "next/link";

const rdRates = [
  { tenure: "6 Months", rate: "6.50%", seniorRate: "7.00%" },
  { tenure: "9 Months", rate: "6.75%", seniorRate: "7.25%" },
  { tenure: "12 Months", rate: "7.00%", seniorRate: "7.50%" },
  { tenure: "18 Months", rate: "7.15%", seniorRate: "7.65%" },
  { tenure: "24 Months", rate: "7.15%", seniorRate: "7.65%" },
  { tenure: "36 Months", rate: "7.25%", seniorRate: "7.75%" },
  { tenure: "48 Months", rate: "7.00%", seniorRate: "7.50%" },
  { tenure: "60 Months", rate: "7.00%", seniorRate: "7.50%" },
];

const benefits = [
  { icon: PiggyBank, title: "Systematic Savings", description: "Build savings habit with monthly deposits" },
  { icon: TrendingUp, title: "Higher Returns", description: "Attractive interest rates up to 7.75%" },
  { icon: Shield, title: "Safe Investment", description: "DICGC insured up to ₹5,00,000" },
  { icon: Calendar, title: "Flexible Tenure", description: "Choose tenure from 6 months to 60 months" },
  { icon: Percent, title: "Loan Against RD", description: "Get up to 80% loan against your RD" },
  { icon: Clock, title: "Auto-Renewal", description: "Auto-renewal option available" },
];

export default function RecurringDepositPage() {
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
              Recurring Deposit
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Build Wealth, Step by Step
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Start your systematic savings journey with our Recurring Deposit.
              Invest fixed amounts monthly and watch your money grow with guaranteed returns.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Start RD Today
                </PremiumButton>
              </Link>
              <a href="#calculator">
                <PremiumButton size="lg" variant="outline" className="text-white border-white hover:bg-white/10" rightIcon={<Calculator className="w-5 h-5" />}>
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
            title="RD Interest Rates"
            subtitle="Competitive rates for your recurring deposits. Senior citizens get additional 0.50%."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-x-auto"
          >
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-crimson/20">
                  <th className="text-left py-4 px-4 font-display font-semibold text-charcoal">Tenure</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">General Rate</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Senior Citizen</th>
                </tr>
              </thead>
              <tbody>
                {rdRates.map((row, index) => (
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

      {/* Benefits */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Benefits"
            title="Why Choose RD?"
            subtitle="Build financial discipline with our recurring deposit."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-charcoal">{benefit.title}</h3>
                  <p className="text-muted mt-2">{benefit.description}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Features"
            title="Key Features of RD"
            subtitle="Everything you need to know about our Recurring Deposit."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <AnimatedCard variant="default" className="p-8">
              <div className="space-y-6">
                {[
                  { title: "Minimum Deposit", value: "₹100 per month" },
                  { title: "Maximum Deposit", value: "No limit (subject to KYC)" },
                  { title: "Tenure Options", value: "6, 9, 12, 18, 24, 36, 48, 60 months" },
                  { title: "Interest Payment", value: "Compounded quarterly" },
                  { title: "Premature Withdrawal", value: "Allowed with applicable rates" },
                  { title: "Loan Against RD", value: "Up to 80% of deposit value" },
                  { title: "Nomination", value: "Available" },
                  { title: "Auto-Renewal", value: "Option available on maturity" },
                ].map((item, index) => (
                  <div key={item.title} className="flex justify-between items-center py-3 border-b border-platinum last:border-0">
                    <span className="text-muted">{item.title}</span>
                    <span className="font-medium text-charcoal">{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Example"
            title="How Your Money Grows"
            subtitle="See how your monthly deposits can grow over time."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="stat" className="p-10 bg-gradient-to-br from-crimson to-crimson-light">
              <div className="text-center text-white">
                <p className="text-white/80 mb-2">Monthly Investment</p>
                <p className="text-4xl font-display font-bold">₹5,000</p>
                <p className="text-white/60 text-sm mt-1">For 24 months @ 7.15% p.a.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-gold text-3xl font-display font-bold">₹1,30,000</p>
                  <p className="text-white/60 text-sm mt-1">Total Investment</p>
                </div>
                <div className="text-center">
                  <p className="text-gold text-3xl font-display font-bold">₹1,41,324</p>
                  <p className="text-white/60 text-sm mt-1">Maturity Value</p>
                </div>
              </div>
              <p className="text-center text-white/60 text-sm mt-6">*Values are indicative and rounded off</p>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SectionHeader
                eyebrow="Eligibility"
                title="Who Can Open RD?"
                subtitle="Eligibility criteria for recurring deposit."
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
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Individual above 18 years</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Senior citizens (60+ years)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>NRIs with valid Indian identity</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Joint accounts allowed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
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
                subtitle="Documents needed for recurring deposit."
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
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Identity Proof (Aadhaar/PAN)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Address Proof</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Passport Size Photo</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Existing Savings Account</span>
                    </li>
                  </ul>
                </AnimatedCard>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-white">Start Your RD Today</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Build the habit of saving with our Recurring Deposit.
              Small monthly deposits lead to big achievements.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Open RD Account
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}