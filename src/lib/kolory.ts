// Mapa nazwa koloru (małe litery) → lokalna ścieżka zdjęcia próbki.
// Zdjęcia pobrane z oryginalnej strony klienta (dobreoknaszczecin.pl) do
// public/images/kolory/ — niezależne od tego, czy stara strona kiedyś zniknie.
const BASE = '/images/kolory';

export const koloryImages: Record<string, string> = {
  'palisander': `${BASE}/palisander.jpg`,
  'orzech': `${BASE}/orzech.jpg`,
  'oregon iii': `${BASE}/oregon-iii.jpg`,
  'newcastle oak khaki': `${BASE}/newcastle-oak-khaki.jpg`,
  'mahoń': `${BASE}/mahon.jpg`,
  'kremowy': `${BASE}/kremowy.jpg`,
  'jet black': `${BASE}/jetblack.jpg`,
  'dąb sheffield brązowy': `${BASE}/dab-sheffield-brazowy.jpg`,
  'dąb specjalny': `${BASE}/dab-specjalny.jpg`,
  'dąb sheffield szary': `${BASE}/dab-sheffield-szary.jpg`,
  'dąb sheffield jasny': `${BASE}/dab-sheffield-jasny.jpg`,
  'dąb naturalny': `${BASE}/dab-naturalny.jpg`,
  'daglezja': `${BASE}/daglezja.jpg`,
  'ciemny grafitowy': `${BASE}/ciemny-grafitowy.jpg`,
  'ciemny dąb': `${BASE}/ciemny-dab.jpg`,
  'ciemnobrązowy': `${BASE}/ciemnobrazowy.jpg`,
  'ciemny czerwony': `${BASE}/ciemny-czerwony.jpg`,
  'ciemnoczerwony': `${BASE}/ciemny-czerwony.jpg`,
  'ciemnozielony': `${BASE}/ciemno-zielony.jpg`,
  'ciemno zielony': `${BASE}/ciemno-zielony.jpg`,
  'brzoza': `${BASE}/brzoza.jpg`,
  'brylantowy niebieski': `${BASE}/brylantowy-niebieski.jpg`,
  'biały': `${BASE}/bialy.jpg`,
  'biały (pvc)': `${BASE}/bialy-pvc.jpg`,
  'biały pvc': `${BASE}/bialy-pvc.jpg`,
  'betonowy szary': `${BASE}/betonowy-szary.jpg`,
  'biały papirusowy': `${BASE}/bialy-papirusowy.jpg`,
  'złoty dąb': `${BASE}/zloty-dab.jpg`,
  'zielony': `${BASE}/zielony.jpg`,
  'walnuss terra': `${BASE}/walnuss-terra.jpg`,
  'walnuss amaretto': `${BASE}/walnuss-amaretto.jpg`,
  'szary': `${BASE}/szary.jpg`,
  'szary antracytowy': `${BASE}/szary-antracytowy.jpg`,
  'stalowy niebieski': `${BASE}/stalowy-niebieski.jpg`,
  // Kolory ALUDEC (Comfort Line Neo) — nazwy z kodami producenta, mapowane na najbliższy odpowiednik
  'antracyt (aludec)': `${BASE}/szary-antracytowy.jpg`,
  'traffic white (aludec)': `${BASE}/bialy.jpg`,
  'basalt grey (aludec)': `${BASE}/szary-bazaltowy.jpg`,
  'umbra grey (aludec)': `${BASE}/szary-piaskowy.jpg`,
  'window grey (aludec)': `${BASE}/szary.jpg`,
};

export function getColorImage(nazwa: string): string | undefined {
  return koloryImages[nazwa.trim().toLowerCase()];
}
