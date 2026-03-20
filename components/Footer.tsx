function SpLogoFooter() {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="32" height="28" rx="7" fill="#4A9B72" />
      <polygon points="5,29 14,29 8,38" fill="#4A9B72" />
      <text x="16" y="20" textAnchor="middle" dominantBaseline="middle" fill="white" fontFamily="Inter, Helvetica, Arial, sans-serif" fontWeight="700" fontSize="11">SP</text>
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1F35] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <SpLogoFooter />
              <div>
                <div className="font-bold text-xl leading-none tracking-tight">
                  <span className="text-white">Splitz</span><span className="text-[#4A9B72]">Pay</span>
                </div>
                <div className="text-[9px] font-bold tracking-[0.15em] uppercase leading-none mt-0.5 text-[#4A9B72]">
                  Chase Less. Collect More.
                </div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Automated WhatsApp invoice reminders for Indian SMBs.
            </p>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-white/25">Made with</span>
              <span className="text-red-400 text-sm">♥</span>
              <span className="text-xs text-white/25">in India</span>
              <span className="text-sm">🇮🇳</span>
            </div>
          </div>

          {/* SplitzPay Biz */}
          <div>
            <h4 className="font-semibold mb-4 text-xs text-emerald-500/70 uppercase tracking-widest">
              SplitzPay Biz
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Features", href: "#biz" },
                { label: "Pricing", href: "#pricing" },
                { label: "Integrations", href: "#biz" },
                { label: "For CA Firms", href: "#pricing" },
                { label: "Sign In", href: "https://app.splitzpay.app/login" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/45 hover:text-emerald-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SplitzPay Go */}
          <div>
            <h4 className="font-semibold mb-4 text-xs text-teal-500/70 uppercase tracking-widest">
              SplitzPay Go
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Features", href: "#go" },
                { label: "Group Splitting", href: "#go" },
                { label: "PayScore", href: "#go" },
                { label: "Document Vault", href: "#go" },
                { label: "Join Waitlist", href: "#go" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/45 hover:text-teal-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-xs text-white/50 uppercase tracking-widest">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Partners", href: "#" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "#" },
                { label: "Refund Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-white/45 hover:text-[#4A9B72] text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact + socials */}
        <div className="mt-12 pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-white/35">
            {["hello@splitzpay.app", "marketing@splitzpay.app", "partnership@splitzpay.app"].map(
              (email) => (
                <a key={email} href={`mailto:${email}`} className="hover:text-[#4A9B72] transition-colors">
                  {email}
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            {["LinkedIn", "Twitter/X", "Instagram"].map((s) => (
              <a key={s} href="#" className="text-white/25 hover:text-[#4A9B72] text-sm font-medium transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/25 text-xs">
            © {year} SplitzPay India Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-white/25 text-xs">
            <span>CIN: U72900MH2026PTC000000</span>
            <span>·</span>
            <span>GST: 27XXXXX1234X1ZX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
