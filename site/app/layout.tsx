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
    'RSI needs an evaluation science, not just a stronger optimization loop. Explore recursive self-critiquing, scalable oversight, benchmarks, and open evaluation questions.',
  openGraph: {
    title: 'Awesome Recursive Self-Critiquing',
    description:
      'Evaluation is part of the recursive system. Explore the evidence, benchmarks, failure modes, and open questions behind recursive self-improvement claims.',
    type: 'website',
    images: [
      'https://raw.githubusercontent.com/pILLOW-1/Awesome-Recursive-Self-Critiquing/main/assets/recursive-self-critiquing.png',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Awesome Recursive Self-Critiquing',
    description: 'RSI needs an evaluation science, not just a stronger optimization loop.',
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
