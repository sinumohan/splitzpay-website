"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: "💬",
    title: "WhatsApp-First Reminders",
    desc: "Automated reminders sent via WhatsApp with Razorpay payment links embedded. Clients pay in one tap — no app install required.",
  },
  {
    icon: "🔗",
    title: "Connect Your Books",
    desc: "Sync invoices from Tally, Zoho Books, or QuickBooks in real time. Or import a CSV directly from Tally's export — done in seconds.",
  },
  {
    icon: "⏱️",
    title: "Smart Reminder Schedules",
    desc: "Set your own cadence — Day 0 friendly, Day 7 firm, Day 14 urgent. Customise templates and tone per business.",
  },
  {
    icon: "📋",
    title: "Legal Audit Trail",
    desc: "One-click PDF of the full communication history per invoice. Formatted for MSME Samadhaan — ready to send to your lawyer.",
  },
];

const stats = [
  { value: "₹499", label: "Starting per month" },
  { value: "3 min", label: "Average setup time" },
  { value: "60%", label: "Faster collections" },
];

const integrations = ["Tally", "Zoho Books", "QuickBooks", "WhatsApp", "Razorpay"];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay } },
});

export default function BizSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section id="biz" className="relative bg-[#0F172A] py-28 border-t border-white/6 overflow-hidden">
      {/* Section ambient glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none animate-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        {/* Label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-10"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ originX: 0 }}
            className="w-8 h-px bg-emerald-500"
          />
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">SplitzPay Biz</span>
        </motion.div>

        {/* Header + CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Your invoices.<br />
              Their payment.<br />
              <span className="text-emerald-400">Automated.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              72% of Indian SMBs lose cash flow to late invoices. SplitzPay Biz handles your entire collections workflow — reminder scheduling, WhatsApp dispatch, payment capture, and audit trails.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <Link
              href="https://app.splitzpay.app/signup"
              className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:gap-3"
            >
              Start Free Trial →
            </Link>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-4 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white/4 border border-white/8 rounded-2xl p-7 card-glow-emerald hover:border-emerald-500/25 hover:bg-white/6 transition-colors duration-300 cursor-default"
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="text-white font-semibold text-base mb-2">{f.title}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Stats + integrations */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="flex flex-col md:flex-row gap-8 border-t border-white/8 pt-10"
        >
          <div className="flex gap-10 flex-1">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold shimmer-text mb-0.5">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-slate-600 text-sm mr-1">Integrates with</span>
            {integrations.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.3 }}
                className="bg-white/6 border border-white/10 text-slate-400 text-xs px-3 py-1.5 rounded-lg font-medium hover:border-emerald-500/30 hover:text-slate-300 transition-colors cursor-default"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
