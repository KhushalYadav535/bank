"use client";

import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
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
    <footer className="bg-charcoal text-white/90">
      {/* Trust Strip */}
      <div className="border-b border-white/10">
        <div className="container-premium py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: "RBI Regulated", icon: "🏛️" },
              { label: "DICGC Insured", icon: "🛡️" },
              { label: "NPCI Member", icon: "💳" },
              { label: "Net Banking Enabled", icon: "🔐" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">{item.icon}</span>
                <span className="text-sm font-medium tracking-wide">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-premium py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-crimson rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">M</span>
              </div>
              <div>
                <span className="font-display text-2xl font-semibold text-white">
                  {BANK.shortName}
                </span>
                <p className="text-xs text-white/50 tracking-[0.15em] uppercase">
                  Est. 1965 · Bhopal
                </p>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              {BANK.tagline}. Serving Bhopal&apos;s families and businesses with trust and
              excellence for over 58 years.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-crimson hover:border-crimson hover:text-white transition-all duration-300"
                  aria-label={`Follow us on ${platform}`}
                >
                  {SocialIcons[platform]}
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">
              Products
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Services Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">
              Digital Services
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.digitalServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1" aria-hidden="true" />
                <p className="text-white/60 text-sm">
                  {BRANCHES[0].address}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" aria-hidden="true" />
                <p className="text-white/60 text-sm">{BRANCHES[0].phone}</p>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold" aria-hidden="true" />
                <p className="text-white/60 text-sm">{BRANCHES[0].hours}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="font-medium text-sm text-white/80 mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.quickLinks.slice(0, 3).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-gold transition-colors text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-crimson">
        <div className="container-premium py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {BANK.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/40 hover:text-gold transition-colors text-xs"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}