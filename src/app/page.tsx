"use client";

import { HeroSection } from "@/components/home/HeroSection";
import { FraudTicker } from "@/components/shared/FraudTicker";
import { RateCards } from "@/components/home/RateCards";
import { ProductGrid } from "@/components/home/ProductGrid";
import { StatBar } from "@/components/home/StatBar";
import { NewsSection } from "@/components/home/NewsSection";
import { MembershipCTA } from "@/components/home/MembershipCTA";
import { DigitalBankingBanner } from "@/components/home/DigitalBankingBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FraudTicker />
      <RateCards />
      <ProductGrid />
      <StatBar />
      <MembershipCTA />
      <DigitalBankingBanner />
      <NewsSection />
    </>
  );
}