// Artykuły poradnikowe. slugi i tematy 10 nowych wpisów (id 10-19) dobrane
// pod frazy realnie wyszukiwane w Google w tej branży — potwierdzone przez
// to, że konkurencyjne firmy (w tym AdamS, dostawca profili BT-Styl) już
// publikują artykuły pod te same tematy. Bez dostępu do danych wolumenu
// wyszukiwań (Keyword Planner/Ahrefs) — oparte na obserwacji rynku, nie
// na twardych liczbach.
export type Artykul = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  content: string;
};

export const articles: Artykul[] = [
  {
    id: 1,
    slug: 'kiedy-wymieniac-okna',
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
    slug: 'zezwolenie-na-wymiane-okien',
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
    slug: 'okno-przed-mrozami',
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
    slug: 'okna-izolacja-akustyczna',
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
    slug: 'okna-energooszczedne-czy-warto',
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
    slug: 'zabezpieczenie-okien-podczas-remontu',
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
    slug: 'para-na-szybach',
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
    slug: 'okna-bezpieczne-dla-dzieci',
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
    slug: 'okna-na-upaly',
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
  {
    id: 10,
    slug: 'jakie-okna-do-salonu',
    title: 'Jakie okna do salonu wybrać?',
    excerpt: 'Salon to pomieszczenie z największymi przeszkleniami w domu. Podpowiadamy, na co zwrócić uwagę przy wyborze okien do pokoju dziennego.',
    category: 'Dobór okien',
    readTime: '4 min',
    image: '/images/produkty/passiv_line_ultra.jpg',
    content: `Salon zwykle ma największe okna w całym domu — to tu najbardziej odczuwalna jest zarówno strata ciepła, jak i komfort świetlny. Wybór trzeba podjąć inaczej niż przy sypialni czy kuchni.

**Maksimum światła dziennego**
Jeśli salon jest głównym miejscem dziennego przebywania rodziny, warto postawić na system o smukłych profilach i dużej powierzchni przeszklenia — np. **AdamS VEKA SL 82 (Slim Look)**. Węższa rama optycznie powiększa okno i wpuszcza więcej naturalnego światła bez utraty parametrów termicznych.

**Duże przeszklenia = wyższe wymagania wobec Uw**
Im większe okno, tym większy udział mają w nim straty ciepła przez szybę. W salonie z dużym przeszkleniem (np. od podłogi do sufitu) warto wybrać pakiet minimum 3-szybowy z argonem — standard w systemach **Passiv-Line PLUS** i **PASSIV-LINE ULTRA**.

**Połączenie z tarasem**
Jeśli salon graniczy z tarasem lub ogrodem, rozważ zamiast klasycznego okna system drzwi tarasowych HST — pozwala połączyć wnętrze z ogrodem bez progu i z maksymalnym doświetleniem. Więcej o wyborze systemu przesuwnego piszemy w osobnym artykule.

**Akustyka w salonie**
Jeśli dom stoi przy ruchliwej ulicy, w salonie (gdzie najczęściej odpoczywamy) warto zainwestować w pakiet o podwyższonej izolacyjności akustycznej — patrz nasz poradnik o oknach izolujących dźwięk.

**Nasza rekomendacja:** do salonu najczęściej polecamy AdamS VEKA SL 82 lub, przy większym budżecie, PASSIV-LINE ULTRA z pakietem 4-szybowym — najlepszy balans światła, izolacji i estetyki.`,
  },
  {
    id: 11,
    slug: 'ile-kosztuja-okna-do-domu',
    title: 'Ile kosztują okna do domu? Realny cennik 2026',
    excerpt: 'Ceny okien PCV różnią się nawet kilkukrotnie w zależności od systemu i parametrów. Wyjaśniamy z czego wynikają różnice i jak nie przepłacić.',
    category: 'Formalności',
    readTime: '5 min',
    image: '/images/produkty/veka_pf_70.jpg',
    content: `Cena okna zależy od kilku czynników, które łatwo pominąć porównując tylko "cenę za sztukę" między ofertami.

**Co realnie wpływa na cenę okna:**
- **System profilu** — klasyczny 5-komorowy (np. VEKA PF 70) jest tańszy niż 8-komorowy pasywny (IDEAL 8000, PASSIV-LINE ULTRA)
- **Pakiet szybowy** — 2-szybowy jest tańszy niż 3- lub 4-szybowy z kryptonem
- **Wymiary i kształt** — okna nietypowe (łukowe, trapezowe) kosztują więcej niż standardowe prostokąty
- **Kolor i okleina** — biały PCV jest najtańszy, okleiny drewnopodobne (dąb, orzech) podnoszą cenę o 15–30%
- **Okucia** — standardowe vs. antywłamaniowe z dodatkowymi zaczepami

**Dlaczego "najtańsza oferta" bywa najdroższa**
Cena bez montażu, transportu lub demontażu starych okien to często pułapka — dopłaty na końcu potrafią przewyższyć różnicę w cenie samego okna. W BT-Styl cena zawiera **komplet: pomiar, produkcję, transport, demontaż i montaż**.

**Jak nie przepłacić:**
- Poproś o wycenę z rozbiciem na pozycje (okno / montaż / transport)
- Sprawdź czy w cenie jest demontaż starych okien i wywóz gruzu
- Zapytaj o gwarancję na montaż osobno od gwarancji producenta
- Porównuj oferty na te same parametry (ten sam Uw, ta sama liczba szyb)

Najlepszym sposobem na realną wycenę jest **bezpłatny pomiar** — dopiero wtedy dostaniesz konkretną kwotę dopasowaną do Twojego domu, nie orientacyjny widełkowy cennik.`,
  },
  {
    id: 12,
    slug: 'po-ilu-latach-wymienic-okna',
    title: 'Po ilu latach należy wymienić okna plastikowe?',
    excerpt: 'Okna PCV nie mają jednej daty ważności — żywotność zależy od jakości montażu i eksploatacji. Sprawdzamy sygnały, że czas na wymianę.',
    category: 'Użytkowanie',
    readTime: '4 min',
    image: '/images/produkty/veka_sl_82.jpg',
    content: `Dobrze wykonane okno PCV powinno służyć **25–30 lat**, ale to nie znaczy, że warto czekać aż samo "się zepsuje". Kilka sygnałów mówi, że wymiana się opłaca dużo wcześniej.

**Kiedy okno faktycznie wymaga wymiany:**
- Profil jest odkształcony, żółknie nieodwracalnie lub pęka
- Uszczelki są tak zużyte, że regularna wymiana już nie pomaga
- Para gromadzi się **między szybami** (uszkodzona ramka dystansowa — patrz nasz artykuł o parze na szybach)
- Rachunki za ogrzewanie rosną, mimo że reszta domu jest ocieplona
- Okucia są tak wysłużone, że klamka "chodzi luzem", a okno nie domyka się szczelnie

**Kiedy wymiana ma sens mimo sprawnego okna:**
Stare okno (nawet sprzed 15–20 lat) często ma dużo gorszy współczynnik Uw niż dzisiejsze standardy (dziś norma to Uw ≤ 0,9, starsze okna miewały 1,5–2,0). W takiej sytuacji wymiana zwraca się przez oszczędności na ogrzewaniu, zanim okno w ogóle "się zepsuje" — pisaliśmy o tym w artykule o opłacalności okien energooszczędnych.

**Co można naprawić zamiast wymieniać całe okno:**
- Regulację okuć (docisk sezonowy) — 5 minut, żadnego kosztu wymiany
- Wymianę pojedynczej uszczelki
- Wymianę samej szyby (przy zaparowaniu między szybami)

**Praktyczna rada:** jeśli wahasz się między naprawą a wymianą, umów bezpłatny przegląd — nasz doradca oceni, czy opłaca się jeszcze naprawiać, czy lepiej zainwestować w nowe okno.`,
  },
  {
    id: 13,
    slug: 'jakiej-firmy-okna-wybrac',
    title: 'Jakiej firmy okna wybrać? Na co zwrócić uwagę',
    excerpt: 'Rynek okien PCV w Polsce to dziesiątki producentów i jeszcze więcej salonów sprzedaży. Podpowiadamy, jak ocenić wiarygodność dostawcy.',
    category: 'Formalności',
    readTime: '4 min',
    image: '/images/produkty/comfort_line_neo.webp',
    content: `Wybór producenta okien to nie tylko kwestia ceny — to inwestycja na 25–30 lat, więc warto sprawdzić kilka rzeczy zanim podpiszesz umowę.

**Na co patrzeć wybierając firmę:**
- **Autoryzowany salon firmowy** vs. pośrednik — salon firmowy (jak BT-Styl, Autoryzowany Salon Firmowy AdamS) ma bezpośredni kontakt z producentem, co ułatwia serwis gwarancyjny
- **Doświadczenie na lokalnym rynku** — firma działająca w Twoim mieście od lat ma reputację, którą łatwo zweryfikować (opinie, zrealizowane montaże w okolicy)
- **Kompleksowość usługi** — pomiar, produkcja, transport i montaż od jednej firmy eliminuje "przerzucanie się odpowiedzialnością" między dostawcą a ekipą montażową
- **Gwarancja na montaż, nie tylko na okno** — producent gwarantuje okno, ale to firma montująca odpowiada za szczelność i poprawność osadzenia

**Czerwone flagi przy wyborze firmy:**
- Brak fizycznego salonu/biura do odwiedzenia
- Nacisk na szybką decyzję "tylko dziś" bez czasu na przemyślenie
- Brak jasnej wyceny pisemnej przed podpisaniem umowy
- Brak referencji lub możliwości zobaczenia zrealizowanych montaży

**Dlaczego warto wybrać salon firmowy zamiast pośrednika**
Salon firmowy AdamS na systemach VEKA (jak BT-Styl w Szczecinie) oznacza, że mamy bezpośredni dostęp do producenta — krótszy czas realizacji reklamacji, pełną wiedzę o parametrach technicznych każdego systemu i pełną odpowiedzialność za cały proces, od pomiaru po serwis.`,
  },
  {
    id: 14,
    slug: 'drzwi-tarasowe-przesuwne-czy-otwierane',
    title: 'Drzwi tarasowe przesuwne czy otwierane – co wybrać?',
    excerpt: 'To najczęstsze pytanie przy wyborze wyjścia na taras. Porównujemy systemy HST, PSK i klasyczne rozwierane pod kątem miejsca, ceny i komfortu.',
    category: 'Dobór okien',
    readTime: '5 min',
    image: '/images/oferta/hst_corner_view.jpg',
    content: `To pytanie zadaje sobie niemal każdy, kto planuje wyjście na taras lub balkon. Odpowiedź zależy od dostępnej przestrzeni, budżetu i tego, jak ważna jest dla Ciebie estetyka dużych przeszkleń.

**Drzwi rozwierane (klasyczne)**
Najtańsze rozwiązanie, znane i sprawdzone. Wada: skrzydło otwiera się do wnętrza lub na zewnątrz, zajmując przestrzeń — niewygodne przy małym tarasie lub ustawionych blisko meblach.

**System PSK (uchylno-przesuwny)**
Kompromis cenowy i funkcjonalny. Skrzydło uchyla się, a potem przesuwa wzdłuż szyny — oszczędza miejsce, ale wymaga widocznego progu i mniejszej siły do obsługi niż drzwi rozwierane. Dobry wybór przy ograniczonym budżecie.

**System HST (unoszono-przesuwny)** — polecany przez nas najczęściej
Skrzydło unosi się delikatnie przed przesunięciem, dzięki czemu porusza się niemal bez wysiłku, nawet przy dużych i ciężkich taflach szkła. Próg jest bardzo niski (w HST Corner View nawet 3mm) — praktycznie poziom podłogi. Umożliwia też przeszklenia narożne bez słupka (model HST Corner View).

**Porównanie w skrócie:**
| System | Cena | Komfort obsługi | Wymagana przestrzeń |
|--------|------|------------------|----------------------|
| Rozwierane | Niska | Standardowy | Duża (skrzydło się otwiera) |
| PSK | Średnia | Dobry | Mała |
| HST | Wyższa | Najlepszy | Minimalna |

**Nasza rekomendacja:** jeśli zależy Ci na maksymalnym połączeniu salonu z tarasem i wygodzie codziennego użytkowania — HST to inwestycja, która się broni. Przy ograniczonym budżecie system PSK to sensowny kompromis. Pełną ofertę drzwi tarasowych znajdziesz w naszej sekcji Oferta.`,
  },
  {
    id: 15,
    slug: 'jakie-rolety-zewnetrzne-wybrac',
    title: 'Jakie rolety zewnętrzne wybrać?',
    excerpt: 'Nadstawne, adaptacyjne czy podtynkowe — każdy typ rolet pasuje do innej sytuacji. Wyjaśniamy różnice i podpowiadamy, kiedy który wybrać.',
    category: 'Dobór okien',
    readTime: '4 min',
    image: '/images/oferta/SPE_MKT-kopia-1.jpg',
    content: `Wybór typu rolety zewnętrznej zależy głównie od tego, na jakim etapie jest Twoja inwestycja — nowa budowa, remont czy montaż w gotowym budynku.

**Rolety nadstawne (np. CleverBox)**
Montowane razem z nowym oknem, integrują się z konstrukcją budynku już na etapie budowy. Najlepsza izolacja termiczna i akustyczna spośród wszystkich typów, bo skrzynka jest częścią systemu okiennego. Wybór idealny, jeśli budujesz dom lub wymieniasz okna.

**Rolety zewnętrzne adaptacyjne**
Rozwiązanie do domów, w których okna już są zamontowane, a chcesz dodać rolety bez remontu elewacji. Skrzynka aluminiowa montowana jest na ścianie lub w ościeżnicy istniejącego okna. Dobry kompromis między łatwością montażu a estetyką.

**Rolety podtynkowe (Integro)**
Skrzynka całkowicie ukryta w warstwie ocieplenia budynku — z zewnątrz widać tylko prowadnicę, elewacja pozostaje czysta. Wymaga zaplanowania już na etapie projektu ocieplenia, ale daje najlepszy efekt wizualny.

**Na co jeszcze zwrócić uwagę:**
- **Napęd** — ręczny (korbka/taśma) czy elektryczny z pilotem/aplikacją
- **Izolacyjność** — sprawdź współczynnik USb (termiczny) i Rw (akustyczny)
- **Kolorystyka** — dopasuj do koloru okien i elewacji

**Nasza rekomendacja:** przy nowej budowie lub pełnej wymianie okien wybierz rolety nadstawne — najlepszy stosunek izolacji do ceny. Do istniejącego budynku bez ingerencji w elewację — rolety adaptacyjne.`,
  },
  {
    id: 16,
    slug: 'kolor-okien-jaki-wybrac',
    title: 'Jaki kolor okien wybrać do elewacji domu?',
    excerpt: 'Antracyt, biel czy okleina drewnopodobna? Kolor okien wpływa na charakter całej elewacji — podpowiadamy, jak dobrać go świadomie.',
    category: 'Dobór okien',
    readTime: '3 min',
    image: '/images/produkty/elegant_comfort_line.webp',
    content: `Kolor okien to decyzja na dekady — w przeciwieństwie do koloru ścian, nie pomalujesz go łatwo od nowa. Warto przemyśleć wybór w kontekście całej elewacji.

**Szary antracyt — obecnie najpopularniejszy wybór**
Nowoczesny, ciemny odcień szarości doskonale komponuje się zarówno z jasną, jak i ciemną elewacją. Dobrze maskuje zabrudzenia, wygląda elegancko przez lata. Standardowy wybór w nowoczesnym budownictwie jednorodzinnym.

**Biel — klasyka, która nigdy nie wychodzi z mody**
Najtańsza opcja kolorystyczna, uniwersalna do każdej stylistyki. Wymaga nieco częstszego mycia (widoczniejsze zabrudzenia), ale optycznie powiększa i rozjaśnia bryłę budynku.

**Okleiny drewnopodobne (dąb, orzech, mahoń)**
Ciepły, naturalny wygląd bez wad drewna (brak konieczności lakierowania, odporność na warunki atmosferyczne profilu PCV). Podnoszą cenę okna o 15–30%, ale dają efekt nieosiągalny w jednolitym kolorze.

**Jak dobrać kolor do elewacji:**
- Jasna elewacja (biel, jasny szary) → dobrze komponuje się z antracytem lub czarnym
- Elewacja z cegły klinkierowej lub drewna → naturalne okleiny drewnopodobne
- Nowoczesna, minimalistyczna bryła → antracyt lub czerń wzmacniają efekt

Wszystkie systemy z oferty BT-Styl (VEKA, AdamS) dostępne są w szerokiej palecie kolorów RAL i okleinach — zobacz próbki na miejscu w salonie przy pomiarze.`,
  },
  {
    id: 17,
    slug: 'okna-antywlamaniowe',
    title: 'Okna antywłamaniowe – jak zwiększyć bezpieczeństwo domu?',
    excerpt: 'Okucia antywłamaniowe, klasy odporności RC i szkło bezpieczne — wyjaśniamy, co realnie chroni dom przed włamaniem.',
    category: 'Bezpieczeństwo',
    readTime: '4 min',
    image: '/images/produkty/ideal_8000.jpg',
    content: `Większość włamań do domów jednorodzinnych odbywa się przez okna parteru — dobrze dobrane zabezpieczenia realnie wydłużają czas potrzebny na sforsowanie okna, co w praktyce zniechęca włamywacza.

**Klasy odporności RC (Resistance Class)**
Okna antywłamaniowe klasyfikuje się w klasach RC1–RC6. Do domów jednorodzinnych standardowo poleca się **RC2** — okno wytrzymuje próbę włamania narzędziami takimi jak śrubokręt czy łom przez określony czas testowy.

**Co decyduje o odporności okna:**
- **Zaczepy antywyważeniowe** — dodatkowe punkty ryglowania w okuciu (systemy AdamS oferują od 2 do 4 zaczepów)
- **Szkło bezpieczne (P4A)** — laminowane szkło, które nie pęka na ostre odłamki i utrudnia wybicie
- **Wzmocniona ramka i okucia** — klamki z blokadą, wzmocnione zawiasy

**Dodatkowe zabezpieczenia, które warto rozważyć:**
- Czujniki otwarcia zintegrowane z alarmem domowym
- Rolety antywłamaniowe (dodatkowa bariera przed dostępem do samego okna)
- Oświetlenie zewnętrzne z czujnikiem ruchu przy oknach parteru

**Nasza rekomendacja:** w domach jednorodzinnych, szczególnie na parterze, polecamy okna z klasą RC2 i minimum 2 zaczepami antywyważeniowymi. Doradca podczas pomiaru pomoże dobrać odpowiedni poziom zabezpieczeń do konkretnych okien w Twoim domu.`,
  },
  {
    id: 18,
    slug: 'okna-do-domu-pasywnego',
    title: 'Jakie okna do domu pasywnego lub energooszczędnego?',
    excerpt: 'Dom pasywny stawia oknu bardzo konkretne wymagania parametrowe. Wyjaśniamy, czym różnią się okna pasywne od standardowych energooszczędnych.',
    category: 'Energooszczędność',
    readTime: '5 min',
    image: '/images/produkty/passiv_line_ultra.jpg',
    content: `Budowa domu pasywnego lub energooszczędnego wymaga innego podejścia do doboru okien niż standardowa inwestycja — tu liczy się każdy dziesiąty ułamek współczynnika Uw.

**Wymagania dla domu pasywnego**
Instytut Budynków Pasywnych w Darmstadt wymaga współczynnika przenikania ciepła dla całego okna **Uw ≤ 0,8 W/(m²K)**, a często stosuje się jeszcze niższy, ok. 0,5–0,6 W/(m²K), żeby zapewnić margines bezpieczeństwa.

**Czym różni się okno pasywne od "zwykłego" energooszczędnego:**
- **Głębsza zabudowa profilu** — 85mm zamiast standardowych 70mm
- **Wklejane szyby** zamiast tradycyjnego osadzenia — zwiększa sztywność i izolacyjność skrzydła
- **Termoplastyczne wzmocnienia** zamiast stalowych — eliminują mostek termiczny w profilu
- **Pakiet 3- lub 4-szybowy z kryptonem** zamiast standardowego argonu

**System z oferty BT-Styl spełniający normy pasywne**
AdamS PASSIV-LINE ULTRA to system 6-komorowy o głębokości 85mm, z wklejanymi szybami Ug=0,3 i wzmocnieniami Ultradur BASF zamiast stali — osiąga Uw do 0,54 W/(m²K), jeden z najlepszych wyników dostępnych na rynku.

**Nie tylko okno — cały detal montażu ma znaczenie**
W domu pasywnym równie ważny jak samo okno jest **sposób osadzenia w ścianie** — ciepły montaż z odpowiednią izolacją progu i ościeżnicy. Źle wykonany montaż potrafi zniwelować przewagę nawet najlepszego okna.`,
  },
  {
    id: 19,
    slug: 'ograniczniki-otwarcia-i-nawiewniki',
    title: 'Nawiewniki okienne – czy warto je zamontować?',
    excerpt: 'Nawiewniki poprawiają wentylację bez otwierania okna, ale budzą wątpliwości co do strat ciepła. Wyjaśniamy, kiedy faktycznie się przydają.',
    category: 'Użytkowanie',
    readTime: '3 min',
    image: '/images/produkty/veka_pf_70.jpg',
    content: `Współczesne, szczelne okna PCV rozwiązują problem przeciągów, ale tworzą nowy: bez odpowiedniej wentylacji dom "nie oddycha", co prowadzi do wilgoci i pleśni (patrz nasz artykuł o parze na szybach).

**Czym jest nawiewnik okienny**
To niewielkie urządzenie montowane w górnej części ramy lub skrzydła okna, które umożliwia stały, kontrolowany dopływ świeżego powietrza — bez konieczności uchylania okna, szczególnie ważne zimą.

**Kiedy nawiewnik jest niezbędny:**
- Mieszkanie/dom bez wentylacji mechanicznej (tylko grawitacyjna)
- Częste problemy z parowaniem szyb od wewnątrz mimo wietrzenia
- Wymiana starych, nieszczelnych okien na nowe, szczelne — stara wentylacja grawitacyjna "traciła" powietrze przez nieszczelności starych okien, po wymianie ten naturalny dopływ znika

**Czy nawiewnik zwiększa straty ciepła**
Nowoczesne nawiewniki mają regulację przepływu (automatyczną, higrosterowaną — reagującą na wilgotność) i minimalny wpływ na bilans cieplny w porównaniu do korzyści zdrowotnych i ochrony budynku przed wilgocią. Strata jest znacznie mniejsza niż regularne uchylanie okna na wietrzenie.

**Nasza rekomendacja:** jeśli wymieniasz stare, nieszczelne okna na nowe — rozważ montaż nawiewników razem z zamówieniem, szczególnie w sypialniach i pomieszczeniach bez wentylacji mechanicznej. Możemy domontować je też w już zamontowanych oknach.`,
  },
];

export function getArtykulBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export const categoryColors: Record<string, string> = {
  'Montaż': '#1a3a5c',
  'Formalności': '#7c3aed',
  'Użytkowanie': '#16a34a',
  'Dobór okien': '#c0392b',
  'Energooszczędność': '#e8a020',
  'Bezpieczeństwo': '#c0392b',
};
