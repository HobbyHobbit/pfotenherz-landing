import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PfotenHerz - Liebevolle Haustierbetreuung in Wiesbaden',
  description:
    'Professionelle und liebevolle Betreuung für Hunde und Katzen in Wiesbaden. Gassi-Service, Betreuung zuhause und mehr.',
  keywords: [
    'Haustierbetreuung',
    'Hundebetreuung',
    'Katzenbetreuung',
    'Gassi-Service',
    'Wiesbaden',
    'Pet Sitting',
    'Dog Walking',
  ],
  authors: [{ name: 'A. Mojzesz' }],
  openGraph: {
    title: 'PfotenHerz - Liebevolle Haustierbetreuung',
    description: 'Dein Partner für glückliche Haustiere in Wiesbaden',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased bg-secondary-light text-text-dark">
        {children}
      </body>
    </html>
  );
}