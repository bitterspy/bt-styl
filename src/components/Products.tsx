'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Phone } from 'lucide-react';

const tabs = [
  { key: 'okna', label: 'Okna PCV' },
  { key: 'drzwi', label: 'Drzwi' },
  { key: 'rolety', label: 'Rolety' },
] as const;

type Tab = (typeof tabs)[number]['key'];

const badgeColors: Record<string, string> = {
  BESTSELLER: '#e8a020',
  POLECANY: '#16a34a',
  NOWOŚĆ: '#2563eb',
  PREMIUM: '#7c3aed',
  'BEZPIECZEŃSTWO': '#dc2626',
  HIT: '#e8a020',
};

export default function Products() {
  const [activeTab, setActiveTab] = useState<Tab>('okna');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const currentProducts = products[activeTab];

  return (
    <section id="oferta" ref={ref} className="py-20" style={{ background: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            Nasza oferta
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Produkty najwyższej jakości
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Szeroki wybór okien, drzwi i rolet od sprawdzonych producentów. Każdy produkt z gwarancją i profesjonalnym montażem.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="flex rounded-full p-1" style={{ background: '#e2e8f0' }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key ? 'text-white shadow-md' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: '#1a3a5c' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {product.badge && (
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold text-white rounded-full"
                      style={{ background: badgeColors[product.badge] ?? '#1a3a5c' }}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs font-medium mb-1" style={{ color: '#e8a020' }}>{product.tagline}</p>
                  <h3 className="font-bold text-base mb-2 leading-tight" style={{ color: '#1a3a5c' }}>{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">{product.description}</p>

                  {/* Features chips */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {product.features.map((feat) => (
                      <span
                        key={feat}
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ background: 'rgba(26,58,92,0.07)', color: '#1a3a5c' }}
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  <a
                    href="tel:+48914540999"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                    style={{ background: '#1a3a5c' }}
                  >
                    <Phone size={14} />
                    Zapytaj o cenę
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
