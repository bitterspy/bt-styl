'use client';

import { motion } from 'framer-motion';
import { Phone, ChevronDown, Shield, Award, Clock } from 'lucide-react';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' as const },
  }),
};

export default function Hero() {
  const scrollToOffer = () => {
    document.querySelector('#oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Real photo background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_main.jpg"
          alt="Nowoczesna stodoła z panoramicznym oknem szczytowym – BT-Styl Szczecin"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(10,25,45,0.88) 0%, rgba(10,25,45,0.65) 50%, rgba(10,25,45,0.3) 100%)',
          }}
        />
      </div>

      {/* Gold accent bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: 'linear-gradient(90deg, transparent, #e8a020, transparent)' }} />

      {/* Content – left-aligned for premium feel */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl text-white">

          {/* Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide"
            style={{ background: 'rgba(232,160,32,0.2)', border: '1px solid rgba(232,160,32,0.5)', color: '#f5c55a' }}
          >
            <Award size={13} />
            AUTORYZOWANY DEALER ADAMS · SYSTEM VEKA
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-4"
          >
            Okna, które{' '}
            <span style={{ color: '#e8a020' }}>zmieniają</span>
            <br />
            Twój dom
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-lg sm:text-xl text-blue-100 max-w-xl mb-10 leading-relaxed"
          >
            Markowe okna PCV i aluminiowe na systemach VEKA. Drzwi tarasowe, rolety Aluprof.
            Salon w&nbsp;Szczecinie z&nbsp;25-letnim doświadczeniem.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 items-start mb-14"
          >
            <button
              onClick={scrollToOffer}
              className="group px-8 py-4 rounded-full text-base font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: '#e8a020' }}
            >
              Sprawdź ofertę
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
            <a
              href="tel:+48914540999"
              className="group flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold transition-all hover:scale-105"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <Phone size={17} className="group-hover:animate-pulse" />
              91 454-09-99
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap gap-6 text-sm text-blue-100"
          >
            {[
              { icon: <Shield size={16} />, text: 'Gwarancja 10 lat' },
              { icon: <Clock size={16} />, text: 'Pomiar gratis' },
              { icon: <Award size={16} />, text: '25+ lat na rynku' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5">
                <span style={{ color: '#e8a020' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToOffer}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Przewiń w dół"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
