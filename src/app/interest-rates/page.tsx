"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { ParticleBackground } from "@/components/3d";
import { INTEREST_RATES } from "@/lib/constants";
import { Calculator, TrendingUp, Shield, Percent, Calendar, PiggyBank } from "lucide-react";

const fdRates = [
  { tenure: "7 Days to 14 Days", general: 4.50, senior: 5.00 },
  { tenure: "15 Days to 29 Days", general: 4.50, senior: 5.00 },
  { tenure: "30 Days to 45 Days", general: 5.00, senior: 5.50 },
  { tenure: "46 Days to 90 Days", general: 5.50, senior: 6.00 },
  { tenure: "91 Days to 180 Days", general: 6.00, senior: 6.50 },
  { tenure: "181 Days to 1 Year", general: 7.25, senior: 7.75 },
  { tenure: "Above 1 Year to 2 Years", general: 7.40, senior: 7.90 },
  { tenure: "Above 2 Years to 3 Years", general: 7.50, senior: 8.00 },
  { tenure: "Above 3 Years to 5 Years", general: 7.25, senior: 7.75 },
  { tenure: "Above 5 Years", general: 7.00, senior: 7.50 },
];

const rdRates = [
  { tenure: "6 Months", rate: 6.50, seniorRate: 7.00 },
  { tenure: "9 Months", rate: 6.75, seniorRate: 7.25 },
  { tenure: "12 Months", rate: 7.00, seniorRate: 7.50 },
  { tenure: "18 Months", rate: 7.15, seniorRate: 7.65 },
  { tenure: "24 Months", rate: 7.15, seniorRate: 7.65 },
  { tenure: "36 Months", rate: 7.25, seniorRate: 7.75 },
  { tenure: "48 Months", rate: 7.00, seniorRate: 7.50 },
  { tenure: "60 Months", rate: 7.00, seniorRate: 7.50 },
];

const loanRates = [
  { product: "Home Loan", rate: "8.50% - 10.50%", processing: "0.50%", maxTenure: "30 Years" },
  { product: "Personal Loan", rate: "12% - 16%", processing: "1.00%", maxTenure: "7 Years" },
  { product: "Business Loan", rate: "11% - 15%", processing: "1.00%", maxTenure: "15 Years" },
  { product: "Education Loan", rate: "8% - 12%", processing: "0.50%", maxTenure: "15 Years" },
  { product: "Vehicle Loan", rate: "9% - 12%", processing: "0.50%", maxTenure: "7 Years" },
  { product: "Gold Loan", rate: "9% - 11%", processing: "Nil", maxTenure: "12 Months" },
];

export default function InterestRatesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson overflow-hidden">
        <ParticleBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal-800/95 to-crimson/85" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-32 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-28 left-20 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm">
              Interest Rates
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Transparent & Competitive Rates
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              We offer industry-leading interest rates on deposits and competitive rates on loans,
              ensuring maximum benefits for our members.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <a href="/deposits" className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-semibold rounded-full hover:bg-crimson/90 transition-all hover:scale-105 hover:shadow-xl">
                <Calculator className="w-4 h-4" /> View Deposit Rates
              </a>
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

      {/* Quick Links Section */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: PiggyBank, label: "Savings", rate: "3.50%" },
              { icon: TrendingUp, label: "Fixed Deposit", rate: "Up to 7.50%" },
              { icon: Calendar, label: "Recurring Deposit", rate: "Up to 7.25%" },
              { icon: Calculator, label: "MCLR", rate: "9.50%" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="text-center p-6">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <p className="text-sm text-muted">{item.label}</p>
                  <p className="text-2xl font-display font-bold text-charcoal mt-1">{item.rate}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fixed Deposit Rates */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Deposits"
            title="Fixed Deposit Interest Rates"
            subtitle="Secure your savings with guaranteed returns. Senior citizens get additional 0.50% benefit."
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
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">General Rate (% p.a.)</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Senior Citizen Rate (% p.a.)</th>
                </tr>
              </thead>
              <tbody>
                {fdRates.map((row, index) => (
                  <tr key={row.tenure} className="border-b border-platinum hover:bg-ivory/50 transition-colors">
                    <td className="py-4 px-4 text-charcoal">{row.tenure}</td>
                    <td className="py-4 px-4 text-center font-medium text-crimson">{row.general}%</td>
                    <td className="py-4 px-4 text-center font-medium text-gold">{row.senior}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-8 bg-ivory rounded-xl p-6 border border-platinum">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-crimson shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-semibold text-charcoal">DICGC Insurance Coverage</h4>
                <p className="text-sm text-muted mt-2">
                  Your Fixed Deposits are insured by DICGC up to ₹5,00,000 per depositor per bank.
                  This protection is over and above the security of your investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recurring Deposit Rates */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Deposits"
            title="Recurring Deposit Interest Rates"
            subtitle="Build your savings systematically with monthly deposit options."
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
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">General Rate (% p.a.)</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Senior Citizen Rate (% p.a.)</th>
                </tr>
              </thead>
              <tbody>
                {rdRates.map((row, index) => (
                  <tr key={row.tenure} className="border-b border-platinum hover:bg-platinum/50 transition-colors">
                    <td className="py-4 px-4 text-charcoal">{row.tenure}</td>
                    <td className="py-4 px-4 text-center font-medium text-crimson">{row.rate}%</td>
                    <td className="py-4 px-4 text-center font-medium text-gold">{row.seniorRate}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Savings Account */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Accounts"
            title="Savings Account Interest Rate"
            subtitle="Earn interest on your daily balance with our savings account."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="stat" className="p-8 text-center bg-gradient-to-br from-crimson to-crimson-light">
              <Percent className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-white/80 text-lg mb-2">Savings Account Interest Rate</p>
              <p className="text-5xl font-display font-bold text-white">3.50%</p>
              <p className="text-white/60 text-sm mt-4">Effective from April 2024</p>
            </AnimatedCard>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Minimum Balance", value: "₹500" },
              { title: "Interest Calculation", value: "Daily Balance" },
              { title: "Credit Frequency", value: "Quarterly" },
            ].map((item, index) => (
              <AnimatedCard key={item.title} variant="default" className="p-6 text-center">
                <p className="text-sm text-muted">{item.title}</p>
                <p className="text-xl font-display font-semibold text-charcoal mt-2">{item.value}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Interest Rates */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Loans"
            title="Loan Interest Rates"
            subtitle="Competitive rates tailored to your financial needs."
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
                  <th className="text-left py-4 px-4 font-display font-semibold text-charcoal">Product</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Interest Rate</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Processing Fee</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Max Tenure</th>
                </tr>
              </thead>
              <tbody>
                {loanRates.map((row, index) => (
                  <tr key={row.product} className="border-b border-platinum hover:bg-platinum/50 transition-colors">
                    <td className="py-4 px-4 font-medium text-charcoal">{row.product}</td>
                    <td className="py-4 px-4 text-center text-crimson font-medium">{row.rate}</td>
                    <td className="py-4 px-4 text-center text-muted">{row.processing}</td>
                    <td className="py-4 px-4 text-center text-muted">{row.maxTenure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted">*Rates are subject to change. Contact nearest branch for latest rates.</p>
          </div>
        </div>
      </section>

      {/* MCLR Section */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Benchmark Rate"
            title="MCLR (Marginal Cost of Lending Rate)"
            subtitle="Our MCLR benchmark for loan pricing."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <AnimatedCard variant="default" className="p-8">
              <div className="flex justify-between items-center py-4 border-b border-platinum">
                <span className="text-charcoal">Overnight MCLR</span>
                <span className="text-xl font-display font-bold text-crimson">9.50%</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-platinum">
                <span className="text-charcoal">1 Month MCLR</span>
                <span className="text-xl font-display font-bold text-crimson">9.50%</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-platinum">
                <span className="text-charcoal">3 Month MCLR</span>
                <span className="text-xl font-display font-bold text-crimson">9.75%</span>
              </div>
              <div className="flex justify-between items-center py-4 border-b border-platinum">
                <span className="text-charcoal">6 Month MCLR</span>
                <span className="text-xl font-display font-bold text-crimson">10.00%</span>
              </div>
              <div className="flex justify-between items-center py-4">
                <span className="text-charcoal">1 Year MCLR</span>
                <span className="text-xl font-display font-bold text-crimson">10.25%</span>
              </div>
              <p className="text-xs text-muted mt-4">Effective from May 2024</p>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-charcoal">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-xl p-6 border border-white/10"
          >
            <h4 className="font-display font-semibold text-white mb-4">Important Disclaimers</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>• Interest rates are subject to change without prior notice.</li>
              <li>• Senior citizen rates are applicable for individuals aged 60 years and above.</li>
              <li>• Additional benefits may be available for existing members.</li>
              <li>• Loan approval subject to verification and eligibility criteria.</li>
              <li>• For detailed terms and conditions, please contact the nearest branch.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}