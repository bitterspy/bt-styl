'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProductCard, okna, drzwiTarasowe, drzwiZewnetrzne, rolety } from './Oferta';

const podglad = [okna[0], drzwiTarasowe[0], drzwiZewnetrzne[0], rolety[0]];

export default function OfertaSkrot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="oferta" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            Nasza oferta
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Okna, drzwi i rolety
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl text-sm mx-auto">
            7 systemów okiennych, drzwi tarasowe HST, drzwi zewnętrzne Martom oraz rolety — wszystko z gwarancją i profesjonalnym montażem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {podglad.map((p) => <ProductCard key={p.name} product={p} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/oferta/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-white"
            style={{ color: '#1a3a5c', border: '1px solid #1a3a5c' }}
          >
            Zobacz pełną ofertę
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
