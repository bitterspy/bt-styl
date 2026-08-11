'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { stats } from '@/lib/data';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function ONasSkrot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="dlaczego-my"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1f30 0%, #1a3a5c 100%)' }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#e8a020', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: '#e8a020', transform: 'translate(-30%, 30%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            O nas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Zaufanie budowane latami
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="text-5xl sm:text-6xl font-bold mb-2 tabular-nums" style={{ color: '#e8a020' }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/o-nas/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}
          >
            Poznaj nas bliżej
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
