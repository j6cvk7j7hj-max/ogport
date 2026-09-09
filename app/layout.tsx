import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mia Gorbachev | Jewelry Content & Social Media',
  description: 'Done-for-you jewelry photography, content creation, and social media management for fine jewelry businesses in South Florida.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
