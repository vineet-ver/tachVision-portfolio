import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import ScrollProgress from "@/components/ScrollProgress";
import FloatingChat from "@/components/FloatingChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechNova.ai - Empowering Businesses with AI & Web Innovation",
  description: "Transform your business with cutting-edge AI solutions, modern web development, stunning UI/UX design, and powerful branding strategies.",
  keywords: ["AI Solutions", "Web Development", "UI/UX Design", "Branding", "Tech Startup"],
  authors: [{ name: "TechNova.ai" }],
  openGraph: {
    title: "TechNova.ai - AI & Web Innovation",
    description: "Empowering businesses with innovative technology solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProgress />
        <CursorTrail />
        <Navbar />
        <main className="min-h-screen pt-20 md:pt-24">{children}</main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
