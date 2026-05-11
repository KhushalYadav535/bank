"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Home, Car, GraduationCap, Briefcase, Heart, Plane, ShoppingBag, Phone, Laptop, Wrench, Baby } from "lucide-react";
import Link from "next/link";

const loanTypes = [
  { id: "home", icon: Home, title: "Home Loan", desc: "Buy your dream home with competitive rates", rate: "8.50%", tenure: "30 years" },
  { id: "personal", icon: Briefcase, title: "Personal Loan", desc: "Flexible personal financing for any need", rate: "12%", tenure: "7 years" },
  { id: "vehicle", icon: Car, title: "Vehicle Loan", desc: "New car or two-wheeler financing", rate: "9%", tenure: "7 years" },
  { id: "education", icon: GraduationCap, title: "Education Loan", desc: "Fund your academic aspirations", rate: "8%", tenure: "15 years" },
  { id: "gold", icon: Heart, title: "Gold Loan", desc: "Quick loan against gold ornaments", rate: "9%", tenure: "12 months" },
  { id: "business", icon: Briefcase, title: "Business Loan", desc: "Grow your business with working capital", rate: "11%", tenure: "15 years" },
];

export default function PersonalLoanPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              Personal Loans
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Fulfill Your Dreams
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              From home to education, car to personal needs — we offer competitive loans
              tailored to your requirements with quick approval and minimal documentation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Apply Now
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Loan Types */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Our Loans"
            title="Personal Loan Products"
            subtitle="Choose the loan that fits your needs."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                    <loan.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{loan.title}</h3>
                  <p className="text-muted mt-2">{loan.desc}</p>
                  <div className="mt-6 pt-4 border-t border-platinum flex justify-between">
                    <div>
                      <p className="text-xs text-muted">Rate</p>
                      <p className="font-display font-bold text-crimson">{loan.rate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Tenure</p>
                      <p className="font-display font-bold text-charcoal">{loan.tenure}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Why MNS Bank"
            title="Benefits of Our Loans"
            subtitle="Why borrowers trust MNS Bank for their financing needs."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Quick Approval", desc: "Get approval within 24-48 hours" },
              { title: "Low Interest", desc: "Competitive rates starting from 8%" },
              { title: "Flexible Tenure", desc: "Choose tenure up to 30 years" },
              { title: "Minimal Docs", desc: "Simple documentation process" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="stat" className="p-6 bg-gradient-to-br from-crimson to-crimson-light">
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-white/70 mt-2">{item.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="section-padding bg-ivory">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold text-charcoal">Calculate Your EMI</h2>
            <p className="mt-4 text-muted max-w-2xl mx-auto">
              Use our EMI calculator to plan your loan repayment and know your monthly installments.
            </p>
            <Link href="/emi-calculator" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Open EMI Calculator
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Eligibility"
            title="General Eligibility Criteria"
            subtitle="Basic requirements for our loan products."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="default" className="p-8">
              <ul className="space-y-4">
                {[
                  "Age: 21-65 years (varies by loan type)",
                  "Minimum income: ₹15,000/month",
                  "Minimum employment: 1-2 years",
                  "Resident Indian",
                  "CIBIL score: 650+",
                  "No existing loan defaults",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                    </span>
                    <span className="text-charcoal">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Documents"
            title="Required Documents"
            subtitle="Documents needed for loan application."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="default" className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-display font-semibold text-charcoal mb-4">Identity Proof</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Aadhaar Card</li>
                    <li>• PAN Card</li>
                    <li>• Passport</li>
                    <li>• Voter ID</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-charcoal mb-4">Income Proof</h4>
                  <ul className="space-y-2 text-muted">
                    <li>• Salary Slips (3 months)</li>
                    <li>• Bank Statements (6 months)</li>
                    <li>• ITR / Form 16</li>
                    <li>• Business Documents</li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
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
            <h2 className="font-display text-4xl font-bold text-white">Ready to Apply?</h2>
            <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
              Visit your nearest branch or apply online for a quick and hassle-free loan experience.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Apply for Loan
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}