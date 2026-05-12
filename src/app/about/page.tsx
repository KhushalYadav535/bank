"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Navbar } from "@/components/layout/Navbar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { BANK } from "@/lib/constants";
import { DNABackgroundScene } from "@/components/3d";
import { ArrowRight, Calendar, Users, Award, Target, Eye, Shield, Star, Building2 } from "lucide-react";
import Link from "next/link";

const timelineEvents = [
  { year: 1965, title: "Foundation", description: "Bank established with a vision to serve Bhopal's community" },
  { year: 1980, title: "First Expansion", description: "Opened our second branch to serve growing membership" },
  { year: 1995, title: "Digital Journey Begins", description: "Introduced computerised banking systems" },
  { year: 2005, title: "UPI Launch", description: "Became NPCI member enabling digital payments" },
  { year: 2015, title: "Mobile Banking", description: "Launched mobile banking app for members" },
  { year: 2025, title: "New Era", description: "Fourth branch opening in Kolar Road" },
];

const boardMembers = [
  { name: "Shri Rajesh Kumar", role: "Chairman", tenure: "2019-2025" },
  { name: "Smt. Priya Sharma", role: "Vice Chairperson", tenure: "2021-2027" },
  { name: "Shri Anil Verma", role: "Managing Director", tenure: "2018-2024" },
  { name: "Dr. Sunita Patel", role: "Board Member", tenure: "2020-2026" },
  { name: "Shri Mahesh Tiwari", role: "Board Member", tenure: "2022-2028" },
  { name: "Smt. Kavita Jain", role: "Board Member", tenure: "2021-2027" },
];

const awards = [
  { year: 2023, title: "Best Cooperative Bank", issuer: "Madhya Pradesh Banking Awards" },
  { year: 2022, title: "Excellence in Community Banking", issuer: "Regional Banking Excellence Awards" },
  { year: 2021, title: "Digital Innovation Award", issuer: "NPCI Recognition" },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light overflow-hidden">
        <DNABackgroundScene />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/90 via-crimson/80 to-crimson-light/90" />

        {/* Decorative orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-crimson/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block px-4 py-2 bg-gold/20 rounded-full backdrop-blur-sm">
              Our Heritage
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl drop-shadow-lg">
              Six Decades of Community Banking
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl leading-relaxed">
              Since 1965, {BANK.name} has been the trusted financial partner for Bhopal's
              families, businesses, and communities.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-crimson font-semibold rounded-full hover:bg-white/90 transition-all hover:scale-105 hover:shadow-xl">
                Join Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory via-transparent to-transparent" />

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Our Story / Timeline */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="Our Journey"
              title="Our Story"
              subtitle="From humble beginnings to becoming one of Bhopal's most trusted cooperative banks, our journey reflects our commitment to community banking."
            />
          </ScrollReveal>

          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-platinum" />

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                    <AnimatedCard variant="default">
                      <span className="text-xs font-medium tracking-widest uppercase text-crimson">
                        {event.year}
                      </span>
                      <CardTitle className="mt-2">{event.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {event.description}
                      </CardDescription>
                    </AnimatedCard>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-crimson items-center justify-center shadow-lg shrink-0 z-10">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <ScrollReveal animation="slide-right" delay={0.1}>
              <AnimatedCard variant="default">
                <div className="w-16 h-16 rounded-2xl bg-crimson/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-crimson" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
                <CardDescription className="mt-4 text-base leading-relaxed">
                  To provide accessible, affordable, and reliable financial services to all members of our community,
                  fostering economic development and social welfare while maintaining the highest standards of
                  governance and customer service.
                </CardDescription>
              </AnimatedCard>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal animation="slide-left" delay={0.2}>
              <AnimatedCard variant="default">
                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-gold" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
                <CardDescription className="mt-4 text-base leading-relaxed">
                  To be the most trusted cooperative bank in Central India, known for our commitment to community
                  development, financial inclusion, and digital innovation while preserving the warmth of
                  neighbourhood banking.
                </CardDescription>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="section-padding bg-ivory">
        <div className="container-premium">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="Leadership"
              title="Board of Directors"
              subtitle="Meet the dedicated team guiding MNS Bank towards continued excellence."
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <ScrollReveal key={member.name} animation="fade-up" delay={index * 0.1}>
                <AnimatedCard variant="default">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-crimson to-crimson-light flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                      <p className="text-xs text-muted mt-1">Tenure: {member.tenure}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="section-padding bg-charcoal">
        <div className="container-premium">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="Recognition"
              title="Awards & Recognition"
              subtitle="Our commitment to excellence has been recognized by industry bodies."
              light
            />
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <ScrollReveal key={award.title} animation="scale" delay={index * 0.15}>
                <AnimatedCard variant="stat">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-gold" />
                    <span className="text-sm text-white/60">{award.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{award.title}</h3>
                  <p className="text-sm text-white/70 mt-2">{award.issuer}</p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-crimson">
        <div className="container-premium text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Building2 className="w-16 h-16 text-white/80 mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
              Ready to Join Our Cooperative Family?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
              Become a member today and experience the trust and warmth of community banking.
            </p>
            <Link href="/contact" className="inline-block mt-8">
              <PremiumButton size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Open an Account
              </PremiumButton>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
