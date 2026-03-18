export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect your invoicing tool",
      desc: "Import invoices from Tally CSV, or sync in real time with Zoho Books or QuickBooks. Manual entry also works for any business.",
      icon: "🔗",
      detail: "Tally CSV · Zoho Books · QuickBooks · Manual entry",
    },
    {
      number: "02",
      title: "Set your reminder schedule",
      desc: "Define when reminders go out — Day 0 (Friendly), Day 7 (Firm), Day 14 (Urgent). Fully customisable per your business terms.",
      icon: "⏱️",
      detail: "+0 · +3 · +7 · +14 · +30 days overdue",
    },
    {
      number: "03",
      title: "SplitzPay chases for you",
      desc: "Personalised WhatsApp messages with a Razorpay payment link go out automatically. Clients tap and pay instantly — no awkward calls.",
      icon: "💬",
      detail: "WhatsApp · Razorpay · Real-time tracking",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Setup in 5 minutes.
            <br />
            <span className="text-[#10B981]">Runs on autopilot forever.</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            No IT team. No developer. No complicated setup. Just connect, configure, and let
            SplitzPay handle every follow-up.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#10B981]/30 via-[#10B981] to-[#10B981]/30" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              {/* Connector dots */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-[52px] right-0 w-4 h-4 rounded-full bg-[#10B981] border-2 border-white shadow translate-x-2 z-10" />
              )}

              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#10B981]/40 hover:shadow-xl transition-all group relative z-0">
                {/* Step number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-black text-[#0F172A]/10 group-hover:text-[#10B981]/20 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-3xl">{step.icon}</span>
                </div>

                <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#059669] transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#475569] leading-relaxed mb-4">{step.desc}</p>

                <div className="bg-[#D1FAE5] rounded-lg px-3 py-2">
                  <span className="text-[#059669] text-xs font-semibold">{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="#trial"
            className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#10B981]/30 hover:-translate-y-0.5 text-lg"
          >
            See It Live — Start Free Trial
            <span>→</span>
          </a>
          <p className="text-[#475569] text-sm mt-3">No credit card · 14 days free</p>
        </div>
      </div>
    </section>
  );
}
