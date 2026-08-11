'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { wpisyDetale } from '@/lib/aktualnosciDetale';

function formatujDate(iso: string) {
  return new Date(iso).toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Aktualnosci() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const najnowsze = wpisyDetale.slice(0, 3);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {najnowsze.map((wpis, i) => (
            <motion.div
              key={wpis.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/aktualnosci/${wpis.slug}/`}
                className="group block bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <div className="relative h-40 overflow-hidden bg-gray-100">
                  <Image
                    src={wpis.obrazek}
                    alt={wpis.tytul}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <Calendar size={13} />
                    {formatujDate(wpis.data)}
                  </div>
                  <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: '#1a3a5c' }}>
                    {wpis.tytul}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{wpis.tresc[0]}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/aktualnosci/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-gray-50"
            style={{ color: '#1a3a5c', border: '1px solid #1a3a5c' }}
          >
            Zobacz wszystkie aktualności
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
