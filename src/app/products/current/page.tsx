"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Briefcase, Building, ShoppingCart, Factory, TrendingUp, Wallet, CreditCard, Receipt, Shield, Calculator } from "lucide-react";
import Link from "next/link";

const accountTypes = [
  {
    type: "Basic Current",
    icon: Briefcase,
    minBal: "₹5,000",
    avgQuarterly: "₹25,000",
    cashLimit: "₹2,00,000/month",
    features: ["Unlimited transactions", "Free DD issuance", "Free cash deposits"],
  },
  {
    type: "Standard Current",
    icon: Building,
    minBal: "₹10,000",
    avgQuarterly: "₹50,000",
    cashLimit: "₹5,00,000/month",
    features: ["Priority service", "Free cheque books", "Multi-city DD"],
  },
  {
    type: "Premium Current",
    icon: TrendingUp,
    minBal: "₹25,000",
    avgQuarterly: "₹1,00,000",
    cashLimit: "₹10,00,000/month",
    features: ["Dedicated relationship manager", "Free vault facility", "Priority processing"],
  },
  {
    type: "Gold Current",
    icon: ShoppingCart,
    minBal: "₹50,000",
    avgQuarterly: "₹2,00,000",
    cashLimit: "₹20,00,000/month",
    features: ["Business credit card", "Free insurance", "Investment advisory"],
  },
];

const documents = [
  "Business Registration Certificate",
  "PAN Card of Business & Proprietor",
  "Address Proof (Business Premises)",
  "Identity & Address Proof (All Partners/Directors)",
  "Photographs of Authorized Signatories",
  "Board Resolution / Partnership Deed",
];

export default function CurrentAccountPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal to-crimson-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              Current Account
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Power Your Business
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Seamlessly manage your business transactions with our feature-rich current accounts.
              Designed for entrepreneurs, professionals, and enterprises.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Open Account
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Account Types */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Choose Your Plan"
            title="Current Account Variants"
            subtitle="Select the account that matches your business requirements."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accountTypes.map((account, index) => (
              <motion.div
                key={account.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                    <account.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{account.type}</h3>

                  <div className="mt-6 space-y-3 flex-1">
                    <div>
                      <p className="text-xs text-muted">Min Balance</p>
                      <p className="font-display text-lg font-bold text-crimson">{account.minBal}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Avg Quarterly</p>
                      <p className="font-medium text-charcoal">{account.avgQuarterly}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted">Cash Limit</p>
                      <p className="font-medium text-charcoal">{account.cashLimit}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-platinum">
                    <ul className="space-y-2">
                      {account.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Features"
            title="Business Banking Benefits"
            subtitle="Everything you need to manage your business finances efficiently."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Receipt, title: "Unlimited Transactions", desc: "No cap on number of transactions" },
              { icon: Wallet, title: "High Cash Limits", desc: "Higher cash deposit and withdrawal limits" },
              { icon: CreditCard, title: "Business Cards", desc: "Corporate credit and debit cards" },
              { icon: Building, title: "Multi-City Banking", desc: "Operate from any city across India" },
              { icon: Shield, title: "Secure Banking", desc: "256-bit encryption and fraud protection" },
              { icon: Calculator, title: "Tech Integration", desc: "API for accounting software integration" },
            ].map((feature, index) => (
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
                  <p className="text-muted mt-2">{feature.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Required */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Documentation"
            title="Required Documents"
            subtitle="Documents needed to open a current account."
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
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-center gap-3 text-charcoal">
                    <div className="w-8 h-8 rounded-full bg-crimson text-white font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </div>
                    {doc}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted bg-platinum p-4 rounded-lg">
                Note: Additional documents may be requested based on business type and regulatory requirements.
              </p>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Charges */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Charges"
            title="Service Charges"
            subtitle="Key service charges for current accounts."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="default">
              <table className="w-full">
                <tbody>
                  {[
                    { service: "Minimum Balance", charges: "₹5,000 - ₹50,000 based on variant" },
                    { service: "SMS Alerts", charges: "₹15/month + GST" },
                    { service: "Cheque Book", charges: "Free (100 leaves/year)" },
                    { service: "DD Issuance", charges: "₹50 - ₹200 based on amount" },
                    { service: "Cash Deposit", charges: "Free at base branch" },
                    { service: "NEFT/RTGS", charges: "As per standard rates" },
                  ].map((item, index) => (
                    <tr key={item.service} className="border-b border-platinum last:border-0">
                      <td className="py-4 px-4 text-charcoal">{item.service}</td>
                      <td className="py-4 px-4 text-right font-medium text-crimson">{item.charges}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-crimson">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl font-bold text-white tracking-tight">
              Ready to Open Your Business Account?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Visit your nearest MNS Bank branch or contact us today to get started.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-white text-crimson hover:bg-white/90">
                Open Current Account
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}