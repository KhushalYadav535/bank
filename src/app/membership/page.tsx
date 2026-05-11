"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ArrowRight, Users, Shield, Gift, CreditCard, Wallet, Star, Heart, Handshake } from "lucide-react";
import Link from "next/link";

const membershipBenefits = [
  { icon: Wallet, title: "Savings Account", desc: "Zero minimum balance with competitive interest rates" },
  { icon: CreditCard, title: "Debit Card", desc: "Free debit card with tap & pay functionality" },
  { icon: Shield, title: "DICGC Insurance", desc: "Your deposits insured up to ₹5,00,000" },
  { icon: Gift, title: "Loans at Best Rates", desc: "Personal, home, and business loans at competitive rates" },
  { icon: Star, title: "Priority Service", desc: "Dedicated counter and faster transactions" },
  { icon: Handshake, title: "Business Support", desc: "Trade finance, working capital, and credit facilities" },
];

const membershipTypes = [
  {
    type: "Individual Member",
    fee: "₹100",
    share: "₹100",
    benefits: ["Voting rights", "All banking services", "Loan eligibility", "Dividend eligibility"],
  },
  {
    type: "Joint Member",
    fee: "₹100",
    share: "₹200",
    benefits: ["Joint voting rights", "All banking services", "Loan eligibility", "Dividend eligibility"],
  },
  {
    type: "Corporate Member",
    fee: "₹1,000",
    share: "₹10,000",
    benefits: ["Business accounts", "Trade services", "Priority loans", "Business advisory"],
  },
  {
    type: "NRI Member",
    fee: "₹100",
    share: "₹1,000",
    benefits: ["NRI banking services", "Remittance facility", "Investment options", "Trade services"],
  },
];

export default function MembershipPage() {
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
              Membership
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Become a Member
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Join the MNS Bank cooperative family and enjoy exclusive benefits,
              voting rights, and a share in our profits.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact">
                <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Apply for Membership
                </PremiumButton>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Benefits */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Benefits"
            title="Why Become a Member?"
            subtitle="Enjoy exclusive benefits as a member of our cooperative bank."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipBenefits.map((benefit, index) => (
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
                  <p className="text-muted mt-2">{benefit.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Types"
            title="Membership Options"
            subtitle="Choose the membership type that suits you."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipTypes.map((type, index) => (
              <motion.div
                key={type.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 h-full">
                  <h3 className="font-display text-xl font-semibold text-charcoal">{type.type}</h3>
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted">Admission Fee</span>
                      <span className="font-medium text-crimson">{type.fee}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Share Capital</span>
                      <span className="font-medium text-crimson">{type.share}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-platinum">
                    <p className="text-xs text-muted mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {type.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-charcoal flex items-center gap-2">
                          <Star className="w-3 h-3 text-gold" />
                          {benefit}
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

      {/* How to Join */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Process"
            title="How to Become a Member"
            subtitle="Simple steps to join our cooperative."
          />

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Visit Branch", desc: "Walk into any MNS Bank branch" },
              { step: "2", title: "Fill Form", desc: "Complete membership application" },
              { step: "3", title: "Pay Amount", desc: "Pay admission fee & share capital" },
              { step: "4", title: "Get Certificate", desc: "Receive membership certificate" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-crimson text-white font-display font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-charcoal">{item.title}</h3>
                  <p className="text-muted mt-2 text-sm">{item.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voting Rights */}
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
                <Users className="w-16 h-16 text-gold mx-auto mb-6" />
                <h3 className="font-display text-3xl font-bold text-white mb-4">Your Voice Matters</h3>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                  As a member, you have voting rights in the Annual General Meeting.
                  You can participate in key decisions and elect the Board of Directors.
                </p>
              </div>
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
            subtitle="Documents needed for membership."
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
                  "Identity Proof (Aadhaar/PAN/Passport)",
                  "Address Proof",
                  "Passport Size Photographs (2)",
                  "Filled Membership Form",
                  "Share Capital Payment",
                ].map((doc, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                    </span>
                    <span className="text-charcoal">{doc}</span>
                  </li>
                ))}
              </ul>
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
            <Heart className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-white">Join Our Cooperative Family</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Become a member today and experience the benefits of cooperative banking.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="bg-white text-crimson hover:bg-white/90">
                Apply Now
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}