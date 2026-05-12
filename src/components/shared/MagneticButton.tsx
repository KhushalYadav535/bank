"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [-8, 8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [8, -8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    x.set(mouseX * strength);
    y.set(mouseY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const variants = {
    primary: "bg-crimson text-white hover:bg-crimson-light shadow-lg hover:shadow-xl",
    secondary: "bg-gold text-charcoal hover:bg-gold-light shadow-lg hover:shadow-xl",
    outline: "border-2 border-crimson text-crimson hover:bg-crimson hover:text-white",
  };

  const content = (
    <motion.div
      ref={ref}
      className={cn(
        "relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden group",
        variants[variant],
        className
      )}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Background Shine Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {/* Glow Effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Content */}
      <span className="relative z-10">{children}</span>

      {/* Border Animation */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        initial={{ borderColor: "rgba(255,255,255,0)" }}
        whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
      />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

// Simple animated button without magnetic effect
interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
}

export function AnimatedButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon,
}: AnimatedButtonProps) {
  const variants = {
    primary: "bg-crimson text-white hover:bg-crimson-light",
    secondary: "bg-gold text-charcoal hover:bg-gold-light",
    outline: "border-2 border-crimson text-crimson hover:bg-crimson hover:text-white",
    ghost: "text-crimson hover:bg-crimson/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const content = (
    <motion.button
      className={cn(
        "relative inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-wide transition-all duration-300 overflow-hidden group",
        variants[variant],
        sizes[size],
        className
      )}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Shimmer Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

      {icon && (
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {icon}
        </motion.span>
      )}

      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

// Pulsing action button
interface PulseButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function PulseButton({ children, href, onClick, className }: PulseButtonProps) {
  const content = (
    <motion.button
      className={cn(
        "relative px-8 py-4 bg-crimson text-white rounded-full font-medium shadow-lg",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full animate-pulse-ring bg-crimson" />

      {/* Main Content */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}

// Loading button with spinner
interface LoadingButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function LoadingButton({
  children,
  isLoading = false,
  href,
  variant = "primary",
  className,
}: LoadingButtonProps) {
  const variants = {
    primary: "bg-crimson text-white",
    secondary: "bg-gold text-charcoal",
  };

  const content = (
    <motion.button
      className={cn(
        "relative px-8 py-4 rounded-full font-medium shadow-lg flex items-center justify-center gap-3 min-w-[150px]",
        variants[variant],
        isLoading && "opacity-70 cursor-not-allowed",
        className
      )}
      whileHover={isLoading ? {} : { scale: 1.05 }}
      whileTap={isLoading ? {} : { scale: 0.95 }}
      disabled={isLoading}
    >
      {isLoading && (
        <motion.div
          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      )}
      <span className={isLoading ? "opacity-0" : "relative z-10"}>{children}</span>
    </motion.button>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}