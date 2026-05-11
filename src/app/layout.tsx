import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MNS Bank | Mahanagar Nagrik Sahakari Bank Ltd. Bhopal",
    template: "%s | MNS Bank",
  },
  description:
    "Your Neighbourhood Bank Since 1965. Mahanagar Nagrik Sahakari Bank Ltd. - Serving Bhopal's families and businesses with trust and excellence. RBI Regulated · DICGC Insured.",
  keywords: "bank, cooperative bank, Bhopal, savings account, fixed deposit, home loan, business loan, MNS Bank",
  openGraph: {
    title: "MNS Bank | Mahanagar Nagrik Sahakari Bank Ltd.",
    description: "Your Neighbourhood Bank Since 1965",
    type: "website",
    siteName: "MNS Bank",
  },
  twitter: {
    card: "summary_large_image",
    title: "MNS Bank | Mahanagar Nagrik Sahakari Bank Ltd.",
    description: "Your Neighbourhood Bank Since 1965",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col antialiased font-body">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-20">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>
        <Footer />
      </body>
    </html>
  );
}