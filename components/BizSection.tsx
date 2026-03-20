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

export default function BizSection() {
  return (
    <section id="biz" className="bg-[#0F172A] py-28 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-emerald-500" />
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase">SplitzPay Biz</span>
        </div>

        {/* Header + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
              Your invoices.<br />
              Their payment.<br />
              <span className="text-emerald-400">Automated.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              72% of Indian SMBs lose cash flow to late invoices. SplitzPay Biz handles your entire collections workflow — reminder scheduling, WhatsApp dispatch, payment capture, and audit trails.
            </p>
          </div>
          <Link
            href="https://app.splitzpay.app/signup"
            className="shrink-0 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
          >
            Start Free Trial →
          </Link>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/4 border border-white/8 rounded-2xl p-7 hover:border-emerald-500/30 hover:bg-white/6 transition-all"
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="text-white font-semibold text-base mb-2">{f.title}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Stats + integrations */}
        <div className="flex flex-col md:flex-row gap-8 border-t border-white/8 pt-10">
          <div className="flex gap-10 flex-1">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-emerald-400 mb-0.5">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-slate-600 text-sm mr-1">Integrates with</span>
            {integrations.map((name) => (
              <span key={name} className="bg-white/6 border border-white/10 text-slate-400 text-xs px-3 py-1.5 rounded-lg font-medium">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
