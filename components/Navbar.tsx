"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#10B981] flex items-center justify-center shadow-md group-hover:bg-[#059669] transition-colors">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <div>
              <span
                className={`font-bold text-lg leading-none ${
                  scrolled ? "text-[#0F172A]" : "text-white"
                }`}
              >
                SplitzPay
              </span>
              <span
                className={`block text-[10px] font-medium leading-none ${
                  scrolled ? "text-[#10B981]" : "text-[#10B981]"
                }`}
              >
                WhatsApp Invoice Chaser
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "Features", href: "#features" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Integrations", href: "#integrations" },
              { label: "Pricing", href: "#pricing" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium hover:text-[#10B981] transition-colors ${
                  scrolled ? "text-[#475569]" : "text-white/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-[#475569] hover:text-[#0F172A]" : "text-white/80 hover:text-white"
              }`}
            >
              Sign In
            </a>
            <a
              href="#trial"
              className="bg-[#10B981] hover:bg-[#059669] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#0F172A]" : "bg-white"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#0F172A]" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-[#0F172A]" : "bg-white"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {[
              { label: "Features", href: "#features" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Integrations", href: "#integrations" },
              { label: "Pricing", href: "#pricing" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[#475569] font-medium py-2 hover:text-[#10B981]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#trial"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#10B981] text-white font-semibold py-3 rounded-lg hover:bg-[#059669] transition-colors"
            >
              Start Free Trial — 14 Days Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
