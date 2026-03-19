const testimonials = [
  {
    name: "Priya Mehta",
    role: "Founder, Mehta Design Studio",
    location: "Mumbai",
    avatar: "PM",
    avatarBg: "#7C3AED",
    quote: "I used to spend 3+ hours every week chasing clients on WhatsApp. SplitzPay literally gave me those hours back. My collection rate went from 60 days to under 20.",
    metric: "20 days avg collection",
    metricLabel: "down from 60 days",
  },
  {
    name: "Rajesh Agarwal",
    role: "Partner, Agarwal & Associates CA",
    location: "Delhi",
    avatar: "RA",
    avatarBg: "#4A9B72",
    quote: "We manage AR for 30+ clients. SplitzPay's multi-tenant dashboard is a game changer. The Zoho sync means zero manual work — invoices sync, reminders go, payments come.",
    metric: "30+ businesses managed",
    metricLabel: "one dashboard",
  },
  {
    name: "Anita Krishnan",
    role: "Director, AK Logistics",
    location: "Bangalore",
    avatar: "AK",
    avatarBg: "#DC2626",
    quote: "Our Tally export was messy but SplitzPay parsed it perfectly. First month we recovered ₹4.2 lakh in overdue invoices we'd basically written off. The ROI is insane.",
    metric: "₹4.2L recovered",
    metricLabel: "in first month",
  },
  {
    name: "Suresh Pillai",
    role: "CEO, BuildRight Constructions",
    location: "Chennai",
    avatar: "SP",
    avatarBg: "#D97706",
    quote: "The WhatsApp messages feel professional without being aggressive. Clients tell me it's a nice reminder — not a threat. Three of them paid early just because the Razorpay link was so convenient.",
    metric: "3 early payments",
    metricLabel: "zero awkward calls",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D0F0E0] text-[#3A7D5A] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F35] mb-4">
            Indian businesses getting paid
            <br />
            <span className="text-[#4A9B72]">faster every day</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#F4FCF8] border border-[#C0E8D0] rounded-2xl p-7 hover:border-[#4A9B72]/60 hover:shadow-xl transition-all group"
            >
              <div className="text-[#4A9B72] text-5xl font-black leading-none mb-3 opacity-25">
                &ldquo;
              </div>
              <p className="text-[#0D1F35] leading-relaxed mb-6 text-[15px]">{t.quote}</p>
              <div className="bg-[#D0F0E0] rounded-xl px-4 py-3 mb-5 flex items-center gap-3">
                <div className="text-2xl font-black text-[#3A7D5A]">{t.metric}</div>
                <div className="text-[#4A6070] text-xs">{t.metricLabel}</div>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: t.avatarBg }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[#0D1F35] text-sm">{t.name}</div>
                  <div className="text-[#4A6070] text-xs">{t.role} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="mt-12 bg-[#E8F7EF] border border-[#C0E8D0] rounded-2xl p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Businesses onboarded" },
              { value: "₹12Cr+", label: "Invoices processed" },
              { value: "98%", label: "WhatsApp delivery rate" },
              { value: "4.8/5", label: "Average rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-black text-[#4A9B72]">{stat.value}</div>
                <div className="text-[#4A6070] text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
