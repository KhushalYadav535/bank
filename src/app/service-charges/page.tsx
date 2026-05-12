"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Footer } from "@/components/layout/Footer";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedCard } from "@/components/shared/AnimatedCard";
import { CreditCard, Wallet, ArrowDownLeft, ArrowUpRight, Globe, FileText, Receipt, Shield } from "lucide-react";

const accountCharges = [
  { service: "Minimum Balance (Urban)", amount: "₹500", waived: "Yes - with average quarterly balance of ₹10,000" },
  { service: "Minimum Balance (Semi-Urban)", amount: "₹250", waived: "Yes - with average quarterly balance of ₹5,000" },
  { service: "Account Statement (Monthly)", amount: "₹50", waived: "Free - if requested quarterly" },
  { service: "Account Statement (Duplicate)", amount: "₹100 per page", waived: "Nil" },
  { service: "Passbook Updating", amount: "Free", waived: "Nil" },
  { service: "Cheque Book Issuance", amount: "Free", waived: "25 leaves per year" },
  { service: "Chq Stop Payment", amount: "₹100 per instrument", waived: "Nil" },
];

const transactionCharges = [
  { service: "Cash Deposit (Own Account)", charges: "Free", limit: "Unlimited" },
  { service: "Cash Withdrawal (Self)", charges: "Free", limit: "Unlimited at branch" },
  { service: "Cash Withdrawal (Third Party)", charges: "₹50", limit: "Above ₹50,000" },
  { service: "NEFT (Up to ₹1 lakh)", charges: "₹2.50 + GST", limit: "24/7" },
  { service: "NEFT (₹1-10 lakh)", charges: "₹5 + GST", limit: "24/7" },
  { service: "NEFT (Above ₹10 lakh)", charges: "₹15 + GST", limit: "24/7" },
  { service: "RTGS (₹2-5 lakh)", charges: "₹25 + GST", limit: "24/7" },
  { service: "RTGS (Above ₹5 lakh)", charges: "₹50 + GST", limit: "24/7" },
  { service: "IMPS", charges: "₹5 + GST", limit: "24/7" },
  { service: "UPI Transactions", charges: "Free", limit: "As per NPCI limits" },
];

const digitalBankingCharges = [
  { service: "Net Banking Registration", charges: "Free" },
  { service: "Net Banking Annual Fee", charges: "Free" },
  { service: "Mobile App Registration", charges: "Free" },
  { service: "SMS Alerts (Monthly)", charges: "₹15 + GST", note: "Free for first year" },
  { service: "e-Statement (Annual)", charges: "Free", note: "Via email" },
];

const atmCharges = [
  { service: "MNS Bank ATM - Cash Withdrawal", charges: "Free", limit: "5 per month" },
  { service: "MNS Bank ATM - Balance Enquiry", charges: "Free", limit: "Unlimited" },
  { service: "Other Bank ATM - Cash Withdrawal", charges: "₹20 + GST", limit: "3 per month" },
  { service: "Other Bank ATM - Balance Enquiry", charges: "₹8 + GST", limit: "3 per month" },
];

const ddCharges = [
  { amount: "Up to ₹10,000", charges: "₹50" },
  { amount: "₹10,001 to ₹1 lakh", charges: "₹100" },
  { amount: "Above ₹1 lakh", charges: "₹200" },
];

export default function ServiceChargesPage() {
  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-crimson-dark via-crimson to-crimson-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

        <div className="container-premium relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-gold mb-4 inline-block">
              Service Charges
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight max-w-4xl">
              Transparent & Fair Fees
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed">
              We believe in complete transparency. Here are our service charges for your reference.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* Account Charges */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Accounts"
            title="Account Related Charges"
            subtitle="Service charges for savings and current accounts."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-x-auto"
          >
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-crimson/20">
                  <th className="text-left py-4 px-4 font-display font-semibold text-charcoal">Service</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Charges</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Waiver Condition</th>
                </tr>
              </thead>
              <tbody>
                {accountCharges.map((row, index) => (
                  <tr key={row.service} className="border-b border-platinum hover:bg-platinum/50 transition-colors">
                    <td className="py-4 px-4 text-charcoal">{row.service}</td>
                    <td className="py-4 px-4 text-center font-medium text-crimson">{row.amount}</td>
                    <td className="py-4 px-4 text-center text-muted text-sm">{row.waived}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Transaction Charges */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Transactions"
            title="Transaction & Transfer Charges"
            subtitle="Charges for fund transfers and transactions."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-x-auto"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-crimson/20">
                  <th className="text-left py-4 px-4 font-display font-semibold text-charcoal">Service</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Charges</th>
                  <th className="text-center py-4 px-4 font-display font-semibold text-charcoal">Limit/Notes</th>
                </tr>
              </thead>
              <tbody>
                {transactionCharges.map((row, index) => (
                  <tr key={row.service} className="border-b border-platinum hover:bg-ivory/50 transition-colors">
                    <td className="py-4 px-4 text-charcoal">{row.service}</td>
                    <td className="py-4 px-4 text-center font-medium text-crimson">{row.charges}</td>
                    <td className="py-4 px-4 text-center text-muted">{row.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Digital Banking */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Digital"
            title="Digital Banking Charges"
            subtitle="Charges for internet and mobile banking services."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="default">
              <table className="w-full">
                <tbody>
                  {digitalBankingCharges.map((row, index) => (
                    <tr key={row.service} className="border-b border-platinum last:border-0">
                      <td className="py-4 px-4 text-charcoal">{row.service}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="font-medium text-crimson">{row.charges}</span>
                        {row.note && <p className="text-xs text-muted mt-1">{row.note}</p>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* ATM Charges */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="ATM"
            title="ATM Charges"
            subtitle="Charges for ATM transactions."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-2xl mx-auto"
          >
            <AnimatedCard variant="default">
              <table className="w-full">
                <tbody>
                  {atmCharges.map((row, index) => (
                    <tr key={row.service} className="border-b border-platinum last:border-0">
                      <td className="py-4 px-4 text-charcoal">{row.service}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="font-medium text-crimson">{row.charges}</span>
                        <p className="text-xs text-muted mt-1">{row.limit}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </AnimatedCard>
          </motion.div>

          <div className="mt-8 bg-ivory rounded-xl p-6 border border-platinum">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-crimson shrink-0 mt-1" />
              <div>
                <h4 className="font-display font-semibold text-charcoal">Free Transactions Reset</h4>
                <p className="text-sm text-muted mt-2">
                  Free ATM transactions reset on a monthly basis. Additional transactions will be charged as per the schedule above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DD Charges */}
      <section className="section-padding bg-ivory">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Demand Draft"
            title="Demand Draft Charges"
            subtitle="Charges for demand draft issuance."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 max-w-xl mx-auto"
          >
            <AnimatedCard variant="default">
              <table className="w-full">
                <tbody>
                  {ddCharges.map((row, index) => (
                    <tr key={row.amount} className="border-b border-platinum last:border-0">
                      <td className="py-4 px-4 text-charcoal">{row.amount}</td>
                      <td className="py-4 px-4 text-center font-medium text-crimson">{row.charges}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-4 bg-platinum mt-4 rounded-lg">
                <p className="text-sm text-muted">
                  <strong>Note:</strong> DD charges are exclusive of GST. Cancellation charges: ₹50 + GST
                </p>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </section>

      {/* Loan Processing */}
      <section className="section-padding bg-platinum">
        <div className="container-premium">
          <SectionHeader
            eyebrow="Loans"
            title="Loan Processing Charges"
            subtitle="Processing fees for various loan products."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { product: "Home Loan", processing: "0.50% (Min ₹5,000, Max ₹25,000)", prePayment: "Nil after 12 months" },
                { product: "Personal Loan", processing: "1.00% (Min ₹500)", prePayment: "3% of outstanding" },
                { product: "Business Loan", processing: "1.00% (Min ₹1,000)", prePayment: "2% of outstanding" },
                { product: "Education Loan", processing: "₹500 Flat", prePayment: "Nil" },
                { product: "Vehicle Loan", processing: "0.50%", prePayment: "Nil after 12 months" },
                { product: "Gold Loan", processing: "NIL", prePayment: "Nil" },
              ].map((item, index) => (
                <AnimatedCard key={item.product} variant="default" className="p-6">
                  <h4 className="font-display font-semibold text-charcoal text-lg mb-4">{item.product}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Processing Fee</p>
                      <p className="text-charcoal font-medium">{item.processing}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-wider">Pre-Payment Charge</p>
                      <p className="text-charcoal font-medium">{item.prePayment}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding bg-charcoal">
        <div className="container-premium">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 rounded-xl p-8 border border-white/10"
          >
            <h4 className="font-display font-semibold text-white text-xl mb-6">Important Notes</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>• All charges are exclusive of applicable GST unless specified.</li>
              <li>• Charges are subject to change without prior notice.</li>
              <li>• For NRI accounts, separate charge structure applies.</li>
              <li>• Third party cash transactions above ₹50,000 require proper documentation.</li>
              <li>• Card replacement charges: ₹200 + GST (Debit Card), ₹300 + GST (Credit Card)</li>
              <li>• Cheque return charges: ₹250 per return (Insufficient Funds), ₹150 per return (Technical Reasons)</li>
              <li>• For detailed information, please contact nearest branch.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}