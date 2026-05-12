"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { ParticleBackground } from "@/components/3d";
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-charcoal to-crimson overflow-hidden">
        <ParticleBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/90 via-charcoal/95 to-crimson/85" />

        {/* Decorative elements */}
        <div className="absolute top-36 right-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-28 left-32 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.6s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Compliance
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Policy Centre
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              View all our policies and guidelines. We are committed to transparency
              and regulatory compliance.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <a href="/privacy-policy" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-crimson font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                <Eye className="w-4 h-4" /> View Privacy Policy
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

      {/* Policies Grid */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Policies"
            title="All Policies"
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
            title="Regulatory Framework"
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
            title="Important Downloads"
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