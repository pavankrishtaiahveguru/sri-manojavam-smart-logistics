import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://srimanojavamlogistics.com"),

  title: {
    default: "Sri Manojavam Smart Logistics | SMSL",
    template: "%s | Sri Manojavam Smart Logistics",
  },

  description:
    "Sri Manojavam Smart Logistics Private Limited provides reliable, safe and cost-effective logistics solutions including road transportation, air freight, sea freight, refrigerated transportation, hazardous goods handling and international freight forwarding across India.",

  keywords: [
    "Sri Manojavam Smart Logistics",
    "SMSL Logistics",
    "Logistics Company Hyderabad",
    "Transportation Services India",
    "Freight Forwarding",
    "Air Freight",
    "Sea Freight",
    "Road Transportation",
    "Hazardous Goods Transportation",
    "Refrigerated Transportation",
    "Supply Chain Solutions",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sri Manojavam Smart Logistics | SMSL",
    description:
      "Reliable logistics, transportation, freight forwarding and supply chain solutions across India.",
    url: "https://srimanojavamlogistics.com",
    siteName: "Sri Manojavam Smart Logistics",
    locale: "en_IN",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/logo/smsl-logo.png",
    apple: "/logo/smsl-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
