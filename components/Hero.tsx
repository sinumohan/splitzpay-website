"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay: 0.35 + i * 0.12 },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0F172A] flex items-center overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/4 w-[480px] h-[480px] bg-emerald-500/7 rounded-full blur-3xl pointer-events-none animate-drift animate-glow" />
      <div className="absolute bottom-1/4 right-1/5 w-[380px] h-[380px] bg-teal-500/6 rounded-full blur-3xl pointer-events-none animate-drift-slow animate-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      {/* Scan line */}
      <div className="absolute inset-0 scan-line pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 text-center w-full">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-5 py-2 text-emerald-400 text-sm font-medium mb-10"
        >
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse inline-block" />
          India&apos;s Payments Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight"
        >
          One platform.
          <br />
          <span className="text-emerald-400">Two products.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          className="text-slate-400 text-xl md:text-2xl max-w-xl mx-auto mb-20 leading-relaxed"
        >
          Built for how India actually pays — businesses that invoice, and everyone who splits, tracks, and pays.
        </motion.p>

        {/* Product cards */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {/* SplitzPay Biz */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative bg-white/4 border border-white/10 rounded-2xl p-8 text-left card-glow-emerald transition-colors duration-300 hover:border-emerald-500/40 hover:bg-white/6"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-[80px] rounded-tr-2xl pointer-events-none" />
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
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm hover:gap-3"
            >
              Start Free Trial →
            </Link>
          </motion.div>

          {/* SplitzPay Go */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative bg-white/4 border border-white/10 rounded-2xl p-8 text-left card-glow-teal transition-colors duration-300 hover:border-teal-400/40 hover:bg-white/6"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-[80px] rounded-tr-2xl pointer-events-none" />
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
          </motion.div>
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-14"
        >
          {[
            { val: "500+", label: "businesses" },
            { val: "₹12Cr+", label: "processed" },
            { val: "98%", label: "WA delivery" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white font-bold text-lg shimmer-text">{s.val}</div>
              <div className="text-slate-600 text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
