import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteConfig } from "@/lib/data";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — React & Next.js Specialist`,
  description: `${siteConfig.bio} Full-stack engineer specializing in React, Next.js, TypeScript, and Django.`,
  keywords: [
    "Abiola John Oluwaseyi",
    "React Developer",
    "Next.js Developer",
    "Full Stack Engineer",
    "Django",
    "TypeScript",
    "Nigeria",
    "Frontend Engineer",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.name, url: "https://oluwaseyiae.vercel.app" }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oluwaseyiae.vercel.app",
    siteName: `${siteConfig.name} Portfolio`,
    title: `${siteConfig.name} — React & Next.js Specialist`,
    description: siteConfig.bio,
    images: [
      {
        url: siteConfig.photo,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — React & Next.js Specialist`,
    description: siteConfig.bio,
    creator: "@oluwaseyipd",
    images: [siteConfig.photo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
