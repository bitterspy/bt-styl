export type OknoDetal = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  opis: string[];
  daneTechniczne: { label: string; value: string }[];
  kolory: string[];
  image: string;
};

export const oknaDetale: OknoDetal[] = [
  {
    slug: 'passiv-line-ultra',
    name: 'AdamS PASSIV-LINE ULTRA',
    tagline: 'Najwyższy standard energooszczędności, bezpieczeństwa, ciszy i estetyki',
    intro:
      'System 6-komorowy z dociepleniem, głębokość zabudowy 85mm. Wklejane szyby o współczynniku Ug=0,3 W/(m²K), a zamiast stalowych wzmocnień — termoplastyczne wkładki Ultradur High Speed firmy BASF wzmocnione włóknem szklanym oraz wypełnienie komór pianą poliuretanową. Doskonałe rozwiązanie do domów energooszczędnych i pasywnych.',
    opis: [
      'Passiv-Line Ultra to okno skierowane do budownictwa pasywnego, dostępne w dwóch konfiguracjach: w standardzie z pakietem trzyszybowym, dwukomorowym o Ug=0,5 W/(m²K), uzyskujące współczynnik Uw=0,68 W/(m²K); opcjonalnie z pakietem czteroszybowym, trzykomorowym o Ug=0,3 W/(m²K) z kryptonem, uzyskujące Uw=0,5 W/(m²K) — jeden z najniższych współczynników przenikania ciepła na rynku.',
      'Korzyści: energooszczędność i znaczne zmniejszenie kosztów ogrzewania, zdecydowanie lepsza termoizolacja, lepsza izolacyjność akustyczna dzięki wklejonej szybie i potrójnemu zestawowi uszczelek.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '85 mm' },
      { label: 'Uf złożenia rama/skrzydło', value: '0,7 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '3' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Współczynnik przenikania ciepła Uw (1230×1480)', value: '0,68 W/(m²K)' },
      { label: 'Uw z pakietem opcjonalnym i ciepłymi ramkami', value: '0,54 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'C3/B3' },
      { label: 'Wodoszczelność (nieosłonięte)', value: 'E750' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Nośność urządzeń zabezpieczających', value: '350 N' },
    ],
    kolory: [
      'Biały', 'Kremowy', 'Palisander', 'Orzech', 'Oregon III', 'Mahoń', 'Jet Black',
      'Dąb Sheffield brązowy', 'Dąb specjalny', 'Dąb Sheffield szary', 'Dąb Sheffield jasny',
      'Dąb naturalny', 'Daglezja', 'Ciemny grafitowy', 'Ciemny dąb', 'Ciemnobrązowy',
      'Ciemny czerwony', 'Ciemnozielony', 'Brzoza', 'Brylantowy niebieski', 'Betonowy szary',
    ],
    image: '/images/produkty/passiv_line_ultra.jpg',
  },
  {
    slug: 'passiv-line-plus',
    name: 'AdamS Passiv-Line PLUS',
    tagline: 'Wysoka termoizolacja w korzystnej cenie',
    intro:
      'Okno Passiv-Line PLUS charakteryzuje się wysoką termoizolacją w korzystnej cenie. Wyposażone w szybę z argonem Ug=0,5 W/(m²K), przy wymiarach referencyjnych uzyskuje współczynnik przenikania ciepła Uw=0,7 W/(m²K). Wyrób skierowany do domów pasywnych i energooszczędnych, nagrodzony złotym medalem MTP 2015 oraz wieloma innymi nagrodami.',
    opis: [
      'Korzyści: energooszczędność i znaczne zmniejszenie kosztów ogrzewania, zdecydowanie lepsza termoizolacja, lepsza izolacyjność akustyczna dzięki potrójnemu zestawowi uszczelek.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '85 mm' },
      { label: 'Uf złożenia rama/skrzydło', value: '0,9 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '3' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Współczynnik przenikania ciepła Uw (1230×1480)', value: '0,73 W/(m²K)' },
      { label: 'Uw z pakietem opcjonalnym i ciepłymi ramkami', value: '0,69 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'C5' },
      { label: 'Wodoszczelność (nieosłonięte)', value: 'E1500' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Nośność urządzeń zabezpieczających', value: '350 N' },
    ],
    kolory: [],
    image: '/images/produkty/passiv_line_plus.jpg',
  },
  {
    slug: 'veka-sl-82',
    name: 'AdamS VEKA SL 82',
    tagline: 'Slim Look – więcej światła, mniej profilu',
    intro:
      'Okna w systemie VEKA SL 82 są skierowane do najbardziej wymagających klientów poszukujących trwałych rozwiązań. Profil produkowany jest w klasie A (grubość ścianek zewnętrznych min. 2,8 mm), w siedmiokomorowej zabudowie ościeżnicy i sześciokomorowej zabudowie skrzydła. Uzyskuje wysokie parametry izolacyjności cieplnej na poziomie Uf=1,0 W/(m²K).',
    opis: [
      'Standardowo wyposażone w dwukomorowy pakiet szybowy (trzy szyby) o współczynniku Ug=0,5 W/(m²K), co w efekcie pozwala uzyskać Uw=0,8 W/(m²K) dla całego okna — parametr charakteryzujący tylko okna o najwyższych właściwościach energooszczędnych.',
      'Układ trzech uszczelek doskonale izoluje od hałasu, wilgoci i zimna, dzieląc ościeżnicę na komorę wodną (odprowadzanie wody opadowej) i komorę suchą (praca okuć), co wydłuża żywotność mechanizmów. Zastosowane okucie Siegenia Tytan AF z obrotowymi, samonastawnymi rolkami KoPiBo, podnośnikiem skrzydła i mikrowentylacją. Standardowo od 2 do 4 zaczepów antywyważeniowych utrudniających włamanie.',
      'Klasyczne, a zarazem nowoczesne wzornictwo świetnie prezentuje się w kolorach antracytowych i bazaltowych, a w okleinach drewnopodobnych doskonale komponuje się z architekturą tradycyjnych domów.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '82 mm' },
      { label: 'Uf złożenia rama/skrzydło', value: '1,0 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '3' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Współczynnik przenikania ciepła Uw (1230×1480)', value: '0,79 W/(m²K)' },
      { label: 'Uw z pakietem opcjonalnym i ciepłymi ramkami', value: '0,77 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'C5' },
      { label: 'Wodoszczelność (nieosłonięte)', value: 'E1200' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Nośność urządzeń zabezpieczających', value: '350 N' },
    ],
    kolory: [],
    image: '/images/produkty/veka_sl_82.jpg',
  },
  {
    slug: 'veka-pf-70',
    name: 'AdamS VEKA PF 70',
    tagline: 'Sprawdzony klasyk – niezawodny wybór',
    intro:
      'VEKA PF 70 skierowane są do klientów ceniących jakość i funkcjonalność. Profil produkowany w klasie A (grubość ścianek zewnętrznych min. 2,8 mm), w pięciokomorowej zabudowie ościeżnicy i skrzydła. Parametry izolacyjności cieplnej na poziomie Uf=1,3 W/(m²K) pozwalają na konstruowanie okien odpowiadających potrzebom budownictwa wielorodzinnego i instytucjonalnego.',
    opis: [
      'Standardowo jednokomorowy pakiet szybowy (dwie szyby) o Ug=1,0 W/(m²K) daje Uw=1,3 W/(m²K) dla okna referencyjnego. Opcjonalnie dostępny pakiet dwukomorowy o Ug=0,6 W/(m²K) podwyższający energooszczędność.',
      'Zastosowane okucie Siegenia Tytan AF z rolkami KoPiBo, podnośnikiem skrzydła i mikrowentylacją. Dostępny opcjonalny PAKIET BEZPIECZEŃSTWA (2–4 zaczepy antywyważeniowe i klamka Hoppe Secustic). Klasyczne, proste linie nadają ponadczasowy wygląd, a bogata kolorystyka zaspokoi różne gusta.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '70 mm' },
      { label: 'Uf złożenia rama/skrzydło', value: '1,3 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '2' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Współczynnik przenikania ciepła Uw (1230×1480)', value: '1,38 W/(m²K)' },
      { label: 'Uw z pakietem opcjonalnym i ciepłymi ramkami', value: '0,95 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'C4' },
      { label: 'Wodoszczelność (nieosłonięte)', value: 'E1200' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Nośność urządzeń zabezpieczających', value: '350 N' },
    ],
    kolory: [],
    image: '/images/produkty/veka_pf_70.jpg',
  },
  {
    slug: 'ideal-8000',
    name: 'AdamS IDEAL 8000',
    tagline: 'Przełom – 8 komór, doskonała izolacja',
    intro:
      'Ideal 8000 to okna stworzone na bazie systemu, w którym położono duży nacisk na redukcję strat cieplnych. Zwiększono głębokość zabudowy profili do 85mm przy ośmiokomorowej budowie kształtowników i systemie trzech uszczelek.',
    opis: [
      'Okna wyposażone są w standardzie w pakiet trzyszybowy o szerokości 48mm. Potrójny zestaw uszczelek poprawia zarówno termikę, jak i izolacyjność akustyczną. Trzecia uszczelka wydziela suchą komorę, w której pracują okucia, zwiększając ich żywotność i trwałość. Okna w kolorze białym wyposażone są w szarą uszczelkę, a okleinowane — w czarną.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '85 mm' },
      { label: 'Uf złożenia rama/skrzydło', value: '1,0 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '3' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Współczynnik przenikania ciepła Uw (1230×1480)', value: '0,78 W/(m²K)' },
      { label: 'Uw z pakietem opcjonalnym i ciepłymi ramkami', value: '0,76 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'C5' },
      { label: 'Wodoszczelność (nieosłonięte)', value: 'E1500' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Nośność urządzeń zabezpieczających', value: '350 N' },
    ],
    kolory: [],
    image: '/images/produkty/ideal_8000.jpg',
  },
  {
    slug: 'comfort-line-neo',
    name: 'AdamS COMFORT LINE NEO',
    tagline: 'Energooszczędne okna z ponadczasową stylistyką',
    intro:
      'Neo to system okien oferujący kubistyczną i ponadczasową stylistykę od wewnątrz oraz od zewnątrz. Prosta i symetryczna bryła profilu tworzy wizualną lekkość okna, którą dodatkowo uwydatniają wąskie i wyraziste przylgi, nadając nowoczesności i elegancji elewacji budynku.',
    opis: [
      '6-komorowy profil o Uf=1,14 W/(m²K), w połączeniu z dwukomorowym pakietem szybowym (3 szyby) o Ug=0,5 W/(m²K) oraz aluminiowymi ramkami, daje Uw=0,87 W/(m²K) dla okna referencyjnego. Okna wyposażone w okucia Siegenia T-1000.',
      'Specjalna przylga środkowa stanowi barierę utrudniającą dojście do okuć podczas próby włamania. Trzecia wewnętrzna uszczelka w skrzydle poprawia szczelność, właściwości cieplne i akustyczne, oddzielając komorę suchą (okucie) od mokrej (odprowadzanie wody).',
      'Maksymalizacja powierzchni szklenia zapewnia większy dopływ światła do wnętrza. Okna Neo doskonale współgrają z drzwiami przesuwnymi Neo Slide.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '76 mm' },
      { label: 'Uf złożenia rama/skrzydło', value: '1,14 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '3' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Współczynnik przenikania ciepła Uw (1230×1480)', value: '0,87 W/(m²K)' },
      { label: 'Uw z pakietem opcjonalnym i ciepłymi ramkami', value: '0,79 W/(m²K)' },
    ],
    kolory: [
      'Biały (PVC)', 'Antracyt (ALUDEC)', 'Traffic White (ALUDEC)', 'Basalt Grey (ALUDEC)',
      'Umbra Grey (ALUDEC)', 'Window Grey (ALUDEC)', 'Dąb specjalny', 'Dąb naturalny',
      'Mahoń', 'Ciemny dąb', 'Daglezja', 'Oregon III', 'Złoty dąb', 'Orzech',
      'Walnuss Terra', 'Walnuss Amaretto', 'Ciemnozielony', 'Ciemnoczerwony',
      'Palisander', 'Szary', 'Szary antracytowy', 'Stalowy niebieski', 'Zielony',
    ],
    image: '/images/produkty/comfort_line_neo.webp',
  },
  {
    slug: 'elegant-comfort-line',
    name: 'AdamS ELEGANT COMFORT-LINE',
    tagline: 'Prosty, minimalistyczny design',
    intro:
      'Linia Elegant Comfort-Line to propozycja dla osób ceniących wysokie walory estetyczne. Unikalna geometryczna linia profilu nawiązuje do prostoty charakterystycznej dla stolarki aluminiowej. Innowacyjne cięcie listwy przyszybowej „na prosto" w oknach okleinowanych oraz kanciaste kształty czynią rozwiązanie uniwersalnym i ponadczasowym (w oknach białych stosowane jest cięcie 45°).',
    opis: [
      'Przenikalność cieplna dla okna referencyjnego Uw=0,75 W/(m²K)*. Standardowy pakiet 3-szybowy o Ug=0,5 W/(m²K) z ciepłą ramką minimalizuje straty energii. Pakiet szybowy aktywnie pozyskuje energię cieplną ze słońca (współczynnik g=53%). 6-komorowy system PVC o głębokości zabudowy 80mm (skrzydło) pozwala osiągnąć Uw≤0,9 W/(m²K), kwalifikując się do dotacji w programie Czyste Powietrze.',
      'Izolacyjność akustyczna Rw=37 dB. Smukłe profile maksymalizują powierzchnię przeszkleń. Szeroka gama kolorystyczna, m.in. Woodec Turner Oak, Black Jet, Antracyt, Winchester. Okucia Siegenia T-1000. Produkt w 100% nadaje się do recyklingu.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: 'rama 76 mm, skrzydło 80 mm' },
      { label: 'Ilość komór w profilu', value: '6' },
      { label: 'Uf złożenia rama/skrzydło', value: '1,0 W/(m²K)' },
      { label: 'Ilość uszczelek na połączeniu skrzydło/ościeżnica', value: '3' },
      { label: 'Rodzaj uszczelek w profilach', value: 'TPE' },
      { label: 'Uw (1230×1480), pakiet 48mm, ramki ALU', value: '0,83 W/(m²K)' },
      { label: 'Uw z pakietem Ug=0,5 i ciepłymi ramkami Swisspacer', value: '0,75 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'C1/B2' },
      { label: 'Wodoszczelność (nieosłonięte)', value: 'klasa 9A' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Nośność urządzeń zabezpieczających', value: '350 N' },
    ],
    kolory: [],
    image: '/images/produkty/elegant_comfort_line.webp',
  },
];

export function getOknoBySlug(slug: string) {
  return oknaDetale.find((o) => o.slug === slug);
}
