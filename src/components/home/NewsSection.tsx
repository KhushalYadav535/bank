"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Newspaper, Sparkles } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { TiltCard } from "@/components/shared/TiltCard";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function NewsSection() {
  return (
    <section className="py-24 bg-ivory relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial-crimson opacity-10 blur-3xl" />
        <div className="absolute inset-0 bg-dots-pattern opacity-30" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-24 left-20 w-3 h-3 bg-gold/30 rounded-full"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-4 h-4 bg-crimson/20 rounded-full"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container-premium relative z-10">
        <ScrollReveal animation="fade-up-smooth" className="flex flex-col md:flex-row items-end justify-between mb-16">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-crimson/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Newspaper className="w-4 h-4 text-crimson" aria-hidden="true" />
              <span className="text-crimson text-xs tracking-[0.15em] uppercase font-medium">Stay Updated</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-4">
              Latest from <span className="gradient-text">MNS Bank</span>
            </h2>

            <p className="text-muted text-lg max-w-md">
              Stay informed with our latest announcements, updates, and financial insights.
            </p>
          </div>

          <motion.div
            className="mt-6 md:mt-0"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-3 px-6 py-3 bg-white text-charcoal text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group border border-platinum"
            >
              View All News
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </motion.span>
            </Link>
          </motion.div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news, index) => (
            <ScrollReveal key={news.id} animation="fade-up-smooth" delay={index * 0.15}>
              <TiltCard glowOnHover={true}>
                <motion.article
                  className="group bg-white rounded-2xl p-8 border border-transparent hover:border-crimson/20 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                  whileHover={{ y: -8 }}
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Date Badge */}
                  <motion.div
                    className="flex items-center gap-3 mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-crimson/10 to-gold/10 flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(184, 0, 0, 0.15)" }}
                    >
                      <Calendar className="w-5 h-5 text-crimson" aria-hidden="true" />
                    </motion.div>
                    <div>
                      <span className="text-xs text-muted">{formatDate(news.date)}</span>
                      <p className="text-xs text-gold font-medium">{news.dateLabel}</p>
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-ivory text-xs text-muted rounded-full">
                      {news.dateLabel}
                    </span>
                  </div>

                  <h3 className="relative font-display text-xl font-semibold text-charcoal mb-4 group-hover:text-crimson transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="relative text-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>

                  {/* Read More Link */}
                  <motion.div
                    className="relative flex items-center gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={news.href}
                      className="inline-flex items-center gap-2 text-crimson font-medium text-sm group-hover:tracking-wider transition-all duration-300"
                    >
                      Read More
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </motion.span>
                    </Link>

                    {/* Hover Arrow Trail */}
                    <motion.div
                      className="absolute left-20 w-0 h-px bg-crimson/30 group-hover:w-8 transition-all duration-300"
                    />
                  </motion.div>

                  {/* Corner Decoration */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-crimson/10 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </motion.article>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Newsletter CTA */}
        <ScrollReveal animation="fade-up" delay={0.3} className="text-center mt-16">
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-5 bg-white rounded-2xl shadow-xl border border-platinum"
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="w-12 h-12 rounded-full bg-gradient-to-br from-crimson to-gold flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <div className="text-left">
                <p className="font-medium text-charcoal">Subscribe to Updates</p>
                <p className="text-xs text-muted">Get the latest news delivered to your inbox</p>
              </div>
            </div>
            <motion.button
              className="px-6 py-3 bg-crimson text-white text-sm font-medium rounded-full hover:bg-crimson-light transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}