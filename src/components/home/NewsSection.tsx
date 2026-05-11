"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { NEWS_ITEMS } from "@/lib/constants";

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
    <section className="py-20 bg-ivory relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-crimson/5 to-transparent rounded-full blur-3xl" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-end justify-between mb-16"
        >
          <div>
            <span className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
              Stay Updated
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
              Latest from <span className="text-crimson">MNS Bank</span>
            </h2>
          </div>
          <Link
            href="/news"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-crimson font-medium hover:gap-4 transition-all"
          >
            View All News
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-white rounded-2xl p-8 border border-transparent hover:border-crimson/20 hover:shadow-xl transition-all duration-300"
            >
              {/* Date Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-crimson" aria-hidden="true" />
                </div>
                <span className="text-xs text-muted">{formatDate(news.date)}</span>
              </div>

              <h3 className="font-display text-xl font-semibold text-charcoal mb-4 group-hover:text-crimson transition-colors line-clamp-2">
                {news.title}
              </h3>

              <p className="text-muted text-sm mb-6 line-clamp-3 leading-relaxed">
                {news.excerpt}
              </p>

              <Link
                href={news.href}
                className="inline-flex items-center gap-2 text-crimson font-medium text-sm group-hover:gap-4 transition-all"
              >
                Read More
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}