"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do my clients need to install anything?",
    a: "No. Your clients receive a standard WhatsApp message on their existing WhatsApp. The payment link opens Razorpay in their browser — nothing to install.",
  },
  {
    q: "How does the Razorpay integration work?",
    a: "You connect your Razorpay account in Settings. When SplitzPay sends a reminder, it auto-generates a payment link for the exact invoice amount. When the client pays, Razorpay fires a webhook to SplitzPay which automatically marks the invoice as paid and stops future reminders.",
  },
  {
    q: "Will my clients find the reminders aggressive or annoying?",
    a: "SplitzPay uses pre-approved Meta WhatsApp Business templates with a polite, professional tone. The messages are personalised with the client's name and invoice details. Most clients tell businesses the reminders are actually helpful — especially when a payment link is right there.",
  },
  {
    q: "Can I import my existing Tally invoices?",
    a: "Yes. Export your invoices from Tally as a CSV and upload it to SplitzPay. The system parses the file, shows you a preview, and creates all invoice and client records in one go. Duplicate invoices (by invoice number) are automatically skipped.",
  },
  {
    q: "What's the difference between Zoho/QuickBooks sync and CSV import?",
    a: "CSV import is a one-time snapshot. Zoho Books and QuickBooks sync via webhook — any new invoice, update, or payment in your accounting tool instantly reflects in SplitzPay. This is the 'set it and forget it' option.",
  },
  {
    q: "Can I customise the message templates?",
    a: "Absolutely. Create any number of templates with dynamic variables: {{client_name}}, {{amount}}, {{invoice_number}}, {{due_date}}, {{payment_link}}, {{business_name}}, {{days_overdue}}. A live preview shows the rendered message as you type.",
  },
  {
    q: "Is my data secure?",
    a: "Yes. SplitzPay uses Supabase with Row-Level Security — each business only ever sees its own data. All third-party credentials (Razorpay keys, WhatsApp tokens) are stored encrypted.",
  },
  {
    q: "What happens when my 14-day trial ends?",
    a: "You'll be prompted to select a paid plan. If you don't upgrade, your account is paused (not deleted) — your data is safe. You can resume at any time.",
  },
  {
    q: "Do you offer plans for CA firms managing multiple clients?",
    a: "Yes — the Growth plan supports 3 businesses and the Pro plan is unlimited. CA firms can manage multiple client businesses from one dashboard, with isolated data per entity.",
  },
  {
    q: "Is pricing in INR? Do you provide GST invoices?",
    a: "Yes. All pricing is in Indian Rupees. We provide GST-compliant invoices for all paid subscriptions — no surprises on billing.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Frequently asked questions
          </h2>
          <p className="text-[#475569]">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border rounded-xl overflow-hidden transition-all ${
                open === idx
                  ? "border-[#10B981]/40 shadow-sm"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-semibold text-[#0F172A] pr-4">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    open === idx
                      ? "bg-[#10B981] text-white rotate-45"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  +
                </span>
              </button>
              {open === idx && (
                <div className="px-5 pb-5">
                  <p className="text-[#475569] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-10 bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6 text-center">
          <p className="text-[#0F172A] font-semibold mb-2">Still have questions?</p>
          <p className="text-[#475569] text-sm mb-4">
            Write to us and we typically respond within a few hours.
          </p>
          <a
            href="mailto:hello@splitzpay.app"
            className="inline-flex items-center gap-2 bg-[#0F172A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1e293b] transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
