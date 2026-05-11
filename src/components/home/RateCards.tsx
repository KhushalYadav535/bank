"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Wallet, Lock, Calendar, Heart } from "lucide-react";
import { RATE_CARDS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ReactNode> = {
  Wallet: <Wallet className="w-6 h-6" aria-hidden="true" />,
  Lock: <Lock className="w-6 h-6" aria-hidden="true" />,
  Calendar: <Calendar className="w-6 h-6" aria-hidden="true" />,
  Heart: <Heart className="w-6 h-6" aria-hidden="true" />,
};

export function RateCards() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Today&apos;s Best Rates
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Competitive Returns for <span className="text-crimson">Your Growth</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RATE_CARDS.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={cn(
                "relative bg-white rounded-2xl p-6 border border-platinum transition-all duration-300 group",
                "hover:shadow-2xl hover:border-crimson/30",
                card.highlight && "ring-2 ring-gold"
              )}
            >
              {card.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-charcoal text-xs font-semibold rounded-full shadow-lg">
                  Best Rate
                </div>
              )}

              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
                card.highlight ? "bg-gold/20 text-gold" : "bg-crimson/10 text-crimson"
              )}>
                {ICONS[card.icon]}
              </div>

              <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-crimson transition-colors">
                {card.title}
              </h3>

              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-display text-4xl font-bold text-crimson">
                  {card.rate.toFixed(2)}%
                </span>
                <span className="text-sm text-muted">p.a.</span>
              </div>

              <p className="text-sm text-muted mb-1">{card.tenure}</p>
              <p className="text-xs text-muted/70 mb-6">{card.description}</p>

              <Link
                href={card.href}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-medium transition-colors",
                  card.highlight ? "text-gold hover:text-gold-light" : "text-crimson hover:text-crimson-light"
                )}
              >
                {card.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-muted mt-12 max-w-2xl mx-auto"
        >
          *Rates are subject to change. Senior citizens get additional 0.50% on FD. Please visit our
          branch or call for latest rates. Terms and conditions apply.
        </motion.p>
      </div>
    </section>
  );
}