"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Shield, HeartHandshake } from "lucide-react";

export function MembershipCTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">
              Join the Family
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal tracking-tight mb-6">
              Become a Member. <br />
              <span className="text-crimson">Own Your Bank.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              MNS Bank is a cooperative society — which means our members are not just customers,
              they&apos;re owners. As a member, you have a voice in our decisions, share in our
              successes, and benefit from personalized service that only a neighborhood bank can offer.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Users className="w-5 h-5" />, text: "Community Driven" },
                { icon: <Shield className="w-5 h-5" />, text: "DICGC Insured" },
                { icon: <HeartHandshake className="w-5 h-5" />, text: "Member Benefits" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-charcoal">
                  <div className="w-10 h-10 rounded-full bg-crimson/10 text-crimson flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-crimson text-white font-medium rounded-full hover:bg-crimson-light shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Apply for Membership
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </motion.div>

          {/* Right Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-gold/10 rounded-full" />

              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-crimson/20 rounded-full animate-blob" />
              <div className="absolute bottom-8 right-8 w-24 h-24 bg-gold/20 rounded-full animate-blob" style={{ animationDelay: "2s" }} />

              {/* Center Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8">
                  <div className="w-16 h-16 bg-crimson rounded-full flex items-center justify-center mb-4">
                    <span className="text-white font-display font-bold text-3xl">M</span>
                  </div>
                  <span className="font-display text-xl font-semibold text-charcoal mb-1">MNS Bank</span>
                  <span className="text-xs text-muted tracking-wider uppercase">Member Since 1965</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}