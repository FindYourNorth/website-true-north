import type { Metadata } from 'next';
import { Public_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css';

// Public Sans is a variable font
const publicSans = Public_Sans({
  subsets: ['latin'],
  variable: '--font-publicSans',
});
// Libre Baskerville is not a variable font
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libreBaskerville',
});

export const metadata: Metadata = {
  title: 'Find Your North',
  description: 'True North Consultants Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} ${libreBaskerville.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
