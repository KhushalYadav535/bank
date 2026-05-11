"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Home, Briefcase, GraduationCap, Smartphone, CreditCard, Building } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, React.ReactNode> = {
  Home: <Home className="w-7 h-7" aria-hidden="true" />,
  Briefcase: <Briefcase className="w-7 h-7" aria-hidden="true" />,
  GraduationCap: <GraduationCap className="w-7 h-7" aria-hidden="true" />,
  Smartphone: <Smartphone className="w-7 h-7" aria-hidden="true" />,
  Wallet: <CreditCard className="w-7 h-7" aria-hidden="true" />,
  Building: <Building className="w-7 h-7" aria-hidden="true" />,
};

export function ProductGrid() {
  return (
    <section className="py-20 bg-platinum relative">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
            Our Solutions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight">
            Everything Your <span className="text-crimson">Money Needs</span>
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            From savings accounts to business loans, we offer comprehensive financial solutions
            tailored for every need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={product.href}
                className="group relative block bg-white rounded-2xl p-8 border border-transparent transition-all duration-300 hover:border-crimson/20 hover:shadow-xl overflow-hidden"
              >
                {/* Left Border Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-crimson transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-crimson/5 text-crimson flex items-center justify-center mb-6 group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                  {ICONS[product.icon] || <CreditCard className="w-7 h-7" />}
                </div>

                <h3 className="font-display text-2xl font-semibold text-charcoal mb-3 group-hover:text-crimson transition-colors">
                  {product.title}
                </h3>

                <p className="text-muted text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 text-crimson font-medium text-sm group-hover:gap-4 transition-all duration-300">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}