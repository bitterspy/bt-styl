'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { articles, categoryColors } from '@/lib/poradyDetale';

export default function PoradySkrot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const podglad = articles.slice(0, 3);

  return (
    <section id="porady" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c0392b' }}>
            Baza wiedzy
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Porady i poradniki
          </h2>
          <p className="mt-2 text-gray-500 max-w-2xl text-sm mx-auto">
            Praktyczna wiedza o oknach, montażu i eksploatacji — zebrana przez naszych specjalistów z 25-letnim doświadczeniem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {podglad.map((article, i) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/porady/${article.slug}/`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: categoryColors[article.category] ?? '#1a3a5c' }}
                  >
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-end mb-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <BookOpen size={12} />
                      {article.readTime} czytania
                    </span>
                  </div>
                  <h3 className="font-bold text-base leading-snug mb-2" style={{ color: '#1a3a5c' }}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
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
            href="/porady/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:bg-white"
            style={{ color: '#1a3a5c', border: '1px solid #1a3a5c' }}
          >
            Zobacz wszystkie porady
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
