import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Phone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { martomKolekcje } from '@/lib/martomDetale';

export const metadata = {
  title: 'Drzwi Zewnętrzne Martom | BT-Styl Szczecin',
  description: 'Drzwi hybrydowe Martom łączące drewno, stal i aluminium. Zobacz przykładowe wzory z galerii modeli i skonfiguruj swoje drzwi u producenta.',
};

export default function DrzwiZewnetrznePage() {
  return (
    <>
      <Navbar solid />
      <main className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#drzwi"
            className="flex w-fit items-center gap-2 text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
            style={{ color: '#1a3a5c' }}
          >
            <ArrowLeft size={16} />
            Wróć do oferty
          </Link>

          <span className="block text-xs font-bold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            Nasza oferta
          </span>
          <h1 className="mt-1 mb-4 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Drzwi Zewnętrzne Martom
          </h1>
          <p className="text-gray-600 leading-relaxed max-w-2xl mb-4">
            Drzwi stalowe marki Martom — lidera rozwiązań hybrydowych na polskim rynku. Opatentowana technologia
            łącząca drewno, stal, aluminium oraz zbrojone włóknem tworzywo ABS i piankę PUR. Bogata oferta modeli
            jedno- i dwuskrzydłowych, konkurencyjna cena.
          </p>
          <a
            href="https://drzwimartom.pl/galeria-modeli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold mb-12 hover:opacity-70 transition-opacity"
            style={{ color: '#c0392b' }}
          >
            Zobacz pełną galerię modeli na drzwimartom.pl
            <ArrowUpRight size={15} />
          </a>

          {martomKolekcje.map((kolekcja) => (
            <div key={kolekcja.nazwa} className="mb-12">
              <h2 className="text-xl font-bold mb-5" style={{ color: '#1a3a5c' }}>{kolekcja.nazwa}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                {kolekcja.wzory.map((wzor) => (
                  <a
                    key={wzor.nazwa}
                    href={wzor.konfiguratorUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="relative h-56 bg-gray-50">
                      <Image
                        src={wzor.image}
                        alt={wzor.nazwa}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3 flex items-center justify-between">
                      <span className="text-sm font-semibold" style={{ color: '#1a3a5c' }}>{wzor.nazwa}</span>
                      <ArrowUpRight size={14} className="text-gray-400 group-hover:text-[#c0392b] transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-4 p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: '#f0f5fa' }}>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: '#1a3a5c' }}>Nie znalazłeś idealnego wzoru?</p>
              <p className="text-xs text-gray-500">Zadzwoń — pomożemy dobrać model i skonfigurować drzwi Martom.</p>
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
