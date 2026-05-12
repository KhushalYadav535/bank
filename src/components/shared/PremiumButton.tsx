"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { Loader2, ArrowRight, Check } from "lucide-react";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 overflow-hidden group cursor-pointer",
  {
    variants: {
      variant: {
        filled: "bg-gradient-to-r from-crimson to-crimson-dark text-white hover:shadow-xl hover:shadow-crimson/30 focus-visible:ring-crimson",
        outlined: "border-2 border-crimson text-crimson hover:bg-crimson hover:text-white bg-transparent focus-visible:ring-crimson",
        ghost: "text-crimson hover:bg-crimson/10 focus-visible:ring-crimson",
        gold: "bg-gradient-to-r from-gold to-gold-light text-charcoal hover:shadow-xl hover:shadow-gold/30 focus-visible:ring-gold",
        link: "text-crimson underline-offset-4 hover:underline",
        premium: "bg-gradient-to-r from-crimson via-gold to-crimson text-white hover:shadow-2xl shadow-crimson/20 focus-visible:ring-crimson",
        subtle: "bg-platinum text-charcoal hover:bg-platinum/80 border border-platinum/50",
      },
      size: {
        sm: "h-9 px-5 text-sm rounded-full",
        md: "h-11 px-6 text-sm rounded-full",
        lg: "h-14 px-10 text-base rounded-full",
        xl: "h-16 px-12 text-lg rounded-full",
        pill: "h-12 px-8 text-base rounded-full",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

interface PremiumButtonProps extends HTMLMotionProps<"button">, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  isSuccess?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showArrow?: boolean;
}

const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, isLoading, isSuccess, leftIcon, rightIcon, showArrow = false, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={disabled || isLoading ? {} : { scale: 1.03, y: -2 }}
        whileTap={disabled || isLoading ? {} : { scale: 0.97 }}
        transition={{ duration: 0.2 }}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {/* Shimmer Effect */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

        {isLoading ? (
          <motion.span
            className="relative z-10 flex items-center gap-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        ) : isSuccess ? (
          <motion.span
            className="relative z-10 flex items-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Check className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        ) : leftIcon ? (
          <span className="relative z-10 shrink-0" aria-hidden="true">{leftIcon}</span>
        ) : null}

        <span className="relative z-10">{children}</span>

        {(rightIcon || showArrow) && !isLoading && !isSuccess && (
          <motion.span
            className="relative z-10 shrink-0"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {rightIcon || <ArrowRight className="w-4 h-4" aria-hidden="true" />}
          </motion.span>
        )}

        {/* Glow Effect on Hover */}
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

// Floating action button
interface FABProps extends HTMLMotionProps<"button"> {
  icon?: React.ReactNode;
  label?: string;
}

const FloatingActionButton = forwardRef<HTMLButtonElement, FABProps>(
  ({ className, icon, label, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "fixed bottom-8 right-8 z-40 flex items-center gap-3 px-5 py-3 bg-crimson text-white rounded-full shadow-xl shadow-crimson/30",
          className
        )}
        whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(184, 0, 0, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400 }}
        aria-label={label}
        {...props}
      >
        {icon || children}
        {label && <span className="text-sm font-medium">{label}</span>}
      </motion.button>
    );
  }
);

FloatingActionButton.displayName = "FloatingActionButton";

// Icon button variant
const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer",
  {
    variants: {
      variant: {
        filled: "bg-crimson text-white hover:bg-crimson-light shadow-md hover:shadow-lg focus-visible:ring-crimson",
        outlined: "border-2 border-crimson text-crimson hover:bg-crimson hover:text-white focus-visible:ring-crimson",
        ghost: "bg-white/10 text-charcoal hover:bg-white/20 focus-visible:ring-white/50",
        subtle: "bg-platinum text-charcoal hover:bg-crimson hover:text-white focus-visible:ring-crimson",
      },
      size: {
        sm: "w-9 h-9",
        md: "w-12 h-12",
        lg: "w-16 h-16",
        xl: "w-20 h-20",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

interface IconButtonProps extends HTMLMotionProps<"button">, VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(iconButtonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        {...props}
      >
        {icon}
      </motion.button>
    );
  }
);

IconButton.displayName = "IconButton";

// Loading spinner
function LoadingSpinner({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <motion.div
      className={cn("border-2 border-crimson/30 border-t-crimson rounded-full", sizes[size])}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      role="status"
      aria-label="Loading"
    />
  );
}

export { PremiumButton, buttonVariants, FloatingActionButton, IconButton, LoadingSpinner };