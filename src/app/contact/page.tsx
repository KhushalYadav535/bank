"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription, CardHeader } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { ParticleBackground } from "@/components/3d";
import { BANK, BRANCHES } from "@/lib/constants";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare,
  Send,
  Building2,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson via-crimson-dark to-charcoal overflow-hidden">
        <ParticleBackground />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/90 via-crimson-dark/95 to-charcoal/90" />

        {/* Decorative elements */}
        <div className="absolute top-40 right-20 w-56 h-56 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-24 left-40 w-80 h-80 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Contact Us
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Visit any of our three branches in Bhopal or reach out to us through our contact form.
              We&apos;re here to help you with all your banking needs.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="tel:+917551234567" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-crimson font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="mailto:info@mnsbankbhopal.com" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
                <Mail className="w-4 h-4" /> Email Us
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

      {/* Branch Locator */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Visit Us"
            title="Our Branches in Bhopal"
            subtitle="Find the nearest MNS Bank branch to you. All branches operate Monday to Saturday."
          />

          <div className="mt-16 grid lg:grid-cols-3 gap-8">
            {BRANCHES.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="default">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-crimson to-crimson-light flex items-center justify-center mb-4">
                    <Building2 className="w-7 h-7 text-white" />
                  </div>

                  <CardTitle>{branch.name}</CardTitle>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-crimson shrink-0 mt-0.5" />
                      <p className="text-sm text-muted">{branch.address}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-crimson shrink-0" />
                      <a href={`tel:${branch.phone.replace(/-/g, "")}`} className="text-sm text-charcoal hover:text-crimson transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-crimson shrink-0" />
                      <p className="text-sm text-muted">{branch.hours}</p>
                    </div>
                  </div>

                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-crimson hover:text-crimson-dark transition-colors"
                  >
                    Get Directions
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="bg-platinum h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-crimson mx-auto mb-4" />
                <p className="text-muted">Google Maps Embed</p>
                <p className="text-sm text-muted mt-2">
                  Map showing 3 MNS Bank branches in Bhopal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                eyebrow="Reach Out"
                title="Send Us a Message"
                align="left"
                subtitle="Have a question or need assistance? Fill out the form and our team will get back to you within 24 hours."
              />

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-crimson" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Email Us</p>
                    <a href="mailto:info@mnsbankbhopal.com" className="text-sm text-muted hover:text-crimson transition-colors">
                      info@mnsbankbhopal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-crimson" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Call Us</p>
                    <a href="tel:+917551234567" className="text-sm text-muted hover:text-crimson transition-colors">
                      0755-XXXXXXX (Mon-Sat, 10AM-4PM)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-crimson/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-6 h-6 text-crimson" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">WhatsApp</p>
                    <p className="text-sm text-muted">Available during banking hours</p>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-xl border border-platinum">
                  <p className="font-medium text-charcoal mb-2">Grievance Redressal</p>
                  <p className="text-sm text-muted mb-4">
                    For escalations, please visit our Grievance Redressal page or contact:
                  </p>
                  <a href="mailto:grievance@mnsbankbhopal.com" className="text-sm text-crimson hover:underline">
                    grievance@mnsbankbhopal.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                      />
                    </div>
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

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="account">Account Opening</option>
                      <option value="loan">Loan Inquiry</option>
                      <option value="deposit">Deposit Inquiry</option>
                      <option value="complaint">Complaint/Grievance</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Nearest Branch
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all">
                      <option value="">Select branch</option>
                      <option value="main">Main Branch</option>
                      <option value="arya-samaj">Arya Samaj Branch</option>
                      <option value="habib-ganj">Habib Ganj Branch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-lg border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="contact-consent"
                      required
                      className="mt-1 accent-crimson"
                    />
                    <label htmlFor="contact-consent" className="text-sm text-muted">
                      I consent to MNS Bank contacting me regarding this inquiry. I have read and
                      agree to the Privacy Policy.
                    </label>
                  </div>

                  <PremiumButton
                    type="submit"
                    size="lg"
                    className="w-full"
                    rightIcon={<Send className="w-5 h-5" />}
                  >
                    Send Message
                  </PremiumButton>
                </form>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs Quick Links */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Self Service"
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common queries."
          />

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { q: "How do I open a savings account?", href: "/faqs#account" },
              { q: "What documents are required for a loan?", href: "/faqs#loan-docs" },
              { q: "How do I activate net banking?", href: "/faqs#netbanking" },
              { q: "What is the minimum balance requirement?", href: "/faqs#min-balance" },
              { q: "How do I close my FD before maturity?", href: "/faqs#fd-close" },
              { q: "How do I update my KYC documents?", href: "/faqs#kyc" },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-platinum hover:border-crimson/30 hover:shadow-lg transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-crimson shrink-0" />
                <span className="text-sm font-medium text-charcoal group-hover:text-crimson transition-colors">
                  {item.q}
                </span>
                <ArrowRight className="w-4 h-4 text-muted ml-auto group-hover:text-crimson group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/faqs" className="inline-flex items-center gap-2 text-sm font-medium text-crimson hover:underline">
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
