"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { type HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  className,
  ...props
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={cn("max-w-3xl", alignmentClasses[align], className)}
      {...props}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "inline-block mb-4 text-xs font-medium tracking-[0.4em] uppercase",
            light ? "text-[#c87a4a]" : "text-gold"
          )}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight",
          light ? "text-[#f0ece4]" : "text-charcoal"
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mt-6 text-lg leading-relaxed",
            light ? "text-[#f0ece4]/70" : "text-muted"
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animated underline */}
      {align === "center" && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn("mt-8 mx-auto h-[1px] w-20 rounded-full", light ? "bg-[#c87a4a]" : "bg-crimson")}
          style={{ transformOrigin: "center" }}
        />
      )}
    </div>
  );
}
