'use client';

import { useState } from 'react';
import { Download, Copy, Check, Palette, FileText, CreditCard } from 'lucide-react';

const NAVY = '#1a3a5c';
const GOLD = '#e8a020';
const RED = '#c0392b';

// ── Logo SVG jako string (do pobrania) ──────────────────────────────────────
const LOGO_SVG_COLOR = `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="600" height="200">
  <polyline points="14,30 14,84 60,84" fill="none" stroke="#e8a020" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="24,16 60,16 60,70" fill="none" stroke="#1a3a5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="178" y="57" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#1a3a5c" letter-spacing="-0.5" text-anchor="middle">BT-Styl</text>
  <text x="178" y="84" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#9a7a5a" letter-spacing="3" text-anchor="middle">SALON FIRMOWY ADAMS</text>
</svg>`;

const LOGO_SVG_WHITE = `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="600" height="200">
  <polyline points="14,30 14,84 60,84" fill="none" stroke="rgba(255,255,255,0.85)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="24,16 60,16 60,70" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="178" y="57" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#ffffff" letter-spacing="-0.5" text-anchor="middle">BT-Styl</text>
  <text x="178" y="84" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="rgba(255,255,255,0.65)" letter-spacing="3" text-anchor="middle">SALON FIRMOWY ADAMS</text>
</svg>`;

const LOGO_SYMBOL = `<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width="140" height="140">
  <polyline points="6,18 6,62 42,62" fill="none" stroke="#e8a020" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="14,8 42,8 42,50" fill="none" stroke="#1a3a5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function downloadSVG(content: string, filename: string) {
  const blob = new Blob([content], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="flex items-center gap-1 text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
    >
      {copied ? <Check size={12} className="text-green-600" /> : <Copy size={12} />}
      {copied ? 'Skopiowano' : text}
    </button>
  );
}

// ── Komponenty logo inline SVG ───────────────────────────────────────────────
function LogoColor({ width = 260 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width={width} height={width * 100 / 300}>
      <polyline points="14,30 14,84 60,84" fill="none" stroke={GOLD} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="24,16 60,16 60,70" fill="none" stroke={NAVY} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="178" y="57" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill={NAVY} letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
      <text x="178" y="84" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#9a7a5a" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
    </svg>
  );
}

function LogoWhite({ width = 260 }: { width?: number }) {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width={width} height={width * 100 / 300}>
      <polyline points="14,30 14,84 60,84" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="24,16 60,16 60,70" fill="none" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="178" y="57" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#ffffff" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
      <text x="178" y="84" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.65)" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
    </svg>
  );
}

function Symbol({ size = 60, navy = NAVY, gold = GOLD }: { size?: number; navy?: string; gold?: string }) {
  return (
    <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <polyline points="6,18 6,62 42,62" fill="none" stroke={gold} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14,8 42,8 42,50" fill="none" stroke={navy} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Wizytówka ────────────────────────────────────────────────────────────────
function BusinessCard({ side }: { side: 'front' | 'back' }) {
  return (
    <div className="w-[340px] h-[192px] rounded-xl shadow-2xl overflow-hidden flex-shrink-0" style={{ fontFamily: 'Arial, sans-serif' }}>
      {side === 'front' ? (
        <div className="w-full h-full relative flex flex-col justify-between p-6" style={{ background: NAVY }}>
          {/* złoty narożnik górny lewy */}
          <div className="absolute top-0 left-0 w-28 h-28 opacity-10 rounded-br-full" style={{ background: GOLD }} />
          <LogoWhite width={180} />
          <div className="text-right">
            <p className="text-white font-bold text-sm">Adam Szczepański</p>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.55)' }}>Właściciel / Doradca</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex" style={{ background: '#f8f5f0' }}>
          {/* złoty pasek lewy */}
          <div className="w-2 flex-shrink-0" style={{ background: GOLD }} />
          <div className="flex flex-col justify-center px-5 py-4 gap-1.5 flex-1">
            <div className="flex items-center gap-2 text-xs" style={{ color: NAVY }}>
              <span className="font-bold">📍</span>
              <span>ul. Bagienna 6, 70-772 Szczecin</span>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: NAVY }}>
              <span className="font-bold">📞</span>
              <span>91 454-09-99 · 695 878 585</span>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: NAVY }}>
              <span className="font-bold">✉</span>
              <span>biuro@dobreoknaszczecin.pl</span>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: NAVY }}>
              <span className="font-bold">🌐</span>
              <span>dobreoknaszczecin.pl</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-1" style={{ color: '#888' }}>
              <span className="font-bold">🕐</span>
              <span>Pn–Pt 9:00–17:00 · Sob 9:00–13:00</span>
            </div>
          </div>
          <div className="flex items-end pb-4 pr-4">
            <Symbol size={42} />
          </div>
        </div>
      )}
    </div>
  );
}

// ── Papier firmowy ───────────────────────────────────────────────────────────
function Letterhead() {
  return (
    <div className="w-full max-w-[520px] bg-white shadow-xl rounded-xl overflow-hidden" style={{ fontFamily: 'Arial, sans-serif', aspectRatio: '1/1.414' }}>
      {/* nagłówek */}
      <div className="flex items-end justify-between px-8 pt-6 pb-4 border-b-2" style={{ borderColor: GOLD }}>
        <LogoColor width={180} />
        <div className="text-right text-xs leading-5" style={{ color: '#666' }}>
          <p style={{ color: NAVY, fontWeight: 700 }}>BT-Styl Salon Firmowy AdamS</p>
          <p>ul. Bagienna 6, 70-772 Szczecin</p>
          <p>tel. 91 454-09-99</p>
          <p>biuro@dobreoknaszczecin.pl</p>
        </div>
      </div>
      {/* treść */}
      <div className="px-8 py-6">
        <div className="text-xs text-gray-300 leading-6 space-y-2">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="h-2 bg-gray-100 rounded" style={{ width: i % 3 === 2 ? '60%' : '100%' }} />
          ))}
        </div>
      </div>
      {/* stopka */}
      <div className="absolute bottom-0 left-0 right-0 px-8 py-3 flex items-center justify-between border-t" style={{ borderColor: '#eee' }}>
        <div className="flex items-center gap-2">
          <Symbol size={22} />
          <span className="text-xs" style={{ color: '#aaa' }}>BT-Styl · Salon Firmowy AdamS · Szczecin</span>
        </div>
        <span className="text-xs" style={{ color: GOLD }}>dobreoknaszczecin.pl</span>
      </div>
    </div>
  );
}

// ── Sekcja ───────────────────────────────────────────────────────────────────
function Section({ id, icon: Icon, title, children }: { id: string; icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${NAVY}10` }}>
          <Icon size={18} style={{ color: NAVY }} />
        </div>
        <h2 className="text-xl font-bold" style={{ color: NAVY }}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

// ── Główna strona ────────────────────────────────────────────────────────────
export default function MarkaPage() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Arial, sans-serif' }}>

      {/* Hero */}
      <div className="py-16 px-6 text-center" style={{ background: NAVY }}>
        <div className="flex justify-center mb-6">
          <LogoWhite width={280} />
        </div>
        <p className="text-sm mt-4" style={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 3 }}>
          BRAND KIT · MATERIAŁY DO DRUKU · LOGOTYPY
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* 1. Logotypy */}
        <Section id="logo" icon={Palette} title="Logotypy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Kolor */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center gap-4 border border-gray-100">
              <LogoColor width={200} />
              <p className="text-xs text-gray-400 font-semibold tracking-widest">WERSJA KOLOROWA</p>
              <button
                onClick={() => downloadSVG(LOGO_SVG_COLOR, 'bt-styl-logo-kolor.svg')}
                className="flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white font-bold"
                style={{ background: NAVY }}
              >
                <Download size={12} /> Pobierz SVG
              </button>
            </div>

            {/* Biała */}
            <div className="rounded-2xl p-8 shadow-sm flex flex-col items-center gap-4" style={{ background: NAVY }}>
              <LogoWhite width={200} />
              <p className="text-xs font-semibold tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>WERSJA BIAŁA</p>
              <button
                onClick={() => downloadSVG(LOGO_SVG_WHITE, 'bt-styl-logo-biale.svg')}
                className="flex items-center gap-2 text-xs px-4 py-2 rounded-full font-bold"
                style={{ background: GOLD, color: NAVY }}
              >
                <Download size={12} /> Pobierz SVG
              </button>
            </div>

            {/* Symbol */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex flex-col items-center gap-4 border border-gray-100">
              <div className="flex items-center justify-center h-[87px]">
                <Symbol size={80} />
              </div>
              <p className="text-xs text-gray-400 font-semibold tracking-widest">SYMBOL / FAVICON</p>
              <button
                onClick={() => downloadSVG(LOGO_SYMBOL, 'bt-styl-symbol.svg')}
                className="flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white font-bold"
                style={{ background: NAVY }}
              >
                <Download size={12} /> Pobierz SVG
              </button>
            </div>

          </div>

          {/* Paleta kolorów */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-xs font-bold text-gray-500 tracking-widest mb-4">PALETA KOLORÓW</p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Navy', hex: NAVY, label: 'Granatowy — kolor główny' },
                { name: 'Gold', hex: GOLD, label: 'Złoty — akcent' },
                { name: 'Red', hex: RED, label: 'Czerwony — CTA' },
                { name: 'Warm', hex: '#9a7a5a', label: 'Ciepły beż — podpis' },
                { name: 'White', hex: '#ffffff', label: 'Biały — tło', border: true },
              ].map(({ name, hex, label, border }) => (
                <div key={name} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg shadow-sm" style={{ background: hex, border: border ? '1px solid #eee' : undefined }} />
                  <div>
                    <p className="text-xs font-bold" style={{ color: NAVY }}>{label}</p>
                    <CopyBtn text={hex} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* 2. Wizytówki */}
        <Section id="wizytowki" icon={CreditCard} title="Wizytówki">
          <p className="text-sm text-gray-500 mb-6">Wymiary: 90 × 51 mm. Projekt gotowy do druku (wydruk offsetowy / cyfrowy).</p>
          <div className="flex flex-wrap gap-8 items-start">
            <div>
              <p className="text-xs font-bold text-gray-400 tracking-widest mb-3">PRZÓD</p>
              <BusinessCard side="front" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 tracking-widest mb-3">TYŁ</p>
              <BusinessCard side="back" />
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100 text-xs text-amber-800">
            <strong>Druk:</strong> Aby zamówić druk, wyślij projekt na e-mail drukarni lub skorzystaj z usług np. Drukarnia.pl / Pixers. Minimalne zamówienie zwykle 100 szt. od ~80 zł.
          </div>
        </Section>

        {/* 3. Papier firmowy */}
        <Section id="papier" icon={FileText} title="Papier firmowy A4">
          <p className="text-sm text-gray-500 mb-6">Format A4 (210 × 297 mm). Użyj jako szablonu w Word / Google Docs.</p>
          <div className="flex justify-center relative">
            <Letterhead />
          </div>
          <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-800">
            <strong>Wskazówka:</strong> Nagłówek i stopkę z tym projektem możesz ustawić jako szablon w Microsoft Word (Wstaw → Nagłówek → Edytuj nagłówek) lub Google Docs (Plik → Ustawienia strony).
          </div>
        </Section>

        {/* Zasady użycia */}
        <div className="rounded-2xl p-8 text-sm leading-7" style={{ background: NAVY, color: 'rgba(255,255,255,0.7)' }}>
          <p className="font-bold text-white mb-3">Zasady użycia logotypu</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Nie rozciągaj ani nie deformuj proporcji znaku.</li>
            <li>Na jasnym tle — używaj wersji kolorowej. Na ciemnym — białej.</li>
            <li>Zachowaj margines wokół logotypu równy co najmniej wysokości symbolu okna.</li>
            <li>Nie nakładaj dodatkowych efektów (cień, kontur, gradient) na logotyp.</li>
            <li>Minimalna szerokość logotypu: 80px na ekranie, 25 mm w druku.</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center py-8 text-xs text-gray-400 border-t border-gray-200">
        © {new Date().getFullYear()} BT-Styl Salon Firmowy AdamS · ul. Bagienna 6, Szczecin ·{' '}
        <a href="/" className="hover:underline" style={{ color: GOLD }}>wróć na stronę główną</a>
      </div>
    </div>
  );
}
