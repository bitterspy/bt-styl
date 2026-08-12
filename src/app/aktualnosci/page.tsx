import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { wpisyDetale, getPierwszyAkapit } from '@/lib/aktualnosciDetale';

export const metadata = {
  title: 'Aktualności | BT-Styl Szczecin',
  description: 'Wiadomości, poradniki i nowości ze świata okien, drzwi i rolet — czytaj najnowsze artykuły BT-Styl.',
};

function formatujDate(iso: string) {
  return new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function AktualnosciPage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pt-8">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
              Aktualności
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
              Co nowego u nas
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wpisyDetale.map((wpis) => (
              <Link
                key={wpis.slug}
                href={`/aktualnosci/${wpis.slug}/`}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <Image
                    src={wpis.obrazek}
                    alt={wpis.tytul}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <Calendar size={13} />
                    {formatujDate(wpis.data)}
                  </div>
                  <h2 className="font-bold text-base mb-2 leading-tight flex-1" style={{ color: '#1a3a5c' }}>
                    {wpis.tytul}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-4">{getPierwszyAkapit(wpis)}</p>
                  <div className="flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all" style={{ color: '#c0392b' }}>
                    Czytaj więcej <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
