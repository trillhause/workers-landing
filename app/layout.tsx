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
  title: "Workers",
  description: "Autonomous Agents that work with you and your team directly in Slack.",
  openGraph: {
    title: 'Workers',
    description: 'Autonomous Agents that work with you and your team directly in Slack.',
    url: 'https://tagworkers.com', // Replace with your actual URL
    siteName: 'Workers',
    images: [
      {
        // Use a high-quality, square or 1.91:1 image, ideally 1200x630px
        url: '/images/og-image-2.png', // The path to your social media preview image in the 'public' folder
        width: 728,
        height: 408,
        alt: 'Workers | Autonomous Agents in Slack [Image]',
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
