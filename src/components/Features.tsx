'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Ruler, Truck, Wrench, Star } from 'lucide-react';

const features = [
  {
    icon: <Ruler size={28} />,
    title: 'Bezpłatny pomiar',
    description: 'Przyjeżdżamy do Ciebie. Profesjonalny pomiar i doradztwo bez zobowiązań.',
  },
  {
    icon: <Star size={28} />,
    title: 'System VEKA',
    description: 'Pracujemy wyłącznie na sprawdzonych profilach VEKA — europejskiego lidera jakości.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Montaż w cenie',
    description: 'Kompleksowa usługa: sprzedaż, transport i profesjonalny montaż w jednej cenie.',
  },
  {
    icon: <Truck size={28} />,
    title: 'Szybka realizacja',
    description: 'Standardowe okna gotowe w 3–4 tygodnie. Ekspresowa realizacja na życzenie.',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-[#e8a020]"
                style={{ background: 'rgba(26,58,92,0.08)', color: '#1a3a5c' }}
              >
                <span className="transition-colors group-hover:text-white">{f.icon}</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#1a3a5c' }}>{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
