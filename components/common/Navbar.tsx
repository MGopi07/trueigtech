"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { navigation } from "@/data";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#050816]/80 backdrop-blur-xl shadow-2xl py-2" : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary tracking-tight hover:opacity-90 transition-opacity">
              TRUEIGTECH
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center text-sm font-bold tracking-wide transition-colors py-2 ${pathname === item.href ? "text-brand-primary" : "text-gray-300 hover:text-white"
                    }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-all duration-300" />}
                </Link>

                {/* Active Indicator Line */}
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full shadow-[0_0_10px_rgba(108,99,255,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover Indicator Line */}
                {pathname !== item.href && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full opacity-50" />
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                    <div className="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-[#0a0f25]/95 backdrop-blur-xl ring-1 ring-white/10 overflow-hidden p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="group/item flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          <span className="group-hover/item:translate-x-1 transition-transform duration-200">{subItem.name}</span>
                          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-brand-primary" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-bold text-white bg-brand-primary rounded-full shadow-[0_0_20px_rgba(108,99,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-all duration-300 group"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-brand-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="relative">Get Started</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 focus:outline-none bg-white/5 rounded-lg border border-white/10"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
              {navigation.map((item) => (
                <div key={item.name} className="border-b border-white/5 last:border-none pb-2 last:pb-0">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex justify-between items-center px-4 py-3 rounded-xl text-base font-bold text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="px-4 py-2 space-y-1 bg-black/20 rounded-xl mt-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 text-brand-primary" />
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 px-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(108,99,255,0.4)]"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
