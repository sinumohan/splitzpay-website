"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const features = [
  {
    icon: "🍕",
    title: "Group Expense Splitting",
    desc: "Create groups, add expenses, split by equal shares, percentage, or exact amount. Non-app members pay via WhatsApp — no install needed.",
  },
  {
    icon: "📥",
    title: "Vendor Invoice Inbox",
    desc: "Every invoice from a SplitzPay Biz business lands directly in your app. One tap to pay via UPI Intent, QR, or card.",
  },
  {
    icon: "⭐",
    title: "PayScore",
    desc: "Your personal payment reputation — a 0–850 score built from your payment behaviour. Higher scores unlock better terms from vendors.",
  },
  {
    icon: "🗄️",
    title: "Document Vault",
    desc: "Every paid invoice auto-saved, tagged by financial year, and encrypted. One-tap ZIP download for CA-assisted GST filing.",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number], delay } },
});

export default function GoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section id="go" className="relative bg-[#080F1E] py-28 border-t border-white/6 overflow-hidden">
      {/* Section ambient glow — right side */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none animate-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6" ref={ref}>
        {/* Label — right aligned */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center justify-end gap-3 mb-10"
        >
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">SplitzPay Go</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ originX: 1 }}
            className="w-8 h-px bg-teal-500"
          />
        </motion.div>

        {/* Header — right aligned */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-xl ml-auto text-right mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
            Split smart.<br />
            Track everything.<br />
            <span className="text-teal-400">Own your finances.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Your personal financial coordination layer. Group expenses, vendor invoices, payment history, and your payment reputation — elegantly unified.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-4 mb-14">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
              className="bg-white/4 border border-white/8 rounded-2xl p-7 card-glow-teal hover:border-teal-400/25 hover:bg-white/6 transition-colors duration-300 cursor-default"
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="text-white font-semibold text-base mb-2">{f.title}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon banner */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={cardsInView ? "show" : "hidden"}
          className="relative overflow-hidden bg-teal-500/8 border border-teal-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 scan-line"
        >
          <div>
            <div className="text-white font-semibold text-lg mb-1">SplitzPay Go — Launching Soon</div>
            <div className="text-slate-400 text-sm">Available on iOS & Android. Join the waitlist for early access.</div>
          </div>
          <form action="/api/waitlist" method="POST" className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm flex-1 md:w-64 focus:outline-none focus:border-teal-400/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 shrink-0 hover:shadow-lg hover:shadow-teal-500/20"
            >
              Notify Me
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
