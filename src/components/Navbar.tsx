'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const ofertaLinks = [
  { label: 'Okna PCV', href: '#okna-pcv' },
  { label: 'Drzwi Tarasowe / Balkonowe', href: '#drzwi-tarasowe' },
  { label: 'Drzwi Zewnętrzne', href: '#drzwi' },
  { label: 'Rolety', href: '#rolety' },
];

const navLinks = [
  { href: '#dlaczego-my', label: 'O Nas' },
  { href: '#opinie', label: 'Aktualności' },
  { href: '#okna-pcv', label: 'Oferta', hasMega: true },
  { href: '#realizacje', label: 'Realizacje' },
  { href: '#porady', label: 'Porady' },
  { href: '#kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
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

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setMegaOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

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
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3"
          >
            <Image
              src="/images/logo-bt-styl.png"
              alt="BT-Styl"
              width={68}
              height={68}
              className={`transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
            <span className={`text-xs font-medium hidden sm:block transition-colors ${scrolled ? 'text-[#7a5a3a]' : 'text-white/80'}`}>
              Salon Firmowy AdamS
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasMega ? (
                <li key={link.href} className="relative" ref={megaRef}>
                  <button
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                    onClick={() => handleNavClick('#okna-pcv')}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                      scrolled ? 'text-[#c0392b] hover:text-[#e8a020]' : 'text-[#f5c55a] hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
                  </button>

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
                              <button
                                onClick={() => handleNavClick(item.href)}
                                className="w-full text-left px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-[#c0392b] hover:bg-red-50 transition-colors"
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-colors ${
                      scrolled ? 'text-gray-700 hover:text-[#c0392b]' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* CTA phone */}
          <a
            href="tel:+48914540999"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg"
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
                              <button
                                key={item.href}
                                onClick={() => handleNavClick(item.href)}
                                className="block w-full text-left text-sm text-gray-600 py-2 border-b border-gray-50 hover:text-[#c0392b] transition-colors"
                              >
                                {item.label}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="block w-full text-left text-gray-800 font-medium py-2.5 border-b border-gray-100 hover:text-[#c0392b] transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  )
                )}
                <li className="pt-2">
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
