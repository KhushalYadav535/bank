"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { AnimatedMeshBackground } from "@/components/3d";
import { FileText, Download, User, CreditCard, Briefcase, Home, GraduationCap, Car, Calculator } from "lucide-react";

const formCategories = [
  {
    category: "Account Opening",
    forms: [
      { name: "Savings Account Opening Form", size: "PDF, 250 KB" },
      { name: "Current Account Opening Form", size: "PDF, 280 KB" },
      { name: "NRI Account Application", size: "PDF, 300 KB" },
      { name: "Joint Account Form", size: "PDF, 200 KB" },
    ],
  },
  {
    category: "Loan Applications",
    forms: [
      { name: "Home Loan Application", size: "PDF, 350 KB" },
      { name: "Personal Loan Application", size: "PDF, 280 KB" },
      { name: "Business Loan Application", size: "PDF, 320 KB" },
      { name: "Education Loan Application", size: "PDF, 290 KB" },
      { name: "Vehicle Loan Application", size: "PDF, 260 KB" },
      { name: "Gold Loan Application", size: "PDF, 240 KB" },
    ],
  },
  {
    category: "KYC & Compliance",
    forms: [
      { name: "KYC Form - Individual", size: "PDF, 180 KB" },
      { name: "KYC Form - Corporate", size: "PDF, 200 KB" },
      { name: "KYC Updation Form", size: "PDF, 150 KB" },
      { name: "FATCA Declaration", size: "PDF, 120 KB" },
    ],
  },
  {
    category: "Deposits",
    forms: [
      { name: "Fixed Deposit Receipt", size: "PDF, 100 KB" },
      { name: "Recurring Deposit Form", size: "PDF, 110 KB" },
      { name: "RD Pre-mature Withdrawal", size: "PDF, 90 KB" },
      { name: "Nomination Form", size: "PDF, 80 KB" },
    ],
  },
  {
    category: "Services",
    forms: [
      { name: "Net Banking Registration", size: "PDF, 150 KB" },
      { name: "Mobile Banking Registration", size: "PDF, 140 KB" },
      { name: "Cheque Book Request", size: "PDF, 70 KB" },
      { name: "Stop Payment Form", size: "PDF, 60 KB" },
      { name: "NEFT/RTGS Request", size: "PDF, 80 KB" },
    ],
  },
  {
    category: "Forms Required",
    forms: [
      { name: "Signature Verification", size: "PDF, 50 KB" },
      { name: "Address Change Request", size: "PDF, 90 KB" },
      { name: "Account Closure Form", size: "PDF, 100 KB" },
      { name: "Passbook Issue/Renewal", size: "PDF, 70 KB" },
    ],
  },
];

export default function DownloadFormsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson overflow-hidden">
        <AnimatedMeshBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal-800/95 to-crimson/85" />

        {/* Decorative elements */}
        <div className="absolute top-28 right-40 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Downloads
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Download Forms
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Download application forms for various banking services. Print and fill them before visiting the branch.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-crimson font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                Need Help? Contact Us
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

      {/* Form Categories */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Forms"
            title="All Forms"
            subtitle="Browse forms by category."
          />

          <div className="mt-10 space-y-8">
            {formCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <h3 className="font-display text-xl font-semibold text-charcoal mb-4">{category.category}</h3>
                <AnimatedCard variant="default" className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.forms.map((form, formIndex) => (
                      <div key={form.name} className="flex items-center justify-between p-3 bg-platinum rounded-lg hover:bg-crimson/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-crimson" />
                          <span className="font-medium text-charcoal">{form.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted">{form.size}</span>
                          <button className="p-2 text-crimson hover:text-gold transition-colors">
                            <Download className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Instructions"
            title="Important Notes"
            subtitle="Please read before filling forms."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <AnimatedCard variant="default" className="p-8">
              <ul className="space-y-4">
                {[
                  "All fields marked with * are mandatory to fill",
                  "Please use BLOCK letters to fill the form",
                  "Attach self-attested copies of required documents",
                  "Forms should be submitted at nearest branch with original documents for verification",
                  "For any assistance, please contact our branch staff",
                  "Downloaded forms are for reference only - original forms available at branches",
                ].map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-crimson/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-crimson" />
                    </span>
                    <span className="text-muted">{note}</span>
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Contact for Help */}
      <section className="section-padding bg-ivory">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl font-bold text-charcoal">Need Help?</h2>
            <p className="mt-4 text-muted max-w-xl mx-auto">
              If you need help with any form or have questions, please contact our customer service.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div>
                <p className="text-sm text-muted">Toll Free</p>
                <p className="text-lg font-display font-semibold text-charcoal">1800-XXX-XXXX</p>
              </div>
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="text-lg font-display font-semibold text-charcoal">support@mnsbankbhopal.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}