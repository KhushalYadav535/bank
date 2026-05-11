"use client";

import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/PremiumButton";
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Security
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Cyber Awareness
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Stay safe online. Learn how to protect yourself from fraudsters
              and secure your banking transactions.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Security Tips */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Safety Tips"
            title "Protect Yourself"
            subtitle "Follow these guidelines to stay safe while banking online."
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
            title "Common Frauds"
            subtitle "Be aware of these common fraud tactics used by scammers."
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
            title "Safe Banking Guidelines"
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
            title "External Security Resources"
            subtitle "Learn more about cybersecurity from official sources."
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