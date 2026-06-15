'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { partners } from '@/lib/data';

export default function Partners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="py-16" style={{ background: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-xs font-bold tracking-widest uppercase mb-8 text-gray-400"
        >
          Nasi partnerzy
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-1"
              title={partner.description}
            >
              <div
                className="px-8 py-4 rounded-xl font-black text-2xl tracking-tight transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:shadow-lg group-hover:scale-105"
                style={{
                  background: 'white',
                  color: '#1a3a5c',
                  border: '2px solid #e2e8f0',
                }}
              >
                {partner.name}
              </div>
              <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
