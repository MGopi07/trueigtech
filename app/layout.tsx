import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TRUEIGTECH | Enterprise iGaming Solutions",
  description: "Build the Future of iGaming with Enterprise-Level Gaming Solutions. White label platforms, API integrations, and betting software.",
  openGraph: {
    title: "TRUEIGTECH | Enterprise iGaming Solutions",
    description: "Premium B2B iGaming technology company providing white label platforms, APIs, and gaming solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
