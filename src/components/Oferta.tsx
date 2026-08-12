'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { okna, drzwiTarasowe, drzwiZewnetrzne, rolety } from '@/lib/ofertaData';
import { ProductCard } from './ProductCard';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: 'easeOut' as const } },
});

function Section({ id, title, subtitle, children, gray }: {
  id: string; title: string; subtitle: string; children: React.ReactNode; gray?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <section id={id} ref={ref} className={`py-16 scroll-mt-24 ${gray ? 'bg-gray-50' : 'bg-white'}`}>
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
