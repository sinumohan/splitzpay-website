"use client";

import { SIGNUP_URL, LOGIN_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #0D1F35 0%, #0a2a1e 55%, #0D2B1A 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #4A9B72, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-96 h-96 rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #4A9B72, transparent 70%)" }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,155,114,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,155,114,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Left: Copy ── */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4A9B72]/20 border border-[#4A9B72]/35 rounded-full px-4 py-1.5 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#4A9B72] animate-pulse" />
              <span className="text-[#7DD4A8] text-sm font-medium">Built for Indian SMBs · 14-day free trial</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-[1.05] mb-3 tracking-tight">
              Chase less.
            </h1>
            <h1 className="text-5xl sm:text-6xl font-black leading-[1.05] mb-6 tracking-tight">
              <span className="text-[#4A9B72]">Collect more.</span>
            </h1>

            <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg">
              SplitzPay automates WhatsApp payment reminders so your overdue invoices chase
              themselves — with Razorpay payment links so clients pay instantly. Connect Tally,
              Zoho Books, or QuickBooks. Zero manual follow-up.
            </p>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-6 mb-10 pb-8 border-b border-white/10">
              {[
                { value: "72%", label: "of SMBs face late payment issues" },
                { value: "45+ days", label: "avg invoice delay in India" },
                { value: "₹12L Cr+", label: "outstanding receivables" },
              ].map((stat) => (
                <div key={stat.value}>
                  <div className="text-2xl font-black text-[#4A9B72]">{stat.value}</div>
                  <div className="text-xs text-white/45 max-w-[110px] leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div id="trial" className="flex flex-col sm:flex-row gap-3">
              <a
                href={SIGNUP_URL}
                className="bg-[#4A9B72] hover:bg-[#3A7D5A] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-[#4A9B72]/25 hover:shadow-[#4A9B72]/40 hover:-translate-y-0.5 text-center text-[15px]"
              >
                Start Free Trial — 14 Days Free
              </a>
              <a
                href={LOGIN_URL}
                className="bg-white/8 hover:bg-white/14 border border-white/18 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-center text-[15px]"
              >
                Sign In
              </a>
            </div>
            <p className="text-white/35 text-sm mt-3">
              No credit card required · Cancel anytime
            </p>
          </div>

          {/* ── Right: WhatsApp mockup ── */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <WhatsAppMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Mint wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 70L1440 70L1440 35C1200 5 960 65 720 35C480 5 240 65 0 35V70Z" fill="#E8F7EF" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppMockup() {
  return (
    <div className="relative w-72 sm:w-80">
      {/* Phone */}
      <div className="bg-[#162030] border border-white/10 rounded-3xl p-1 shadow-2xl shadow-black/50">
        <div className="bg-[#0a1628] rounded-2xl overflow-hidden">
          {/* WA header */}
          <div className="bg-[#1a5c44] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#4A9B72] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">SP</span>
            </div>
            <div>
              <div className="text-white text-sm font-semibold">SplitzPay Reminders</div>
              <div className="text-green-200 text-xs">Online</div>
            </div>
          </div>

          {/* Chat body */}
          <div
            className="px-4 py-4 space-y-3 min-h-[320px]"
            style={{
              background: "#0d1f2d url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.025'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
            }}
          >
            <div className="flex justify-end">
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
                <p className="text-[#1a1a1a] text-xs leading-relaxed">
                  Hi <strong>Rahul</strong>, 👋<br /><br />
                  Friendly reminder that invoice <strong>#INV-2089</strong> for{" "}
                  <strong>₹45,000</strong> is now due.<br /><br />
                  Pay instantly:{" "}
                  <span className="text-[#1a5c44] underline">rzp.io/l/abc123</span>
                </p>
                <div className="mt-2 pt-2 border-t border-gray-300/50">
                  <button className="w-full bg-[#1a5c44] text-white text-xs font-semibold py-2 rounded-lg">
                    💳 Pay ₹45,000 Now
                  </button>
                </div>
                <div className="text-right text-[10px] text-gray-500 mt-1">10:32 AM ✓✓</div>
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-[10px] text-gray-500 bg-black/20 px-3 py-1 rounded-full">
                Delivered & Read
              </span>
            </div>

            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%] shadow-sm">
                <p className="text-[#1a1a1a] text-xs">Thanks! Paying now 🙏</p>
                <div className="text-right text-[10px] text-gray-400 mt-1">10:45 AM</div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-[#4A9B72] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                <span>✓</span>
                <span>Invoice Marked as Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-10 top-10 bg-white rounded-xl shadow-xl px-3 py-2.5 flex items-center gap-2.5 border border-gray-100">
        <div className="w-7 h-7 rounded-full bg-[#E8F7EF] flex items-center justify-center">
          <span className="text-[#4A9B72] text-sm font-bold">↑</span>
        </div>
        <div>
          <div className="text-xs font-black text-[#0D1F35]">₹2.4L</div>
          <div className="text-[10px] text-gray-400">Collected today</div>
        </div>
      </div>

      <div className="absolute -right-10 bottom-16 bg-white rounded-xl shadow-xl px-3 py-2.5 border border-gray-100">
        <div className="text-[10px] text-gray-400 mb-1">Automation active</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4A9B72] animate-pulse" />
          <span className="text-xs font-semibold text-[#0D1F35]">3 reminders sent</span>
        </div>
      </div>
    </div>
  );
}
