import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Home Compostable Mailers That Actually Break Down | Zero Pack UK",
    template: "%s | Zero Pack",
  },
  description:
    "Premium custom branded home-compostable mailers certified to ABAP AS5810 - the world's highest compostability standard. Low MOQ from 2,000 units. Fast quotes within 48 hours.",
  keywords: [
    "custom compostable mailers UK",
    "home compostable packaging UK",
    "ABAP AS5810 certified mailers",
    "low MOQ compostable mailers",
    "custom branded compostable packaging UK",
    "compostable mailers",
    "eco packaging UK",
    "sustainable packaging",
  ],
  authors: [{ name: "Zero Pack" }],
  creator: "Zero Pack",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://zeropackuk.com",
    siteName: "Zero Pack",
    title: "Custom Compostable Mailers UK | ABAP AS5810 Certified",
    description:
      "Premium custom branded home-compostable mailers certified to ABAP AS5810 - the world's highest compostability standard.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zero Pack - Custom Compostable Mailers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Compostable Mailers UK | ABAP AS5810 Certified",
    description:
      "Premium custom branded home-compostable mailers certified to ABAP AS5810.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zero Pack",
              url: "https://zeropackuk.com",
              logo: "https://zeropackuk.com/logo.png",
              description:
                "Premium provider of custom branded home-compostable mailers certified to ABAP AS5810",
              address: {
                "@type": "PostalAddress",
                addressCountry: "GB",
              },
              sameAs: [
                "https://www.linkedin.com/company/zeropack",
                "https://twitter.com/zeropackuk",
                "https://www.instagram.com/zeropackuk",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
