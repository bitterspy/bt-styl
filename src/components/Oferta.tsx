'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } },
});

const badgeColors: Record<string, string> = {
  BESTSELLER: '#c0392b',
  POLECANY: '#16a34a',
  NOWOŚĆ: '#2563eb',
  PREMIUM: '#7c3aed',
  BEZPIECZEŃSTWO: '#c0392b',
  HIT: '#c0392b',
};

type Product = {
  id: number; badge: string | null; name: string; tagline: string;
  description: string; features: string[]; image: string; slug?: string; externalUrl?: string;
};

function ProductCard({ product }: { product: Product }) {
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

function Section({ id, title, subtitle, children, gray }: {
  id: string; title: string; subtitle: string; children: React.ReactNode; gray?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id={id} ref={ref} className={`py-16 ${gray ? 'bg-gray-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={fadeUp(0)}
          className="mb-10"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            Nasza oferta
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>{title}</h2>
          <p className="mt-2 text-gray-500 max-w-2xl text-sm">{subtitle}</p>
        </motion.div>
        <motion.div
          initial="hidden" animate={inView ? 'show' : 'hidden'}
          variants={fadeUp(0.15)}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// ─── DANE ───────────────────────────────────────────────────────────────────

const okna = [
  {
    id: 1, badge: 'BESTSELLER', slug: 'passiv-line-ultra',
    name: 'AdamS PASSIV-LINE ULTRA',
    tagline: 'Dom pasywny – Uw do 0,54 W/(m²K)',
    description: 'System 6-komorowy z dociepleniem, głębokość 85mm. Wklejane szyby Ug=0,3, wypełnienie pianą PU, wzmocnienia Ultradur BASF. Pakiet 3- lub 4-szybowy z kryptonem.',
    features: ['Głębokość 85mm', 'Uw ≤ 0,54 W/(m²K)', '4-szybowy z kryptonem', 'Okucie SIEGENIA TITAN AF', 'Gwarancja'],
    image: '/images/produkty/passiv_line_ultra.jpg',
  },
  {
    id: 2, badge: 'POLECANY', slug: 'passiv-line-plus',
    name: 'AdamS Passiv-Line PLUS',
    tagline: 'Energooszczędność w najlepszej cenie',
    description: 'System na profilu VEKA z pakietem trójszybowym. Doskonały stosunek ceny do parametrów termoizolacyjnych. Idealne dla nowego budownictwa energooszczędnego.',
    features: ['Profil VEKA', 'Pakiet 3-szybowy', 'Energooszczędny', 'Gwarancja'],
    image: '/images/produkty/passiv_line_plus.jpg',
  },
  {
    id: 3, badge: null, slug: 'veka-sl-82',
    name: 'AdamS VEKA SL 82',
    tagline: 'Slim Look – więcej światła, mniej profilu',
    description: 'Smukłe profile 82mm z efektem Slim Look. Minimalistyczna rama optycznie powiększa okno i wpuszcza maksimum naturalnego światła dziennego.',
    features: ['Slim Look 82mm', 'Max. światło dzienne', 'Minimalistyczny design', 'System VEKA', 'Gwarancja'],
    image: '/images/produkty/veka_sl_82.jpg',
  },
  {
    id: 4, badge: null, slug: 'veka-pf-70',
    name: 'AdamS VEKA PF 70',
    tagline: 'Sprawdzony klasyk – niezawodny wybór',
    description: 'Klasyczny system 5-komorowy 70mm. Sprawdzony w tysiącach polskich domów. Szeroka dostępność kolorów i kształtów w przystępnej cenie.',
    features: ['5 komór', '70mm głębokość', '100+ kolorów', 'System VEKA', 'Gwarancja'],
    image: '/images/produkty/veka_pf_70.jpg',
  },
  {
    id: 5, badge: 'NOWOŚĆ', slug: 'ideal-8000',
    name: 'AdamS IDEAL 8000',
    tagline: 'Przełom – 8 komór, Uw ≤ 0,68 W/(m²K)',
    description: 'Innowacyjna konstrukcja 8-komorowa. Najlepsza izolacja akustyczna i termiczna w klasie. Dla wymagających inwestorów i budynków premium.',
    features: ['8 komór', 'Uw ≤ 0,68 W/(m²K)', 'Izolacja akustyczna', 'Premium', 'Gwarancja'],
    image: '/images/produkty/ideal_8000.jpg',
  },
  {
    id: 6, badge: null, slug: 'comfort-line-neo',
    name: 'AdamS COMFORT LINE NEO',
    tagline: 'Zaokrąglone narożniki – ponadczasowy design',
    description: 'System z zaokrąglonymi narożnikami na profilu VEKA. Klasyczny wygląd pasujący do każdej architektury — od bloku po willę.',
    features: ['Zaokrąglone kształty', 'System VEKA', 'Szeroka paleta kolorów', 'Gwarancja'],
    image: '/images/produkty/comfort_line_neo.webp',
  },
  {
    id: 7, badge: 'PREMIUM', slug: 'elegant-comfort-line',
    name: 'AdamS ELEGANT COMFORT-LINE',
    tagline: 'Prosta elegancja – design klasy premium',
    description: 'Najwyższa półka estetyki z profili VEKA. Proste linie, perfekcyjne wykończenie. Dla tych, dla których wygląd jest tak samo ważny jak parametry.',
    features: ['Premium design', 'Proste linie', 'Antykorozyjność', 'System VEKA', 'Gwarancja'],
    image: '/images/produkty/elegant_comfort_line.webp',
  },
];

const drzwiTarasowe = [
  {
    id: 1, badge: 'BESTSELLER', slug: 'hst-corner-view',
    name: 'HST CORNER VIEW',
    tagline: 'Narożne przeszklenie – architektura bez granic',
    description: 'Innowacyjny system przesuwno-uchylny łączący design południowej Europy z energooszczędnością standardów północnych. Umożliwia pełne przeszklenie narożne bez słupka.',
    features: ['Uw = 0,68 W/(m²K)', 'Szczelność klasa 8A', 'Odporność na wiatr C2', 'Okucie SIEGENIA HST Portal do 400kg', 'Gwarancja'],
    image: '/images/oferta/hst_corner_view.jpg',
  },
  {
    id: 2, badge: null, slug: 'hst-passiv',
    name: 'HST PASSIV',
    tagline: 'Dom pasywny – maksymalna energooszczędność',
    description: 'Drzwi unoszono-przesuwne przeznaczone dla domów pasywnych i zeroenergetycznych. Głęboka zabudowa z pakietami Ug=0,5 lub 0,6 W/m²K.',
    features: ['Ug = 0,5 lub 0,6 W/m²K', 'Szczelność klasa 8A (450 Pa)', 'Szer. do 6000mm, wys. do 2500mm', 'Każdy kolor RAL', 'Gwarancja'],
    image: '/images/oferta/hst_passiv_front.jpg',
  },
  {
    id: 3, badge: null, slug: 'hst-basic',
    name: 'HST BASIC',
    tagline: 'Solidna podstawa – sprawdzony system HST',
    description: 'Klasyczne drzwi unoszono-przesuwne HST. Skrzydło unosi się przed przesunięciem — zero oporu, cichy bieg, doskonała szczelność. Wiele konfiguracji otwarcia.',
    features: ['Niski próg', 'Cichy bieg', 'Wiele schematów otwarcia', 'Doskonała szczelność', 'Gwarancja'],
    image: '/images/oferta/HST_Basic.png',
  },
  {
    id: 4, badge: null, slug: 'hst-sl-82',
    name: 'HST SL 82',
    tagline: 'Slim Look + HST – elegancja i funkcjonalność',
    description: 'System HST na profilu SOFTLINE 82mm. Płaski próg, układ uszczelek klasy huraganowej, 3-szybowe oszklenie. Idealne do nowych domów energooszczędnych i renowacji.',
    features: ['Profil SOFTLINE 82mm', 'Niski płaski próg', 'Szczelność huraganowa', '3-szybowe oszklenie', 'Gwarancja'],
    image: '/images/oferta/schemat-a.png',
  },
  {
    id: 5, badge: 'NOWOŚĆ', slug: 'smart-slide',
    name: 'SMART-SLIDE',
    tagline: 'Nowoczesna alternatywa dla PSK i patio',
    description: 'Zaawansowane drzwi przesuwne dla domów i obiektów użyteczności publicznej. Skrzydło do 1,5×2,3m. Intuicyjny mechanizm, oszczędność miejsca — brak potrzeby rozwarcia w głąb pomieszczenia.',
    features: ['Skrzydło do 1,5×2,3m', 'Oszczędność miejsca', 'Intuicyjny mechanizm', 'Domy i obiekty użyteczności publicznej', 'Gwarancja'],
    image: '/images/oferta/smart_slide.png',
  },
];

const drzwiZewnetrzne = [
  {
    id: 1, badge: 'BEZPIECZEŃSTWO', externalUrl: 'https://drzwimartom.pl',
    name: 'Zewnętrzne Drzwi Martom',
    tagline: 'Drzwi hybrydowe – lider rozwiązań łączących materiały',
    description: 'Drzwi stalowe marki Martom — lidera rozwiązań hybrydowych na polskim rynku. Opatentowana technologia łącząca drewno, stal, aluminium oraz zbrojone włóknem tworzywo ABS i piankę PUR. Bogata oferta modeli jedno- i dwuskrzydłowych, konkurencyjna cena.',
    features: ['Technologia hybrydowa', 'Drewno + stal + aluminium + ABS', 'Wypełnienie pianą PUR', 'Klasy odporności RC2 / RC3', 'Gwarancja'],
    image: '/images/realizacje/DSC_1240-300x145.jpg',
  },
];

const rolety = [
  {
    id: 1, badge: 'POLECANE',
    name: 'Rolety Nadstawne CleverBox',
    tagline: 'Montaż na nowym oknie – izolacja i ochrona',
    description: 'System CleverBox montowany na nowych oknach. Wielofunkcyjna ochrona: słońce, wiatr, deszcz, śnieg. Izolacja termiczna USb ≥ 0,61 W/(m²K), akustyczna Rw ≤ 39 dB. 25 kolorów.',
    features: ['USb ≥ 0,61 W/(m²K)', 'Rw ≤ 39 dB', '25 wariantów kolorystycznych', 'Napęd automatyczny opcja', 'Certyfikat IfT Rosenheim', 'Gwarancja'],
    image: '/images/oferta/SPE_MKT-kopia-1.jpg',
  },
  {
    id: 2, badge: null,
    name: 'Rolety Zewnętrzne Adaptacyjne',
    tagline: 'Retrofit – idealne do istniejących budynków',
    description: 'Systemy SK 45, SKP, SKO, SKO-P — skrzynka aluminiowa mocowana na ścianie lub w ościeżnicy. Sprawdzona technika rolet w nowoczesnej, elegancko zaokrąglonej obudowie.',
    features: ['Systemy: SK 45 / SKP / SKO / SKO-P', 'Montaż na gotowym budynku', 'Zaokrąglona skrzynka aluminiowa', 'Prowadnica aluminiowa', 'Gwarancja'],
    image: '/images/oferta/SKO-kopia.jpg',
  },
  {
    id: 3, badge: 'HIT',
    name: 'Rolety Integro (Podtynkowe)',
    tagline: 'Niewidoczna skrzynka – najwyższa estetyka',
    description: 'Rolety podtynkowe SP i SP-E montowane w warstwie ocieplenia budynku. Skrzynka całkowicie ukryta w ścianie — czysta elewacja, maksymalna estetyka.',
    features: ['Skrzynka w ociepleniu', 'SP oraz SP-E (z moskitierą)', 'Czysta elewacja', 'Integracja z budynkiem', 'Gwarancja'],
    image: '/images/oferta/SP-kopia-1.jpg',
  },
];

// ─── GŁÓWNY KOMPONENT ────────────────────────────────────────────────────────

export default function Oferta() {
  return (
    <>
      {/* OKNA PCV */}
      <Section id="okna-pcv" title="Okna PCV" gray
        subtitle="7 systemów okiennych na profilach VEKA i AdamS. Od klasycznych po pasywne — znajdziemy rozwiązanie dla każdego budynku i budżetu."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {okna.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* DRZWI TARASOWE */}
      <Section id="drzwi-tarasowe" title="Drzwi Tarasowe i Balkonowe"
        subtitle="Systemy HST podnoszono-przesuwne i Smart-Slide — połącz salon z tarasem bez kompromisów. Duże przeszklenia, niskie progi, doskonała izolacja."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {drzwiTarasowe.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* DRZWI ZEWNĘTRZNE */}
      <Section id="drzwi" title="Drzwi Zewnętrzne Martom" gray
        subtitle="Drzwi hybrydowe łączące drewno, stal i aluminium. Bezpieczeństwo, izolacja termiczna i elegancja w jednym."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {drzwiZewnetrzne.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>

      {/* ROLETY */}
      <Section id="rolety" title="Rolety"
        subtitle="Rolety nadstawne CleverBox, zewnętrzne adaptacyjne i podtynkowe Integro. Ochrona przed słońcem, hałasem i włamaniem — w każdym wariancie montażu."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rolety.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </Section>
    </>
  );
}
