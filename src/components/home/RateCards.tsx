"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wallet, Lock, Calendar, Heart, TrendingUp, Star } from "lucide-react";
import { RATE_CARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TiltCard } from "@/components/shared/TiltCard";

const ICONS: Record<string, React.ReactNode> = {
  Wallet: <Wallet className="w-6 h-6" aria-hidden="true" />,
  Lock: <Lock className="w-6 h-6" aria-hidden="true" />,
  Calendar: <Calendar className="w-6 h-6" aria-hidden="true" />,
  Heart: <Heart className="w-6 h-6" aria-hidden="true" />,
};

export function RateCards() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial-crimson opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Decorative Orbs */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 bg-crimson/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-premium relative z-10">
        <ScrollReveal animation="fade-up-smooth" className="text-center mb-16">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 rounded-full mb-6"
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            <TrendingUp className="w-4 h-4 text-crimson" aria-hidden="true" />
            <span className="text-crimson text-xs tracking-[0.15em] uppercase font-medium">Today&apos;s Best Rates</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6">
            Competitive Returns for <span className="gradient-text">Your Growth</span>
          </h2>

          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
            Lock in industry-leading rates and watch your wealth grow with complete security.
          </p>

          {/* Animated Divider */}
          <motion.div
            className="mt-8 mx-auto flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="w-12 h-px bg-gradient-to-r from-transparent to-crimson"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
            <Star className="w-4 h-4 text-gold animate-pulse" />
            <motion.span
              className="w-12 h-px bg-gradient-to-l from-transparent to-crimson"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {RATE_CARDS.map((card, index) => (
            <ScrollReveal key={card.id} animation="fade-up-smooth" delay={index * 0.1}>
              <TiltCard glowOnHover={true} glassEffect={true}>
                <motion.div
                  whileHover={{ y: -12, transition: { duration: 0.4 } }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-platinum/80 transition-all duration-500 group overflow-hidden",
                    "hover:shadow-2xl hover:shadow-crimson/10 hover:border-crimson/20",
                    card.highlight && "ring-2 ring-gold shadow-glow-gold"
                  )}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Best Rate Badge */}
                  {card.highlight && (
                    <motion.div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-gold to-gold-light text-charcoal text-xs font-bold rounded-b-2xl shadow-lg shadow-gold/20 flex items-center gap-2"
                      initial={{ y: -50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Star className="w-3 h-3" />
                      Best Rate
                      <Star className="w-3 h-3" />
                    </motion.div>
                  )}

                  {/* Icon with Glow Effect */}
                  <div className="relative w-14 h-14 mb-6">
                    <motion.div
                      className={cn(
                        "absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        card.highlight ? "bg-gold/30" : "bg-crimson/30"
                      )}
                    />
                    <div className={cn(
                      "relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                      card.highlight ? "bg-gradient-to-br from-gold/20 to-gold-light/20 text-gold group-hover:bg-gold group-hover:text-charcoal" : "bg-gradient-to-br from-crimson/10 to-gold/10 text-crimson group-hover:bg-crimson group-hover:text-white"
                    )}>
                      {ICONS[card.icon]}
                    </div>
                  </div>

                  <h3 className="relative font-display text-xl font-semibold text-charcoal mb-4 group-hover:text-crimson transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Rate Display with Animation */}
                  <div className="relative flex items-baseline gap-2 mb-4">
                    <motion.span
                      className="font-display text-5xl font-bold tabular-nums text-crimson"
                      animate={card.highlight ? {
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {card.rate.toFixed(2)}%
                    </motion.span>
                    <span className="text-sm text-muted">p.a.</span>
                  </div>

                  <p className="relative text-sm text-muted mb-2">{card.tenure}</p>
                  <p className="relative text-xs text-muted/70 mb-6 leading-relaxed">{card.description}</p>

                  {/* CTA Button */}
                  <Link
                    href={card.href}
                    className={cn(
                      "relative inline-flex items-center gap-3 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group",
                      card.highlight ? "bg-gold text-charcoal hover:bg-gold-light" : "bg-crimson text-white hover:bg-crimson-light"
                    )}
                  >
                    {/* Shimmer Effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                    <span className="relative z-10">{card.cta}</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.div>
                  </Link>

                  {/* Decorative Corner */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-crimson/10 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-in" delay={0.4} className="text-center">
          {/* Animated Disclaimer */}
          <motion.div
            className="mt-12 inline-flex items-center gap-3 px-6 py-3 bg-ivory rounded-full border border-platinum"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <p className="text-center text-xs text-muted">
              *Rates are subject to change. Senior citizens get additional 0.50% on FD. Please visit our branch or call for latest rates.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}