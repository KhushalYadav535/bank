"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled: "bg-crimson text-white hover:bg-crimson-light shadow-md hover:shadow-lg",
        outlined: "border-2 border-crimson text-crimson hover:bg-crimson hover:text-white bg-transparent",
        ghost: "text-crimson hover:bg-crimson/10",
        gold: "bg-gold text-charcoal hover:bg-gold-light shadow-md hover:shadow-lg",
        link: "text-crimson underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md",
        md: "h-11 px-6 text-base rounded-lg",
        lg: "h-14 px-8 text-lg rounded-xl",
        pill: "h-12 px-8 text-base rounded-full",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

interface PremiumButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : leftIcon ? (
          <span className="shrink-0" aria-hidden="true">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && !isLoading && (
          <span className="shrink-0" aria-hidden="true">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";

export { PremiumButton, buttonVariants };
