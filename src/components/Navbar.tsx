'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, LogIn } from 'lucide-react';
import { LogoSVG } from './Logo';
import Link from 'next/link';

const ofertaLinks = [
  { label: 'Okna PCV', href: '/oferta/#okna-pcv' },
  { label: 'Drzwi Tarasowe / Balkonowe', href: '/oferta/#drzwi-tarasowe' },
  { label: 'Drzwi Zewnętrzne', href: '/oferta/drzwi-zewnetrzne/' },
  { label: 'Rolety', href: '/oferta/#rolety' },
];

const navLinks: { href: string; label: string; hasMega?: boolean }[] = [
  { href: '/o-nas/', label: 'O Nas' },
  { href: '/aktualnosci/', label: 'Aktualności' },
  { href: '/oferta/', label: 'Oferta', hasMega: true },
  { href: '/realizacje/', label: 'Realizacje' },
  { href: '/porady/', label: 'Porady' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export default function Navbar({ solid = false }: { solid?: boolean }) {
  const [scrolledState, setScrolled] = useState(false);
  const scrolled = solid || scrolledState;
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOfertaOpen, setMobileOfertaOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const megaRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 z-[60] h-[3px] transition-all duration-100"
        style={{ width: `${progress}%`, background: '#e8a020' }}
      />

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/97 backdrop-blur-md shadow-lg py-1' : 'bg-transparent py-3'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2">

          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center shrink-0"
          >
            <LogoSVG variant={scrolled ? 'color' : 'light'} width={170} className="lg:w-[200px] lg:h-auto" />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5 lg:gap-1 shrink-0">
            {navLinks.map((link) =>
              link.hasMega ? (
                <li key={link.href} className="relative" ref={megaRef}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    className={`flex items-center gap-1 px-2 lg:px-3 py-2 text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                      scrolled ? 'text-[#c0392b] hover:text-[#e8a020]' : 'text-[#f5c55a] hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Dropdown Oferty */}
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                        className="absolute left-0 top-full mt-1 bg-white shadow-xl border-t-2 rounded-b-xl overflow-hidden min-w-[220px]"
                        style={{ borderColor: '#c0392b' }}
                      >
                        <ul className="py-2">
                          {ofertaLinks.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className="block w-full text-left px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c0392b] hover:bg-red-50 transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-2 lg:px-3 py-2 text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                      scrolled ? 'text-gray-700 hover:text-[#c0392b]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
            <li>
              <Link
                href="/marka/"
                className={`block px-2 lg:px-3 py-2 text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
                  scrolled ? 'text-[#e8a020] hover:text-[#c0392b]' : 'text-[#e8a020] hover:text-white'
                }`}
              >
                Do pobrania
              </Link>
            </li>
          </ul>

          {/* Panel admina */}
          <a
            href="/backend/admin/login.php"
            title="Zaloguj się do panelu Aktualności"
            className={`hidden lg:flex items-center gap-1.5 px-2 py-2 text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-colors ${
              scrolled ? 'text-gray-500 hover:text-[#c0392b]' : 'text-white/70 hover:text-white'
            }`}
          >
            <LogIn size={15} />
            Zaloguj
          </a>

          {/* CTA phone */}
          <a
            href="tel:+48914540999"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white whitespace-nowrap shrink-0 transition-all hover:scale-105 hover:shadow-lg"
            style={{ background: '#c0392b' }}
          >
            <Phone size={15} />
            91 454-09-99
          </a>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-[#1a3a5c]' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <ul className="px-4 py-4 space-y-1">
                {navLinks.map((link) =>
                  link.hasMega ? (
                    <li key={link.href}>
                      <button
                        onClick={() => setMobileOfertaOpen(!mobileOfertaOpen)}
                        className="flex items-center justify-between w-full text-left font-semibold py-2.5 border-b border-gray-100"
                        style={{ color: '#c0392b' }}
                      >
                        Oferta
                        <ChevronDown size={16} className={`transition-transform ${mobileOfertaOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileOfertaOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-3 pb-1"
                          >
                            {ofertaLinks.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="block w-full text-left text-sm text-gray-600 py-2 border-b border-gray-50 hover:text-[#c0392b] transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="block w-full text-left text-gray-800 font-medium py-2.5 border-b border-gray-100 hover:text-[#c0392b] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
                <li>
                  <Link
                    href="/marka/"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full text-left font-medium py-2.5 border-b border-gray-100 transition-colors"
                    style={{ color: '#e8a020' }}
                  >
                    Do pobrania
                  </Link>
                </li>
                <li>
                  <a
                    href="/backend/admin/login.php"
                    className="flex items-center gap-2 text-gray-500 font-medium py-2.5 border-b border-gray-100"
                  >
                    <LogIn size={16} /> Zaloguj się
                  </a>
                </li>
                <li className="pt-2 space-y-2">
                  <a
                    href="tel:+48914540999"
                    className="flex items-center justify-center gap-2 py-3 rounded-full text-white font-bold"
                    style={{ background: '#c0392b' }}
                  >
                    <Phone size={15} /> 91 454-09-99
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
