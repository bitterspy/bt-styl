'use client';

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Wariant 1 — dopracowanie</h1>
      <p className="text-center text-gray-500 mb-10 text-sm">BT-Styl na górze, SALON FIRMOWY ADAMS na dole przy dolnej krawędzi znaku</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">

        {/* DOCELOWY */}
        <LogoCard title="Docelowy">
          <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
            {/* znak D2 — dolna krawędź na y=84, górna na y=16 */}
            <polyline points="14,30 14,84 60,84" fill="none" stroke="#e8a020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="24,16 60,16 60,70" fill="none" stroke="#1a3a5c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* BT-Styl — wyśrodkowany pionowo między y=16 a y=84, środek=50, font~28px więc baseline ~50+10=60 → y=60 */}
            <text x="178" y="57" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
            {/* SALON — na poziomie dolnej krawędzi znaku (y=84) */}
            <text x="178" y="84" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#9a7a5a" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
          </svg>
        </LogoCard>

        {/* 2 — Separator między ADAMS i BT-Styl */}
        <LogoCard title="2 — Ze złotą kreską separator">
          <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
            <polyline points="14,28 14,80 56,80" fill="none" stroke="#e8a020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,20 56,20 56,68" fill="none" stroke="#1a3a5c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="178" y="42" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#9a7a5a" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            {/* złota kreska separator */}
            <line x1="110" y1="50" x2="246" y2="50" stroke="#e8a020" strokeWidth="1" opacity="0.6"/>
            <text x="178" y="70" fontFamily="Georgia, serif" fontSize="26" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
          </svg>
        </LogoCard>

        {/* 3 — ADAMS mniejszy tracking, BT-Styl większy font */}
        <LogoCard title="3 — BT-Styl mocniejszy, ADAMS spokojniejszy">
          <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
            <polyline points="14,28 14,80 56,80" fill="none" stroke="#e8a020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,20 56,20 56,68" fill="none" stroke="#1a3a5c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="178" y="43" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="400" fill="#7a6a5a" letterSpacing="4" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            <text x="178" y="72" fontFamily="Georgia, serif" fontSize="32" fontWeight="700" fill="#1a3a5c" letterSpacing="-1" textAnchor="middle">BT-Styl</text>
          </svg>
        </LogoCard>

        {/* 4 — H: monogram w znaku jako watermark */}
        <LogoCard title="4 — Z monogramem BT w znaku (duch H)">
          <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
            <polyline points="14,28 14,80 56,80" fill="none" stroke="#e8a020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,20 56,20 56,68" fill="none" stroke="#1a3a5c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* monogram BT jako cień wewnątrz */}
            <text x="35" y="72" fontFamily="Georgia, serif" fontSize="38" fontWeight="900" fill="#1a3a5c" opacity="0.07" textAnchor="middle">BT</text>
            <text x="178" y="43" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#9a7a5a" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            <line x1="110" y1="51" x2="246" y2="51" stroke="#e8a020" strokeWidth="0.8" opacity="0.5"/>
            <text x="178" y="70" fontFamily="Georgia, serif" fontSize="27" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
          </svg>
        </LogoCard>

        {/* 5 — ADAMS czerwony akcent */}
        <LogoCard title="5 — ADAMS z czerwonym akcentem">
          <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
            <polyline points="14,28 14,80 56,80" fill="none" stroke="#e8a020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,20 56,20 56,68" fill="none" stroke="#1a3a5c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="178" y="43" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="700" fill="#c0392b" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            <text x="178" y="70" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
          </svg>
        </LogoCard>

        {/* 6 — Znak większy, tekst z prawej po środku pionowo */}
        <LogoCard title="6 — Większy znak, tekst wyśrodkowany pionowo">
          <svg viewBox="0 0 300 110" xmlns="http://www.w3.org/2000/svg" width="300" height="110">
            {/* znak proporcjonalnie większy */}
            <polyline points="12,24 12,90 66,90" fill="none" stroke="#e8a020" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="22,14 66,14 66,76" fill="none" stroke="#1a3a5c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
            {/* tekst wyśrodkowany pionowo */}
            <text x="185" y="47" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#9a7a5a" letterSpacing="2.5" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            <text x="185" y="74" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
          </svg>
        </LogoCard>

        {/* 7 — Znak po prawej, tekst po lewej (odwrócony układ) */}
        <LogoCard title="7 — Układ odwrócony: tekst po lewej">
          <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" width="300" height="100">
            <text x="118" y="43" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#9a7a5a" letterSpacing="3" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            <line x1="20" y1="51" x2="216" y2="51" stroke="#e8a020" strokeWidth="0.8" opacity="0.5"/>
            <text x="118" y="70" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
            {/* znak po prawej */}
            <polyline points="234,28 234,80 276,80" fill="none" stroke="#e8a020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="242,20 276,20 276,68" fill="none" stroke="#1a3a5c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </LogoCard>

        {/* 8 — Wersja pionowa: znak nad tekstem */}
        <LogoCard title="8 — Wersja pionowa: znak nad tekstem">
          <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" width="200" height="160">
            {/* znak wyśrodkowany */}
            <polyline points="72,14 72,58 118,58" fill="none" stroke="#e8a020" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="82,14 118,14 118,50" fill="none" stroke="#1a3a5c" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* tekst pod znakiem */}
            <text x="100" y="85" fontFamily="Arial, sans-serif" fontSize="9.5" fontWeight="700" fill="#9a7a5a" letterSpacing="2.5" textAnchor="middle">SALON FIRMOWY ADAMS</text>
            <line x1="28" y1="93" x2="172" y2="93" stroke="#e8a020" strokeWidth="0.8" opacity="0.5"/>
            <text x="100" y="118" fontFamily="Georgia, serif" fontSize="30" fontWeight="700" fill="#1a3a5c" letterSpacing="-0.5" textAnchor="middle">BT-Styl</text>
          </svg>
        </LogoCard>

      </div>

      <p className="text-center text-gray-400 mt-12 text-sm">
        Który numer? Mogę zmienić font, grubość kresek, kolor, spacing.
      </p>
    </div>
  );
}

function LogoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md">
      <div className="flex items-center justify-center px-8 py-10 bg-white">
        {children}
      </div>
      <div className="bg-white border-t border-gray-100 px-4 py-3">
        <p className="text-sm font-semibold text-gray-700">{title}</p>
      </div>
      <div className="flex items-center justify-center px-8 py-8 bg-[#1a3a5c]">
        {children}
      </div>
      <div className="bg-[#1a3a5c] border-t border-[#2a4a6c] px-4 py-2">
        <p className="text-xs text-blue-300 opacity-50">na granatowym</p>
      </div>
    </div>
  );
}
