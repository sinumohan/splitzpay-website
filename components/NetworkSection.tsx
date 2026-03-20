export default function NetworkSection() {
  return (
    <section className="bg-[#0F172A] py-24 border-t border-white/6">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8">The Network Effect</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight tracking-tight">
          Two sides. One flywheel.
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Every vendor using <span className="text-emerald-400 font-medium">SplitzPay Biz</span> sends invoices to their clients. Those clients receive and pay them through <span className="text-teal-400 font-medium">SplitzPay Go</span>. Each payment builds a PayScore. Each PayScore builds trust. Each trust builds better business.
        </p>

        {/* Flow diagram */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {/* Biz node */}
          <div className="bg-emerald-500/10 border border-emerald-500/25 rounded-2xl px-8 py-6 text-center min-w-48">
            <div className="text-emerald-400 font-bold text-lg mb-1">SplitzPay Biz</div>
            <div className="text-slate-500 text-sm">Business sends invoice</div>
          </div>

          {/* Arrow */}
          <div className="flex items-center gap-0 md:mx-6">
            <div className="w-px h-12 md:w-12 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-emerald-500/50 to-teal-500/50" />
            <div className="text-slate-600 text-xs px-2 hidden md:block">WhatsApp</div>
            <div className="w-px h-12 md:w-12 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-teal-500/50 to-transparent" />
          </div>

          {/* Go node */}
          <div className="bg-teal-500/10 border border-teal-500/25 rounded-2xl px-8 py-6 text-center min-w-48">
            <div className="text-teal-400 font-bold text-lg mb-1">SplitzPay Go</div>
            <div className="text-slate-500 text-sm">Consumer pays in-app</div>
          </div>

          {/* Arrow back */}
          <div className="flex items-center gap-0 md:mx-6">
            <div className="w-px h-12 md:w-12 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-teal-500/50 to-emerald-500/50" />
            <div className="text-slate-600 text-xs px-2 hidden md:block">PayScore</div>
            <div className="w-px h-12 md:w-12 md:h-px bg-gradient-to-b md:bg-gradient-to-r from-emerald-500/50 to-transparent" />
          </div>

          {/* Trust node */}
          <div className="bg-white/4 border border-white/10 rounded-2xl px-8 py-6 text-center min-w-48">
            <div className="text-white font-bold text-lg mb-1">Trust Built</div>
            <div className="text-slate-500 text-sm">Better terms, faster pay</div>
          </div>
        </div>
      </div>
    </section>
  );
}
