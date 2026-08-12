import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { wpisyDetale, getWpisBySlug } from '@/lib/aktualnosciDetale';

export function generateStaticParams() {
  return wpisyDetale.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wpis = getWpisBySlug(slug);
  if (!wpis) return {};
  return {
    title: `${wpis.tytul} | BT-Styl Szczecin`,
    description: wpis.tresc[0]?.slice(0, 160),
  };
}

function formatujDate(iso: string) {
  return new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function WpisDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wpis = getWpisBySlug(slug);
  if (!wpis) notFound();

  return (
    <>
      <Navbar solid />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/aktualnosci/"
            className="flex w-fit items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
            style={{ color: '#1a3a5c' }}
          >
            <ArrowLeft size={16} />
            Wróć do aktualności
          </Link>

          <span className="block text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            {wpis.kategoria}
          </span>
          <h1 className="mt-2 mb-4 text-3xl sm:text-4xl font-bold leading-tight" style={{ color: '#1a3a5c' }}>
            {wpis.tytul}
          </h1>
          <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
            <Calendar size={14} />
            {formatujDate(wpis.data)}
          </div>

          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-10 bg-gray-100">
            <Image src={wpis.obrazek} alt={wpis.tytul} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <div className="space-y-4 text-gray-700 leading-relaxed">
            {wpis.tresc.map((paragraf, i) => {
              const jestSrodtytulem = paragraf.length < 60 && !/[.!?"]$/.test(paragraf.trim());
              if (jestSrodtytulem) {
                return (
                  <h2 key={i} className="text-lg sm:text-xl font-bold pt-4" style={{ color: '#1a3a5c' }}>
                    {paragraf}
                  </h2>
                );
              }
              return <p key={i}>{paragraf}</p>;
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: '#f0f5fa' }}>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: '#1a3a5c' }}>Masz pytania?</p>
              <p className="text-xs text-gray-500">Nasi doradcy chętnie pomogą dobrać najlepsze rozwiązanie.</p>
            </div>
            <a
              href="tel:+48914540999"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold shrink-0"
              style={{ background: '#c0392b' }}
            >
              <Phone size={14} /> 91 454-09-99
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
