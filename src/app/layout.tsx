import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || ""),

  applicationName: siteConfig.name,

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },

  description: siteConfig.description,

  keywords: [
    "truck booking",
    "truck rental",
    "logistics platform",
    "cargo transport",
    "delivery trucks",
    "moving services",
    "freight booking",
  ],

  authors: [{ name: "Truckora Team" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  category: "logistics",

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@truckora",
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

  icons: {
    icon: [
      { url: "/icon-circle.png", type: "image/png" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  themeColor: siteConfig.themeColor,
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
