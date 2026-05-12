"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Smartphone, Shield, Zap, CreditCard, Globe, Lock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function DigitalBankingBanner() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-crimson/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(184,0,0,0.15)_0%,_transparent_70%)]" />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-crimson/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-48 h-48 bg-gold/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-gold/40 rounded-full"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-crimson/30 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="slide-left">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-gold" aria-hidden="true" />
              </motion.div>
              <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">Digital Banking</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-tight">
              Bank at Your <br />
              <span className="gradient-text">Fingertips</span>
            </h2>

            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Experience seamless banking with our intuitive mobile app and secure net banking portal.
              Transfer funds, pay bills, check balances — all from anywhere, anytime.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: <Zap className="w-5 h-5" />, title: "Instant Transfers", desc: "UPI & IMPS 24/7", color: "crimson" },
                { icon: <Shield className="w-5 h-5" />, title: "Secure Platform", desc: "Bank-grade encryption", color: "gold" },
                { icon: <Monitor className="w-5 h-5" />, title: "Net Banking", desc: "Full-service portal", color: "gold" },
                { icon: <Smartphone className="w-5 h-5" />, title: "Mobile App", desc: "iOS & Android", color: "crimson" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="group bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color === 'crimson' ? 'bg-crimson/20 text-gold' : 'bg-gold/20 text-gold'}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-gold transition-colors">{feature.title}</h4>
                      <p className="text-white/50 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="https://mnsbankbhopal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="relative inline-flex items-center gap-3 px-8 py-4 bg-crimson text-white font-medium rounded-full overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 50px -10px rgba(184, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shimmer Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <Monitor className="w-5 h-5 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">Net Banking</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                </motion.button>
              </Link>
              <Link href="/digital-banking">
                <motion.button
                  className="relative inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full overflow-hidden group"
                  whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shimmer Effect */}
                  <span className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <Smartphone className="w-5 h-5 relative z-10" aria-hidden="true" />
                  <span className="relative z-10">Mobile App</span>
                </motion.button>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right - Phone Mockup */}
          <ScrollReveal animation="slide-right" delay={0.3} className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-crimson/30 blur-4xl rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              {/* Decorative Ring */}
              <motion.div
                className="absolute -inset-10 border border-crimson/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Phone Frame */}
              <motion.div
                className="relative w-72 md:w-80 bg-gradient-to-b from-charcoal-800 to-charcoal-900 rounded-[3rem] p-4 shadow-2xl border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Screen Glow */}
                <div className="absolute inset-4 bg-crimson/5 rounded-[2.5rem] blur-xl" />

                <div className="bg-charcoal rounded-[2.5rem] p-6 relative overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 bg-crimson/20 rounded-full blur-2xl"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                  </div>

                  {/* Status Bar */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-20 h-4 bg-white/20 rounded-full" />
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white/20 rounded-full" />
                      <div className="w-8 h-3 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="text-center mb-6 relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-crimson rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white font-display font-bold text-2xl">M</span>
                    </motion.div>
                    <p className="text-white/80 text-sm font-medium">MNS Bank</p>
                  </div>

                  {/* Balance Card */}
                  <motion.div
                    className="bg-gradient-to-r from-crimson to-crimson-light rounded-2xl p-5 mb-4 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full animate-shimmer" />

                    <p className="text-white/70 text-xs mb-1">Available Balance</p>
                    <motion.p
                      className="text-white text-3xl font-display font-bold"
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ₹ 1,25,450.00
                    </motion.p>

                    {/* Card Details */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/10">
                      <span className="text-white/50 text-xs">**** 4523</span>
                      <span className="text-white/50 text-xs">12/26</span>
                    </div>
                  </motion.div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-3 relative z-10">
                    {[
                      { icon: <Zap className="w-4 h-4" />, label: "Send", color: "crimson" },
                      { icon: <CreditCard className="w-4 h-4" />, label: "Add", color: "gold" },
                      { icon: <Globe className="w-4 h-4" />, label: "Pay", color: "crimson" },
                    ].map((action, i) => (
                      <motion.div
                        key={action.label}
                        className="bg-white/5 rounded-xl p-3 text-center cursor-pointer group"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${action.color === 'crimson' ? 'bg-crimson/30' : 'bg-gold/30'}`}>
                          <span className="text-white">{action.icon}</span>
                        </div>
                        <p className="text-white/60 text-xs">{action.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Security Badge */}
                  <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-white/5">
                    <Lock className="w-3 h-3 text-white/40" />
                    <span className="text-white/40 text-[10px]">256-bit Encryption</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-gold text-charcoal text-xs font-bold rounded-full shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🔒 Secure
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}