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

export default function GoSection() {
  return (
    <section id="go" className="bg-[#080F1E] py-28 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center justify-end gap-3 mb-10">
          <span className="text-teal-400 text-sm font-semibold tracking-widest uppercase">SplitzPay Go</span>
          <div className="w-8 h-px bg-teal-500" />
        </div>

        {/* Header */}
        <div className="max-w-xl ml-auto text-right mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
            Split smart.<br />
            Track everything.<br />
            <span className="text-teal-400">Own your finances.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Your personal financial coordination layer. Group expenses, vendor invoices, payment history, and your payment reputation — elegantly unified.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white/4 border border-white/8 rounded-2xl p-7 hover:border-teal-400/30 hover:bg-white/6 transition-all"
            >
              <div className="text-2xl mb-4">{f.icon}</div>
              <div className="text-white font-semibold text-base mb-2">{f.title}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>

        {/* Coming soon banner */}
        <div className="bg-teal-500/8 border border-teal-500/20 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold text-lg mb-1">SplitzPay Go — Launching Soon</div>
            <div className="text-slate-400 text-sm">Available on iOS & Android. Join the waitlist for early access.</div>
          </div>
          <form
            action="/api/waitlist"
            method="POST"
            className="flex gap-3 w-full md:w-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="bg-white/8 border border-white/15 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm flex-1 md:w-64 focus:outline-none focus:border-teal-400/50"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors shrink-0"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
