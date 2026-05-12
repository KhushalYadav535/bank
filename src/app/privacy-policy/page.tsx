"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ParticleBackground } from "@/components/3d";
import { Shield, Lock, Eye, Users, FileText, Bell, Globe, Database, ChevronRight } from "lucide-react";

const sections = [
  { id: "introduction", title: "1. Introduction", icon: FileText },
  { id: "information", title: "2. Information We Collect", icon: Database },
  { id: "usage", title: "3. How We Use Your Information", icon: Eye },
  { id: "sharing", title: "4. Information Sharing", icon: Users },
  { id: "security", title: "5. Data Security", icon: Shield },
  { id: "cookies", title: "6. Cookies & Tracking", icon: Globe },
  { id: "rights", title: "7. Your Rights", icon: Lock },
  { id: "contact", title: "8. Contact Us", icon: Bell },
];

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-crimson to-charcoal overflow-hidden">
        <ParticleBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/90 via-crimson/85 to-charcoal/90" />

        {/* Decorative elements */}
        <div className="absolute top-36 right-24 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-28 left-32 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.8s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Legal
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
            </p>
            <p className="mt-4 text-white/60 text-sm">Last Updated: May 2024</p>
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

      {/* Quick Navigation */}
      <section className="section-padding bg-platinum sticky top-20 z-40 border-b border-platinum">
        <div className="container-premium">
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-ivory rounded-full text-sm font-medium text-charcoal hover:bg-crimson hover:text-white transition-colors"
              >
                <section.icon className="w-4 h-4" />
                {section.title.replace(/^\d+\.\s*/, "")}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Section 1: Introduction */}
            <motion.section
              id="introduction"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">1. Introduction</h2>
              </div>
              <div className="pl-16 space-y-4 text-muted leading-relaxed">
                <p>
                  Mahanagar Nagrik Sahakari Bank Ltd. ("MNS Bank", "we", "us", or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Visit our website (mnsbankbhopal.com)</li>
                  <li>Use our mobile banking application</li>
                  <li>Avail our banking products and services</li>
                  <li>Interact with our staff at branches or through customer service</li>
                </ul>
                <p>
                  By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the practices described herein, please do not use our services.
                </p>
              </div>
            </motion.section>

            {/* Section 2: Information We Collect */}
            <motion.section
              id="information"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">2. Information We Collect</h2>
              </div>
              <div className="pl-16 space-y-6 text-muted leading-relaxed">
                <h3 className="font-semibold text-charcoal text-lg">Personal Information</h3>
                <p>We may collect the following types of personal information:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name, date of birth, gender, and nationality</li>
                  <li>Contact information (address, phone, email)</li>
                  <li>Identity proofs (PAN, Aadhaar, Passport, Voter ID)</li>
                  <li>Financial information (income, occupation, business details)</li>
                  <li>Account details and transaction history</li>
                  <li>Credit information and credit score</li>
                  <li>Images and photographs for verification</li>
                </ul>

                <h3 className="font-semibold text-charcoal text-lg mt-6">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>IP address and browser details</li>
                  <li>Device information and identifiers</li>
                  <li>Location data (with consent)</li>
                  <li>Usage patterns and preferences</li>
                  <li>Cookies and tracking technologies data</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 3: How We Use Your Information */}
            <motion.section
              id="usage"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">3. How We Use Your Information</h2>
              </div>
              <div className="pl-16 space-y-4 text-muted leading-relaxed">
                <p>We use your personal information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Account Management:</strong> Opening, maintaining, and servicing your bank accounts</li>
                  <li><strong>Transaction Processing:</strong> Processing your financial transactions and payments</li>
                  <li><strong>Customer Support:</strong> Responding to your queries and providing assistance</li>
                  <li><strong>Product Delivery:</strong> Providing and customizing banking products and services</li>
                  <li><strong>Compliance:</strong> Meeting regulatory and legal requirements</li>
                  <li><strong>Security:</strong> Detecting and preventing fraud, unauthorized access, and other illegal activities</li>
                  <li><strong>Marketing:</strong> Sending you information about our products and services (with your consent)</li>
                  <li><strong>Analytics:</strong> Improving our services based on usage patterns and feedback</li>
                </ul>
              </div>
            </motion.section>

            {/* Section 4: Information Sharing */}
            <motion.section
              id="sharing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">4. Information Sharing</h2>
              </div>
              <div className="pl-16 space-y-4 text-muted leading-relaxed">
                <p>We may share your personal information with:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Regulatory Bodies:</strong> RBI, SEBI, DICGC, NPCI, and other statutory authorities as required</li>
                  <li><strong>Credit Bureaus:</strong> CIBIL, Experian, Equifax, and CRIF High Mark for credit evaluation</li>
                  <li><strong>Service Providers:</strong> IT service providers, payment processors, and authentication partners</li>
                  <li><strong>Business Partners:</strong> Insurance companies, investment partners, and co-branded service providers</li>
                  <li><strong>Legal Requirements:</strong> Courts, law enforcement agencies, and legal advisors when required</li>
                </ul>
                <p className="mt-4 bg-platinum p-4 rounded-lg">
                  <strong>Note:</strong> We do not sell your personal information to third parties for marketing purposes without your explicit consent.
                </p>
              </div>
            </motion.section>

            {/* Section 5: Data Security */}
            <motion.section
              id="security"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">5. Data Security</h2>
              </div>
              <div className="pl-16 space-y-4 text-muted leading-relaxed">
                <p>We implement robust security measures to protect your personal information:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li>256-bit SSL encryption for data transmission</li>
                  <li>Secure servers with firewall protection</li>
                  <li>Multi-factor authentication for online transactions</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection and confidentiality</li>
                  <li>Access controls and role-based permissions</li>
                </ul>
                <p className="mt-4">
                  While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but we are committed to maintaining industry-standard protections.
                </p>
              </div>
            </motion.section>

            {/* Section 6: Cookies */}
            <motion.section
              id="cookies"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">6. Cookies & Tracking Technologies</h2>
              </div>
              <div className="pl-16 space-y-4 text-muted leading-relaxed">
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Authenticate users and maintain session information</li>
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Personalize content and improve user experience</li>
                  <li>Enable security features and fraud detection</li>
                </ul>
                <p className="mt-4">
                  You can manage cookie preferences through your browser settings. However, disabling cookies may limit your access to some features of our digital services.
                </p>
              </div>
            </motion.section>

            {/* Section 7: Your Rights */}
            <motion.section
              id="rights"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">7. Your Rights</h2>
              </div>
              <div className="pl-16 space-y-4 text-muted leading-relaxed">
                <p>Under applicable data protection laws, you have the following rights:</p>
                <ul className="list-disc list-inside space-y-3">
                  <li><strong>Access:</strong> Request a copy of your personal data held by us</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request your data in a structured, machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing for direct marketing purposes</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent previously given for processing</li>
                  <li><strong>Grievance:</strong> File a complaint with our Grievance Cell or the relevant authority</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, please contact us through our Grievance Redressal mechanism or visit your nearest branch.
                </p>
              </div>
            </motion.section>

            {/* Section 8: Contact Us */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-crimson" />
                </div>
                <h2 className="font-display text-3xl font-bold text-charcoal">8. Contact Us</h2>
              </div>
              <div className="pl-16">
                <div className="bg-platinum rounded-xl p-6 border border-platinum">
                  <p className="text-muted mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
                  <div className="space-y-3">
                    <p className="text-charcoal font-medium">Grievance Officer</p>
                    <p className="text-muted">Mahanagar Nagrik Sahakari Bank Ltd.</p>
                    <p className="text-muted">MNS Bank Building, Near Old GP, Zone No. 1,</p>
                    <p className="text-muted">Mahasabha Nagar, Bhopal - 462001</p>
                    <p className="text-muted">Phone: 0755-XXXXXXX</p>
                    <p className="text-muted">Email: privacy@mnsbankbhopal.com</p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* Update Notice */}
      <section className="section-padding bg-platinum">
        <div className="container-premium text-center">
          <p className="text-muted text-sm">
            We may update this Privacy Policy from time to time. We will notify you of any material changes through our website or other communication channels.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}