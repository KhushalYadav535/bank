"use client";

import { Suspense, type ReactNode } from "react";
import { motion } from "framer-motion";

interface SplineWrapperProps {
  fallback?: ReactNode;
  className?: string;
  children: ReactNode;
}

export function SplineWrapper({
  fallback,
  className = "",
  children,
}: SplineWrapperProps) {
  return (
    <div className={`relative ${className}`}>
      <Suspense
        fallback={
          fallback || (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full bg-gradient-to-br from-crimson/10 via-gold/10 to-crimson/5 rounded-3xl"
            />
          )
        }
      >
        {children}
      </Suspense>
    </div>
  );
}
