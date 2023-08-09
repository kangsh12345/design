// import type { Metadata } from 'next';

import { ThemeProvider } from '@/components/atoms/ThemeProvider';
import { getThemeMode } from '@/utils/cookies';

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <main>
          <ThemeProvider defaultMode={getThemeMode() ?? 'light'}>
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
