export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#10B981] flex items-center justify-center">
                <span className="text-white font-bold text-sm">SP</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-none">SplitzPay</div>
                <div className="text-[#10B981] text-[10px] font-medium leading-none mt-0.5">
                  WhatsApp Invoice Chaser
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Get paid. On time. Every time.
              <br />
              Built for Indian SMBs.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-white/30">Made with</span>
              <span className="text-red-400">♥</span>
              <span className="text-xs text-white/30">in India</span>
              <span>🇮🇳</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-white/80 uppercase tracking-wide">
              Product
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Integrations", href: "#integrations" },
                { label: "Pricing", href: "#pricing" },
                { label: "Changelog", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-[#10B981] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-white/80 uppercase tracking-wide">
              Use Cases
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Freelancers", href: "#" },
                { label: "Small Businesses", href: "#" },
                { label: "CA Firms", href: "#" },
                { label: "Tally Users", href: "#" },
                { label: "Zoho Books Users", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-[#10B981] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-white/80 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Partners", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Refund Policy", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-[#10B981] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            <a href="mailto:hello@splitzpay.app" className="hover:text-[#10B981] transition-colors">
              hello@splitzpay.app
            </a>
            <a href="mailto:marketing@splitzpay.app" className="hover:text-[#10B981] transition-colors">
              marketing@splitzpay.app
            </a>
            <a href="mailto:partnership@splitzpay.app" className="hover:text-[#10B981] transition-colors">
              partnership@splitzpay.app
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Twitter/X", href: "#" },
              { label: "Instagram", href: "#" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-white/30 hover:text-[#10B981] text-sm font-medium transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            © {year} SplitzPay India Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-white/30 text-xs">
            <span>CIN: U72900MH2026PTC000000</span>
            <span>·</span>
            <span>GST: 27XXXXX1234X1ZX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
