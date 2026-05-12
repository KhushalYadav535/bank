"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { ThreeDBackground } from "@/components/3d";
import { Shield, Lock, AlertTriangle, Smartphone, Mail, Key, Eye, Phone, Users, Globe, Bug } from "lucide-react";
import Link from "next/link";

const tips = [
  { icon: Key, title: "Never Share OTP", desc: "MNS Bank will never ask for your OTP. Don't share it with anyone." },
  { icon: Lock, title: "Strong Passwords", desc: "Use unique passwords and change them regularly. Enable 2FA." },
  { icon: AlertTriangle, title: "Beware of Phishing", desc: "Don't click suspicious links in emails or SMS. Verify sender." },
  { icon: Smartphone, title: "Secure App Usage", desc: "Download our app only from official stores. Keep it updated." },
  { icon: Mail, title: "Verify Emails", desc: "MNS Bank won't ask for personal details via email." },
  { icon: Phone, title: "Verify Callers", desc: "Don't trust callers claiming to be bank staff. Verify identity." },
];

const scams = [
  {
    title: "Phishing Scam",
    desc: "Fraudsters send fake emails/SMS asking for login credentials. Never click such links.",
  },
  {
    title: "OTP Scam",
    desc: "Callers ask for OTP claiming to be bank staff. We never ask for OTP.",
  },
  {
    title: "UPI Scam",
    desc: "Don't share UPI PIN or QR codes. Fraudsters may send malicious payment requests.",
  },
  {
    title: "Loan Scam",
    desc: "Be wary of agents promising instant loans for a fee. We don't charge advance fees.",
  },
  {
    title: "KYC Scam",
    desc: "Don't fall for calls asking to update KYC. We never ask for this over phone.",
  },
  {
    title: "SIM Swap Scam",
    desc: "Protect your SIM. Fraudsters may try to duplicate your SIM to access accounts.",
  },
];

export default function CyberAwarenessPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson-dark overflow-hidden">
        <ThreeDBackground type="hero" />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/70 via-charcoal-800/80 to-crimson-dark/70" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-28 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-36 left-24 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.6s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Cyber Awareness
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Stay safe online. Learn how to protect yourself from fraudsters
              and secure your banking transactions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="tel:+917551234567" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-crimson font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                <Phone className="w-4 h-4" /> Report Fraud
              </a>
              <Link href="/grievance" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
                <AlertTriangle className="w-4 h-4" /> File Complaint
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

      {/* Security Tips */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Safety Tips"
            title="Protect Yourself"
            subtitle="Follow these guidelines to stay safe while banking online."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center mb-4">
                    <tip.icon className="w-6 h-6 text-crimson" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-charcoal">{tip.title}</h3>
                  <p className="text-muted mt-2">{tip.desc}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scams */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Scams"
            title="Common Frauds"
            subtitle="Be aware of these common fraud tactics used by scammers."
          />

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {scams.map((scam, index) => (
              <motion.div
                key={scam.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6 border-l-4 border-crimson">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-crimson shrink-0" />
                    <div>
                      <h3 className="font-display font-semibold text-charcoal">{scam.title}</h3>
                      <p className="text-muted mt-2">{scam.desc}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Banking Practices */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Best Practices"
            title="Safe Banking Guidelines"
            subtitle="Follow these practices for secure banking."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <AnimatedCard variant="default" className="p-8">
              <ul className="space-y-6">
                {[
                  "Always verify the URL: Only use mnsbankbhopal.com for net banking",
                  "Check for HTTPS: Ensure the website has 'https://' before entering any details",
                  "Enable notifications: Get SMS/email alerts for all transactions",
                  "Review statements: Check your account statement regularly for any unauthorized transactions",
                  "Log out properly: Always log out from net banking after completing your transactions",
                  "Don't use public WiFi: Avoid banking on public WiFi networks",
                  "Keep devices updated: Ensure your phone/computer has latest security updates",
                  "Don't share card details: Never share CVV, card number, or PIN with anyone",
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                    </span>
                    <span className="text-charcoal">{tip}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Report Fraud */}
      <section className="section-padding bg-crimson">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Phone className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold text-white">Report Fraud Immediately</h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              If you suspect fraud or have shared sensitive information, contact us immediately.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <div>
                <p className="text-white/60 text-sm">Toll Free</p>
                <p className="text-2xl font-display font-bold text-white">1800-XXX-XXXX</p>
              </div>
              <div>
                <p className="text-white/60 text-sm">Email</p>
                <p className="text-2xl font-display font-bold text-white">security@mnsbankbhopal.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* External Resources */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Resources"
            title="External Security Resources"
            subtitle="Learn more about cybersecurity from official sources."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "CERT-In", desc: "Indian Computer Emergency Response Team", link: "https://www.cert-in.org.in" },
              { icon: Bug, title: "Cyber Crime Portal", desc: "National Cyber Crime Reporting Portal", link: "https://cybercrime.gov.in" },
              { icon: Users, title: "RBI Security", desc: "RBI's cybersecurity guidelines", link: "https://rbi.org.in" },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <resource.icon className="w-8 h-8 text-crimson mb-4" />
                  <h3 className="font-display font-semibold text-charcoal">{resource.title}</h3>
                  <p className="text-muted mt-2 text-sm">{resource.desc}</p>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-crimson hover:text-gold transition-colors text-sm">
                    Visit Website →
                  </a>
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