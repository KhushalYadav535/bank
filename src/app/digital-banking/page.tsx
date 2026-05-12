"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { GeometricBackground } from "@/components/3d";
import { ArrowRight, Smartphone, Monitor, CreditCard, Wifi, Receipt, Zap, Shield, QrCode, Building } from "lucide-react";
import Link from "next/link";

const services = [
  { id: "netbanking", icon: Monitor, title: "Net Banking", desc: "Full-service banking portal for all your transactions", features: ["Fund Transfer", "Bill Payment", "Account Statement", "FD/RD Management"] },
  { id: "mobile", icon: Smartphone, title: "Mobile App", desc: "Bank on the go with our feature-rich mobile application", features: ["24/7 Banking", "Quick Transfer", "Biometric Login", "Transaction Alerts"] },
  { id: "upi", icon: QrCode, title: "UPI Payments", desc: "Instant payments using UPI powered by NPCI", features: ["Instant Transfer", "Scan & Pay", "Request Money", "Bill Split"] },
  { id: "bbps", icon: Receipt, title: "BBPS Bill Payment", desc: "Pay all your utility bills at one place", features: ["Electricity", "Water", "Gas", "DTH & Mobile"] },
];

const features = [
  { icon: Zap, title: "Instant Transfers", desc: "Send money instantly via UPI, IMPS, NEFT, RTGS" },
  { icon: Shield, title: "Secure Banking", desc: "256-bit encryption and multi-factor authentication" },
  { icon: CreditCard, title: "Card Management", desc: "Block/unblock cards, set limits, view transactions" },
  { icon: Building, title: "Account Management", desc: "Open FD, RD, view statements, update KYC" },
];

export default function DigitalBankingPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson overflow-hidden">
        <GeometricBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal-800/95 to-crimson/85" />

        {/* Decorative elements */}
        <div className="absolute top-28 right-40 w-60 h-60 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-72 h-72 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.6s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm">
              Digital Banking
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Banking at Your Fingertips
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Experience seamless banking with our digital services. Transfer funds, pay bills,
              and manage your accounts from anywhere, anytime.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="https://mnsbankbhopal.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white font-semibold rounded-full hover:bg-crimson/90 transition-all hover:scale-105 hover:shadow-xl">
                <Monitor className="w-4 h-4" /> Net Banking
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
                <Smartphone className="w-4 h-4" /> Download App
              </Link>
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

      {/* Services */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Our Services"
            title="Digital Services"
            subtitle="Explore our comprehensive digital banking solutions."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-8 h-full">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-crimson/10 flex items-center justify-center shrink-0">
                      <service.icon className="w-8 h-8 text-crimson" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-semibold text-charcoal">{service.title}</h3>
                      <p className="text-muted mt-2">{service.desc}</p>
                      <ul className="mt-4 grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
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
            title="Why Digital Banking?"
            subtitle="Experience the future of banking with MNS Bank."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="stat" className="p-6 bg-gradient-to-br from-crimson to-crimson-light">
                  <feature.icon className="w-10 h-10 text-gold mb-4" />
                  <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-white/70 mt-2 text-sm">{feature.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Downloads */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Mobile App"
            title="Download Our App"
            subtitle="Get our mobile app from your favorite app store."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 text-center"
          >
            <AnimatedCard variant="default" className="p-10 inline-block">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-charcoal rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-medium text-charcoal">Android</p>
                  <p className="text-sm text-muted">Coming Soon</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-charcoal rounded-2xl flex items-center justify-center mb-4 mx-auto">
                    <Smartphone className="w-10 h-10 text-white" />
                  </div>
                  <p className="font-medium text-charcoal">iOS</p>
                  <p className="text-sm text-muted">Coming Soon</p>
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Security */}
      <section className="section-padding bg-charcoal">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-white">Your Security is Our Priority</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Our digital banking platform uses bank-grade security measures to protect your transactions
              and personal information.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              {[
                "256-bit Encryption",
                "Two-Factor Authentication",
                "Biometric Login",
                "Real-time Alerts",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}