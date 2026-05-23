import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
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
  themeColor: "#131313",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${bebasNeue.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen flex flex-col">
        {/* Fixed atmospheric background photo */}
        <div
          aria-hidden
          className="fixed inset-0 z-[-2] bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundPosition: "center top",
          }}
        />
        {/* Dark scrim for legibility — light enough that the photo bleeds through */}
        <div
          aria-hidden
          className="fixed inset-0 z-[-1]"
          style={{ background: "rgba(19, 19, 19, 0.55)" }}
        />
        <div className="grain" aria-hidden />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
