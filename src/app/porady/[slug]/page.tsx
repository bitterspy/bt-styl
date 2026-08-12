import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, BookOpen, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles, getArtykulBySlug, categoryColors } from '@/lib/poradyDetale';
import { renderContent } from '@/lib/renderArtykul';

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artykul = getArtykulBySlug(slug);
  if (!artykul) return {};
  return {
    title: `${artykul.title} | BT-Styl Szczecin`,
    description: artykul.excerpt,
  };
}

export default async function ArtykulDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artykul = getArtykulBySlug(slug);
  if (!artykul) notFound();

  return (
    <>
      <Navbar solid />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/porady/"
            className="flex w-fit items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
            style={{ color: '#1a3a5c' }}
          >
            <ArrowLeft size={16} />
            Wróć do porad
          </Link>

          <span
            className="inline-block text-xs font-bold px-2.5 py-1 rounded-full text-white mb-3"
            style={{ background: categoryColors[artykul.category] ?? '#1a3a5c' }}
          >
            {artykul.category}
          </span>
          <h1 className="mb-4 text-3xl sm:text-4xl font-bold leading-tight" style={{ color: '#1a3a5c' }}>
            {artykul.title}
          </h1>
          <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
            <BookOpen size={14} />
            {artykul.readTime} czytania
          </div>

          <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden mb-10 bg-gray-100">
            <Image src={artykul.image} alt={artykul.title} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 768px" />
          </div>

          <div className="text-sm text-gray-600 leading-relaxed space-y-1">
            {renderContent(artykul.content)}
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
