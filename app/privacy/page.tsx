import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — SplitzPay",
  description:
    "SplitzPay's privacy policy. Learn how we collect, use, and protect your personal information.",
};

const EFFECTIVE_DATE = "March 19, 2026";
const COMPANY = "SplitzPay India Pvt Ltd";
const EMAIL = "hello@splitzpay.app";
const WEBSITE = "https://splitzpay.app";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#10B981] flex items-center justify-center">
              <span className="text-white font-bold text-xs">SP</span>
            </div>
            <span className="font-bold text-[#0F172A]">SplitzPay</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#475569] hover:text-[#10B981] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        {/* Title block */}
        <div className="mb-10">
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[#475569] text-sm">
            Effective date: <strong>{EFFECTIVE_DATE}</strong> &nbsp;·&nbsp; {COMPANY}
          </p>
        </div>

        <div className="prose-policy">
          <Intro />
          <Section id="information-we-collect" title="1. Information We Collect">
            <p>We collect only what we need to run SplitzPay for you. Here is what that includes:</p>

            <SubHeading>Information you give us directly</SubHeading>
            <ul>
              <li><strong>Account details</strong> — your name, email address, and password when you sign up.</li>
              <li><strong>Business details</strong> — your business name and subscription plan chosen during onboarding.</li>
              <li><strong>Client data</strong> — names, phone numbers, and email addresses of your clients that you add or import into SplitzPay.</li>
              <li><strong>Invoice data</strong> — invoice numbers, amounts, due dates, and descriptions you enter or sync from accounting tools.</li>
              <li><strong>Integration credentials</strong> — API keys or OAuth tokens for WhatsApp Business, Razorpay, Zoho Books, or QuickBooks, stored encrypted.</li>
            </ul>

            <SubHeading>Information collected automatically</SubHeading>
            <ul>
              <li><strong>Usage data</strong> — pages you visit, features you use, and actions you take within the app (e.g. reminders sent, invoices created).</li>
              <li><strong>Device and browser data</strong> — IP address, browser type, operating system, and referring URL.</li>
              <li><strong>Cookies and similar technologies</strong> — session cookies to keep you logged in, and analytics cookies to understand how the product is used. See Section 7 for details.</li>
            </ul>

            <SubHeading>Information from third parties</SubHeading>
            <ul>
              <li><strong>Google OAuth</strong> — if you sign in with Google, we receive your name and email address from Google. We do not receive your Google password.</li>
              <li><strong>Accounting integrations</strong> — if you connect Zoho Books or QuickBooks, we receive invoice and client data from those services on your behalf.</li>
              <li><strong>Payment processors</strong> — Razorpay may share payment confirmation events with us via webhook so we can mark your invoices as paid.</li>
            </ul>
          </Section>

          <Section id="how-we-use-it" title="2. How We Use Your Information">
            <p>We use your information to provide and improve SplitzPay. Specifically, we use it to:</p>
            <ul>
              <li>Create and manage your account and business profile.</li>
              <li>Send WhatsApp payment reminders to your clients on your behalf.</li>
              <li>Generate Razorpay payment links and track payment status.</li>
              <li>Sync invoices from your connected accounting tools.</li>
              <li>Send you transactional emails — such as account verification, password reset, and billing receipts.</li>
              <li>Improve, debug, and secure the product using aggregated analytics.</li>
              <li>Comply with legal obligations such as tax reporting and fraud prevention.</li>
            </ul>
            <p>
              <strong>We do not sell your data.</strong> We do not use your data or your clients&apos; data for advertising. We do not share your information with third parties except as described in Section 4.
            </p>
          </Section>

          <Section id="client-data" title="3. Your Clients' Data">
            <p>
              When you add your clients&apos; contact details and invoice information to SplitzPay, you are the <strong>data controller</strong> for that data and we act as the <strong>data processor</strong>. This means:
            </p>
            <ul>
              <li>You are responsible for ensuring you have the right to share your clients&apos; data with us.</li>
              <li>We process your clients&apos; data only to deliver the service you have configured — specifically, sending WhatsApp reminders and payment links on your behalf.</li>
              <li>We do not contact your clients for any purpose of our own.</li>
              <li>When you delete a client or close your account, their data is deleted from our systems within 30 days.</li>
            </ul>
          </Section>

          <Section id="sharing" title="4. When We Share Information">
            <p>We share your information only in the following limited situations:</p>

            <SubHeading>Service providers</SubHeading>
            <p>
              We use trusted third-party providers to operate SplitzPay. Each provider is bound by a data processing agreement and may only use your data to provide their service to us:
            </p>
            <ul>
              <li><strong>Supabase</strong> — cloud database and authentication, hosted on AWS in the Asia-Pacific region.</li>
              <li><strong>Vercel</strong> — application hosting and deployment.</li>
              <li><strong>Meta (WhatsApp Business API)</strong> — delivery of WhatsApp messages to your clients.</li>
              <li><strong>Razorpay</strong> — payment link generation and payment processing.</li>
              <li><strong>Google Tag Manager / Google Analytics</strong> — anonymised usage analytics on the marketing website.</li>
            </ul>

            <SubHeading>Legal requirements</SubHeading>
            <p>
              We may disclose your information if required by law, court order, or government authority, or if we believe in good faith that disclosure is necessary to protect our rights, prevent fraud, or ensure user safety.
            </p>

            <SubHeading>Business transfers</SubHeading>
            <p>
              If SplitzPay is acquired, merged, or its assets are transferred, your information may be transferred as part of that transaction. We will notify you via email before any such transfer takes effect.
            </p>
          </Section>

          <Section id="storage" title="5. Data Storage and Security">
            <p>
              Your data is stored in Supabase (PostgreSQL) on AWS servers in the Asia-Pacific region. All data is encrypted at rest and in transit using TLS 1.2 or higher.
            </p>
            <p>
              Sensitive credentials — such as WhatsApp access tokens and Razorpay API keys — are stored encrypted and are never exposed in logs or API responses.
            </p>
            <p>
              We use Row-Level Security (RLS) on our database so that each business account can only access its own data, even at the database layer.
            </p>
            <p>
              While we take security seriously, no system is perfectly secure. If you suspect unauthorised access to your account, please contact us immediately at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
            </p>
          </Section>

          <Section id="retention" title="6. How Long We Keep Your Data">
            <TableBlock
              rows={[
                ["Account and business data", "For the life of your account, plus 90 days after deletion"],
                ["Invoice and client data", "For the life of your account, plus 30 days after deletion"],
                ["Reminder logs", "24 months from the date the reminder was sent"],
                ["Payment records", "7 years (required by Indian accounting and tax law)"],
                ["Analytics data", "26 months (Google Analytics default)"],
              ]}
            />
            <p>
              You can request deletion of your account and associated data at any time by emailing{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Requests are processed within 30 days. Data required for legal or regulatory compliance will be retained for the legally required period.
            </p>
          </Section>

          <Section id="cookies" title="7. Cookies">
            <p>We use the following types of cookies:</p>
            <TableBlock
              rows={[
                ["Session cookies", "Keep you logged in while you use the app. Deleted when you close your browser.", "Strictly necessary"],
                ["Preference cookies", "Remember UI preferences such as selected plan toggle.", "Functional"],
                ["Analytics cookies", "Understand which pages are most visited and how users navigate the site (Google Analytics, anonymised).", "Analytics"],
              ]}
              headers={["Type", "Purpose", "Category"]}
            />
            <p>
              You can disable non-essential cookies in your browser settings at any time. Disabling cookies may affect some features of the app.
            </p>
          </Section>

          <Section id="your-rights" title="8. Your Rights">
            <p>
              Regardless of where you are located, you have the following rights regarding your personal data:
            </p>
            <ul>
              <li><strong>Access</strong> — you can request a copy of the personal data we hold about you.</li>
              <li><strong>Correction</strong> — you can ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Deletion</strong> — you can ask us to delete your data, subject to legal retention requirements.</li>
              <li><strong>Portability</strong> — you can request your data in a machine-readable format (CSV or JSON).</li>
              <li><strong>Objection</strong> — you can object to how we process your data in certain circumstances.</li>
              <li><strong>Withdraw consent</strong> — where processing is based on your consent, you can withdraw it at any time without affecting previous processing.</li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with your request. We will respond within 30 days. We may need to verify your identity before processing the request.
            </p>
          </Section>

          <Section id="children" title="9. Children's Privacy">
            <p>
              SplitzPay is a business tool intended for adults. We do not knowingly collect personal information from anyone under the age of 18. If you believe a minor has provided us with personal data, please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section id="third-party-links" title="10. Links to Other Websites">
            <p>
              SplitzPay may contain links to third-party websites (for example, Razorpay, Zoho Books). We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </Section>

          <Section id="changes" title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and update the effective date at the top of this page. We encourage you to review this policy periodically.
            </p>
            <p>
              Your continued use of SplitzPay after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section id="contact" title="12. Contact Us">
            <p>If you have any questions, concerns, or requests about this Privacy Policy or your data, please contact us:</p>
            <div className="contact-block">
              <p><strong>{COMPANY}</strong></p>
              <p>Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              <p>Website: <a href={WEBSITE}>{WEBSITE}</a></p>
            </div>
            <p className="text-sm text-[#64748B] mt-4">
              We aim to respond to all privacy enquiries within 5 business days.
            </p>
          </Section>
        </div>

        {/* Back to top */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-[#94A3B8]">
          <span>© {new Date().getFullYear()} {COMPANY}</span>
          <Link href="/" className="hover:text-[#10B981] transition-colors">
            ← Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────────────────── */

function Intro() {
  return (
    <div className="bg-[#F0FDF9] border border-[#A7F3D0] rounded-xl p-5 mb-10 text-sm text-[#065F46] leading-relaxed">
      <strong className="block mb-1 text-base text-[#047857]">Plain-language summary</strong>
      We built SplitzPay to help Indian businesses get paid faster. To do that, we need some of your data — your account details, your clients&apos; contact info, and your invoice data. We use it only to run the service. We do not sell it. We do not spam your clients. You are always in control of your data, and you can ask us to delete it at any time.
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-10 scroll-mt-20">
      <h2 className="text-xl font-bold text-[#0F172A] mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-semibold text-[#0F172A] mt-5 mb-2 text-[0.95rem]">
      {children}
    </h3>
  );
}

function TableBlock({
  rows,
  headers,
}: {
  rows: string[][];
  headers?: string[];
}) {
  return (
    <div className="overflow-x-auto mb-4 rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        {headers && (
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              {headers.map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-2.5 font-semibold text-[#0F172A] text-xs uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-gray-100 last:border-0 even:bg-gray-50/50"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3 text-[#475569] align-top ${
                    j === 0 ? "font-medium text-[#0F172A] whitespace-nowrap" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
