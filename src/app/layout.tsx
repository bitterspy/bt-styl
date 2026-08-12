import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'BT-Styl Szczecin | Okna PCV, Drzwi, Rolety – Salon Firmowy AdamS VEKA',
  description:
    'Salon sprzedaży okien PCV i aluminiowych w Szczecinie. Salon firmowy AdamS na systemach VEKA. Okna, drzwi tarasowe, rolety Aluprof. Montaż i pomiar gratis. Zadzwoń: 91 454-09-99',
  keywords: [
    'okna PCV Szczecin',
    'okna aluminiowe Szczecin',
    'drzwi tarasowe Szczecin',
    'rolety Szczecin',
    'AdamS VEKA Szczecin',
    'BT-Styl Szczecin',
    'okna Bagienna Szczecin',
    'wymiana okien Szczecin',
  ],
  metadataBase: new URL('https://dobreoknaszczecin.pl'),
  openGraph: {
    title: 'BT-Styl Szczecin | Okna PCV, Drzwi, Rolety',
    description:
      'Salon Firmowy AdamS w Szczecinie. Okna PCV na systemach VEKA, drzwi tarasowe, rolety Aluprof. Ponad 25 lat doświadczenia.',
    url: 'https://dobreoknaszczecin.pl',
    siteName: 'BT-Styl Szczecin',
    locale: 'pl_PL',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://dobreoknaszczecin.pl',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'BT-Styl – Salon Firmowy AdamS',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ul. Bagienna 6',
    addressLocality: 'Szczecin',
    postalCode: '70-772',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.3892,
    longitude: 14.6378,
  },
  url: 'https://dobreoknaszczecin.pl',
  telephone: '+48914540999',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '13:00',
    },
  ],
  priceRange: '$$',
  description:
    'Salon firmowy sprzedaży okien PCV i aluminiowych w Szczecinie. AdamS na systemach VEKA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
