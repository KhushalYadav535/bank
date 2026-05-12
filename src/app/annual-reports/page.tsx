"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { DNABackgroundScene } from "@/components/3d";
import { FileText, Download, Calendar, TrendingUp, BarChart3 } from "lucide-react";

const annualReports = [
  { year: "2025-26", status: "Current", date: "April 2025", download: "#" },
  { year: "2024-25", status: "Available", date: "April 2024", download: "#" },
  { year: "2023-24", status: "Available", date: "April 2023", download: "#" },
  { year: "2022-23", status: "Available", date: "April 2022", download: "#" },
  { year: "2021-22", status: "Available", date: "April 2021", download: "#" },
];

const highlights = [
  { label: "Total Deposits", value: "₹500+ Cr", change: "+15%" },
  { label: "Advances", value: "₹350+ Cr", change: "+12%" },
  { label: "Members", value: "10,000+", change: "+8%" },
  { label: "Branches", value: "4", change: "New Branch" },
];

export default function AnnualReportsPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal-800 to-crimson overflow-hidden">
        <DNABackgroundScene />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal-800/95 to-crimson/85" />

        {/* Decorative elements */}
        <div className="absolute top-32 right-28 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-36 left-24 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.7s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Transparency
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Annual Reports
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Access our yearly financial reports and performance summaries.
              We believe in complete transparency with our members and stakeholders.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8"
            >
              <a href="#reports" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-crimson font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                <Download className="w-4 h-4" /> View Reports
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

      {/* Performance Highlights */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Performance"
            title="Key Highlights"
            subtitle="Financial highlights from recent years."
          />

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="stat" className="p-6 bg-gradient-to-br from-crimson to-crimson-light">
                  <p className="text-white/70 text-sm">{item.label}</p>
                  <p className="text-3xl font-display font-bold text-white mt-2">{item.value}</p>
                  <p className="text-gold text-sm mt-2">{item.change}</p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Reports */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Downloads"
            title="Download Reports"
            subtitle="Annual reports for previous years."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-3xl mx-auto"
          >
            <AnimatedCard variant="default">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-platinum">
                    <th className="text-left py-4 px-4 font-display font-semibold text-charcoal">Financial Year</th>
                    <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Date</th>
                    <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Status</th>
                    <th className="text-right py-4 px-4 font-display font-semibold text-charcoal">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {annualReports.map((report, index) => (
                    <tr key={report.year} className="border-b border-platinum hover:bg-platinum/50 transition-colors">
                      <td className="py-4 px-4 font-medium text-charcoal">{report.year}</td>
                      <td className="py-4 px-4 text-center text-muted">{report.date}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          report.status === "Current"
                            ? "bg-gold/20 text-gold"
                            : "bg-crimson/10 text-crimson"
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <a href={report.download} className="inline-flex items-center gap-2 text-crimson hover:text-gold transition-colors">
                          <Download className="w-4 h-4" />
                          <span className="text-sm">Download</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Contents"
            title="What's Included"
            subtitle="Each annual report contains."
          />

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, title: "Financial Statements", desc: "Balance sheet, P&L, cash flow" },
              { icon: TrendingUp, title: "Performance Analysis", desc: "Detailed analysis of operations" },
              { icon: FileText, title: "Board Report", desc: "Board's perspective on performance" },
              { icon: Calendar, title: "Director's Profile", desc: "Information about board members" },
              { icon: FileText, title: "Auditor's Report", desc: "Independent auditor's findings" },
              { icon: FileText, title: "Notice & Resolutions", desc: "AGM notice and resolutions" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default" className="p-6">
                  <item.icon className="w-8 h-8 text-crimson mb-4" />
                  <h4 className="font-display font-semibold text-charcoal">{item.title}</h4>
                  <p className="text-muted mt-2 text-sm">{item.desc}</p>
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