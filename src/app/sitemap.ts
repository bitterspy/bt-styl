import type { MetadataRoute } from 'next';
import { oknaDetale } from '@/lib/oknaDetale';
import { drzwiTarasoweDetale } from '@/lib/drzwiTarasoweDetale';
import { wpisyDetale } from '@/lib/aktualnosciDetale';
import { articles } from '@/lib/poradyDetale';

// Wymagane przy output: 'export' — bez tego next build pada na /sitemap.xml.
export const dynamic = 'force-static';

const BASE_URL = 'https://dobreoknaszczecin.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/o-nas/',
    '/oferta/',
    '/oferta/drzwi-zewnetrzne/',
    '/aktualnosci/',
    '/realizacje/',
    '/porady/',
    '/kontakt/',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const produktRoutes = [...oknaDetale, ...drzwiTarasoweDetale].map((p) => ({
    url: `${BASE_URL}/oferta/${p.slug}/`,
    lastModified: new Date(),
  }));

  const wpisRoutes = wpisyDetale.map((w) => ({
    url: `${BASE_URL}/aktualnosci/${w.slug}/`,
    lastModified: new Date(w.data),
  }));

  const poradaRoutes = articles.map((a) => ({
    url: `${BASE_URL}/porady/${a.slug}/`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...produktRoutes, ...wpisRoutes, ...poradaRoutes];
}
