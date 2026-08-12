'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, ChevronRight } from 'lucide-react';
import { articles, categoryColors } from '@/lib/poradyDetale';

export { articles, categoryColors };

export default function Porady() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="porady" ref={ref} className="pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            Baza wiedzy
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Porady i poradniki
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl text-sm">
            Praktyczna wiedza o oknach, montażu i eksploatacji — zebrana przez naszych specjalistów z 25-letnim doświadczeniem.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/porady/${article.slug}/`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ background: categoryColors[article.category] ?? '#1a3a5c' }}
                >
                  {article.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-end mb-2">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <BookOpen size={12} />
                    {article.readTime} czytania
                  </span>
                </div>
                <h3 className="font-bold text-base leading-snug mb-2" style={{ color: '#1a3a5c' }}>
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-1 text-sm font-semibold mt-auto group-hover:gap-2 transition-all" style={{ color: '#c0392b' }}>
                  Czytaj więcej <ChevronRight size={15} />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Masz pytania? Nasi doradcy chętnie pomogą.</p>
          <a
            href="tel:+48914540999"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: '#c0392b' }}
          >
            Zadzwoń: 91 454-09-99
          </a>
        </motion.div>
      </div>
    </section>
  );
}
