"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: 499,
    desc: "Perfect for freelancers & micro-businesses",
    clients: "Up to 50 clients",
    businesses: "1 business",
    invoices: "Up to 200 invoices/month",
    reminders: "500 WhatsApp messages/month",
    features: [
      "WhatsApp automation",
      "Razorpay payment links",
      "Tally CSV import",
      "3 message templates",
      "Reminder history & logs",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: null,
  },
  {
    name: "Growth",
    price: 999,
    desc: "For growing businesses scaling collections",
    clients: "Up to 200 clients",
    businesses: "3 businesses",
    invoices: "Unlimited invoices",
    reminders: "2,000 WhatsApp messages/month",
    features: [
      "Everything in Starter",
      "Zoho Books + QuickBooks sync",
      "Unlimited templates",
      "Bulk send overdue reminders",
      "Delivery & read receipts",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Pro",
    price: 1499,
    desc: "For CA firms and mid-size companies",
    clients: "Unlimited clients",
    businesses: "Unlimited businesses",
    invoices: "Unlimited invoices",
    reminders: "Unlimited messages",
    features: [
      "Everything in Growth",
      "White-label messaging",
      "Multi-client dashboard",
      "Advanced analytics",
      "Dedicated account manager",
      "Phone + WhatsApp support",
    ],
    cta: "Start Free Trial",
    highlight: false,
    badge: "For CA Firms",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D1FAE5] text-[#059669] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Simple, transparent pricing.
            <br />
            <span className="text-[#10B981]">No hidden fees.</span>
          </h2>
          <p className="text-[#475569] text-lg mb-8">
            Start free for 14 days. No credit card required.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#F8FAFC] border border-gray-200 rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                !annual
                  ? "bg-white shadow-sm text-[#0F172A]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                annual
                  ? "bg-white shadow-sm text-[#0F172A]"
                  : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              Annual
              <span className="bg-[#10B981] text-white text-xs px-2 py-0.5 rounded-full">
                2 months free
              </span>
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.highlight
                  ? "bg-[#0F172A] text-white shadow-2xl scale-105"
                  : "bg-[#F8FAFC] border border-gray-100 hover:border-[#10B981]/30 hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${
                    plan.highlight ? "bg-[#10B981] text-white" : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.highlight ? "text-white" : "text-[#0F172A]"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-[#475569]"}`}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className={`text-5xl font-black ${
                    plan.highlight ? "text-[#10B981]" : "text-[#0F172A]"
                  }`}
                >
                  ₹{annual ? Math.round(plan.price * 10) : plan.price}
                </span>
                <span
                  className={`text-sm ml-1 ${plan.highlight ? "text-white/50" : "text-[#475569]"}`}
                >
                  /{annual ? "year" : "month"}
                </span>
                {annual && (
                  <div className="text-[#10B981] text-xs font-semibold mt-1">
                    Save ₹{plan.price * 2}/year
                  </div>
                )}
              </div>

              {/* Limits */}
              <div
                className={`rounded-xl p-4 mb-6 space-y-2 ${
                  plan.highlight ? "bg-white/10" : "bg-white border border-gray-100"
                }`}
              >
                {[plan.clients, plan.businesses, plan.invoices, plan.reminders].map((limit) => (
                  <div key={limit} className="flex items-center gap-2">
                    <span className="text-[#10B981] text-sm">✓</span>
                    <span
                      className={`text-sm ${plan.highlight ? "text-white/80" : "text-[#475569]"}`}
                    >
                      {limit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span
                      className={`text-sm ${plan.highlight ? "text-white/80" : "text-[#475569]"}`}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#trial"
                className={`block w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#10B981] hover:bg-[#059669] text-white shadow-lg hover:shadow-[#10B981]/30"
                    : "bg-[#0F172A] hover:bg-[#1e293b] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="text-[#475569] text-sm">
            All plans include a 14-day free trial.&nbsp;
            <a href="#faq" className="text-[#10B981] font-medium hover:underline">
              Read the FAQ
            </a>
            &nbsp;for details.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {[
              "✓ No setup fees",
              "✓ No hidden charges",
              "✓ Cancel anytime",
              "✓ INR pricing",
              "✓ GST invoice included",
            ].map((note) => (
              <span key={note} className="text-sm text-[#475569]">
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
