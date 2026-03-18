const integrations = [
  {
    name: "Tally",
    logo: "T",
    color: "#2563EB",
    bg: "#EFF6FF",
    desc: "Export invoices as CSV from Tally and import in one click. Duplicate detection keeps your data clean.",
  },
  {
    name: "Zoho Books",
    logo: "Z",
    color: "#E5222A",
    bg: "#FEF2F2",
    desc: "Real-time webhook sync. When Zoho marks an invoice paid, SplitzPay stops reminders automatically.",
  },
  {
    name: "QuickBooks",
    logo: "QB",
    color: "#2CA01C",
    bg: "#F0FDF4",
    desc: "OAuth connection keeps your invoices always in sync. No manual import needed, ever.",
  },
  {
    name: "WhatsApp Business",
    logo: "W",
    color: "#25D366",
    bg: "#F0FFF4",
    desc: "Powered by Meta Cloud API. Send pre-approved templates with CTA buttons that link to Razorpay.",
  },
  {
    name: "Razorpay",
    logo: "R",
    color: "#3395FF",
    bg: "#EFF6FF",
    desc: "Auto-generate payment links for each invoice. Payment captured via webhook — zero manual marking.",
  },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Works with the tools
            <br />
            <span className="text-[#10B981]">you already use</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-xl mx-auto">
            SplitzPay plugs into your existing workflow. No switching tools, no learning curve.
            Just connect and go.
          </p>
        </div>

        {/* Integration cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#10B981]/30 hover:shadow-xl transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-sm"
                  style={{ background: integration.bg, color: integration.color }}
                >
                  {integration.logo}
                </div>
                <h3 className="font-bold text-[#0F172A] group-hover:text-[#059669] transition-colors">
                  {integration.name}
                </h3>
              </div>
              <p className="text-[#475569] text-sm leading-relaxed">{integration.desc}</p>
            </div>
          ))}

          {/* Coming soon */}
          <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-2">🔌</div>
            <h3 className="font-bold text-[#0F172A] mb-1">More coming soon</h3>
            <p className="text-[#475569] text-sm">FreshBooks, Xero, Marg ERP, and more integrations in the roadmap.</p>
            <a
              href="#trial"
              className="mt-3 text-[#10B981] text-sm font-semibold hover:underline"
            >
              Request an integration →
            </a>
          </div>
        </div>

        {/* Positioning callout */}
        <div className="bg-white border border-[#10B981]/20 rounded-2xl p-8 text-center">
          <p className="text-[#0F172A] text-lg font-semibold mb-2">
            For Indian business owners who are tired of unpaid invoices killing their cash flow
          </p>
          <p className="text-[#475569]">
            SplitzPay is the only <strong className="text-[#059669]">WhatsApp-native</strong> invoice reminder platform
            that&apos;s as easy to use as sending a WhatsApp message — unlike complex ERP add-ons
            or expensive AR software built for Western markets.
          </p>
        </div>
      </div>
    </section>
  );
}
