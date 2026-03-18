const features = [
  {
    icon: "💬",
    title: "Automated WhatsApp Reminders",
    desc: "Pre-approved Meta templates sent at custom intervals. Friendly → Firm → Urgent — the tone escalates automatically so you never have to.",
    tag: "Core Feature",
    tagColor: "bg-[#D1FAE5] text-[#059669]",
  },
  {
    icon: "💳",
    title: "Razorpay Payment Links",
    desc: "Every reminder includes a Razorpay payment link embedded directly in the WhatsApp message. Clients tap and pay instantly — no friction.",
    tag: "Instant Payment",
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    icon: "📥",
    title: "Invoice Import",
    desc: "Upload a Tally CSV in seconds, or connect Zoho Books / QuickBooks via webhook for real-time sync. When a client pays in Zoho, SplitzPay stops reminders automatically.",
    tag: "Smart Sync",
    tagColor: "bg-purple-50 text-purple-600",
  },
  {
    icon: "⏱️",
    title: "Reminder Schedules",
    desc: "Configurable thresholds: +3, +7, +14, +30 days overdue. Each threshold maps to a different message tone. Set once, works forever.",
    tag: "Fully Automated",
    tagColor: "bg-amber-50 text-amber-600",
  },
  {
    icon: "✏️",
    title: "Multi-template Library",
    desc: "Customise every message with dynamic variables: {{client_name}}, {{amount}}, {{invoice_number}}, {{payment_link}}, and more. Preview live before saving.",
    tag: "Personalised",
    tagColor: "bg-[#D1FAE5] text-[#059669]",
  },
  {
    icon: "📊",
    title: "Reminder Logs & Analytics",
    desc: "Full audit trail — delivery status, read receipts, payment captured. See green ✓✓ for read, red for failed. Every message accounted for.",
    tag: "Full Visibility",
    tagColor: "bg-blue-50 text-blue-600",
  },
  {
    icon: "🏢",
    title: "Multi-tenant SaaS",
    desc: "Manage multiple businesses from one account. Perfect for CA firms handling 10–50 clients or holding companies with multiple entities.",
    tag: "For CA Firms",
    tagColor: "bg-purple-50 text-purple-600",
  },
  {
    icon: "🤖",
    title: "Daily Cron Engine",
    desc: "Runs at 04:00 UTC every day — marks overdue invoices, evaluates reminder schedules, dispatches messages. Fully automated, zero manual effort.",
    tag: "Zero Effort",
    tagColor: "bg-amber-50 text-amber-600",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Product Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Everything you need to
            <br />
            <span className="text-[#10B981]">get paid faster</span>
          </h2>
          <p className="text-[#475569] text-lg max-w-2xl mx-auto">
            SplitzPay handles the entire collections workflow — from overdue detection to
            payment confirmation — so you can focus on your actual business.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 hover:bg-white hover:border-[#10B981]/30 hover:shadow-xl transition-all group"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${feature.tagColor}`}>
                {feature.tag}
              </span>
              <h3 className="text-[#0F172A] font-bold mt-3 mb-2 group-hover:text-[#059669] transition-colors leading-tight">
                {feature.title}
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bulk reminder highlight */}
        <div className="mt-10 bg-gradient-to-r from-[#0F172A] to-[#0a2040] rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-[#10B981] font-bold text-sm mb-2">⚡ Power Feature</div>
              <h3 className="text-white text-2xl font-bold mb-2">
                Send All Overdue Reminders in One Click
              </h3>
              <p className="text-white/60 max-w-lg">
                Month-end chaos? Hit &ldquo;Send All Overdue&rdquo; and SplitzPay fires WhatsApp reminders
                to every outstanding client simultaneously — with individual payment links.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-[#10B981]/20 border border-[#10B981]/30 rounded-xl px-6 py-4 text-center">
                <div className="text-4xl font-black text-[#10B981]">1</div>
                <div className="text-white text-sm font-medium">click</div>
                <div className="text-white/50 text-xs">for all overdue</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
