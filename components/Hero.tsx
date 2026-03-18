"use client";

import { SIGNUP_URL, LOGIN_URL } from "@/lib/config";

export default function Hero() {

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #0a1f35 40%, #0F172A 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #10B981, transparent)" }}
        />
        <div
          className="absolute bottom-20 left-10 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #10B981, transparent)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[#10B981] text-sm font-medium">Built for Indian SMBs</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get paid.{" "}
              <span className="text-[#10B981]">On time.</span>
              <br />
              Every time.
            </h1>

            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-lg">
              SplitzPay automates WhatsApp payment reminders for your invoices — with Razorpay
              payment links so clients can pay instantly. Connect Tally, Zoho Books, or
              QuickBooks. Zero manual follow-up.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: "72%", label: "of SMBs face late payment issues" },
                { value: "45+ days", label: "avg invoice delay in India" },
                { value: "₹12L Cr+", label: "outstanding receivables" },
              ].map((stat) => (
                <div key={stat.value}>
                  <div className="text-2xl font-bold text-[#10B981]">{stat.value}</div>
                  <div className="text-xs text-white/50 max-w-[120px]">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div id="trial" className="flex flex-col sm:flex-row gap-3">
              <a
                href={SIGNUP_URL}
                className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#10B981]/30 hover:-translate-y-0.5 text-center"
              >
                Start Free Trial — 14 Days Free
              </a>
              <a
                href={LOGIN_URL}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-center"
              >
                Sign In
              </a>
            </div>
            <p className="text-white/40 text-sm mt-3">
              No credit card required · Cancel anytime
            </p>
          </div>

          {/* Right: WhatsApp Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="animate-float">
              <WhatsAppMockup />
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L1440 60L1440 30C1200 0 960 60 720 30C480 0 240 60 0 30V60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

function WhatsAppMockup() {
  return (
    <div className="relative w-72 sm:w-80">
      {/* Phone frame */}
      <div className="bg-[#1a2940] border border-white/10 rounded-3xl p-1 shadow-2xl">
        <div className="bg-[#0a1628] rounded-2xl overflow-hidden">
          {/* Status bar */}
          <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center">
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
              background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") #0d1f2d",
            }}
          >
            {/* Message bubble */}
            <div className="flex justify-end">
              <div className="bg-[#dcf8c6] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
                <p className="text-[#1a1a1a] text-xs leading-relaxed">
                  Hi <strong>Rahul</strong>,{" "}
                  <span role="img" aria-label="wave">👋</span>
                  <br />
                  <br />
                  This is a friendly reminder that invoice{" "}
                  <strong>#INV-2089</strong> for{" "}
                  <strong>₹45,000</strong> is now due.
                  <br />
                  <br />
                  Pay instantly:{" "}
                  <span className="text-[#075E54] underline">rzp.io/l/abc123</span>
                </p>
                <div className="mt-2 pt-2 border-t border-gray-300/50">
                  <button className="w-full bg-[#075E54] text-white text-xs font-semibold py-2 rounded-lg">
                    💳 Pay ₹45,000 Now
                  </button>
                </div>
                <div className="text-right text-[10px] text-gray-500 mt-1">
                  10:32 AM ✓✓
                </div>
              </div>
            </div>

            {/* Read receipt */}
            <div className="flex justify-center">
              <span className="text-[10px] text-gray-500 bg-black/20 px-3 py-1 rounded-full">
                Delivered & Read
              </span>
            </div>

            {/* Reply bubble */}
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 max-w-[75%] shadow-sm">
                <p className="text-[#1a1a1a] text-xs">
                  Thanks! Paying now 🙏
                </p>
                <div className="text-right text-[10px] text-gray-400 mt-1">
                  10:45 AM
                </div>
              </div>
            </div>

            {/* Paid badge */}
            <div className="flex justify-center">
              <div className="bg-[#10B981] text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2">
                <span>✓</span>
                <span>Invoice Marked as Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-8 top-8 bg-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2 border border-gray-100">
        <div className="w-6 h-6 rounded-full bg-[#10B981]/20 flex items-center justify-center">
          <span className="text-[#10B981] text-xs">↑</span>
        </div>
        <div>
          <div className="text-xs font-bold text-[#0F172A]">₹2.4L</div>
          <div className="text-[10px] text-gray-400">Collected today</div>
        </div>
      </div>

      <div className="absolute -right-8 bottom-16 bg-white rounded-xl shadow-xl px-3 py-2 border border-gray-100">
        <div className="text-[10px] text-gray-400 mb-1">Automation active</div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-xs font-semibold text-[#0F172A]">3 reminders sent</span>
        </div>
      </div>
    </div>
  );
}
