'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Product } from '@/lib/ofertaData';

const badgeColors: Record<string, string> = {
  BESTSELLER: '#c0392b',
  POLECANY: '#16a34a',
  NOWOŚĆ: '#2563eb',
  PREMIUM: '#7c3aed',
  BEZPIECZEŃSTWO: '#c0392b',
  HIT: '#c0392b',
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-100">
      {product.slug ? (
        <Link
          href={`/oferta/${product.slug}/`}
          className="relative h-52 overflow-hidden bg-gray-50 flex items-center justify-center p-4"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.badge && (
            <span
              className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-full z-10"
              style={{ background: badgeColors[product.badge] ?? '#1a3a5c' }}
            >
              {product.badge}
            </span>
          )}
        </Link>
      ) : product.externalUrl ? (
        <a
          href={product.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-52 overflow-hidden bg-gray-50 flex items-center justify-center p-4"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.badge && (
            <span
              className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-full z-10"
              style={{ background: badgeColors[product.badge] ?? '#1a3a5c' }}
            >
              {product.badge}
            </span>
          )}
        </a>
      ) : (
        <div className="relative h-52 overflow-hidden bg-gray-50 flex items-center justify-center p-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {product.badge && (
            <span
              className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-full z-10"
              style={{ background: badgeColors[product.badge] ?? '#1a3a5c' }}
            >
              {product.badge}
            </span>
          )}
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold mb-1" style={{ color: '#c0392b' }}>{product.tagline}</p>
        <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: '#1a3a5c' }}>{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">{product.description}</p>
        <ul className="space-y-1 mb-4">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-700">
              <CheckCircle2 size={13} className="shrink-0" style={{ color: '#c0392b' }} />
              {f}
            </li>
          ))}
        </ul>
        {product.slug && (
          <Link
            href={`/oferta/${product.slug}/`}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold mb-2 transition-all hover:bg-gray-50"
            style={{ color: '#1a3a5c', border: '1px solid #1a3a5c' }}
          >
            Zobacz szczegóły
            <ArrowRight size={14} />
          </Link>
        )}
        {product.externalUrl && (
          <a
            href={product.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold mb-2 transition-all hover:bg-gray-50"
            style={{ color: '#1a3a5c', border: '1px solid #1a3a5c' }}
          >
            Zobacz na stronie producenta
            <ArrowRight size={14} />
          </a>
        )}
        <a
          href="tel:+48914540999"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 mt-auto"
          style={{ background: '#1a3a5c' }}
        >
          <Phone size={14} />
          Zapytaj o cenę
        </a>
      </div>
    </div>
  );
}
