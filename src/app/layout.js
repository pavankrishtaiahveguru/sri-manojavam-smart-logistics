import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/images/smsl-logo.png",
    apple: "/images/smsl-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-slate-900">
        {/* Global Navbar */}
        <Navbar />

        {/* Main Page Content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
