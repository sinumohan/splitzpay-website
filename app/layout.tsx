import type { Metadata } from "next";
import Script from "next/script";
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
  const GTM_ID = "GTM-MJCVRMKF";

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
