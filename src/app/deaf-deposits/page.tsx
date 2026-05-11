"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard, CardTitle, CardDescription, CardHeader } from "@/components/shared/AnimatedCard";
import { PremiumButton } from "@/components/shared/PremiumButton";
import { BANK } from "@/lib/constants";
import {
  ArrowRight,
  Search,
  FileText,
  Shield,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Download,
  Eye,
} from "lucide-react";

const claimSteps = [
  {
    step: 1,
    title: "Search for Account",
    description: "Enter account holder name or account number to search for unclaimed deposits in our database.",
  },
  {
    step: 2,
    title: "Verify Identity",
    description: "Submit KYC documents and proof of relationship with the account holder for verification.",
  },
  {
    step: 3,
    title: "Claim Application",
    description: "Complete the claim form and submit at the branch where the account was maintained.",
  },
  {
    step: 4,
    title: "Processing & Settlement",
    description: "Bank processes the claim within prescribed timelines and transfers the amount to your account.",
  },
];

const requiredDocuments = [
  { name: "Claim Application Form", desc: "Duly filled and signed by claimant" },
  { name: "Identity Proof", desc: "Aadhaar, PAN, Passport, or Voter ID" },
  { name: "Address Proof", desc: "Utility bill, bank statement, or rental agreement" },
  { name: "Account Proof", desc: "Passbook, original deposit receipt, or account statement" },
  { name: "Death Certificate", desc: "If claim is by legal heir/nominee (if applicable)" },
  { name: "Legal Heir Certificate", desc: "If no nomination and claim is by legal heir" },
];

export default function DeafDepositsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<null | Array<{ name: string; account: string; amount: number }>>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    // Simulated search - in production, this would call an API
    setTimeout(() => {
      if (searchQuery.length >= 3) {
        setSearchResults([
          { name: "Sample Account Holder", account: "XXXX1234XXXX", amount: 15000 },
          { name: "Another Name", account: "XXXX5678XXXX", amount: 8500 },
        ]);
      } else {
        setSearchResults([]);
      }
      setIsSearching(false);
    }, 1500);
  };

  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-charcoal via-charcoal to-crimson-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              RBI Compliance
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              DEAF & Unclaimed Deposits
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              Deposits in accounts not operated for 10 years or cheques not presented for 10 years
              are transferred to DEAF (Depositor Education and Awareness Fund) as per RBI guidelines.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* What is DEAF Section */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                eyebrow="Understanding DEAF"
                title="What is DEAF?"
                align="left"
                subtitle="The Depositor Education and Awareness Fund (DEAF) was established by RBI to protect depositor interests and promote financial literacy."
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">What gets transferred?</p>
                    <p className="text-sm text-muted mt-1">
                      Term deposits not claimed within 10 years of maturity and savings accounts
                      not operated for 10 years.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-crimson" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Your money is protected</p>
                    <p className="text-sm text-muted mt-1">
                      The deposit amount remains with DICGC and can be claimed by the rightful
                      depositor or legal heir anytime.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal">Important Notice</p>
                    <p className="text-sm text-muted mt-1">
                      Banks are required to display list of unclaimed deposits on their website.
                      Check regularly if you have any unclaimed deposits.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedCard variant="default">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-crimson to-crimson-light flex items-center justify-center shadow-xl mb-4">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Claim Your Deposits</CardTitle>
                  <CardDescription className="mt-2">
                    Unclaimed deposits can be claimed by submitting required documents at the branch
                  </CardDescription>
                </div>

                <div className="space-y-3">
                  {["Term Deposits", "Savings Accounts", "Dividend Warrants", "Drafts"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-platinum rounded-lg"
                      >
                        <span className="text-sm text-charcoal">{item}</span>
                        <CheckCircle className="w-5 h-5 text-crimson" />
                      </div>
                    )
                  )}
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Unclaimed Deposits */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Search"
            title="Search for Unclaimed Deposits"
            subtitle="Enter the account holder name or account number to search our unclaimed deposits database."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <form onSubmit={handleSearch}>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter name or account number (min. 3 characters)"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-platinum bg-white focus:outline-none focus:ring-2 focus:ring-crimson focus:border-transparent transition-all text-lg"
                  />
                </div>
                <PremiumButton
                  type="submit"
                  size="lg"
                  disabled={searchQuery.length < 3 || isSearching}
                  isLoading={isSearching}
                >
                  Search
                </PremiumButton>
              </div>
            </form>

            {/* Search Results */}
            {searchResults !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <AnimatedCard variant="default">
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-lg">Search Results</CardTitle>
                    <a
                      href="#"
                      className="text-sm text-crimson hover:underline flex items-center gap-1"
                    >
                      <Download className="w-4 h-4" />
                      Download List
                    </a>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-4">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-platinum rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-charcoal">{result.name}</p>
                            <p className="text-sm text-muted">
                              Account: ••••{result.account.slice(-4)}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-display text-xl font-bold text-crimson">
                              ₹{result.amount.toLocaleString("en-IN")}
                            </p>
                            <a
                              href="/contact"
                              className="text-xs text-crimson hover:underline"
                            >
                              Claim Now
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Search className="w-12 h-12 text-muted mx-auto mb-4" />
                      <p className="text-muted">No unclaimed deposits found matching your search.</p>
                      <p className="text-sm text-muted mt-2">
                        Try a different search term or contact your branch for assistance.
                      </p>
                    </div>
                  )}
                </AnimatedCard>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Claim Process"
            title="How to Claim Your Deposit"
            subtitle="Follow these steps to claim your unclaimed deposit from DEAF."
          />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <AnimatedCard variant="default">
                  <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center font-display text-xl font-bold mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="mt-2">{step.description}</CardDescription>
                </AnimatedCard>

                {index < claimSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-crimson bg-ivory rounded-full z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeader
                eyebrow="Documentation"
                title="Required Documents"
                align="left"
                subtitle="Prepare these documents before visiting the branch to claim your deposit."
              />

              <div className="mt-8 space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-platinum"
                  >
                    <div className="w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-crimson" />
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">{doc.name}</p>
                      <p className="text-sm text-muted mt-1">{doc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AnimatedCard variant="default">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-crimson" />
                  <CardTitle>List of Unclaimed Deposits</CardTitle>
                </div>

                <p className="text-sm text-muted mb-6">
                  As per RBI guidelines, we are required to display the list of unclaimed
                  deposits on our website. The list is updated regularly.
                </p>

                <div className="space-y-3 mb-6">
                  {[
                    "Accounts not operated for 10 years",
                    "Term deposits matured but not claimed",
                    "Amount transferred to DEAF",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-crimson shrink-0" />
                      <span className="text-sm text-charcoal">{item}</span>
                    </div>
                  ))}
                </div>

                <a href="/documents/unclaimed-deposits-list.pdf" target="_blank" rel="noopener noreferrer">
                  <PremiumButton variant="outlined" className="w-full" rightIcon={<Download className="w-4 h-4" />}>
                    Download Complete List
                  </PremiumButton>
                </a>

                <div className="mt-6 p-4 bg-gold/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <p className="text-sm text-charcoal">
                      <strong>Note:</strong> If your name appears in the list or you believe you have
                      unclaimed deposits, please visit your nearest branch with the required documents.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regulatory Disclaimer */}
      <section className="py-8 bg-platinum border-t border-b border-platinum">
        <div className="container-premium">
          <div className="flex items-start gap-3 text-xs text-muted max-w-4xl mx-auto text-center">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <p className="text-center">
              The list of unclaimed deposits displayed on this website is as per RBI circular DBOD.
              No. Leg.BC.35/09.07.006/2012-13 dated July 2, 2012, and subsequent amendments. The
              deposits transferred to DEAF are held in trust by RBI and continue to earn interest as
              per the original deposit terms. Claims can be made anytime by the rightful claimant.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
