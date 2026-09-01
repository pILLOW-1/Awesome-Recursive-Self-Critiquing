import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Awesome Recursive Self-Critiquing',
  description:
    'An evaluation-first research index for recursive self-critiquing, scalable oversight, and recursive self-improvement.',
  openGraph: {
    title: 'Awesome Recursive Self-Critiquing',
    description:
      'Can recursive self-critique reliably guide self-improvement? Explore the evidence, benchmarks, and open evaluation questions.',
    type: 'website',
    images: [
      'https://raw.githubusercontent.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/main/assets/recursive-self-critiquing.png',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awesome Recursive Self-Critiquing',
    description: 'An evaluation-first map of recursive self-improvement research.',
    images: [
      'https://raw.githubusercontent.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/main/assets/recursive-self-critiquing.png',
    ],
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
