import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const actay = localFont({
  src: [
    {
      path: "../../public/fonts/ActayWide-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-actay",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Татьяна Хавро | Психолог — Консультации по психологии денег",
  description:
    "Бесплатная диагностическая консультация по психологии денег и жизненных сценариев. Выявление глубинных установок, которые мешают финансовому росту и развитию.",
  keywords: [
    "психолог",
    "психология денег",
    "консультация психолога",
    "Татьяна Хавро",
    "жизненные сценарии",
    "финансовая психология",
    "бесплатная консультация",
  ],
  authors: [{ name: "Татьяна Хавро" }],
  creator: "Татьяна Хавро",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Татьяна Хавро | Психолог — Консультации по психологии денег",
    description:
      "Бесплатная диагностическая консультация по психологии денег и жизненных сценариев. Выявление глубинных установок, которые мешают финансовому росту.",
    siteName: "Татьяна Хавро",
  },
  twitter: {
    card: "summary_large_image",
    title: "Татьяна Хавро | Психолог — Консультации по психологии денег",
    description:
      "Бесплатная диагностическая консультация по психологии денег и жизненных сценариев.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0C011F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${montserrat.variable} ${actay.variable} antialiased`}>
        {/* Meta Pixel Code */}
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '891554220241981');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=891554220241981&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {children}
      </body>
    </html>
  );
}
