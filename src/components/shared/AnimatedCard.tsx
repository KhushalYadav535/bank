"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const cardVariants = cva(
  "relative overflow-hidden bg-white rounded-xl border border-transparent transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        product: "p-6 border-platinum hover:border-crimson/30 hover:shadow-xl cursor-pointer group",
        rate: "p-6 border-l-4 border-l-crimson hover:border-l-[6px] bg-white shadow-sm hover:shadow-md",
        news: "p-6 border border-platinum hover:border-crimson/30 hover:shadow-lg cursor-pointer",
        stat: "p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20",
        default: "p-6 border border-platinum hover:shadow-lg",
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
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, variant, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        whileHover={{
          y: -4,
          boxShadow: "0 20px 40px -12px rgba(184, 0, 0, 0.15)",
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
        {variant === "product" && (
          <div
            className={cn(
              "absolute left-0 top-0 h-full w-1 bg-crimson transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"
            )}
          />
        )}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

// Simple subcomponents without forwardRef for better type compatibility
function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

function CardTitle({ className, children, ...props }: { className?: string; children: React.ReactNode; [key: string]: unknown }) {
  return (
    <h3 className={cn("font-display text-xl font-semibold text-charcoal tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
}

function CardDescription({ className, children }: { className?: string; children: React.ReactNode }) {
  return <p className={cn("text-muted text-sm leading-relaxed", className)}>{children}</p>;
}

function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

function CardFooter({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mt-4 flex items-center gap-2", className)}>{children}</div>;
}

export { AnimatedCard, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, cardVariants };
