'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';
import { realizacje } from '@/lib/data';

export default function Realizacje() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [lightbox, setLightbox] = useState<null | { src: string; alt: string }>(null);

  return (
    <section id="realizacje" ref={ref} className="py-20 bg-white">
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
            Nasze realizacje
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Ponad 500 zrealizowanych montaży w Szczecinie i okolicach. Każdy projekt wykonany z najwyższą starannością.
          </p>
        </motion.div>

        {/* Masonry gallery */}
        <div className="masonry-grid">
          {realizacje.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="masonry-item"
            >
              <button
                className="group relative w-full overflow-hidden rounded-xl block"
                onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                aria-label={`Powiększ: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={36}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                  />
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              className="relative max-w-3xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={900}
                height={600}
                className="rounded-xl object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-1.5 shadow-xl hover:bg-gray-100 transition-colors"
                aria-label="Zamknij"
              >
                <X size={20} style={{ color: '#1a3a5c' }} />
              </button>
              <p className="text-center text-white/70 text-sm mt-3">{lightbox.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
