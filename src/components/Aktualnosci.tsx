'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar } from 'lucide-react';

type Wpis = {
  id: number;
  tytul: string;
  tresc: string;
  data_publikacji: string;
};

const API_URL = 'https://bt-styl.pl/backend/api.php';
const FALLBACK_URL = '/data/aktualnosci.json';

function formatujDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Aktualnosci() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [wpisy, setWpisy] = useState<Wpis[] | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setWpisy(data))
      .catch(() =>
        fetch(FALLBACK_URL)
          .then((res) => (res.ok ? res.json() : Promise.reject()))
          .then((data) => setWpisy(data))
          .catch(() => setWpisy([]))
      );
  }, []);

  if (wpisy !== null && wpisy.length === 0) return null;

  return (
    <section id="aktualnosci" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            Aktualności
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Co nowego u nas
          </h2>
        </motion.div>

        {wpisy === null ? (
          <p className="text-center text-gray-400 text-sm">Wczytywanie...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wpisy.map((wpis, i) => (
              <motion.article
                key={wpis.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <Calendar size={13} />
                  {formatujDate(wpis.data_publikacji)}
                </div>
                <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: '#1a3a5c' }}>
                  {wpis.tytul}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{wpis.tresc}</p>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
