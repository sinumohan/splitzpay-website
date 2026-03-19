"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SIGNUP_URL, LOGIN_URL } from "@/lib/config";

/* SP chat-bubble logo — matches the brand identity from the logo image */
function SpLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="32" height="28" rx="7" fill="#4A9B72" />
      <polygon points="5,29 14,29 8,38" fill="#4A9B72" />
      <text x="16" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="11">SP</text>
    </svg>
  );
}

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
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <SpLogo size={38} />
            <div>
              <span
                className={`font-bold text-xl leading-none tracking-tight ${
                  scrolled ? "text-[#0D1F35]" : "text-white"
                }`}
              >
                <span>Splitz</span><span className={scrolled ? "text-[#4A9B72]" : "text-[#7DD4A8]"}>Pay</span>
              </span>
              <span className="block text-[9px] font-bold tracking-[0.15em] uppercase leading-none mt-0.5 text-[#4A9B72]">
                Chase Less. Collect More.
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
                className={`text-sm font-medium hover:text-[#4A9B72] transition-colors ${
                  scrolled ? "text-[#4A6070]" : "text-white/80"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={LOGIN_URL}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-[#4A6070] hover:text-[#0D1F35]" : "text-white/80 hover:text-white"
              }`}
            >
              Sign In
            </a>
            <a
              href={SIGNUP_URL}
              className="bg-[#4A9B72] hover:bg-[#3A7D5A] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
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
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={`block w-6 h-0.5 transition-all duration-300 ${
                    scrolled ? "bg-[#0D1F35]" : "bg-white"
                  } ${i === 0 && menuOpen ? "rotate-45 translate-y-2" : ""} ${
                    i === 1 && menuOpen ? "opacity-0" : ""
                  } ${i === 2 && menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              ))}
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
                className="block text-[#4A6070] font-medium py-2 hover:text-[#4A9B72]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={SIGNUP_URL}
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center bg-[#4A9B72] text-white font-semibold py-3 rounded-lg hover:bg-[#3A7D5A] transition-colors"
            >
              Start Free Trial — 14 Days Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
