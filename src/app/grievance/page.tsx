"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription, CardHeader } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { BANK } from "@/lib/constants";
import {
  ArrowRight,
  MessageSquare,
  Building2,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Phone,
  Mail,
  FileText,
  Shield,
} from "lucide-react";

const escalationLevels = [
  {
    level: 1,
    name: "Branch Level",
    description: "First level of contact for all complaints and grievances.",
    timeline: "Within 30 days",
    contact: "Visit your nearest MNS Bank branch or call 0755-XXXXXXX",
    icon: Building2,
    color: "from-crimson to-crimson-light",
  },
  {
    level: 2,
    name: "Head Office",
    description: "Escalate if not resolved at branch level within specified time.",
    timeline: "Response within 15 days",
    contact: "Email: grievance@mnsbankbhopal.com | Phone: 0755-XXXXXXX",
    icon: Building2,
    color: "from-crimson-dark to-crimson",
  },
  {
    level: 3,
    name: "RBI Ombudsman",
    description: "If unsatisfied with bank&apos;s response, escalate to RBI Ombudsman.",
    timeline: "After 30 days from bank response",
    contact: "Online: https://cms.rbi.org.in | Toll-free: 14400",
    icon: Shield,
    color: "from-charcoal to-charcoal-light",
  },
];

const commonGrievances = [
  { category: "Account Related", issues: ["Account opening/closing", "Balance issues", "Transaction failures"] },
  { category: "Loans", issues: ["Loan processing delay", "EMI issues", "Interest rate disputes"] },
  { category: "Digital Banking", issues: ["UPI failures", "Net banking issues", "Card blocking"] },
  { category: "Staff Behaviour", issues: ["Unprofessional conduct", "Service quality", "Compliance issues"] },
];

export default function GrievancePage() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

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
              Customer Service
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Grievance Redressal
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Your satisfaction is our priority. We have a robust grievance redressal mechanism
              to address all your concerns promptly and fairly.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Grievance Categories */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="How We Can Help"
            title="Common Grievance Categories"
            subtitle="Identify the right category for your complaint to get faster resolution."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonGrievances.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default">
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                  <ul className="mt-4 space-y-2">
                    {category.issues.map((issue, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted">
                        <ChevronRight className="w-4 h-4 text-crimson shrink-0" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Escalation Flowchart */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Escalation Process"
            title="3-Level Grievance Redressal"
            subtitle="Follow the escalation process for timely resolution of your complaints."
          />

          <div className="mt-16">
            {/* Flowchart */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-platinum -translate-y-1/2" />

              <div className="grid md:grid-cols-3 gap-8">
                {escalationLevels.map((level, index) => (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative"
                  >
                    <AnimatedCard variant="default">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-lg`}
                        >
                          <level.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <span className="text-xs font-medium tracking-widest uppercase text-crimson">
                            Level {level.level}
                          </span>
                          <CardTitle>{level.name}</CardTitle>
                        </div>
                      </div>

                      <p className="text-sm text-muted">{level.description}</p>

                      <div className="mt-4 p-3 bg-platinum rounded-lg">
                        <p className="text-xs text-muted mb-1">Expected Response</p>
                        <p className="text-sm font-medium text-crimson">{level.timeline}</p>
                      </div>

                      <p className="mt-4 text-sm text-muted">{level.contact}</p>
                    </AnimatedCard>

                    {/* Arrow indicator */}
                    {index < 2 && (
                      <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                        <ChevronRight className="w-8 h-8 text-crimson bg-white rounded-full" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RBI Ombudsman Section */}
      <section className="section-padding bg-charcoal">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4">
                Final Recourse
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                RBI Ombudsman Scheme
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                If you are not satisfied with the response from our bank or your complaint
                remains unresolved after 30 days, you can approach the RBI Ombudsman for
                digital banking complaints or other specified grievances.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <ExternalLink className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Online Complaint Portal</p>
                    <a
                      href="https://cms.rbi.org.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gold hover:underline"
                    >
                      https://cms.rbi.org.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-white">Toll-Free Helpline</p>
                    <p className="text-sm text-white/70">14400 (Mon-Sat, 9:30 AM - 5:00 PM)</p>
                  </div>
                </div>
              </div>

              <a
                href="https://cms.rbi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8"
              >
                <PremiumButton
                  size="lg"
                  rightIcon={<ExternalLink className="w-5 h-5" />}
                >
                  File RBI Complaint
                </PremiumButton>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedCard variant="stat">
                <div className="text-center">
                  <Shield className="w-20 h-20 text-gold mx-auto mb-6" />
                  <CardTitle className="text-2xl text-white">
                    RBI Integrated Ombudsman Scheme, 2021
                  </CardTitle>
                  <CardDescription className="mt-4 text-white/70">
                    Covers complaints related to deficiency in services by banks,
                    non-observance of RBI instructions, and more.
                  </CardDescription>
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Complaint Form */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Submit Your Grievance"
            title="Complaint Form"
            subtitle="Fill out this form for a prompt response from our grievance cell."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <AnimatedCard variant="default">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Customer ID / Account Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your customer ID or account number"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Branch (where complaint occurred) *
                    </label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all">
                      <option value="">Select branch</option>
                      <option value="main">Main Branch</option>
                      <option value="arya-samaj">Arya Samaj Branch</option>
                      <option value="habib-ganj">Habib Ganj Branch</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Nature of Complaint *
                    </label>
                    <select required className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all">
                      <option value="">Select category</option>
                      <option value="account">Account Related</option>
                      <option value="loan">Loan Related</option>
                      <option value="digital">Digital Banking</option>
                      <option value="staff">Staff Behaviour</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Complaint Details *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Please describe your complaint in detail. Include dates, transaction details, and any reference numbers if applicable..."
                    className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Expected Resolution
                  </label>
                  <textarea
                    rows={3}
                    placeholder="What resolution are you expecting?"
                    className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 p-4 bg-gold/10 rounded-xl">
                  <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <p className="text-sm text-charcoal">
                    <strong>Note:</strong> Your complaint will be acknowledged within 24 hours and
                    resolved within 30 days. For urgent matters, please contact the branch directly.
                  </p>
                </div>

                <PremiumButton
                  type="submit"
                  size="lg"
                  className="w-full"
                  rightIcon={<MessageSquare className="w-5 h-5" />}
                >
                  Submit Complaint
                </PremiumButton>
              </form>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-12 bg-platinum border-t border-b border-platinum">
        <div className="container-premium">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { icon: FileText, label: "RBI Guidelines" },
              { icon: Shield, label: "DICGC Insured" },
              { icon: FileText, label: "Fair Practices Code" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-crimson" />
                <span className="text-sm font-medium text-charcoal">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
