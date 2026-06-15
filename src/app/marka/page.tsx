'use client';

import { useState } from 'react';
import { Download, Copy, Check } from 'lucide-react';

const NAVY = '#1a3a5c';
const GOLD = '#e8a020';
const RED = '#c0392b';

// ── SVG strings do pobrania ──────────────────────────────────────────────────
const SVG_COLOR = `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="600" height="200">
  <polyline points="10,26 10,88 64,88" fill="none" stroke="#e8a020" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="22,12 64,12 64,72" fill="none" stroke="#1a3a5c" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="178" y="54" font-family="Georgia, serif" font-size="36" font-weight="700" fill="#1a3a5c" letter-spacing="-0.5" text-anchor="middle">BT-Styl</text>
  <text x="178" y="82" font-family="Arial, sans-serif" font-size="12.5" font-weight="700" fill="#9a7a5a" letter-spacing="3" text-anchor="middle">SALON FIRMOWY ADAMS</text>
</svg>`;

const SVG_WHITE = `<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="600" height="200">
  <polyline points="10,26 10,88 64,88" fill="none" stroke="#e8a020" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="22,12 64,12 64,72" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="178" y="54" font-family="Georgia, serif" font-size="36" font-weight="700" fill="#ffffff" letter-spacing="-0.5" text-anchor="middle">BT-Styl</text>
  <text x="178" y="82" font-family="Arial, sans-serif" font-size="12.5" font-weight="700" fill="rgba(255,255,255,0.65)" letter-spacing="3" text-anchor="middle">SALON FIRMOWY ADAMS</text>
</svg>`;

const SVG_SYMBOL = `<svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width="140" height="140">
  <polyline points="6,18 6,62 42,62" fill="none" stroke="#e8a020" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <polyline points="14,8 42,8 42,50" fill="none" stroke="#1a3a5c" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

function download(content: string, filename: string) {
  const blob = new Blob([content], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = filename; a.click();
  URL.revokeObjectURL(url);
}

function CopyHex({ hex }: { hex: string }) {
  const [ok, setOk] = useState(false);
  return (
    <button onClick={() => { navigator.clipboard.writeText(hex); setOk(true); setTimeout(() => setOk(false), 1500); }}
      className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-gray-100 hover:bg-gray-200 font-mono transition-colors">
      {ok ? <Check size={11} className="text-green-600" /> : <Copy size={11} />} {hex}
    </button>
  );
}

// ── Logo inline SVG ──────────────────────────────────────────────────────────
function LogoColor({ w = 240 }: { w?: number }) {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width={w} height={w / 3}>
      <polyline points="10,26 10,88 64,88" fill="none" stroke={GOLD} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,12 64,12 64,72" fill="none" stroke={NAVY} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="178" y="54" fontFamily="Georgia, serif" fontSize="36" fontWeight="700" fill={NAVY} letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
      <text x="178" y="82" fontFamily="Arial, sans-serif" fontSize="12.5" fontWeight="700" fill="#9a7a5a" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
    </svg>
  );
}

function LogoWhite({ w = 240 }: { w?: number }) {
  return (
    <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width={w} height={w / 3}>
      <polyline points="10,26 10,88 64,88" fill="none" stroke={GOLD} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="22,12 64,12 64,72" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <text x="178" y="54" fontFamily="Georgia, serif" fontSize="36" fontWeight="700" fill="#fff" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
      <text x="178" y="82" fontFamily="Arial, sans-serif" fontSize="12.5" fontWeight="700" fill="rgba(255,255,255,0.65)" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
    </svg>
  );
}

function Symbol({ size = 56 }: { size?: number }) {
  return (
    <svg viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg" width={size} height={size}>
      <polyline points="6,18 6,62 42,62" fill="none" stroke={GOLD} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
      <polyline points="14,8 42,8 42,50" fill="none" stroke={NAVY} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ── Wizytówka ────────────────────────────────────────────────────────────────
function CardFront() {
  return (
    <div style={{ width: 338, height: 190, background: NAVY, borderRadius: 10, overflow: 'hidden', position: 'relative', flexShrink: 0 }}>
      {/* dekoracja narożnik */}
      <div style={{ position: 'absolute', top: -30, left: -30, width: 120, height: 120, borderRadius: '50%', background: GOLD, opacity: 0.12 }} />
      <div style={{ position: 'absolute', bottom: 0, right: 0, width: 80, height: 80, borderRadius: '50% 0 0 0', background: GOLD, opacity: 0.08 }} />
      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
        <LogoWhite w={190} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['Okna PCV', 'Drzwi', 'Rolety'].map(t => (
              <span key={t} style={{ fontSize: 8.5, fontFamily: 'Arial, sans-serif', color: GOLD, border: `1px solid ${GOLD}`, borderRadius: 999, padding: '2px 8px', letterSpacing: 1 }}>{t}</span>
            ))}
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: '#fff', fontFamily: 'Georgia, serif', fontSize: 13, fontWeight: 700 }}>Bogdan Tymofijewicz</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Arial, sans-serif', fontSize: 9, marginTop: 2, letterSpacing: 1 }}>WŁAŚCICIEL / DORADCA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBack() {
  return (
    <div style={{ width: 338, height: 190, background: '#f8f5f0', borderRadius: 10, overflow: 'hidden', position: 'relative', display: 'flex', flexShrink: 0 }}>
      <div style={{ width: 5, background: GOLD, flexShrink: 0 }} />
      <div style={{ flex: 1, padding: '18px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 }}>
        {[
          { icon: '📍', text: 'ul. Bagienna 6, 70-772 Szczecin' },
          { icon: '📞', text: '91 454-09-99  ·  695 878 585' },
          { icon: '✉', text: 'biuro@dobreoknaszczecin.pl' },
          { icon: '🌐', text: 'dobreoknaszczecin.pl' },
          { icon: '🕐', text: 'Pn–Pt 9–17  ·  Sob 9–13' },
        ].map(({ icon, text }) => (
          <div key={text} style={{ display: 'flex', gap: 8, alignItems: 'center', fontFamily: 'Arial, sans-serif', fontSize: 11, color: NAVY }}>
            <span style={{ fontSize: 13, width: 18, textAlign: 'center' }}>{icon}</span>
            <span>{text}</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', padding: '0 16px 16px 0' }}>
        <Symbol size={40} />
      </div>
    </div>
  );
}

// ── Papier firmowy ────────────────────────────────────────────────────────────
function Letterhead() {
  return (
    <div style={{ width: '100%', maxWidth: 560, background: '#fff', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', fontFamily: 'Arial, sans-serif', aspectRatio: '1/1.414' }}>
      {/* nagłówek */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '24px 32px 16px', borderBottom: `2px solid ${GOLD}` }}>
        <LogoColor w={180} />
        <div style={{ textAlign: 'right', fontSize: 10, lineHeight: 1.8, color: '#666' }}>
          <div style={{ color: NAVY, fontWeight: 700, fontSize: 11 }}>BT-Styl Salon Firmowy AdamS</div>
          <div>ul. Bagienna 6, 70-772 Szczecin</div>
          <div>tel. 91 454-09-99 · 695 878 585</div>
          <div>biuro@dobreoknaszczecin.pl</div>
          <div style={{ color: GOLD }}>dobreoknaszczecin.pl</div>
        </div>
      </div>
      {/* miejsce na treść */}
      <div style={{ padding: '20px 32px 60px', fontSize: 11, color: '#333', lineHeight: 1.9 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20, fontSize: 10, color: '#888' }}>
          <span>Szczecin, dnia ...................</span>
          <span>Nr oferty: ...................</span>
        </div>
        <p style={{ fontWeight: 700, color: NAVY, marginBottom: 6 }}>Szanowni Państwo,</p>
        <p style={{ marginBottom: 10 }}>
          W odpowiedzi na Państwa zapytanie, z przyjemnością przedstawiamy ofertę na dostawę i montaż stolarki okiennej
          oraz drzwiowej w systemie <strong>VEKA</strong> — jednego z najbardziej renomowanych producentów profili PCV w Europie.
        </p>
        <p style={{ marginBottom: 10 }}>
          Jako <strong>Autoryzowany Salon Firmowy AdamS</strong> w Szczecinie, oferujemy pełen zakres usług:
          bezpłatny pomiar, dobór systemu, produkcję, transport oraz profesjonalny montaż zgodny z normą PN-B-13079.
        </p>
        <p style={{ marginBottom: 20 }}>
          Wszystkie okna objęte są gwarancją producenta oraz 2-letnią gwarancją na montaż.
          Zapraszamy do salonu lub kontaktu telefonicznego w celu omówienia szczegółów.
        </p>
        <p>Z poważaniem,</p>
        <p style={{ fontWeight: 700, color: NAVY, marginTop: 4 }}>Bogdan Tymofijewicz</p>
        <p style={{ fontSize: 10, color: '#aaa' }}>Właściciel · BT-Styl Salon Firmowy AdamS</p>
      </div>
      {/* stopka */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '10px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #eee', background: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Symbol size={20} />
          <span style={{ fontSize: 9, color: '#aaa' }}>BT-Styl Salon Firmowy AdamS · NIP: 000-000-00-00 · ul. Bagienna 6, Szczecin</span>
        </div>
        <span style={{ fontSize: 9, color: GOLD }}>dobreoknaszczecin.pl</span>
      </div>
    </div>
  );
}

// ── Główna strona ─────────────────────────────────────────────────────────────
export default function MarkaPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f4f4f2', fontFamily: 'Arial, sans-serif' }}>

      {/* Hero */}
      <div style={{ background: NAVY, padding: '56px 24px 48px', textAlign: 'center' }}>
        <a href="/" style={{ display: 'inline-block', cursor: 'pointer' }}>
          <LogoWhite w={280} />
        </a>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, letterSpacing: 4, marginTop: 20, textTransform: 'uppercase' }}>
          Brand Kit · Materiały reklamowe · Logotypy
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>

        {/* ── 1. LOGOTYPY ── */}
        <h2 style={{ color: NAVY, fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 24 }}>01 · Logotypy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 48 }}>

          <div style={{ background: '#fff', borderRadius: 12, padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
            <LogoColor w={210} />
            <p style={{ fontSize: 10, color: '#aaa', fontWeight: 700, letterSpacing: 3 }}>WERSJA KOLOROWA</p>
            <button onClick={() => download(SVG_COLOR, 'bt-styl-logo-kolor.svg')}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: NAVY, color: '#fff', border: 'none', borderRadius: 999, padding: '8px 18px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
              <Download size={12} /> Pobierz SVG
            </button>
          </div>

          <div style={{ background: NAVY, borderRadius: 12, padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
            <LogoWhite w={210} />
            <p style={{ fontSize: 10, color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: 3 }}>WERSJA BIAŁA</p>
            <button onClick={() => download(SVG_WHITE, 'bt-styl-logo-biale.svg')}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: GOLD, color: NAVY, border: 'none', borderRadius: 999, padding: '8px 18px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
              <Download size={12} /> Pobierz SVG
            </button>
          </div>

          <div style={{ background: '#fff', borderRadius: 12, padding: '32px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 70 }}>
              <Symbol size={70} />
            </div>
            <p style={{ fontSize: 10, color: '#aaa', fontWeight: 700, letterSpacing: 3 }}>SYMBOL / FAVICON</p>
            <button onClick={() => download(SVG_SYMBOL, 'bt-styl-symbol.svg')}
              style={{ display: 'flex', alignItems: 'center', gap: 6, background: NAVY, color: '#fff', border: 'none', borderRadius: 999, padding: '8px 18px', fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
              <Download size={12} /> Pobierz SVG
            </button>
          </div>

        </div>

        {/* ── Paleta ── */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '24px 28px', marginBottom: 56, boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 3, color: '#aaa', marginBottom: 20 }}>PALETA KOLORÓW</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {[
              { label: 'Granatowy — kolor główny', hex: NAVY },
              { label: 'Złoty — akcent', hex: GOLD },
              { label: 'Czerwony — CTA', hex: RED },
              { label: 'Ciepły beż — podpis', hex: '#9a7a5a' },
              { label: 'Biały — tło', hex: '#ffffff', border: true },
            ].map(({ label, hex, border }) => (
              <div key={hex} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: hex, border: border ? '1px solid #ddd' : undefined, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: NAVY, marginBottom: 4 }}>{label}</div>
                  <CopyHex hex={hex} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. WIZYTÓWKI ── */}
        <h2 style={{ color: NAVY, fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>02 · Wizytówki</h2>
        <p style={{ fontSize: 12, color: '#888', marginBottom: 24 }}>Format 90 × 51 mm. Projekt gotowy do druku offsetowego lub cyfrowego.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, marginBottom: 16 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: '#aaa', marginBottom: 10 }}>PRZÓD</p>
            <CardFront />
          </div>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: '#aaa', marginBottom: 10 }}>TYŁ</p>
            <CardBack />
          </div>
        </div>
        <div style={{ background: '#fefce8', border: '1px solid #fde68a', borderRadius: 10, padding: '12px 16px', fontSize: 11, color: '#92400e', marginBottom: 56 }}>
          <strong>Gdzie drukować:</strong> drukarnia.pl, pixers.pl, vistaprint.pl — min. 100 szt. od ok. 60–90 zł. Pobierz SVG powyżej i wyślij do drukarni.
        </div>

        {/* ── 3. PAPIER FIRMOWY ── */}
        <h2 style={{ color: NAVY, fontSize: 13, fontWeight: 700, letterSpacing: 4, textTransform: 'uppercase', marginBottom: 8 }}>03 · Papier firmowy A4</h2>
        <p style={{ fontSize: 12, color: '#888', marginBottom: 24 }}>Format 210 × 297 mm. Szablon do użycia w Microsoft Word lub Google Docs.</p>
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginBottom: 16 }}>
          <Letterhead />
        </div>
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 10, padding: '12px 16px', fontSize: 11, color: '#1e3a8a', marginBottom: 56 }}>
          <strong>Jak użyć:</strong> W Word → Wstaw → Nagłówek → Edytuj nagłówek. W Google Docs → Wstaw → Nagłówek i stopka.
        </div>

        {/* ── Zasady ── */}
        <div style={{ background: NAVY, borderRadius: 12, padding: '28px 32px', color: 'rgba(255,255,255,0.65)', fontSize: 12, lineHeight: 2 }}>
          <p style={{ color: '#fff', fontWeight: 700, fontSize: 14, marginBottom: 12 }}>Zasady użycia logotypu</p>
          <ul style={{ paddingLeft: 18, margin: 0 }}>
            <li>Nie rozciągaj ani nie zmieniaj proporcji znaku.</li>
            <li>Na jasnym tle — wersja kolorowa. Na ciemnym — biała (ze złotym narożnikiem).</li>
            <li>Zachowaj margines wokół logotypu równy wysokości symbolu okna.</li>
            <li>Nie nakładaj dodatkowych efektów (cień, kontur, gradient) na logotyp.</li>
            <li>Minimalna szerokość: 80 px na ekranie · 25 mm w druku.</li>
          </ul>
        </div>

      </div>

      {/* Footer */}
      <div style={{ textAlign: 'center', padding: '32px 24px', fontSize: 11, color: '#bbb', borderTop: '1px solid #e5e5e5' }}>
        © {new Date().getFullYear()} BT-Styl Salon Firmowy AdamS · ul. Bagienna 6, Szczecin ·{' '}
        <a href="/" style={{ color: GOLD, textDecoration: 'none' }}>← wróć na stronę główną</a>
      </div>

    </div>
  );
}
