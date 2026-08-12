import type { MetadataRoute } from 'next';

// Wymagane przy output: 'export' — bez tego next build pada na /robots.txt.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/logo-preview/', '/backend/admin/'],
    },
    sitemap: 'https://dobreoknaszczecin.pl/sitemap.xml',
  };
}
