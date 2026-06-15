'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, X, Phone } from 'lucide-react';
import Image from 'next/image';

const articles = [
  {
    id: 1,
    title: 'Kiedy najlepiej wymieniać okna?',
    excerpt: 'Wymiana okien to duża inwestycja. Dowiedz się, w jakiej porze roku montaż jest najkorzystniejszy — i dlaczego jesień to często najlepszy moment.',
    category: 'Montaż',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    content: `Wiele osób odkłada wymianę okien na lato, ale to błąd. Najlepszy czas na wymianę okien to **wczesna wiosna (marzec–kwiecień)** lub **wczesna jesień (sierpień–wrzesień)**, gdy temperatura zewnętrzna wynosi od +5°C do +20°C.

**Dlaczego nie latem?** W upały uszczelki montażowe i pianki szybko tracą elastyczność przed utwardzeniem. Zbyt wysokie temperatury mogą też powodować odkształcenia profili PCV podczas montażu.

**Dlaczego nie zimą?** Przy mrozach poniżej 0°C pianka montażowa nie wiąże prawidłowo, a ościeżnice mogą pękać przy dużych zmianach temperatur. Montaż w mrozie to proszenie się o nieszczelności.

**Najważniejsze zasady przy wyborze terminu:**
- Temperatura zewnętrzna: idealna to +10°C do +20°C
- Brak deszczu minimum 24h po montażu
- Unikaj miesięcy lipiec–sierpień i grudzień–luty
- Pamiętaj: dobra ekipa ma terminy z 4–6 tygodniowym wyprzedzeniem — rezerwuj wcześnie

Salon BT-Styl przyjmuje zamówienia przez cały rok i dopasuje termin montażu do warunków pogodowych.`,
  },
  {
    id: 2,
    title: 'Czy potrzebujesz zezwolenia na wymianę okien?',
    excerpt: 'Przepisy budowlane często mylą inwestorów. Wyjaśniamy kiedy wymagane jest zgłoszenie, a kiedy możesz działać bez formalności.',
    category: 'Formalności',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    content: `Dobra wiadomość: w większości przypadków **nie potrzebujesz pozwolenia na budowę ani zgłoszenia** przy wymianie okien.

**Kiedy wymiana jest bez formalności:**
- Dom jednorodzinny lub mieszkanie w bloku
- Wymiana okna na okno tego samego rozmiaru lub mniejsze
- Nie zmieniasz charakteru elewacji (kolor, układ)
- Budynek nie jest zabytkiem ani nie leży w strefie ochrony konserwatorskiej

**Kiedy może być wymagane zgłoszenie:**
- Powiększasz otwór okienny (prace budowlane w ścianie)
- Budynek figuruje w rejestrze zabytków
- Mieszkasz na obszarze objętym miejscowym planem zagospodarowania z restrykcjami estetycznymi
- Wspólnota mieszkaniowa ma własny regulamin kolorów i wzorów okien

**Praktyczna rada:** Przed zamówieniem okien skonsultuj się z zarządcą budynku (jeśli blok) lub urzędem gminy. W razie wątpliwości nasz doradca pomoże ocenić sytuację podczas bezpłatnego pomiaru.`,
  },
  {
    id: 3,
    title: 'Jak zabezpieczyć okno przed mrozami?',
    excerpt: 'Niska temperatura potrafi ujawnić słabe punkty stolarki. Sprawdź, jak prawidłowo uszczelnić okna przed zimą i uniknąć przeciągów.',
    category: 'Użytkowanie',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80',
    content: `Przeciąg przy oknie zimą to nie zawsze wina złej jakości okna — często wystarczy kilka prostych czynności, żeby pozbyć się problemu.

**Regulacja okuć sezonowa (obowiązkowa!)**
Okna PCV mają okucia z regulacją docisku. Latem ustawia się je na tryb letni (mniejszy docisk), zimą na tryb zimowy (większy docisk). Regulacja kluczem imbusowym zajmuje 5 minut na okno i eliminuje 80% przypadków nieszczelności.

**Jak rozpoznać tryb letni/zimowy:**
- Ekscentryki okucia mają oznaczenie (kropka lub nacięcie)
- Zimowy = ekscentryk obrócony maksymalnie w kierunku ramy
- Nasz serwis bezpłatnie doradzi przy pierwszej wizycie

**Inne przyczyny przeciągów:**
- Zużyta uszczelka (wymień co 10–15 lat)
- Odkształcona rama (rzadkie, przy starych oknach)
- Nieszczelny parapet lub ościeżnica (uszczelnij silikonem)

**Czego NIE robić:** Nie zaklejaj okien taśmą od wewnątrz — to blokuje mikrowentylację i prowadzi do pleśni. Zadbaj o sprawną wentylację nawiewnikową.`,
  },
  {
    id: 4,
    title: 'Okna izolujące akustycznie – co warto wiedzieć?',
    excerpt: 'Hałas z ulicy to problem w wielu domach. Tłumaczymy, jakie parametry decydują o izolacyjności akustycznej okna i na co zwrócić uwagę przy wyborze.',
    category: 'Dobór okien',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    content: `Izolacyjność akustyczna okna mierzona jest współczynnikiem **Rw (dB)**. Im wyższy, tym lepiej.

**Klasy izolacji akustycznej:**
| Klasa | Rw (dB) | Zastosowanie |
|-------|---------|--------------|
| 1 | 25 dB | Spokojne tereny |
| 2 | 30 dB | Przedmieścia, drogi lokalne |
| 3 | 35 dB | Ruchliwe ulice |
| 4 | 40 dB | Trasy szybkiego ruchu, tramwaje |
| 5 | 45 dB | Lotniska, autostrady |

**Co decyduje o izolacyjności:**
- **Grubość szyby** — asymetryczne zestawy szybowe (np. 4+16+6mm) tłumią więcej niż symetryczne
- **Gaz w komorze** — argon tłumi lepiej niż powietrze
- **Liczba uszczelnień** — 3 uszczelki = lepsze tłumienie niż 2
- **Szczelność montażu** — najlepsza szyba nic nie da przy nieszczelnym montażu

**Polecane modele z oferty BT-Styl:** AdamS IDEAL 8000 (8 komór) i AdamS PASSIV-LINE ULTRA z pakietem 4-szybowym osiągają klasę 3–4 bez specjalnych pakietów akustycznych.`,
  },
  {
    id: 5,
    title: 'Okna energooszczędne – czy warto dopłacić?',
    excerpt: 'Wyższy Uw to niższe rachunki za ogrzewanie. Obliczamy, kiedy inwestycja w okno pasywne zwraca się w polskich warunkach klimatycznych.',
    category: 'Energooszczędność',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    content: `Współczynnik przenikania ciepła **Uw [W/(m²K)]** to kluczowy parametr okna. Prawo budowlane w Polsce wymaga od 2021 roku Uw ≤ 0,9 W/(m²K).

**Porównanie systemów z oferty BT-Styl:**
| System | Uw | Klasa |
|--------|-----|-------|
| VEKA PF 70 | ~1,1 | Standard (starsze budownictwo) |
| Passiv-Line PLUS | ~0,9 | Norma 2021 |
| VEKA SL 82 / IDEAL 8000 | ~0,8 | Energooszczędny |
| PASSIV-LINE ULTRA | 0,54–0,68 | Dom pasywny |

**Kalkulacja oszczędności (przykład dla domu 150m²):**
- Okna standard (Uw 1,1) vs. pasywne (Uw 0,54)
- Różnica strat ciepła: ok. 800–1200 kWh/rok
- Przy cenie gazu 0,35 zł/kWh = **280–420 zł oszczędności rocznie**
- Dopłata do pakietu pasywnego: ok. 3000–5000 zł
- **Zwrot inwestycji: 7–12 lat**

Przy 30-letniej żywotności okien, to 60–90% dodatkowych oszczędności przez resztę eksploatacji. Warto.`,
  },
  {
    id: 6,
    title: 'Jak zabezpieczyć okna podczas remontu?',
    excerpt: 'Pył, farba, zaprawa — remont potrafi zniszczyć nowe okna. Poznaj sprawdzone metody ochrony stolarki na czas prac budowlanych.',
    category: 'Użytkowanie',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&q=80',
    content: `Nowe okna i remont w tym samym czasie to ryzyko. Farba, gips, zaprawa i pył ścierny potrafią trwale uszkodzić profile PCV i okucia.

**Zabezpieczenie krok po kroku:**

**1. Folia ochronna na profil** — użyj folii stretch lub dedykowanej taśmy maskującej PE. Producenci okien (w tym AdamS) dostarczają okna już z naklejoną folią — zdejmij ją dopiero po zakończeniu prac malarskich i tynkarskich.

**2. Karton na szyby** — zabezpiecza przed odpryskami zaprawy i narzędzi. Klej od strony szyby: tylko taśma malarska lub specjalna bez agresywnego kleju.

**3. Okucia i klamki** — oklej taśmą maskującą przed malowaniem. Farba na mechanizmie okucia = zacieranie klamki.

**4. Parapet wewnętrzny** — jeśli zakładasz po remoncie, zabezpiecz futrynę silikonem dopiero na końcu.

**Czego absolutnie unikać:**
- Zmywacze do farb na profilach PCV (niszczą powierzchnię)
- Ostre narzędzia do usuwania plam
- Woda pod wysokim ciśnieniem na świeżo zamontowanych oknach (min. 24h przerwa)

Jeśli na profil dostała się farba — usuń ją wilgotną szmatką zanim wyschnie.`,
  },
  {
    id: 7,
    title: 'Para na szybach – wada okna czy problem z wentylacją?',
    excerpt: 'Mgła na szybach niepokoi wielu właścicieli. Wyjaśniamy skąd się bierze, kiedy oznacza usterkę, a kiedy to sygnał problemów z wentylacją w domu.',
    category: 'Użytkowanie',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&q=80',
    content: `Para na szybie to zjawisko, które może mieć trzy zupełnie różne przyczyny:

**1. Para na zewnętrznej szybie (od strony ulicy)**
To paradoksalnie dobry znak! Oznacza, że okno doskonale izoluje — szyba zewnętrzna jest tak chłodna, że wykrapla się na niej wilgoć z powietrza, jak na szklance z zimnym napojem. Zjawisko typowe dla okien o niskim Uw, znika po wschodzie słońca.

**2. Para między szybami (wewnątrz pakietu)**
To wada okna — uszczelka ramki dystansowej straciła szczelność. Wilgoć dostała się między szyby i nie ma jak wyjść. Konieczna jest **wymiana szyby** (nie całego okna). Objęte gwarancją.

**3. Para na wewnętrznej szybie (od strony pokoju)**
Skraplanie od wewnątrz = zbyt wysoka wilgotność powietrza w pomieszczeniu. Przyczyny:
- Brak wentylacji (zatkane kratki, brak nawiewników)
- Suszenie prania w pomieszczeniu
- Zbyt wiele roślin
- Nieszczelna instalacja gazowa lub wodna

**Rozwiązanie:** Wietrz pomieszczenia min. 3×5 minut dziennie, sprawdź kratki wentylacyjne i rozważ nawiewnik okienny (możemy zamontować w istniejących oknach).`,
  },
  {
    id: 8,
    title: 'Okna bezpieczne dla dzieci',
    excerpt: 'Dzieci i otwarte okna to realne zagrożenie. Przedstawiamy rozwiązania ograniczniki otwarcia, klamki z blokadą i systemy zabezpieczeń dla rodzin z małymi dziećmi.',
    category: 'Bezpieczeństwo',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    content: `Wypadki dzieci przez okna zdarzają się tragicznie często. Norma EN 14351-1 nie wymaga domyślnych zabezpieczeń — to Ty musisz zadbać o bezpieczeństwo.

**Rozwiązania dostępne w BT-Styl:**

**Ograniczniki otwarcia skrzydła**
Blokada mechaniczna ogranicza otwarcie okna do ok. 10cm — dość do wietrzenia, za mało żeby dziecko wypadło. Montaż w każdym nowym i istniejącym oknie.

**Klamka z blokadą kluczem (Key Lock)**
Klamka z możliwością zablokowania pozycji zamkniętej. Dziecko nie otworzy okna bez klucza. Dostępna do wszystkich systemów VEKA i AdamS.

**Zabezpieczenie uchyłu**
Tryb uchylny można zablokować, uniemożliwiając przełączenie w tryb otwarty. Szczególnie ważne na wyższych kondygnacjach.

**Kraty i siatki bezpieczeństwa**
Dyskretne siatki montowane w ościeżu — nie psują estetyki, skutecznie chronią. Szczególnie polecane do okien przyziemia.

**Pamiętaj:** Żadne zabezpieczenie nie zastąpi nadzoru dorosłych. Nigdy nie stawiaj mebli przy oknie, na które dzieci mogą się wspinać.`,
  },
  {
    id: 9,
    title: 'Okna na upały – jak utrzymać chłód w domu?',
    excerpt: 'Latem okno może być przyczyną przegrzewania pomieszczeń. Porównujemy szyby z powłoką przeciwsłoneczną, rolety zewnętrzne i screen — co działa najlepiej?',
    category: 'Energooszczędność',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80',
    content: `Dom nagrzewa się latem głównie przez okna — szczególnie te skierowane na południe i zachód. Porównujemy dostępne rozwiązania:

**1. Szyby z powłoką przeciwsłoneczną (solar control)**
Specjalna metaliczna powłoka odbija promieniowanie słoneczne zanim przejdzie przez szybę. Współczynnik przepuszczalności energii słonecznej (g) poniżej 0,35 oznacza redukcję nagrzewania o ponad 60%. Wada: ciemniejsze wnętrze zimą.

**2. Rolety zewnętrzne Aluprof (z oferty BT-Styl)**
Zatrzymują ciepło ZANIM dotrze do szyby. Efektywność 70–85% redukcji nagrzewania. Dodatkowy benefit: izolacja akustyczna i termiczna zimą. Mogą być sterowane automatycznie (Smart Home).

**3. Tkaniny screen**
Przepuszczają światło (widok na zewnątrz zachowany), blokują 70–90% promieniowania UV. Montaż wewnętrzny lub zewnętrzny. Dobry wybór do biur i salonów z dużymi przeszkleniami.

**4. Żaluzje i rolety wewnętrzne**
Najmniej skuteczne — ciepło już przeniknęło przez szybę. Mogą jednak znacząco obniżyć odczuwalną temperaturę.

**Nasza rekomendacja:** Roleta zewnętrzna Aluprof + szyba z powłoką solar control = optymalna ochrona latem i zimą.`,
  },
];

const categoryColors: Record<string, string> = {
  'Montaż': '#1a3a5c',
  'Formalności': '#7c3aed',
  'Użytkowanie': '#16a34a',
  'Dobór okien': '#c0392b',
  'Energooszczędność': '#e8a020',
  'Bezpieczeństwo': '#c0392b',
};

function ArticleModal({ article, onClose }: { article: typeof articles[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Hero image */}
        <div className="relative h-56 sm:h-72">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            sizes="672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/40 transition-colors"
          >
            <X size={20} />
          </button>
          <span
            className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1 rounded-full text-white"
            style={{ background: categoryColors[article.category] ?? '#1a3a5c' }}
          >
            {article.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
            <BookOpen size={13} />
            {article.readTime} czytania
          </div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 leading-tight" style={{ color: '#1a3a5c' }}>
            {article.title}
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed space-y-3 whitespace-pre-line">
            {article.content}
          </div>

          <div className="mt-8 p-4 rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{ background: '#f0f5fa' }}>
            <div className="flex-1">
              <p className="text-sm font-semibold" style={{ color: '#1a3a5c' }}>Masz pytania? Skontaktuj się z nami.</p>
              <p className="text-xs text-gray-500">Nasi doradcy odpowiedzą bezpłatnie.</p>
            </div>
            <a
              href="tel:+48914540999"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-bold shrink-0"
              style={{ background: '#c0392b' }}
            >
              <Phone size={14} /> 91 454-09-99
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Porady() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState<typeof articles[0] | null>(null);

  return (
    <>
      <section id="porady" ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#c0392b' }}>
              Baza wiedzy
            </span>
            <h2 className="mt-1 text-3xl sm:text-4xl font-bold" style={{ color: '#1a3a5c' }}>
              Porady i poradniki
            </h2>
            <p className="mt-2 text-gray-500 max-w-2xl text-sm">
              Praktyczna wiedza o oknach, montażu i eksploatacji — zebrana przez naszych specjalistów z 25-letnim doświadczeniem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col cursor-pointer"
                onClick={() => setSelected(article)}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ background: categoryColors[article.category] ?? '#1a3a5c' }}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-end mb-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <BookOpen size={12} />
                      {article.readTime} czytania
                    </span>
                  </div>
                  <h3 className="font-bold text-base leading-snug mb-2" style={{ color: '#1a3a5c' }}>
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-semibold mt-auto group-hover:gap-2 transition-all" style={{ color: '#c0392b' }}>
                    Czytaj więcej <ChevronRight size={15} />
                  </div>
                </div>
              </article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">Masz pytania? Nasi doradcy chętnie pomogą.</p>
            <a
              href="tel:+48914540999"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: '#c0392b' }}
            >
              Zadzwoń: 91 454-09-99
            </a>
          </motion.div>
        </div>
      </section>

      {/* Article modal */}
      <AnimatePresence>
        {selected && (
          <ArticleModal article={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
