"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { NAV_LINKS, MEGA_MENU_PRODUCTS, BANK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isLangHindi, setIsLangHindi] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    const hasMegaMenu = NAV_LINKS.find((link) => link.label === "Products");
    if (hasMegaMenu?.hasMegaMenu) {
      setIsMegaMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-crimson/10"
            : "bg-white/80 backdrop-blur-md"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="MNS Bank - Home"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-crimson rounded-lg flex items-center justify-center group-hover:bg-crimson-light transition-colors duration-300">
                  <span className="text-white font-display font-bold text-xl">M</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-charcoal tracking-tight">
                  {BANK.shortName}
                </span>
                <span className="text-[10px] text-muted tracking-[0.15em] uppercase font-medium">
                  Est. 1965 · Bhopal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={'hasMegaMenu' in link && link.hasMegaMenu ? handleMouseEnter : undefined}
                  onMouseLeave={'hasMegaMenu' in link && link.hasMegaMenu ? handleMouseLeave : undefined}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 underline-slide text-charcoal hover:text-crimson"
                  >
                    {link.label}
                    {'hasMegaMenu' in link && link.hasMegaMenu && (
                      <ChevronDown className="w-3 h-3" aria-hidden="true" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Language Toggle */}
              <button
                onClick={() => setIsLangHindi(!isLangHindi)}
                className="flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors"
                aria-label="Toggle language"
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">{isLangHindi ? "हिं" : "EN"}</span>
              </button>

              {/* Net Banking Button */}
              <Link
                href="https://mnsbankbhopal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-crimson text-white text-sm font-medium tracking-wide rounded-full hover:bg-crimson-light shadow-md hover:shadow-xl transition-all duration-300"
              >
                Net Banking
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-crimson transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              ref={megaMenuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-crimson/10"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container-premium py-8">
                <div className="grid grid-cols-4 gap-8">
                  {/* Accounts Column */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                      {MEGA_MENU_PRODUCTS.accounts.title}
                    </h3>
                    <ul className="space-y-2">
                      {MEGA_MENU_PRODUCTS.accounts.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted hover:text-crimson transition-colors py-1"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deposits Column */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                      {MEGA_MENU_PRODUCTS.deposits.title}
                    </h3>
                    <ul className="space-y-2">
                      {MEGA_MENU_PRODUCTS.deposits.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted hover:text-crimson transition-colors py-1"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Loans Column */}
                  <div>
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-4">
                      {MEGA_MENU_PRODUCTS.loans.title}
                    </h3>
                    <ul className="space-y-2">
                      {MEGA_MENU_PRODUCTS.loans.items.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="block text-sm text-muted hover:text-crimson transition-colors py-1"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured Card */}
                  <div className="bg-gradient-to-br from-crimson/5 to-gold/5 rounded-xl p-6 border border-crimson/10">
                    <p className="text-xs text-gold tracking-[0.15em] uppercase mb-2">
                      Featured Rate
                    </p>
                    <p className="font-display text-3xl font-bold text-charcoal mb-1">
                      7.50%
                    </p>
                    <p className="text-sm text-muted mb-4">Fixed Deposit (3 Years)</p>
                    <Link
                      href="/deposits#fixed"
                      className="inline-block px-4 py-2 bg-crimson text-white text-sm font-medium rounded-lg hover:bg-crimson-light transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white p-8"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-charcoal hover:text-crimson transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="mt-16">
                <Link
                  href="/"
                  className="flex items-center gap-3 mb-8"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-10 h-10 bg-crimson rounded-lg flex items-center justify-center">
                    <span className="text-white font-display font-bold text-xl">M</span>
                  </div>
                  <div>
                    <span className="font-display text-xl font-semibold text-charcoal">
                      {BANK.shortName}
                    </span>
                    <p className="text-[10px] text-muted tracking-[0.15em] uppercase">
                      Est. 1965 · Bhopal
                    </p>
                  </div>
                </Link>

                <nav className="space-y-1">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className="block py-3 px-4 text-lg font-medium text-charcoal hover:text-crimson hover:bg-crimson/5 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-platinum flex items-center justify-between">
                  <button
                    onClick={() => setIsLangHindi(!isLangHindi)}
                    className="flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors"
                  >
                    <Globe className="w-4 h-4" aria-hidden="true" />
                    <span className="font-medium">{isLangHindi ? "हिंदी" : "English"}</span>
                  </button>

                  <Link
                    href="https://mnsbankbhopal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-sm font-medium rounded-full hover:bg-crimson-light transition-colors"
                  >
                    Net Banking
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}