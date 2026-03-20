"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const nodes = [
  { label: "SplitzPay Biz", sub: "Business sends invoice", color: "emerald" },
  { label: "SplitzPay Go", sub: "Consumer pays in-app", color: "teal" },
  { label: "Trust Built", sub: "Better terms, faster pay", color: "white" },
];

const connectors = [
  { label: "WhatsApp" },
  { label: "PayScore" },
];

export default function NetworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#0F172A] py-24 border-t border-white/6 overflow-hidden">
      {/* Central glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-emerald-500/4 rounded-full blur-3xl animate-glow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8"
        >
          The Network Effect
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          Two sides. One flywheel.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-16"
        >
          Every vendor using{" "}
          <span className="text-emerald-400 font-medium">SplitzPay Biz</span> sends invoices to their clients.
          Those clients receive and pay through{" "}
          <span className="text-teal-400 font-medium">SplitzPay Go</span>.
          Each payment builds a PayScore. Each PayScore builds trust.
        </motion.p>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center">

          {/* Node 1 — Biz */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-8 py-6 text-center min-w-44">
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl border border-emerald-500/20 animate-node-ping" />
              <div className="text-emerald-400 font-bold text-base mb-1">SplitzPay Biz</div>
              <div className="text-slate-500 text-xs">Business sends invoice</div>
            </div>
          </motion.div>

          {/* Connector 1 */}
          <div className="flex flex-col items-center md:flex-row my-4 md:my-0 md:mx-4">
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
              style={{ originX: 0, originY: 0 }}
              className="w-px h-10 md:w-16 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-emerald-500/60 to-teal-500/60"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-slate-600 text-[10px] font-medium my-1 md:my-0 md:mx-2"
            >
              WhatsApp
            </motion.span>
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
              style={{ originX: 0, originY: 0 }}
              className="w-px h-10 md:w-16 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-teal-500/60 to-transparent"
            />
          </div>

          {/* Node 2 — Go */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative"
          >
            <div className="relative bg-teal-500/10 border border-teal-500/30 rounded-2xl px-8 py-6 text-center min-w-44">
              <div className="absolute inset-0 rounded-2xl border border-teal-500/20 animate-node-ping" style={{ animationDelay: "0.5s" }} />
              <div className="text-teal-400 font-bold text-base mb-1">SplitzPay Go</div>
              <div className="text-slate-500 text-xs">Consumer pays in-app</div>
            </div>
          </motion.div>

          {/* Connector 2 */}
          <div className="flex flex-col items-center md:flex-row my-4 md:my-0 md:mx-4">
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
              style={{ originX: 0, originY: 0 }}
              className="w-px h-10 md:w-16 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-teal-500/60 to-white/30"
            />
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.0 }}
              className="text-slate-600 text-[10px] font-medium my-1 md:my-0 md:mx-2"
            >
              PayScore
            </motion.span>
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              animate={inView ? { scaleX: 1, scaleY: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
              style={{ originX: 0, originY: 0 }}
              className="w-px h-10 md:w-16 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-white/20 to-transparent"
            />
          </div>

          {/* Node 3 — Trust */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="relative"
          >
            <div className="relative bg-white/5 border border-white/15 rounded-2xl px-8 py-6 text-center min-w-44">
              <div className="absolute inset-0 rounded-2xl border border-white/10 animate-node-ping" style={{ animationDelay: "1s" }} />
              <div className="text-white font-bold text-base mb-1">Trust Built</div>
              <div className="text-slate-500 text-xs">Better terms, faster pay</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
