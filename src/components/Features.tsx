'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, type ReactNode } from 'react';
import { Ruler, Truck, Wrench, Star, X, Phone, CheckCircle2, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    id: 'pomiar',
    icon: Ruler,
    title: 'Bezpłatny pomiar',
    description: 'Przyjeżdżamy do Ciebie. Profesjonalny pomiar i doradztwo bez zobowiązań.',
    image: '/images/feat_pomiar.jpg',
    content: `Zanim zamówisz okna, musimy dokładnie wiedzieć co zamawiamy. Dlatego oferujemy **bezpłatny pomiar u Ciebie** — bez zobowiązań, bez ukrytych kosztów.

**Co obejmuje wizyta pomiarowa:**
- Precyzyjny pomiar każdego otworu okiennego (do 0,5mm)
- Ocena stanu ościeżnic i podparapetów
- Doradztwo w wyborze systemu (PCV, aluminium, głębokość profilu)
- Omówienie kierunków otwarcia, kolorów, szyb
- Wstępna wycena na miejscu

**Jak umówić pomiar:**
Zadzwoń na 91 454-09-99 lub napisz na [email protected]. Umówimy się w czasie odpowiednim dla Ciebie — również w soboty.

**Kiedy przyjedziemy:**
W dni robocze i soboty, w godzinach 9:00–17:00. Czas wizyty: 30–60 minut zależnie od liczby okien.`,
    bullets: ['Precyzyjny pomiar do 0,5mm', 'Doradztwo w wyborze systemu', 'Wstępna wycena na miejscu', 'Wizyty również w soboty', 'Bez zobowiązań'],
  },
  {
    id: 'veka',
    icon: Star,
    title: 'System VEKA',
    description: 'Pracujemy wyłącznie na sprawdzonych profilach VEKA — europejskiego lidera jakości.',
    image: '/images/feat_veka.jpg',
    content: `**VEKA** to największy producent profili okiennych PCV na świecie — firma z ponad 50-letnią tradycją, z centralą w Niemczech. Wybieramy VEKA bo to po prostu najlepsze profile dostępne na rynku.

**Dlaczego VEKA:**
- Produkcja w Niemczech — rygorystyczna kontrola jakości
- Recyklingowalny PCV — profile można przetworzyć po 40–50 latach
- Gwarancja wymiarowa — profile nie kurczą się ani nie pęcznieją
- Szeroka paleta kolorów — ponad 100 odcieni, oklein drewnopodobnych i metalicznych
- System V-PERFECT — bezspadkowe zgrzewy narożne (żadnych wizualnych spoin)

**Nasze systemy VEKA:**
AdamS PASSIV-LINE ULTRA, Passiv-Line PLUS, VEKA SL 82 (Slim Look), VEKA PF 70, IDEAL 8000, COMFORT LINE NEO, ELEGANT COMFORT-LINE.

Każde okno opuszczające nasz salon ma certyfikat producenta i pełną dokumentację techniczną.`,
    bullets: ['Profil made in Germany', 'Ponad 100 kolorów i oklein', 'System V-PERFECT (brak spoin)', 'Certyfikat producenta', 'Recyklingowalny materiał'],
  },
  {
    id: 'montaz',
    icon: Wrench,
    title: 'Montaż w cenie',
    description: 'Kompleksowa usługa: sprzedaż, transport i profesjonalny montaż w jednej cenie.',
    image: '/images/feat_montaz.jpg',
    content: `U nas nie ma ukrytych kosztów. Cena okna to cena kompleksowej usługi — **od pomiaru do gotowego, sprawdzonego montażu**.

**Co wchodzi w cenę:**
- Produkcja okna według Twoich wymiarów i wyboru
- Transport do Twojego domu
- Demontaż starych okien (jeśli potrzebny)
- Profesjonalny montaż przez certyfikowaną ekipę
- Uszczelnienie pianką poliuretanową i silikonem
- Regulacja okuć i sprawdzenie szczelności
- Posprzątanie po sobie

**Nasz standard montażu:**
Pracujemy zgodnie z normą PN-B-13079. Stosujemy wyłącznie profesjonalne materiały montażowe: pianka Soudal, silikon neutralny, kołki rozporowe ze stali nierdzewnej.

**Gwarancja na montaż:** 2 lata na usługę montażową, niezależnie od gwarancji producenta na okno.`,
    bullets: ['Transport gratis', 'Demontaż starych okien', 'Norma PN-B-13079', 'Materiały Soudal', 'Gwarancja 2 lata na montaż'],
  },
  {
    id: 'realizacja',
    icon: Truck,
    title: 'Szybka realizacja',
    description: 'Standardowe okna gotowe w 3–4 tygodnie. Ekspresowa realizacja na życzenie.',
    image: '/images/feat_realizacja.jpg',
    content: `Rozumiemy, że budowa lub remont nie może czekać w nieskończoność. Dlatego stawiamy na **krótkie terminy realizacji** bez kompromisów w jakości.

**Standardowe terminy:**
- Okna PCV w kolorze białym: **3–4 tygodnie** od zamówienia
- Okna kolorowe i okleinowane: **4–6 tygodni**
- Drzwi tarasowe HST: **4–5 tygodni**
- Realizacja ekspresowa (przy dostępności): **2 tygodnie**

**Jak przebiega realizacja:**
1. Pomiar → wycena → zamówienie (1–3 dni)
2. Produkcja w fabryce AdamS (2–4 tygodnie)
3. Dostawa do salonu i kontrola jakości (1–2 dni)
4. Montaż u Klienta (1 dzień dla standardowego domu)
5. Odbiór i przekazanie dokumentacji gwarancyjnej

**Harmonogram:** Po złożeniu zamówienia otrzymujesz pisemne potwierdzenie z dokładną datą montażu. Informujemy o gotowości okien z 3-dniowym wyprzedzeniem.`,
    bullets: ['Biały PCV: 3–4 tygodnie', 'Realizacja ekspresowa możliwa', 'Pisemne potwierdzenie terminu', 'SMS o gotowości', 'Montaż 1-dniowy'],
  },
];

function renderInline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    return m ? <strong key={i} className="font-semibold text-gray-800">{m[1]}</strong> : <span key={i}>{part}</span>;
  });
}

function renderContent(text: string): ReactNode[] {
  return text.split('\n').map((line, i) => {
    if (!line.trim()) return <div key={i} className="h-2" />;
    if (/^\*\*(.+)\*\*$/.test(line.trim())) {
      const m = line.trim().match(/^\*\*(.+)\*\*$/)!;
      return <p key={i} className="font-bold text-gray-800 mt-3 mb-1">{m[1]}</p>;
    }
    if (/^- /.test(line.trim())) {
      return (
        <div key={i} className="flex gap-2 ml-2">
          <span className="shrink-0 mt-1 text-[#c0392b]">•</span>
          <span>{renderInline(line.trim().slice(2))}</span>
        </div>
      );
    }
    if (/^\d+\. /.test(line.trim())) {
      const m = line.trim().match(/^(\d+)\. (.+)/)!;
      return (
        <div key={i} className="flex gap-2 ml-2">
          <span className="shrink-0 font-bold text-[#c0392b]">{m[1]}.</span>
          <span>{renderInline(m[2])}</span>
        </div>
      );
    }
    return <p key={i}>{renderInline(line)}</p>;
  });
}

function FeatureModal({ feature, onClose }: { feature: typeof features[0]; onClose: () => void }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-52 sm:h-64">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
            sizes="672px"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(26,58,92,0.5) 0%, rgba(26,58,92,0.2) 100%)' }} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 backdrop-blur-sm">
              <Icon size={24} className="text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">{feature.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {feature.bullets.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle2 size={15} className="shrink-0" style={{ color: '#16a34a' }} />
                {b}
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-5 text-sm text-gray-600 leading-relaxed space-y-1">
            {renderContent(feature.content)}
          </div>

          <div className="mt-8 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: '#f0f5fa' }}>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: '#1a3a5c' }}>Chcesz dowiedzieć się więcej?</p>
              <p className="text-xs text-gray-500">Zadzwoń lub umów bezpłatną wizytę pomiarową.</p>
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
      </motion.div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<typeof features[0] | null>(null);

  return (
    <>
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
              Nasze atuty
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
              Dlaczego wybierają nas klienci
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelected(f)}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[#c0392b]"
                    style={{ background: 'rgba(26,58,92,0.08)', color: '#1a3a5c' }}
                  >
                    <Icon size={26} className="transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#1a3a5c' }}>{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{f.description}</p>
                  <div className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all" style={{ color: '#c0392b' }}>
                    Dowiedz się więcej <ChevronRight size={13} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <FeatureModal feature={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
