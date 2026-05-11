"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Smartphone, Shield, Zap } from "lucide-react";

export function DigitalBankingBanner() {
  return (
    <section className="py-20 bg-charcoal relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-crimson/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(184,0,0,0.15)_0%,_transparent_70%)]" />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
              <Zap className="w-4 h-4" aria-hidden="true" />
              Digital Banking
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Bank at Your <br />
              <span className="text-gold">Fingertips</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Experience seamless banking with our intuitive mobile app and secure net banking portal.
              Transfer funds, pay bills, check balances — all from anywhere, anytime.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Zap className="w-5 h-5" />, title: "Instant Transfers", desc: "UPI & IMPS 24/7" },
                { icon: <Shield className="w-5 h-5" />, title: "Secure Platform", desc: "Bank-grade encryption" },
                { icon: <Monitor className="w-5 h-5" />, title: "Net Banking", desc: "Full-service portal" },
                { icon: <Smartphone className="w-5 h-5" />, title: "Mobile App", desc: "iOS & Android" },
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-crimson/20 text-gold flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm">{feature.title}</h4>
                      <p className="text-white/50 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://mnsbankbhopal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-crimson text-white font-medium rounded-full hover:bg-crimson-light transition-all duration-300 group"
              >
                <Monitor className="w-5 h-5" aria-hidden="true" />
                Net Banking
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link
                href="/digital-banking"
                className="inline-flex items-center gap-3 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 group"
              >
                <Smartphone className="w-5 h-5" aria-hidden="true" />
                Mobile App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-crimson/30 blur-3xl rounded-full" />

              {/* Phone Frame */}
              <div className="relative w-64 md:w-80 bg-gradient-to-b from-charcoal-800 to-charcoal-900 rounded-[3rem] p-3 shadow-2xl border border-white/10">
                <div className="bg-charcoal rounded-[2.5rem] p-6 relative overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-20 h-4 bg-white/20 rounded-full" />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                      <div className="w-8 h-3 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-crimson rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-display font-bold text-2xl">M</span>
                    </div>
                    <p className="text-white/80 text-sm font-medium">MNS Bank</p>
                  </div>

                  {/* Balance Card */}
                  <div className="bg-gradient-to-r from-crimson to-crimson-light rounded-2xl p-5 mb-4">
                    <p className="text-white/70 text-xs mb-1">Available Balance</p>
                    <p className="text-white text-3xl font-display font-bold">₹ 1,25,450.00</p>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3">
                    {["Send", "Add", "Pay"].map((action) => (
                      <div key={action} className="bg-white/5 rounded-xl p-3 text-center">
                        <div className="w-8 h-8 bg-crimson/30 rounded-full mx-auto mb-2" />
                        <p className="text-white/60 text-xs">{action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}