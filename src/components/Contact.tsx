'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { contact } from '@/lib/data';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="kontakt" ref={ref} className="py-20" style={{ background: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#e8a020' }}>
            Kontakt
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
            Skontaktuj się z nami
          </h2>
          <p className="mt-3 text-gray-600">
            Bezpłatna wycena i doradztwo. Odpowiemy w ciągu 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
              <h3 className="text-xl font-bold mb-6" style={{ color: '#1a3a5c' }}>Dane kontaktowe</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,58,92,0.08)' }}>
                    <MapPin size={18} style={{ color: '#1a3a5c' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Adres salonu</div>
                    <div className="text-gray-600 text-sm">{contact.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,58,92,0.08)' }}>
                    <Phone size={18} style={{ color: '#1a3a5c' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Telefon</div>
                    <a href={`tel:+48${contact.phone.replace(/-/g, '')}`} className="text-gray-600 text-sm hover:text-[#e8a020] transition-colors">
                      {contact.phone}
                    </a>
                    <br />
                    <a href={`tel:+48${contact.mobile.replace(/-/g, '')}`} className="text-gray-600 text-sm hover:text-[#e8a020] transition-colors">
                      {contact.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,58,92,0.08)' }}>
                    <Mail size={18} style={{ color: '#1a3a5c' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Email</div>
                    <a href={`mailto:${contact.email}`} className="text-gray-600 text-sm hover:text-[#e8a020] transition-colors break-all">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(26,58,92,0.08)' }}>
                    <Clock size={18} style={{ color: '#1a3a5c' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-800">Godziny otwarcia</div>
                    <div className="text-gray-600 text-sm">{contact.hours.weekdays}</div>
                    <div className="text-gray-600 text-sm">{contact.hours.saturday}</div>
                    <div className="text-gray-400 text-sm">{contact.hours.sunday}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <CheckCircle size={56} style={{ color: '#16a34a' }} className="mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Dziękujemy za wiadomość!</h3>
                  <p className="text-gray-600 text-sm">Skontaktujemy się z Tobą w ciągu 24 godzin.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-[#1a3a5c] underline hover:text-[#e8a020] transition-colors"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#1a3a5c' }}>Wyślij zapytanie</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Imię i nazwisko *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                          style={{ '--tw-ring-color': '#1a3a5c' } as React.CSSProperties}
                          placeholder="Jan Kowalski"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Telefon</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-all"
                          placeholder="+48 500 000 000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-all"
                        placeholder="jan@kowalski.pl"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1.5">Wiadomość *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 transition-all resize-none"
                        placeholder="Opisz swoje potrzeby – rodzaj okien, liczba sztuk, adres montażu..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01]"
                      style={{ background: '#1a3a5c' }}
                    >
                      <Send size={16} />
                      Wyślij zapytanie
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      Odpowiadamy w ciągu 24h. Nie wysyłamy spamu.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 rounded-2xl overflow-hidden shadow-sm"
        >
          <iframe
            title="Lokalizacja salonu BT-Styl Szczecin"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.123!2d14.603!3d53.387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa093b08f2a1b7%3A0x1234567890abcdef!2sBagienna%206%2C%2070-772%20Szczecin!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
            width="100%"
            height="360"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
