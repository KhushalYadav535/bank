"use client";

import { useRef, useState, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltIntensity?: number;
  glowOnHover?: boolean;
  glassEffect?: boolean;
}

export function TiltCard({
  children,
  className,
  tiltIntensity = 10,
  glowOnHover = true,
  glassEffect = false,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [`-${tiltIntensity}deg`, `${tiltIntensity}deg`]),
    { stiffness: 200, damping: 25 }
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [`${tiltIntensity}deg`, `-${tiltIntensity}deg`]),
    { stiffness: 200, damping: 25 }
  );

  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    glowX.set((mouseX / width) * 100);
    glowY.set((mouseY / height) * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    glowOpacity.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative", className)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <AnimatePresence>
        {isHovered && glowOnHover && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(184, 0, 0, 0.15) 0%, transparent 50%)`,
              willChange: "opacity",
            }}
          />
        )}
      </AnimatePresence>

      {/* Inner glow border */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none",
          isHovered && "opacity-100"
        )}
        style={{
          background: "linear-gradient(135deg, rgba(184, 0, 0, 0.3), transparent, rgba(201, 168, 76, 0.3))",
          padding: "1px",
          willChange: "opacity",
        }}
      />

      <motion.div
        className={cn(
          "relative transition-all duration-300",
          glassEffect && "backdrop-blur-xl bg-white/30 border border-white/20",
          isHovered && "shadow-2xl shadow-crimson/20"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(20px)",
        }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent"
            initial={{ x: "-100%", y: "-100%" }}
            animate={
              isHovered
                ? { x: "200%", y: "200%" }
                : { x: "-100%", y: "-100%" }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ width: "200%", height: "200%" }}
          />
        </motion.div>

        {children}
      </motion.div>
    </motion.div>
  );
}

// Premium card with glass effect
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  childrenClassName?: string;
}

export function GlassCard({ children, className, intensity = "medium", childrenClassName }: GlassCardProps) {
  const intensityClasses = {
    light: "bg-white/20 backdrop-blur-lg border border-white/30",
    medium: "bg-white/30 backdrop-blur-xl border border-white/40",
    strong: "bg-white/40 backdrop-blur-2xl border border-white/50 shadow-2xl",
  };

  return (
    <div
      className={cn(
        "rounded-2xl",
        intensityClasses[intensity],
        className
      )}
    >
      <div className={childrenClassName}>{children}</div>
    </div>
  );
}

// Morphing card that responds to scroll
interface MorphCardProps {
  children: ReactNode;
  className?: string;
}

export function MorphCard({ children, className }: MorphCardProps) {
  return (
    <motion.div
      className={cn(
        "relative p-8 bg-white rounded-3xl shadow-xl overflow-hidden",
        className
      )}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-crimson/50 via-transparent to-gold/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Background blob */}
      <motion.div
        className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-crimson/20 to-gold/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}