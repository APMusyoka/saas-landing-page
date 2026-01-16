import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaS Landing Page - Build Your SaaS 10x Faster",
  description: "The all-in-one platform that helps you launch, grow, and scale your SaaS business with powerful tools and integrations.",
  keywords: ["SaaS", "landing page", "startup", "platform", "business"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
