import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "SplitzPay — India's Payments Platform",
  description:
    "SplitzPay Biz automates WhatsApp invoice reminders for Indian SMBs. SplitzPay Go lets you split expenses, track debts, and build your PayScore. One platform. Two products.",
  keywords:
    "splitzpay biz, splitzpay go, invoice reminder whatsapp india, group expense splitting india, payscore, razorpay payment link, accounts receivable automation india, tally invoice automation",
  openGraph: {
    title: "SplitzPay — India's Payments Platform",
    description:
      "SplitzPay Biz: automate invoice collections. SplitzPay Go: split expenses and pay clean. Built for how India actually pays.",
    url: "https://splitzpay.app",
    siteName: "SplitzPay",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplitzPay — One Platform. Two Products.",
    description:
      "SplitzPay Biz for businesses. SplitzPay Go for everyone. India's payments platform.",
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
