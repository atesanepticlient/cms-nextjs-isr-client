import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import LogRocketProvider from "./logrocket-provider";
import TawkProvider from "./tawk-provider";
import GoogleAnalyticsProvider from "./google-analytics-provider";

// add a font you want
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home | Empowering Web Solutions with ISR Next.js & Strapi CMS",
  description:
    "Build faster, scalable websites with our ISR-powered Next.js and Strapi CMS platform. Experience seamless content management, real-time updates, and an engaging user experience across all devices.",
  keywords: [
    "ISR Next.js CMS",
    "Strapi CMS platform",
    "scalable websites",
    "real-time updates",
    "modern CMS solutions",
    "Vercel deployment",
    "responsive website",
    "SEO optimized CMS",
  ],
  openGraph: {
    title: "Empowering Web Solutions ",
    description:
      "Create high-performance websites with real-time updates and powerful CMS capabilities using ISR Next.js and Strapi.",
    url: "https://yourwebsite.com/",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ISR Next.js CMS Website",
      },
    ],
  },

  alternates: {
    canonical: "https://yourwebsite.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <TawkProvider />
        <GoogleAnalyticsProvider />
      </head>
      <body className={` ${roboto.variable} antialiased dark font-roboto`}>
        <LogRocketProvider />
        {children}
      </body>
    </html>
  );
}
