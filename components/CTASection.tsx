"use client";

import { SIGNUP_URL } from "@/lib/config";

export default function CTASection() {

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0F172A 0%, #0a2040 50%, #0F172A 100%)",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #10B981, transparent)" }}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#10B981]/20 border border-[#10B981]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#10B981] text-sm font-medium">14-Day Free Trial • No Card Required</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Stop chasing.
          <br />
          <span className="text-[#10B981]">Start collecting.</span>
        </h2>

        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Join hundreds of Indian businesses who have automated their invoice follow-ups and
          reduced average collection time by 60%.
        </p>

        {/* CTA */}
        <a
          href={SIGNUP_URL}
          className="inline-block bg-[#10B981] hover:bg-[#059669] text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 shadow-xl hover:shadow-[#10B981]/40 hover:-translate-y-0.5 text-lg"
        >
          Get Started Free
        </a>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {[
            "✓ 14-day free trial",
            "✓ No credit card",
            "✓ Setup in 5 minutes",
            "✓ Cancel anytime",
          ].map((note) => (
            <span key={note} className="text-white/50 text-sm">
              {note}
            </span>
          ))}
        </div>

        {/* Competitor comparison */}
        <div className="mt-16 grid grid-cols-3 gap-4">
          {[
            { name: "Manual WhatsApp", icon: "😓", col: ["Time-consuming", "Inconsistent", "Awkward", "No payment link"] },
            { name: "SplitzPay", icon: "✨", col: ["Fully automated", "Always on time", "Professional", "Razorpay built-in"], highlight: true },
            { name: "ERPs / AR Tools", icon: "💸", col: ["Complex setup", "Expensive", "No WhatsApp", "Built for West"] },
          ].map((col) => (
            <div
              key={col.name}
              className={`rounded-xl p-4 ${
                col.highlight
                  ? "bg-[#10B981]/20 border border-[#10B981]/40"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              <div className="text-2xl mb-2">{col.icon}</div>
              <div
                className={`text-xs font-bold mb-3 ${
                  col.highlight ? "text-[#10B981]" : "text-white/50"
                }`}
              >
                {col.name}
              </div>
              {col.col.map((item) => (
                <div
                  key={item}
                  className={`text-xs py-1 ${col.highlight ? "text-white" : "text-white/40"}`}
                >
                  {col.highlight ? "✓ " : "✗ "}
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
