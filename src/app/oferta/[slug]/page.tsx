import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KoloryGrid from '@/components/KoloryGrid';
import { oknaDetale, getOknoBySlug } from '@/lib/oknaDetale';

export function generateStaticParams() {
  return oknaDetale.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const okno = getOknoBySlug(slug);
  if (!okno) return {};
  return {
    title: `${okno.name} | BT-Styl Szczecin`,
    description: okno.tagline,
  };
}

export default async function OknoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const okno = getOknoBySlug(slug);
  if (!okno) notFound();

  return (
    <>
      <Navbar solid />
      <main className="pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#okna-pcv"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
            style={{ color: '#1a3a5c' }}
          >
            <ArrowLeft size={16} />
            Wróć do oferty
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-12">
            <div className="relative h-80 rounded-2xl overflow-hidden bg-gray-50 flex items-center justify-center p-6">
              <Image
                src={okno.image}
                alt={okno.name}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: '#1a3a5c' }}>{okno.name}</h1>
              <p className="text-base font-semibold mb-6" style={{ color: '#c0392b' }}>{okno.tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{okno.intro}</p>
              <a
                href="tel:+48914540999"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: '#1a3a5c' }}
              >
                <Phone size={15} />
                Zapytaj o cenę
              </a>
            </div>
          </div>

          {okno.opis.length > 0 && (
            <div className="mb-12 space-y-4 text-gray-700 leading-relaxed max-w-3xl">
              {okno.opis.map((paragraf, i) => (
                <p key={i}>{paragraf}</p>
              ))}
            </div>
          )}

          {okno.daneTechniczne.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#1a3a5c' }}>Dane techniczne</h2>
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                {okno.daneTechniczne.map((d, i) => (
                  <div
                    key={d.label}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-5 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : ''}`}
                  >
                    <span className="text-gray-500">{d.label}</span>
                    <span className="font-semibold" style={{ color: '#1a3a5c' }}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {okno.kolory.length > 0 && (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-4" style={{ color: '#1a3a5c' }}>Dostępne kolory</h2>
              <KoloryGrid kolory={okno.kolory} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
