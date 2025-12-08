import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slack Agents",
  description: "Let agents handle your distractions. Get your time back. Enter Flow State.",
  openGraph: {
    title: 'Autonomous Agents in Slack',
    description: 'Let agents handle your distractions. Get your time back. Enter Flow State.',
    url: 'https://slackworkers.com', // Replace with your actual URL
    siteName: 'Slack Workers',
    images: [
      {
        // Use a high-quality, square or 1.91:1 image, ideally 1200x630px
        url: '/images/og-image.png', // The path to your social media preview image in the 'public' folder
        width: 728,
        height: 408,
        alt: 'Slack Workers Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Autonomous Agents in Slack',
    description: 'Let agents handle your distractions. Get your time back. Enter Flow State.',
    images: ['/images/og-image.png'], // Must be an absolute URL in production
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
