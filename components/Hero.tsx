import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-emerald-400 text-sm font-medium mb-10">
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse inline-block" />
          India&apos;s Payments Platform
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
          One platform.
          <br />
          <span className="text-emerald-400">Two products.</span>
        </h1>

        <p className="text-slate-400 text-xl md:text-2xl max-w-xl mx-auto mb-20 leading-relaxed">
          Built for how India actually pays — businesses that invoice, and everyone who splits, tracks, and pays.
        </p>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* SplitzPay Biz */}
          <div className="group relative bg-white/4 border border-white/10 rounded-2xl p-8 text-left hover:border-emerald-500/40 hover:bg-white/6 transition-all duration-300">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/15 rounded-md px-3 py-1 mb-5">
              <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">For Businesses</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              SplitzPay <span className="text-emerald-400">Biz</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-5">Chase Less. Collect More.</div>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Automate invoice reminders over WhatsApp, embed Razorpay payment links, and track every rupee owed — without manual follow-up.
            </p>
            <Link
              href="https://app.splitzpay.app/signup"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Start Free Trial →
            </Link>
          </div>

          {/* SplitzPay Go */}
          <div className="group relative bg-white/4 border border-white/10 rounded-2xl p-8 text-left hover:border-teal-400/40 hover:bg-white/6 transition-all duration-300">
            <div className="inline-flex items-center gap-1.5 bg-teal-500/15 rounded-md px-3 py-1 mb-5">
              <span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">For Everyone</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              SplitzPay <span className="text-teal-400">Go</span>
            </div>
            <div className="text-slate-500 text-sm font-medium mb-5">Split Smart. Pay Clean.</div>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Split group expenses, pay vendor invoices, build your PayScore, and keep every receipt — all in one elegant mobile app.
            </p>
            <span className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/25 text-teal-400 font-semibold px-6 py-3 rounded-xl text-sm">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-14">
          {[
            { val: "500+", label: "businesses" },
            { val: "₹12Cr+", label: "processed" },
            { val: "98%", label: "WA delivery" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white font-bold text-lg">{s.val}</div>
              <div className="text-slate-600 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
