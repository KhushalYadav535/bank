"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Wallet, CreditCard, Smartphone, Shield, Star, Users, Gift, PiggyBank, Globe, Briefcase, Calculator } from "lucide-react";
import Link from "next/link";

const tabs = [
  { id: "features", label: "Features" },
  { id: "eligibility", label: "Eligibility" },
  { id: "documents", label: "Documents" },
  { id: "rates", label: "Interest Rates" },
];

const features = [
  { icon: Wallet, title: "Zero Balance", description: "No minimum balance requirement for Basic Savings Account" },
  { icon: CreditCard, title: "Free Debit Card", description: "Complimentary debit card with tap & pay functionality" },
  { icon: Smartphone, title: "Digital Banking", description: "Free access to mobile banking and net banking" },
  { icon: Shield, title: "DICGC Insured", description: "Your deposits insured up to ₹5,00,000 per depositor" },
  { icon: Gift, title: "Rewards Program", description: "Earn points on transactions and redeem for exciting rewards" },
  { icon: PiggyBank, title: "Auto-Sweep", description: "Automatic sweep of excess balance to fixed deposit" },
];

const eligibility = [
  "Individual above 18 years of age",
  "Resident Indian citizens",
  "Minors above 10 years (with guardian)",
  "NRIs (Non-Resident Indian accounts)",
  "Joint accounts allowed (up to 2 members)",
  "Small account holders (Jan Dhan accounts)",
];

const documents = [
  { doc: "Identity Proof", options: "Aadhaar, PAN, Passport, Voter ID, Driving License" },
  { doc: "Address Proof", options: "Aadhaar, Utility Bill, Passport, Bank Statement" },
  { doc: "Photograph", options: "Passport size color photograph - 2 copies" },
  { doc: "Income Proof", options: "Salary slip, ITR, Business proof (if applicable)" },
  { doc: "KYC", options: "Complete KYC form with latest photograph" },
];

const accountTypes = [
  { type: "Basic Savings", minBal: "₹0", freeAtm: "5/month", interest: "3.50%", highlight: false },
  { type: "Premium Savings", minBal: "₹10,000", freeAtm: "10/month", interest: "3.50%", highlight: false },
  { type: "Senior Citizen", minBal: "₹0", freeAtm: "10/month", interest: "4.00%", highlight: true },
  { type: "NRI Savings", minBal: "₹5,000", freeAtm: "15/month", interest: "3.50%", highlight: false },
];

export default function SavingsAccountPage() {
  const [activeTab, setActiveTab] = useState("features");

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
              Savings Account
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Grow Your Wealth, Securely
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Feature-rich savings accounts designed to meet your every banking need.
              Earn competitive interest while enjoying premium benefits.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Open Account
                </PremiumButton>
              </Link>
              <a href="#calculator">
                <PremiumButton size="lg" variant="outline" rightIcon={<Calculator className="w-5 h-5" />}>
                  Calculate Interest
                </PremiumButton>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Account Types */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Choose Your Account"
            title="Savings Account Variants"
            subtitle="Select the account type that best suits your needs."
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
                <AnimatedCard
                  variant={account.highlight ? "stat" : "default"}
                  className={`p-6 h-full ${account.highlight ? 'bg-gradient-to-br from-crimson to-crimson-light' : ''}`}
                >
                  <h3 className={`font-display text-xl font-semibold ${account.highlight ? 'text-white' : 'text-charcoal'}`}>
                    {account.type}
                  </h3>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className={`text-xs ${account.highlight ? 'text-white/70' : 'text-muted'}`}>Minimum Balance</p>
                      <p className={`font-display text-2xl font-bold ${account.highlight ? 'text-white' : 'text-crimson'}`}>
                        {account.minBal}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${account.highlight ? 'text-white/70' : 'text-muted'}`}>Free ATM</p>
                      <p className={`font-medium ${account.highlight ? 'text-white' : 'text-charcoal'}`}>
                        {account.freeAtm}
                      </p>
                    </div>
                    <div>
                      <p className={`text-xs ${account.highlight ? 'text-white/70' : 'text-muted'}`}>Interest Rate</p>
                      <p className={`font-display text-2xl font-bold ${account.highlight ? 'text-gold' : 'text-gold'}`}>
                        {account.interest}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-platinum pb-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-crimson text-white"
                    : "bg-platinum text-charcoal hover:bg-platinum/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "features" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <AnimatedCard key={feature.title} variant="default" className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-crimson" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-charcoal">{feature.title}</h3>
                      <p className="text-muted mt-2">{feature.description}</p>
                    </AnimatedCard>
                  ))}
                </div>
              )}

              {activeTab === "eligibility" && (
                <div className="max-w-2xl mx-auto">
                  <AnimatedCard variant="default" className="p-8">
                    <ul className="space-y-4">
                      {eligibility.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                            <span className="text-crimson text-sm font-bold">{index + 1}</span>
                          </div>
                          <span className="text-charcoal">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimatedCard>
                </div>
              )}

              {activeTab === "documents" && (
                <div className="max-w-2xl mx-auto">
                  <AnimatedCard variant="default" className="p-8">
                    <div className="space-y-6">
                      {documents.map((doc, index) => (
                        <div key={doc.doc} className="border-b border-platinum last:border-0 pb-4 last:pb-0">
                          <h4 className="font-display font-semibold text-charcoal">{doc.doc}</h4>
                          <p className="text-muted mt-1">{doc.options}</p>
                        </div>
                      ))}
                    </div>
                  </AnimatedCard>
                </div>
              )}

              {activeTab === "rates" && (
                <div className="max-w-2xl mx-auto">
                  <AnimatedCard variant="stat" className="p-8 bg-gradient-to-br from-crimson to-crimson-light">
                    <div className="text-center">
                      <p className="text-white/80 text-lg mb-2">Interest Rate</p>
                      <p className="text-6xl font-display font-bold text-white">3.50%</p>
                      <p className="text-white/60 text-sm mt-4">Per annum (Effective from April 2024)</p>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4 pt-8 border-t border-white/20">
                      <div className="text-center">
                        <p className="text-gold text-2xl font-display font-bold">4.00%</p>
                        <p className="text-white/60 text-sm">Senior Citizens</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gold text-2xl font-display font-bold">4.50%</p>
                        <p className="text-white/60 text-sm">Super Senior (80+)</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Additional Benefits"
            title="Premium Banking Experience"
            subtitle="Enjoy a host of benefits with your MNS Bank Savings Account."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <AnimatedCard variant="default" className="p-8">
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">Personal Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Free quarterly account statements",
                  "Complimentary passbook",
                  "Free demand drafts (up to ₹10,000)",
                  "Waiver on ATM charges for premium accounts",
                  "Priority customer service",
                  "Free phone banking facility",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-charcoal">
                    <Star className="w-5 h-5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedCard>

            <AnimatedCard variant="default" className="p-8">
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-6">Digital Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Unlimited free UPI transactions",
                  "Free IMPS and NEFT transfers",
                  "24/7 mobile and net banking access",
                  "Instant fund transfers via QR code",
                  "Online bill payment and recharges",
                  "Investment and insurance purchase",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-charcoal">
                    <Star className="w-5 h-5 text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="How to Apply"
            title="Start Your Savings Journey"
            subtitle="Choose the most convenient way to open your account."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Visit Branch",
                description: "Walk into your nearest MNS Bank branch with required documents.",
              },
              {
                step: "2",
                title: "Fill Application",
                description: "Complete the account opening form with your details.",
              },
              {
                step: "3",
                title: "Account Activated",
                description: "Receive your account details and debit card instantly.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-8 text-center h-full">
                  <div className="w-16 h-16 rounded-full bg-crimson text-white font-display text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-muted mt-4">{item.description}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Open Account Today
              </PremiumButton>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Got questions? We've got answers."
          />

          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Is there a minimum balance requirement?",
                a: "Basic Savings Account requires no minimum balance. Premium accounts require ₹10,000 average quarterly balance.",
              },
              {
                q: "How is interest calculated on my savings?",
                a: "Interest is calculated on daily balance and credited quarterly at the prevailing rate of 3.50% p.a.",
              },
              {
                q: "Can I operate my account from any branch?",
                a: "Yes, you can operate your account from any MNS Bank branch across India without any charges.",
              },
              {
                q: "How do I get my passbook updated?",
                a: "Visit any branch with your passbook for free updates. You can also view transactions through digital banking.",
              },
            ].map((faq, index) => (
              <AnimatedCard key={index} variant="default" className="p-6">
                <h4 className="font-display font-semibold text-charcoal">{faq.q}</h4>
                <p className="text-muted mt-2">{faq.a}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}