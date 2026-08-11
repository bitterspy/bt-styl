'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { realizacje } from '@/lib/data';

export default function RealizacjeSkrot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const podglad = realizacje.slice(0, 8);

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            Galeria
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Nasze przykładowe realizacje
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Ponad 500 zrealizowanych montaży w Szczecinie i okolicach. Każdy projekt wykonany z najwyższą starannością.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {podglad.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={i < 4 ? 'eager' : 'lazy'}
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
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
            href="/realizacje/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-gray-50"
            style={{ color: '#1a3a5c', border: '1px solid #1a3a5c' }}
          >
            Zobacz wszystkie realizacje
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
