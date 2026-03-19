export default function ProblemSection() {
  const stats = [
    { value: "72%", label: "of Indian SMBs face cash-flow issues due to late invoices", color: "#F59E0B" },
    { value: "45+", suffix: "days", label: "average delay in B2B invoice settlement in India", color: "#EF4444" },
    { value: "3–4", suffix: "hrs/wk", label: "wasted per business chasing payments manually", color: "#F59E0B" },
    { value: "₹12L", suffix: "Cr+", label: "estimated outstanding receivables in Indian SMB sector", color: "#4A9B72" },
  ];

  const painPoints = [
    { emoji: "😬", title: "Awkward to ask twice", desc: "Manually chasing clients on WhatsApp feels uncomfortable and hurts relationships." },
    { emoji: "⏰", title: "Hours wasted every week", desc: "Copying invoice details, writing messages, tracking replies — it's a full-time job." },
    { emoji: "💸", title: "Cash flow gaps kill growth", desc: "Unpaid invoices mean delayed salaries, missed opportunities, and sleepless nights." },
    { emoji: "🔗", title: "Payment is still manual", desc: "Even after reminding, clients need NEFT details or UPI IDs — adding more friction." },
  ];

  return (
    <section className="py-20 bg-[#E8F7EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F35] mb-4">
            Late payments are silently killing
            <br />
            <span className="text-[#4A9B72]">Indian businesses</span>
          </h2>
          <p className="text-[#4A6070] text-lg max-w-2xl mx-auto">
            If you&apos;ve ever felt that gut-sinking feeling of watching an invoice go 30, 45,
            60+ days overdue — you&apos;re not alone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-white border border-[#C0E8D0] rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-black" style={{ color: stat.color }}>
                {stat.value}
                {stat.suffix && <span className="text-base font-bold ml-1 text-[#4A6070]">{stat.suffix}</span>}
              </div>
              <p className="text-[#4A6070] text-sm mt-2 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Pain points */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {painPoints.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#C0E8D0] rounded-2xl p-6 hover:border-[#4A9B72]/50 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="text-[#0D1F35] font-bold mb-2 group-hover:text-[#3A7D5A] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#4A6070] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Brand promise */}
        <div className="mt-14 bg-[#0D1F35] rounded-2xl p-8 text-center">
          <p className="text-white text-xl sm:text-2xl font-medium leading-relaxed max-w-3xl mx-auto">
            &ldquo;SplitzPay takes the awkwardness out of chasing payments — so you can focus on doing
            great work while your money finds its way back to you,{" "}
            <span className="text-[#4A9B72]">automatically.</span>&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
