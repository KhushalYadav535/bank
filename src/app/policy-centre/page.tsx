"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { Shield, FileText, Scale, Lock, Eye, Bell, BookOpen, Globe, Handshake } from "lucide-react";

const policies = [
  { icon: Shield, title: "Privacy Policy", desc: "How we protect your personal information", href: "/privacy-policy" },
  { icon: Lock, title: "Security Policy", desc: "Our security measures and protocols", href: "/security-policy" },
  { icon: FileText, title: "Terms of Service", desc: "Terms and conditions for using our services", href: "/terms-of-service" },
  { icon: Scale, title: "Fair Practices Code", desc: "Our commitment to fair treatment", href: "/fair-practices-code" },
  { icon: Eye, title: "KYC Policy", desc: "Know Your Customer guidelines", href: "/kyc-policy" },
  { icon: Bell, title: "Grievance Policy", desc: "How we handle customer complaints", href: "/grievance-policy" },
  { icon: BookOpen, title: "Deposit Policy", desc: "Terms for deposit accounts", href: "/deposit-policy" },
  { icon: Handshake, title: "Loan Policy", desc: "Terms and conditions for loans", href: "/loan-policy" },
  { icon: Globe, title: "NRI Policy", desc: "NRI banking terms and conditions", href: "/nri-policy" },
];

export default function PolicyCentrePage() {
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
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Compliance
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Policy Centre
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              View all our policies and guidelines. We are committed to transparency
              and regulatory compliance.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Policies Grid */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Policies"
            title "All Policies"
            subtitle="Browse our comprehensive policy documents."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                    <policy.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal">{policy.title}</h3>
                  <p className="text-muted mt-2">{policy.desc}</p>
                  <a href={policy.href} className="inline-flex items-center gap-2 mt-4 text-crimson hover:text-gold transition-colors">
                    <span className="text-sm font-medium">View Policy</span>
                    <span className="text-xs">→</span>
                  </a>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Compliance"
            title "Regulatory Framework"
            subtitle="Our regulatory compliance and memberships."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <AnimatedCard variant="default" className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display font-semibold text-charcoal mb-4">Regulatory Bodies</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Reserve Bank of India (RBI)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>Deposit Insurance and Credit Guarantee Corporation (DICGC)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>National Payments Corporation of India (NPCI)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                      <span>State Co-operative Bank</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-charcoal mb-4">Insurance Coverage</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <span>DICGC Insurance: ₹5,00,000 per depositor</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <span>All deposits are insured</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-gold" />
                      <span>Cover includes principal + interest</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Download Policies */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Downloads"
            title "Important Downloads"
            subtitle="Download policy documents for offline reading."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              "Privacy Policy (PDF)",
              "Terms of Service (PDF)",
              "Fair Practices Code (PDF)",
              "KYC Policy (PDF)",
            ].map((doc, index) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText className="w-8 h-8 text-crimson" />
                    <span className="font-medium text-charcoal">{doc}</span>
                  </div>
                  <button className="px-4 py-2 bg-crimson text-white text-sm rounded-lg hover:bg-crimson-light transition-colors">
                    Download
                  </button>
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