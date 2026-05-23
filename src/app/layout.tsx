import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "Prohorj · Full-Stack Developer",
  description:
    "Prohorj builds polished web products end-to-end. Multi-tenant e-commerce, real-time tools, and finely crafted interfaces.",
  metadataBase: new URL("https://prohorj-portfolio.vercel.app"),
  openGraph: {
    title: "Prohorj · Full-Stack Developer",
    description:
      "Polished web products, end-to-end. Multi-tenant e-commerce, real-time tools, and finely crafted interfaces.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060611",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen flex flex-col">
        <div className="mesh-bg" aria-hidden />
        <div className="grain" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
