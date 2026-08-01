'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
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

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="dlaczego-my"
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f1f30 0%, #1a3a5c 100%)' }}
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: '#e8a020', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5" style={{ background: '#e8a020', transform: 'translate(-30%, 30%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            O nas
          </span>
          <h2 className="mt-2 mb-6 text-3xl sm:text-4xl font-bold text-white">
            Szanowni Państwo
          </h2>
          <div className="text-blue-100 text-sm sm:text-base leading-relaxed space-y-4 text-left">
            <p>
              Jest nam niezmiernie miło powitać Państwa w naszym serwisie internetowym, który poświęcony jest
              stolarce okiennej i drzwiowej. Działania, jakie prowadzimy, skupiają się na dostarczaniu Państwu
              najlepszych produktów od renomowanych polskich producentów. Lata doświadczeń to okres, kiedy
              mogliśmy poznać specyfikę produktową oraz rzetelność poszczególnych firm, dlatego wybraliśmy
              najlepszych dostawców, oferujących najwyższej klasy okna i drzwi.
            </p>
            <p>
              Nasza oferta to markowe okna, drzwi oraz rolety w Szczecinie. Dzięki zróżnicowanemu asortymentowi
              jesteśmy w stanie obsłużyć Państwa inwestycje kompleksowo, dostarczając produkty nietuzinkowe, o
              wyrafinowanym wzornictwie. Pracę wykonujemy z pasją oraz w miłej atmosferze, w pełni angażując
              nabyte doświadczenie, zapewniamy Państwu najlepsze rozwiązania.
            </p>
            <p>
              Zapraszamy do naszego biura, celem zapoznania się z naszą ofertą. Poprzez prezentację produktów
              poznamy Państwa oczekiwania, dzięki czemu indywidualnie dopasujemy ofertę. Nasz salon znajduje
              się przy ulicy Bagiennej 6 w Szczecinie. Zapewniamy profesjonalny montaż oraz specjalistyczny
              transport.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            Nasze osiągnięcia
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
              <div
                className="text-5xl sm:text-6xl font-bold mb-2 tabular-nums"
                style={{ color: '#e8a020' }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom USP strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'Salon firmowy', desc: 'Certyfikowany partner AdamS i VEKA w Szczecinie' },
            { title: 'Kompleksowa obsługa', desc: 'Od projektu, przez pomiar, po montaż i serwis' },
            { title: 'Najlepsza jakość', desc: 'Tylko sprawdzone systemy od czołowych europejskich producentów' },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: '#e8a020' }} />
              <h3 className="text-white font-bold mb-1">{item.title}</h3>
              <p className="text-blue-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
