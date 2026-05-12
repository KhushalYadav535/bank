"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BANK_STATS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

function Counter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className="tabular-nums inline-block"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
}

export function StatBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-crimson to-crimson-dark relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_transparent_25%,_white_25%,_white_50%,_transparent_50%,_transparent_75%,_white_75%)] bg-[length:30px_30px]" />
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Decorative Lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container-premium relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {BANK_STATS.map((stat, index) => (
            <ScrollReveal key={stat.label} animation="fade-up-smooth" delay={index * 0.15}>
              <motion.div
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon / Decorative Element */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center relative overflow-hidden"
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    {/* Decorative circles */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10" />
                    <div className="relative">
                      {index === 0 && (
                        <motion.div
                          className="w-8 h-8 border-2 border-white/50 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                      {index === 1 && (
                        <motion.div
                          className="text-white text-2xl font-bold"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ★
                        </motion.div>
                      )}
                      {index === 2 && (
                        <motion.div
                          className="w-0 h-0 border-l-[12px] border-l-white/50 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-transparent"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                      {index === 3 && (
                        <motion.svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-70">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </motion.svg>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Number with Animation */}
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 relative">
                  <Counter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  {/* Underline Glow */}
                  <motion.div
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "4rem" } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>

                {/* Label */}
                <motion.p
                  className="text-white/70 text-sm tracking-wide uppercase font-medium relative"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {stat.label}
                  {/* Decorative dot */}
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>
    </section>
  );
}