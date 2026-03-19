"use client";

import { useState } from "react";
import { SIGNUP_URL } from "@/lib/config";

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
    <section id="pricing" className="py-20 bg-[#E8F7EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#D0F0E0] text-[#3A7D5A] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0D1F35] mb-4">
            Simple, transparent pricing.
            <br />
            <span className="text-[#4A9B72]">No hidden fees.</span>
          </h2>
          <p className="text-[#4A6070] text-lg mb-8">
            Start free for 14 days. No credit card required.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 bg-white border border-[#C0E8D0] rounded-xl p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
                !annual ? "bg-[#4A9B72] text-white shadow-sm" : "text-[#4A6070] hover:text-[#0D1F35]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                annual ? "bg-[#4A9B72] text-white shadow-sm" : "text-[#4A6070] hover:text-[#0D1F35]"
              }`}
            >
              Annual
              <span className={`text-xs px-2 py-0.5 rounded-full ${annual ? "bg-white text-[#4A9B72]" : "bg-[#D0F0E0] text-[#3A7D5A]"}`}>
                2 months free
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all ${
                plan.highlight
                  ? "bg-[#0D1F35] text-white shadow-2xl scale-105"
                  : "bg-white border border-[#C0E8D0] hover:border-[#4A9B72]/50 hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full ${
                    plan.highlight ? "bg-[#4A9B72] text-white" : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[#0D1F35]"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/60" : "text-[#4A6070]"}`}>
                {plan.desc}
              </p>

              <div className="mb-6">
                <span className={`text-5xl font-black ${plan.highlight ? "text-[#4A9B72]" : "text-[#0D1F35]"}`}>
                  ₹{annual ? Math.round(plan.price * 10) : plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlight ? "text-white/50" : "text-[#4A6070]"}`}>
                  /{annual ? "year" : "month"}
                </span>
                {annual && (
                  <div className="text-[#4A9B72] text-xs font-semibold mt-1">
                    Save ₹{plan.price * 2}/year
                  </div>
                )}
              </div>

              <div
                className={`rounded-xl p-4 mb-6 space-y-2 ${
                  plan.highlight ? "bg-white/10" : "bg-[#F4FCF8] border border-[#C0E8D0]"
                }`}
              >
                {[plan.clients, plan.businesses, plan.invoices, plan.reminders].map((limit) => (
                  <div key={limit} className="flex items-center gap-2">
                    <span className="text-[#4A9B72] text-sm">✓</span>
                    <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-[#4A6070]"}`}>
                      {limit}
                    </span>
                  </div>
                ))}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2">
                    <span className="text-[#4A9B72] mt-0.5">✓</span>
                    <span className={`text-sm ${plan.highlight ? "text-white/80" : "text-[#4A6070]"}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={SIGNUP_URL}
                className={`block w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-200 ${
                  plan.highlight
                    ? "bg-[#4A9B72] hover:bg-[#5BB584] text-white shadow-lg"
                    : "bg-[#0D1F35] hover:bg-[#1a3550] text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#4A6070] text-sm">
            All plans include a 14-day free trial.&nbsp;
            <a href="#faq" className="text-[#4A9B72] font-medium hover:underline">Read the FAQ</a>
            &nbsp;for details.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {["✓ No setup fees", "✓ No hidden charges", "✓ Cancel anytime", "✓ INR pricing", "✓ GST invoice included"].map(
              (note) => (
                <span key={note} className="text-sm text-[#4A6070]">{note}</span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
