import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SplitzPay — Get Paid. On Time. Every Time.",
  description:
    "SplitzPay automates WhatsApp invoice reminders for Indian SMBs. Stop chasing clients for payment. Connect Tally, Zoho Books, or QuickBooks and let SplitzPay handle follow-ups — with Razorpay payment links built in.",
  keywords:
    "invoice reminder whatsapp india, automated invoice reminder, whatsapp invoice chaser, tally invoice automation, zoho invoice reminder, razorpay payment link, accounts receivable automation india",
  openGraph: {
    title: "SplitzPay — Get Paid. On Time. Every Time.",
    description:
      "Automate WhatsApp payment reminders for your Indian business. Integrates with Tally, Zoho Books & QuickBooks. Razorpay payment links included.",
    url: "https://splitzpay.app",
    siteName: "SplitzPay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplitzPay — Stop Chasing Invoices",
    description:
      "Send automated WhatsApp payment reminders to clients. Built for Indian SMBs. Starting at ₹499/month.",
  },
  metadataBase: new URL("https://splitzpay.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
