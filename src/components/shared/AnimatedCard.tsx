"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const cardVariants = cva(
  "relative overflow-hidden bg-white rounded-2xl border border-transparent transition-all duration-500 ease-out group",
  {
    variants: {
      variant: {
        product: "p-8 border-platinum hover:border-crimson/30 shadow-lg hover:shadow-2xl cursor-pointer",
        rate: "p-8 border-l-4 border-l-crimson hover:border-l-[6px] bg-white shadow-lg hover:shadow-2xl",
        news: "p-8 border border-platinum hover:border-crimson/30 hover:shadow-xl cursor-pointer",
        stat: "p-10 text-center bg-white/10 backdrop-blur-xl border border-white/20",
        premium: "p-8 glass-card border border-white/30 shadow-2xl",
        default: "p-8 border border-platinum hover:shadow-xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface AnimatedCardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
  glowOnHover?: boolean;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, variant, children, glowOnHover = false }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        whileHover={{
          y: -8,
          boxShadow: "0 25px 50px -12px rgba(184, 0, 0, 0.2)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Background Glow on Hover */}
        {glowOnHover && (
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        {/* Left Border Accent */}
        {variant === "product" && (
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-crimson via-gold to-crimson transform scale-y-0 origin-top transition-transform duration-500 group-hover:scale-y-100"
          />
        )}

        {/* Shine Effect */}
        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Corner Decoration */}
        <motion.div
          className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-crimson/20 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        {children}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

// Simple subcomponents without forwardRef for better type compatibility
function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mb-6 relative z-10", className)}>{children}</div>;
}

function CardTitle({ className, children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) {
  return (
    <h3 className={cn("font-display text-2xl font-semibold text-charcoal tracking-tight group-hover:text-crimson transition-colors duration-300", className)} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-muted text-sm leading-relaxed", className)}>{children}</p>;
}

function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("relative z-10", className)}>{children}</div>;
}

function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mt-6 flex items-center gap-3 relative z-10", className)}>{children}</div>;
}

// Gradient border card
function GradientBorderCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={cn("relative p-[1px] rounded-2xl bg-gradient-to-br from-crimson via-gold to-crimson", className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative bg-white rounded-2xl p-8">
        {children}
      </div>
    </motion.div>
  );
}

// Glass card with blur effect
function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl overflow-hidden",
        className
      )}
      whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

export { AnimatedCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants, GradientBorderCard, GlassCard };