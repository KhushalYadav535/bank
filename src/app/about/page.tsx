"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { BANK } from "@/lib/constants";
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              Our Heritage
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Six Decades of Community Banking
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Since 1965, {BANK.name} has been the trusted financial partner for Bhopal's
              families, businesses, and communities.
            </p>
          </motion.div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Our Story / Timeline */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Our Journey"
            title="Our Story"
            subtitle="From humble beginnings to becoming one of Bhopal's most trusted cooperative banks, our journey reflects our commitment to community banking."
          />

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
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section id="board" className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Leadership"
            title="Board of Directors"
            subtitle="Meet the dedicated team guiding MNS Bank towards continued excellence."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section id="awards" className="section-padding bg-charcoal">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Recognition"
            title="Awards & Recognition"
            subtitle="Our commitment to excellence has been recognized by industry bodies."
            light
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard variant="stat">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-6 h-6 text-gold" />
                    <span className="text-sm text-white/60">{award.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{award.title}</h3>
                  <p className="text-sm text-white/70 mt-2">{award.issuer}</p>
                </AnimatedCard>
              </motion.div>
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

      <Footer />
    </main>
  );
}
