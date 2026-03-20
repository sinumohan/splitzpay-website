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
          ? "bg-[#0F172A]/95 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          Splitz<span className="text-emerald-400">Pay</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#biz" className="text-slate-400 hover:text-emerald-400 text-sm font-medium transition-colors">
            <span className="text-emerald-400/70 mr-1">↗</span> Biz
          </Link>
          <Link href="#go" className="text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors">
            <span className="text-teal-400/70 mr-1">↗</span> Go
          </Link>
          <Link href="#pricing" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
            Pricing
          </Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="https://app.splitzpay.app/login"
            className="text-slate-400 hover:text-white text-sm px-4 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="https://app.splitzpay.app/signup"
            className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-white/8 px-6 py-6 space-y-4">
          <Link href="#biz" className="block text-slate-300 hover:text-emerald-400 text-sm transition-colors" onClick={() => setMenuOpen(false)}>
            SplitzPay <span className="text-emerald-400">Biz</span>
          </Link>
          <Link href="#go" className="block text-slate-300 hover:text-teal-400 text-sm transition-colors" onClick={() => setMenuOpen(false)}>
            SplitzPay <span className="text-teal-400">Go</span>
          </Link>
          <Link href="#pricing" className="block text-slate-300 hover:text-white text-sm transition-colors" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <div className="pt-2 flex flex-col gap-3">
            <Link href="https://app.splitzpay.app/login" className="text-center border border-white/15 text-slate-300 rounded-lg py-2.5 text-sm">
              Sign In
            </Link>
            <Link href="https://app.splitzpay.app/signup" className="text-center bg-emerald-500 text-white rounded-lg py-2.5 text-sm font-semibold">
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
