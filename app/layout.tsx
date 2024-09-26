import type { Metadata } from 'next';
import { Public_Sans, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const publicSans = Public_Sans({ subsets: ['latin'] });
const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: '400' });

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
      <body className={`${publicSans.className} ${libreBaskerville.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
