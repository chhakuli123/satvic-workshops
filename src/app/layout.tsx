import type { Metadata, Viewport } from 'next';

import '@/styles/globals.css';

import { siteConfig } from '@/config/site';
import { nunito } from '@/lib/fonts';
import Navbar from '@/components/layout/navbar/Navbar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: siteConfig.icons,
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`min-h-screen antialiased ${nunito.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
