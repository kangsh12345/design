import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ThemeProvider } from './components/ThemeProvider';
import { getThemeMode } from './utils/cookies';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider defaultMode={getThemeMode() ?? 'dark'}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
