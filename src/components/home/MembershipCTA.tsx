"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Users, Shield, HeartHandshake, Sparkles, Star, Award } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { MagneticButton } from "@/components/shared/MagneticButton";

export function MembershipCTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-dots-pattern opacity-20" />
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-gold/20 rounded-full"
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-32 w-6 h-6 bg-crimson/10 rounded-full"
        animate={{ y: [0, 15, 0], rotate: [0, -180, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-40 left-1/3 w-3 h-3 bg-gold/30 rounded-full"
        animate={{ y: [0, -25, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <ScrollReveal animation="slide-left">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-4 h-4 text-gold" aria-hidden="true" />
              <span className="text-gold text-xs tracking-[0.15em] uppercase font-medium">Join the Family</span>
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal tracking-tight mb-8 leading-tight">
              Become a Member. <br />
              <span className="gradient-text">Own Your Bank.</span>
            </h2>

            <p className="text-muted text-lg leading-relaxed mb-10 max-w-lg">
              MNS Bank is a cooperative society — which means our members are not just customers,
              they&apos;re owners. As a member, you have a voice in our decisions, share in our
              successes, and benefit from personalized service that only a neighborhood bank can offer.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { icon: <Users className="w-6 h-6" />, text: "Community Driven", color: "crimson" },
                { icon: <Shield className="w-6 h-6" />, text: "DICGC Insured", color: "gold" },
                { icon: <HeartHandshake className="w-6 h-6" />, text: "Member Benefits", color: "crimson" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group flex items-center gap-4 p-4 bg-ivory rounded-xl border border-transparent hover:border-platinum transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      item.color === 'crimson'
                        ? 'bg-gradient-to-br from-crimson/20 to-crimson/10 text-crimson'
                        : 'bg-gradient-to-br from-gold/20 to-gold/10 text-gold'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span className="text-sm font-medium text-charcoal group-hover:text-crimson transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <MagneticButton href="/contact" variant="primary">
              <span className="flex items-center gap-3">
                Apply for Membership
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </span>
            </MagneticButton>
          </ScrollReveal>

          {/* Right Image/Visual */}
          <ScrollReveal animation="slide-right" delay={0.2} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Circle with Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-crimson/10 to-gold/10 rounded-full"
                animate={{ scale: [1, 1.05, 1], rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-4 border-2 border-crimson/10 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border border-gold/10 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Decorative Blobs */}
              <motion.div
                className="absolute top-12 left-12 w-20 h-20 bg-crimson/20 rounded-full animate-blob"
              />
              <motion.div
                className="absolute bottom-12 right-12 w-24 h-24 bg-gold/20 rounded-full animate-blob"
                style={{ animationDelay: "2s" }}
              />

              {/* Center Badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-56 h-56 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5" />
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-crimson/10 rounded-full blur-2xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  />

                  {/* Badge Icon */}
                  <motion.div
                    className="relative w-20 h-20 bg-gradient-to-br from-crimson to-crimson-dark rounded-full flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <span className="text-white font-display font-bold text-4xl">M</span>
                    {/* Glow Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-pulse-ring" />
                  </motion.div>

                  <motion.span
                    className="relative font-display text-2xl font-semibold text-charcoal mb-2"
                    whileHover={{ color: "#B80000" }}
                  >
                    MNS Bank
                  </motion.span>

                  <div className="relative flex items-center gap-2 text-muted">
                    <Star className="w-4 h-4 text-gold" />
                    <span className="text-xs tracking-wider uppercase">Member Since 1965</span>
                    <Star className="w-4 h-4 text-gold" />
                  </div>

                  {/* Corner Decorations */}
                  <motion.div
                    className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-crimson/20 rounded-tl-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold/20 rounded-br-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-4 left-1/4 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-xs font-medium text-charcoal">50+ Years</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 right-1/4 px-4 py-2 bg-white rounded-full shadow-lg flex items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Users className="w-4 h-4 text-crimson" />
                <span className="text-xs font-medium text-charcoal">25K+ Members</span>
              </motion.div>

              {/* Decorative Corner Elements */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16"
                initial={{ opacity: 0, rotate: -45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-full h-1 bg-gradient-to-r from-crimson to-transparent" />
                <div className="w-1 h-full bg-gradient-to-b from-crimson to-transparent ml-auto" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-0 w-16 h-16"
                initial={{ opacity: 0, rotate: 45 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="w-full h-1 bg-gradient-to-l from-gold to-transparent ml-auto" />
                <div className="w-1 h-full bg-gradient-to-t from-gold to-transparent" />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}