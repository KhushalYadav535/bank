"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Shield, Award, CreditCard, Lock } from "lucide-react";
import { BANK, FOOTER_LINKS, BRANCHES, SOCIAL_LINKS } from "@/lib/constants";

// Social media SVG icons as inline components
const SocialIcons: Record<string, React.ReactNode> = {
  facebook: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  twitter: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4 4l11.733 16h4.267l-11.733-16zm4.452 3.587l6.951 8.666-6.951 8.666h1.666l6.951-8.666 6.116 8.666h4.267l-7.666-9.6-6.884 9.6h-1.667l7.032-8.8-7.564-9.266h-1.666l6.616 8.266z" />
    </svg>
  ),
  instagram: (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/90 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Trust Strip */}
      <div className="border-b border-white/10 relative">
        <div className="container-premium py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: "RBI Regulated", icon: <Shield className="w-5 h-5" /> },
              { label: "DICGC Insured", icon: <Lock className="w-5 h-5" /> },
              { label: "NPCI Member", icon: <CreditCard className="w-5 h-5" /> },
              { label: "Net Banking Enabled", icon: <Award className="w-5 h-5" /> },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-sm font-medium tracking-wide group-hover:text-gold transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-premium py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-flex items-center gap-4 mb-6 group">
                <motion.div
                  className="relative w-14 h-14 bg-gradient-to-br from-crimson to-crimson-dark rounded-xl flex items-center justify-center shadow-lg shadow-crimson/20"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-crimson/50 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-white font-display font-bold text-3xl">M</span>
                </motion.div>
                <div>
                  <motion.span
                    className="font-display text-2xl font-semibold text-white block"
                    whileHover={{ color: "#C9A84C" }}
                  >
                    {BANK.shortName}
                  </motion.span>
                  <p className="text-xs text-white/50 tracking-[0.15em] uppercase flex items-center gap-2">
                    <span className="w-4 h-px bg-white/30" />
                    Est. 1965 · Bhopal
                  </p>
                </div>
              </Link>

              <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
                {BANK.tagline}. Serving Bhopal&apos;s families and businesses with trust and
                excellence for over 58 years.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {Object.entries(SOCIAL_LINKS).map(([platform, url], i) => (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-crimson hover:border-crimson hover:text-white transition-all duration-300 overflow-hidden group"
                    aria-label={`Follow us on ${platform}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.05 }}
                  >
                    {/* Shimmer Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <span className="relative z-10">{SocialIcons[platform]}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Products
            </h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.products.map((link, i) => (
                <li key={link.label}>
                  <motion.div
                    className="flex items-center gap-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 h-0.5 bg-white/20 group-hover:w-4 group-hover:bg-crimson transition-all duration-300" />
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Digital Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-crimson" />
              Digital Services
            </h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.digitalServices.map((link, i) => (
                <li key={link.label}>
                  <motion.div
                    className="flex items-center gap-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-0 h-0.5 bg-white/20 group-hover:w-4 group-hover:bg-gold transition-all duration-300" />
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-gold transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-display text-lg font-semibold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-gold" />
              Contact Us
            </h3>
            <div className="space-y-5">
              <motion.div
                className="flex items-start gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 flex-shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                  {BRANCHES[0].address}
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-crimson group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">{BRANCHES[0].phone}</p>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-300 flex-shrink-0">
                  <Clock className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="text-white/60 text-sm group-hover:text-white transition-colors">{BRANCHES[0].hours}</p>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-medium text-sm text-white/80 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {FOOTER_LINKS.quickLinks.slice(0, 3).map((link, i) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-gold transition-colors text-xs flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-white/20 group-hover:w-3 group-hover:bg-crimson transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-crimson/30 relative">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              className="text-white/40 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} {BANK.name}. All rights reserved.
            </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              {FOOTER_LINKS.legal.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold transition-colors text-xs relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Corner */}
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-crimson/30 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-gold/30 to-transparent" />
        </motion.div>
      </div>
    </footer>
  );
}