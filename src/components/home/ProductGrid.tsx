"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Briefcase, GraduationCap, Smartphone, CreditCard, Building, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ScrollReveal, StaggerReveal } from "@/components/shared/ScrollReveal";
import { TiltCard } from "@/components/shared/TiltCard";

const ICONS: Record<string, React.ReactNode> = {
  Home: <Home className="w-7 h-7" aria-hidden="true" />,
  Briefcase: <Briefcase className="w-7 h-7" aria-hidden="true" />,
  GraduationCap: <GraduationCap className="w-7 h-7" aria-hidden="true" />,
  Smartphone: <Smartphone className="w-7 h-7" aria-hidden="true" />,
  Wallet: <CreditCard className="w-7 h-7" aria-hidden="true" />,
  Building: <Building className="w-7 h-7" aria-hidden="true" />,
};

export function ProductGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-ivory relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dots-pattern opacity-50" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-gold/20 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-20 w-6 h-6 bg-crimson/10 rounded-full"
        animate={{ y: [0, 15, 0], rotate: [0, -180, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-3 h-3 bg-gold/30 rounded-full"
        animate={{ y: [0, -25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container-premium relative z-10">
        <ScrollReveal animation="fade-up-smooth" className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">Our Solutions</span>
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-6">
            Everything Your <span className="gradient-text">Money Needs</span>
          </h2>

          <p className="text-muted mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            From savings accounts to business loans, we offer comprehensive financial solutions
            tailored for every need.
          </p>

          {/* Decorative Line */}
          <motion.div
            className="mt-8 mx-auto w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </ScrollReveal>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <ScrollReveal key={product.id} animation="fade-up-smooth" delay={index * 0.1}>
              <TiltCard glowOnHover={true} glassEffect={false}>
                <Link
                  href={product.href}
                  className="group relative block bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-platinum/60 transition-all duration-500 hover:border-crimson/20 hover:shadow-xl hover:shadow-crimson/10 overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Left Border Accent with Animation */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-crimson via-gold to-crimson transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  />

                  {/* Icon Container with Glow */}
                  <div className="relative w-16 h-16 mb-6">
                    <motion.div
                      className="absolute inset-0 bg-crimson/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ scale: [0.8, 1.2, 0.8] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-crimson/10 to-gold/10 flex items-center justify-center mb-6 group-hover:bg-crimson group-hover:scale-110 transition-all duration-300">
                      <div className="text-crimson group-hover:text-white transition-colors duration-300">
                        {ICONS[product.icon] || <CreditCard className="w-7 h-7" />}
                      </div>
                    </div>
                  </div>

                  <h3 className="relative font-display text-2xl font-semibold text-charcoal mb-4 group-hover:text-crimson transition-colors duration-300">
                    {product.title}
                  </h3>

                  <p className="relative text-muted text-sm mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Arrow with Animation */}
                  <div className="relative flex items-center gap-3">
                    <span className="text-crimson font-medium text-sm group-hover:tracking-wider transition-all duration-300">
                      Explore
                    </span>
                    <motion.div
                      className="text-crimson"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </motion.div>

                    {/* Hover Arrow Trail */}
                    <motion.div
                      className="absolute left-12 w-8 h-px bg-crimson/30 opacity-0 group-hover:opacity-100"
                      initial={{ width: 0 }}
                      whileHover={{ width: 32 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Corner Decoration */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-crimson/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </Link>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}