"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { FRAUD_WARNINGS } from "@/lib/constants";

export function FraudTicker() {
  const tickerText = FRAUD_WARNINGS.join(" · ");

  return (
    <div className="bg-crimson py-3 overflow-hidden relative">
      <div className="container-premium">
        <div className="flex items-center">
          {/* Warning Icon */}
          <div className="flex items-center gap-2 pr-6 border-r border-white/20 shrink-0">
            <AlertTriangle className="w-4 h-4 text-white" aria-hidden="true" />
            <span className="text-white text-xs font-bold tracking-[0.15em] uppercase hidden sm:inline">
              Security Alert
            </span>
          </div>

          {/* Ticker */}
          <div className="overflow-hidden ml-6 flex-1">
            <motion.div
              className="flex items-center gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate content for seamless loop */}
              {[...Array(2)].map((_, index) => (
                <span key={index} className="flex items-center gap-8">
                  {FRAUD_WARNINGS.map((warning, i) => (
                    <span
                      key={`${index}-${i}`}
                      className="text-white/90 text-sm font-medium tracking-wide"
                    >
                      {warning}
                    </span>
                  ))}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}