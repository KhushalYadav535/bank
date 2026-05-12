"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Sparkles, Bell } from "lucide-react";
import { NAV_LINKS, MEGA_MENU_PRODUCTS, BANK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isLangHindi, setIsLangHindi] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const navbarBg = useTransform(scrollY, [0, 100], [0, 1]);

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
      <motion.nav
        ref={navbarRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-crimson/10"
            : "bg-white/80 backdrop-blur-xl"
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-premium">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4 group"
              aria-label="MNS Bank - Home"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-crimson/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-11 h-11 bg-gradient-to-br from-crimson to-crimson-dark rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-crimson/30 transition-all duration-300">
                  <span className="text-white font-display font-bold text-xl">M</span>
                </div>
                {/* Indicator Dot */}
                <motion.div
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div className="flex flex-col">
                <motion.span
                  className="font-display text-xl font-semibold text-charcoal tracking-tight"
                  whileHover={{ color: "#B80000" }}
                >
                  {BANK.shortName}
                </motion.span>
                <span className="text-[10px] text-muted tracking-[0.15em] uppercase font-medium flex items-center gap-1">
                  <span className="w-2 h-px bg-muted" />
                  Est. 1965 · Bhopal
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.label}
                  className="relative"
                  onMouseEnter={'hasMegaMenu' in link && link.hasMegaMenu ? handleMouseEnter : undefined}
                  onMouseLeave={'hasMegaMenu' in link && link.hasMegaMenu ? handleMouseLeave : undefined}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveNavItem(link.label)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 relative group",
                      activeNavItem === link.label ? "text-crimson" : "text-charcoal hover:text-crimson"
                    )}
                  >
                    {link.label}
                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-crimson transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    {'hasMegaMenu' in link && link.hasMegaMenu && (
                      <motion.span
                        animate={{ rotate: isMegaMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3 h-3 ml-1" aria-hidden="true" />
                      </motion.span>
                    )}
                  </Link>

                  {/* Active Indicator Dot */}
                  {activeNavItem === link.label && (
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-crimson rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Notification Bell */}
              <motion.button
                className="relative p-2.5 text-muted hover:text-charcoal hover:bg-platinum rounded-full transition-all duration-300"
                aria-label="Notifications"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bell className="w-5 h-5" aria-hidden="true" />
                {/* Notification Dot */}
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-crimson rounded-full border-2 border-white" />
              </motion.button>

              {/* Language Toggle */}
              <motion.button
                onClick={() => setIsLangHindi(!isLangHindi)}
                className="flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors px-3 py-2 rounded-full hover:bg-platinum"
                aria-label="Toggle language"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" aria-hidden="true" />
                <span className="font-medium">{isLangHindi ? "हिं" : "EN"}</span>
              </motion.button>

              {/* Net Banking Button */}
              <Link
                href="https://mnsbankbhopal.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="relative inline-flex items-center gap-2 px-6 py-2.5 bg-crimson text-white text-sm font-medium tracking-wide rounded-full overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(184, 0, 0, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Shimmer Effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">Net Banking</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-charcoal hover:text-crimson transition-colors rounded-xl hover:bg-platinum"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen ? "true" : "false"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mega Menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              ref={megaMenuRef}
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-crimson/10 overflow-hidden"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="container-premium py-10">
                <div className="grid grid-cols-4 gap-10">
                  {/* Accounts Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-crimson" />
                      {MEGA_MENU_PRODUCTS.accounts.title}
                    </h3>
                    <ul className="space-y-3">
                      {MEGA_MENU_PRODUCTS.accounts.items.map((item, i) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + i * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center gap-3 text-sm text-muted hover:text-crimson transition-colors py-2"
                          >
                            <span className="w-0 h-0.5 bg-crimson/30 group-hover:w-6 transition-all duration-300" />
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Deposits Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-gold" />
                      {MEGA_MENU_PRODUCTS.deposits.title}
                    </h3>
                    <ul className="space-y-3">
                      {MEGA_MENU_PRODUCTS.deposits.items.map((item, i) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center gap-3 text-sm text-muted hover:text-crimson transition-colors py-2"
                          >
                            <span className="w-0 h-0.5 bg-gold/30 group-hover:w-6 transition-all duration-300" />
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Loans Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-display text-lg font-semibold text-charcoal mb-6 flex items-center gap-2">
                      <span className="w-8 h-px bg-crimson" />
                      {MEGA_MENU_PRODUCTS.loans.title}
                    </h3>
                    <ul className="space-y-3">
                      {MEGA_MENU_PRODUCTS.loans.items.map((item, i) => (
                        <motion.li
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + i * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className="group flex items-center gap-3 text-sm text-muted hover:text-crimson transition-colors py-2"
                          >
                            <span className="w-0 h-0.5 bg-crimson/30 group-hover:w-6 transition-all duration-300" />
                            {item.name}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Featured Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 }}
                    className="bg-gradient-to-br from-crimson/5 via-ivory to-gold/5 rounded-2xl p-6 border border-crimson/10 relative overflow-hidden"
                  >
                    {/* Decorative Element */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-crimson/10 rounded-full blur-2xl" />

                    <motion.div
                      className="relative"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <p className="text-xs text-gold tracking-[0.15em] uppercase mb-3 flex items-center gap-2">
                        <Sparkles className="w-3 h-3" />
                        Featured Rate
                      </p>
                      <p className="font-display text-4xl font-bold text-charcoal mb-2">
                        7.50%
                      </p>
                      <p className="text-sm text-muted mb-5">Fixed Deposit (3 Years)</p>
                      <Link
                        href="/deposits#fixed"
                        className="inline-block px-5 py-3 bg-crimson text-white text-sm font-medium rounded-full hover:bg-crimson-light transition-all duration-300 hover:shadow-lg hover:shadow-crimson/30"
                      >
                        Book Now
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-charcoal/80 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white p-8 shadow-2xl"
            >
              {/* Decorative Corner */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-crimson/20 rounded-tl-3xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              />

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-3 text-charcoal hover:text-crimson transition-colors rounded-full hover:bg-platinum"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>

              <div className="mt-20">
                <Link
                  href="/"
                  className="flex items-center gap-4 mb-10 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-crimson to-crimson-dark rounded-xl flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white font-display font-bold text-2xl">M</span>
                  </motion.div>
                  <div>
                    <motion.span
                      className="font-display text-2xl font-semibold text-charcoal block"
                      whileHover={{ color: "#B80000" }}
                    >
                      {BANK.shortName}
                    </motion.span>
                    <p className="text-[10px] text-muted tracking-[0.15em] uppercase flex items-center gap-2">
                      <span className="w-4 h-px bg-muted" />
                      Est. 1965 · Bhopal
                    </p>
                  </div>
                </Link>

                <nav className="space-y-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06 + 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between py-4 px-5 text-lg font-medium text-charcoal hover:text-crimson hover:bg-crimson/5 rounded-xl transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                        <motion.span
                          className="w-6 h-6 flex items-center justify-center bg-platinum rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </motion.span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  className="mt-10 pt-8 border-t border-platinum flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    onClick={() => setIsLangHindi(!isLangHindi)}
                    className="flex items-center gap-2 text-sm text-muted hover:text-charcoal transition-colors px-4 py-2 rounded-full hover:bg-platinum"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-4 h-4" aria-hidden="true" />
                    <span className="font-medium">{isLangHindi ? "हिंदी" : "English"}</span>
                  </motion.button>

                  <Link
                    href="https://mnsbankbhopal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-crimson text-white text-sm font-medium rounded-full hover:bg-crimson-light transition-colors"
                  >
                    Net Banking
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}