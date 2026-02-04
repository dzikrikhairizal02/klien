import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klien | Premium Architectural Lighting",
  description: "Simplicity. Elegance. Light. Premium architectural lighting designed for refined spaces.",
  keywords: ["Klien", "architectural lighting", "premium lighting", "minimalist design", "interior lighting"],
  authors: [{ name: "Klien" }],
  openGraph: {
    title: "Klien | Premium Architectural Lighting",
    description: "Simplicity. Elegance. Light. Premium architectural lighting designed for refined spaces.",
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
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
