// Treści zescrapowane z oryginalnej strony klienta (dobreoknaszczecin.pl/aktualnosci/)
// na prośbę klienta — pełne wpisy blogowe, kopiowane 1:1, nie parafrazowane.
export type WpisDetal = {
  slug: string;
  tytul: string;
  data: string; // ISO RRRR-MM-DD
  kategoria: string;
  tresc: string[]; // akapity
  obrazek: string;
};

export const wpisyDetale: WpisDetal[] = [
  {
    slug: 'nowe-drzwi-stalowe-w-naszej-ofercie',
    tytul: 'Nowe drzwi stalowe w naszej ofercie!',
    data: '2026-03-07',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Serdecznie zapraszamy do zapoznania się z nową ofertą drzwi stalowych firmy Martom.',
      'MARTOM jest obecnie liderem rozwiązań hybrydowych, wyróżniających producenta na polskim rynku. Firma posiada opatentowane technologie, łączące drewno, stal, aluminium oraz tworzywo ABS które jest zbrojone włóknami oraz pianę PUR. Drzwi hybrydowe to bardzo dobra alternatywa dla innych rozwiązań, przy tym wypadają konkurencyjne cenowo. Hybrydowe drzwi firmy Martom to produkt godny uwagi. W ofercie MARTOM znajdziemy drzwi dwuskrzydłowe jak również jednoskrzydłowe. Więcej informacji na stronie producenta www.drzwimartom.pl',
    ],
    obrazek: '/images/aktualnosci/nowe-drzwi-stalowe.jpg',
  },
  {
    slug: 'najlepsze-okna-czyli-jakie-przedstawiamy-najlepsze-okna-w-ofercie-adams-w-roznych-kryteriach',
    tytul: 'Najlepsze okna, czyli jakie? Przedstawiamy najlepsze okna w ofercie AdamS w różnych kryteriach.',
    data: '2024-10-17',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Najlepsze okna, czyli jakie?',
      '„Najlepsze okna to takie, które są dopasowane do wymagań technicznych projektu, założeń estetycznych oraz do preferencji inwestorów." Jakie więc są najistotniejsze cechy okien, które warto poznać przed podjęciem decyzji o wyborze stolarki otworowej?',
      'Nowoczesne okna muszą być przede wszystkim energooszczędne. Ciepłe okna dają komfort termiczny i oszczędność energii. Z kolei by zadbać o ciszę w mieszkaniu trzeba wybrać okna o dobrej izolacyjności akustycznej. Ważne również, by w razie silnego wiatru czy ulewnego deszczu okna były na nie odporne.',
      'Przyjrzyjmy się bliżej tym cechom by wybrać najlepsze okna do swojego domu czy mieszkania i bezpiecznie odpoczywać w cieple i ciszy.',
      'Ciepłe okna z dobrą izolacją',
      'W budynkach energooszczędnych, a takie dziś się buduje przeszklenia muszą mieć doskonałą izolacyjność termiczną. Według obowiązujących obecnie norm budowlanych, „stolarka okienna musi mieć współczynnik przenikania ciepła Uw nie wyższy niż 0,9 (W/m2·K)." AdamS oferuje stolarkę okienną spełniającą te wymagania. Przykładem niech będzie okno Passiv-Line Ultra, które charakteryzuje się doskonałym współczynnikiem przenikania ciepła Uw=0,66 (W/m2·K).',
      'Najlepsze okna w ofercie AdamS jeśli chodzi o izolację termiczną – PASSIV-LINE ULTRA',
      'Okna, które dobrze wyciszą',
      'Izolacyjność akustyczna okien jest szczególnie istotna np. w centrum dużego miasta, w pobliżu lotniska czy linii kolejowej. Wybierając okna do takich miejsc trzeba zwrócić uwagę na wskaźnik izolacyjności akustycznej czyli Rw.',
      'Wartość Rw jest podawana w dB (decybele). Standardowe okna mają Rw około 30 dB. W centrum miasta lepszym wyborem będą okna z Rw co najmniej 35 dB. Natomiast w pobliżu lotniska czy torów kolejowych potrzebne są tzw. okna akustyczne jak np. Passiv-Line S oferowane przez AdamS, „z bardzo wysokim współczynnikiem Rw 45 dB."',
      'W tym wypadku liczy się każdy dB, ponieważ „zmniejszenie hałasu nawet o 5 dB ludzki słuch odczytuje jako wyraźną zmianę na lepsze."',
      'Okna odporne na wiatr i wodę',
      'Jeśli okna będą montowane np. na wysokim piętrze bloku to powinny mieć dobrą klasę odporności na wiatr i opady. Nie mogą się odkształcać przy bardzo silnym wietrze ani przeciekać podczas ulewy. Klasę odporności na obciążenie wiatrem oznacza się literami A, B lub C (C to najlepsza odporność) oraz podaje się ciśnienie próbne, pod jakim badano okno (od 1 do 5). W przeciętnych warunkach atmosferycznych wystarczy klasa B2. Natomiast na wysokich kondygnacjach budynków czy w bardzo wietrznej okolicy, jak góry czy morze, lepiej montować okna z klasą C2 lub C3. Przykładem okna z bardzo wysoką klasą odporności, bo aż C5, jest okno Passiv-Line S.',
      'W przypadku wodoszczelności klasy okien są przedstawione od A1 do A9 oraz Exxx – czyli poza skalą – jest to wartość większa od wcześniej wspomnianych klas wraz z podaną wartością osiągniętego w badaniu ciśnienia w kPa. Podczas prób okna pozostają nieosłonięte tak jak w realnych warunkach atmosferycznych. Wartym wspomnienia produktem jest Okno Passiv-Line Plus, które podczas badań osiągnęło wynik E1500.',
      'Najlepsze okna w ofercie AdamS jeśli chodzi o odporność na wiatr i wodoszczelność – PASSIV-LINE PLUS.',
      'Poznaj również okna energooszczędne od AdamS: VEKA SL 82, VEKA PF 70, IDEAL 8000, COMFORT LINE NEO, ELEGANT COMFORT-LINE',
    ],
    obrazek: '/images/aktualnosci/najlepsze-okna.webp',
  },
  {
    slug: 'firma-adams-pionierem-rozwiazan-ekologicznych',
    tytul: 'Firma AdamS pionierem rozwiązań ekologicznych',
    data: '2024-10-17',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Zakończył się 31. Konwent Stolarki VIP na zamku w Gniewie, podczas którego wybrano najlepsze i najbardziej ekologiczne rozwiązania. Firma AdamS została wyróżniona za produkcję Okien Passiv-Line Ultra.',
      'Innowacyjne rozwiązania branży stolarskiej',
      'Pierwsza edycja EkoProdukt VIP – Najlepsze Okna, Drzwi, Bramy i Osłony, odbywająca się w ramach 31. Konwentu Stolarki VIP, miała na celu promocję i propagowanie najlepszych ekologicznych rozwiązań. Ekologicznych, czyli takich, które podlegają kompletnemu recyklingowi i są wyprodukowane z wkładem surowców wtórnych, a ich zastosowanie daje nie tylko komfort zastosowania, ale także komfort użytkowania i świadomość.',
      '– „Tak jak się spodziewaliśmy, pojawiły się ekologiczne rozwiązania, oczywiście z innowacyjnym komponentami, produkowane w najnowszych technologiach..." – ocenia Grzegorz Cendrowski, organizator z ramienia Stolarka VIP.',
      'Okna Passiv-Line Ultra – najcieplejsze certyfikowane okna pasywne',
      'Podczas konwentu Firma AdamS otrzymała nagrodę za okna Passiv-Line Ultra.',
      '– „To wyróżnienie nie tylko nobilituje, ale również mobilizuje do dalszej pracy..." – komentuje Adam Pędzich. – „Firma AdamS jako pierwsza w Polsce uzyskała certyfikat potwierdzający produkcję okien Passiv-Line Ultra..."',
      'Okna Passiv-Line Ultra to produkty dedykowane budownictwu pasywnemu i niskoenergetycznemu. Stanowią nowy kierunek myślenia o energooszczędności, eliminując dotychczasowe wzmocnienia stalowe w profilach, które obniżały ich właściwości termiczne. Okna wyróżniają się doskonałymi parametrami termoizolacyjnymi oraz ponadprzeciętną szczelnością na powietrze i wodę.',
    ],
    obrazek: '/images/aktualnosci/adams-pionier.webp',
  },
  {
    slug: 'adams-podwyzszenie-wartosci-domu-dzieki-niezawodnym-oknom',
    tytul: 'AdamS – Podwyższenie wartości domu dzięki niezawodnym oknom',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Postaw na jakość marki Adams!',
      'Ludzie zawsze szukają sposobów na zwiększenie wartości ich największych aktywów. Dom o wyższej wartości oznacza wyższą wartość sprzedaży, możliwości pożyczek pod zastaw domu i ogólny wzrost wartości netto. Ogólnie rzecz biorąc większe zadowolenie.',
      'Apetyt na zysk, czy to się opłaca?',
      'Stale rosnące zainteresowanie zwiększaniem wartości domu doprowadziło do stworzenia wielu technik sprzedaży. Najważniejszą z nich jest zadbanie o pierwsze wrażenie jakie zrobi nasz dom dla potencjalnego klienta. Zazwyczaj staramy nadać nieruchomości uroku: przebudowujemy kuchnię, kładziemy nowy dach itp. Jest to bardzo dobre podejście, a okna bez wątpienia są bardzo istotnym elementem naszego domu. Potencjalny kupiec doceni ładne funkcjonalne okna, które będą służyć mu przez lata, zapewniając nie tylko komfort obsługi, ale również długoterminowe oszczędności. Dlatego okna są jednym z najważniejszych rzeczy o jakie musimy zadbać sprzedając dom czy mieszkanie.',
      'Piękny + funkcjonalny = atrakcyjny',
      'Zastanawiając się nad zakupem domu klienci cenią sobie przestronność wnętrza. Oczywiście, piękne kwiaty, odmalowane ściany czy nowa elewacja, odświeżą nieruchomość. Jednak klient nie może docenić czegoś czego nie widzą. To światło wpływające przez ładnie ozdobione okna sprawia że dostrzegamy pełnię miejsca. Sztuczne światło jest równie ważne, ale nie zastąpi tego swoistego poczucia przestrzeni i swobody jakie daje okno lub taras. Nowoczesne okno prezentuje się jako element funkcjonalności domu, to właśnie ono nadaje naszemu miejscu wyjątkowy wymiar. Rozsądny nabywca doceni wartość okien renomowanej firmy i z pewnością wypróbuje jak „chodzą". Czy są szczelne, łatwo się zamykają lub uchylają.',
      'Nowoczesna elegancja, klasa sama w sobie',
      'Modernistyczny styl kojarzony jest z dobrym smakiem i bogactwem, dlatego coraz więcej domów stawia na surowy, ale designerski wygląd pomieszczeń. Wymiana małych, starych okien na większe i bardziej innowacyjne będzie strzałem w dziesiątkę. To właśnie duże przestronne okna z systemami przesuwnymi cieszą się dużą popularnością i sprawiają że wnętrze jest bardziej przestronne i stylowe. Inwestując w swoją nieruchomość warto rozważyć właśnie ten zakup, ponieważ nie jest to tylko ładnie wyglądająca rzecz, ale przede wszystkim nadaje domowi swoisty designerski charakter przy jednoczesnej oszczędności na wydatkach na ogrzewanie i oświetlenie.',
      'Dobrze zagospodarowane się opłaca',
      'Przy prezentacji domu, warto też przemyśleć o urządzeniu i wykorzystaniu miejsca pod i wokół okien. Zrobi to wrażenie na klientach oraz odsłoni potencjał przestrzeni drzemiący w parapetach, karniszach i samych oknach, bo dzięki przemyślanej aranżacji zwracać będą uwagę klientów. Co sprawdza osoba pragnąca zakupić swoje wymarzone mieszkanie? Widok z okna. Jeśli oferowane przez nas okno na świat nie będzie atrakcyjne, nawet najpiękniejszy malowniczy widok może być rozczarowujący. To dlatego większość developerów stara się wykorzystać okna tak by podkreślać zalety mieszkanie przy jednoczesnym ukryciu jego niedoskonałości.',
      'Wartość szkła',
      'Zwiększając wartość swojego domu myślmy w kategoriach nie tylko funkcjonalności, ale także estetyki i prezentacji naszych przestrzeni. Okna nadają się idealnie do ulepszenia naszych wnętrz, a ich wymiana i rozsądne wykorzystanie przyciągnie uwagę i przełoży się na wynik sprzedaży waszej nieruchomości. Okna firmy Adams łączą nowoczesność, funkcjonalność i wyjątkową estetykę. To kierunek w jakim prezentować ma się nasz dom.',
    ],
    obrazek: '/images/aktualnosci/podwyzszenie-wartosci-domu.jpg',
  },
  {
    slug: 'adams-okno-do-domu-pasywnego-czyli-jakie',
    tytul: 'AdamS – Okno do domu pasywnego, czyli jakie?',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Dom pasywny cechuje się bardzo niskim zapotrzebowaniem na energię do ogrzewania pomieszczeń. Stąd nastała konieczność montowania ciepłych energooszczędnych okien, które spełniają odpowiednie normy w tym kontekście.',
      'Kiedy i dlaczego budynek osiąga standard domu pasywnego? Jeżeli jego zapotrzebowanie na energię nie przekracza 15 kWh/(m²*rok). W celu porównania, domy energooszczędne potrzebują do 40 kWh/(m2*rok).',
      'Ważne współczynniki, czyli Uw i g w naszym domu',
      'Dobre okno w budynku pasywnym nie tylko ogranicza straty ciepła, ale także wykorzystuje ciepło słoneczne do ogrzania pomieszczeń. Musi spełniać normy wymagane przez Instytut Budynków Pasywnych w Darmstadt, czyli posiadać następujące parametry: współczynnik przenikania ciepła dla całego okna Uw nie wyższy niż 0,8 W/m2K, współczynnik przepuszczalności promieniowania słonecznego g minimum 60%.',
      'Takie normy spełnia na przykład okno AdamS Passiv-line PLUS, które uzyskuje współczynnik Uw=0,7 W/m2K, przy pakiecie trzyszybowym o współczynniku Ug=0,5 W/m2K. Przestrzenie między szybami wypełnia gaz (argon), natomiast w komorach profili są zastosowane kształtki styropianowe i piana poliuretanowa. Jest to innowacyjne rozwiązanie podnoszące izolacyjność termiczną okna.',
      'Jak rozplanować okna w domu pasywnym',
      'Po stronie południowej, czyli najbardziej nasłonecznionej, powinno być jak najwięcej przeszkleń. Im większe okna zostaną tam zamontowane, tym większe będą zyski energii z promieniowania słonecznego. Co istotne, duże przeszklenia powinny mieć jak najmniej podziałów, ponieważ każdy podział pogarsza współczynnik przenikalności ciepła całego okna Uw i powoduje straty ciepła. Czemu tak się dzieje? Ponieważ szyby lepiej izolują termicznie niż profile. Dla przykładu w oknie AdamS Passiv-line PLUS współczynnik Ug, czyli przenikalności cieplnej szyb wynosi 0,5 W/m2K, natomiast Uf (współczynnik profili) to 0,9 W/m2K. Zatem obowiązuje zasada, że im mniejszy jest udział powierzchni profili w oknie, tym współczynnik przenikania ciepła całego okna będzie niższy, a więc lepszy.',
      'Od strony północnej okien powinno być jak najmniej, bowiem będą one generowały straty ciepła.',
      'Ciepła ramka dystansowa, co to takiego?',
      'Szczególnie w domu pasywnym ważna jest maksymalna redukcja mostków termicznych, a więc miejsc, przez które ucieka ciepło. Dlatego tak istotna jest odpowiednia ramka dystansowa w oknie, odpowiadająca za mostki cieplne na styku szklenia z profilem. Ramka jest wykonana z materiału o niskiej przewodności cieplnej – z tworzywa sztucznego lub bardzo cienkiego metalu, np. aluminium. Standardowa ramka dystansowa z aluminium ma liniowy współczynnik przenikania ciepła φ = 0,07 W/(m2K). Ciepłe ramki z tworzyw sztucznych mają współczynnik φ = 0,04, a najcieplejsze nawet 0,031.',
      'Osłony na okna, czy warto?',
      'W słoneczne dni duże przeszklenia pozyskują energię, ale gdy jest pochmurno mogą powodować straty ciepła. Stąd konieczność montowania na oknach osłon, takich jak żaluzje, rolety czy ekrany, które będą ograniczać ucieczkę ciepła na zewnątrz, oraz dodatkowo chronić domowników przez przed niepożądanymi gośćmi.',
    ],
    obrazek: '/images/aktualnosci/okno-domu-pasywnego.jpg',
  },
  {
    slug: 'adams-letnie-okno',
    tytul: 'AdamS – Letnie okno',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Koniec roku szkolnego jest oficjalnym rozpoczęciem lata. Wakacyjne upały to doskonała okazja do wypoczynku nad jeziorem, wyjazdu na dłuższą wycieczkę czy czytanie książki w domowym zaciszu. Letnia pogoda może być niejednokrotnie uciążliwa i tak jak częste burze występujące w tym okresie, tak samo upały mogą wpłynąć na nasze samopoczucie. Cyrkulacja powietrza oraz bezpieczeństwo naszego domu zależą w dużej mierze od naszych okien oraz tego jak z nich korzystamy.',
      'Letni chłodek nie zawsze jest dobry',
      'Pierwszą rzeczą o jaką martwimy się w lato, to dostęp do ożywczego chłodnego powietrza. Na noc otwieramy okna by odświeżyć sypialnię, jednak za dnia nie jest to już dobrym pomysłem. Słoneczny żar który wdziera się przez okna do naszego mieszkania ze zdwojoną siłą, a niebezpieczne przeciągi mogą doprowadzić nas do choroby lub stać się przyczyną uszkodzeń w naszym domu. Musimy temu przeciwdziałać. Siła ciągu powietrza może z łatwością i do tego z dużą siłą zatrzasnąć drzwi między pokojami. Wyszczerbione zamki i pęknięte szyby drzwi są efektem otwartego na oścież okna. Czy są jakieś alternatywy pomagające nam cieszyć się, a nie męczyć w wakacyjnym upale? Jest na to antidotum. Pomijając wiatraki i klimatyzację, możemy wyposażyć swój wymarzony dom w odpowiednie rolety zewnętrzne. Promienie słoneczne już nie będą bezkarnie penetrowały naszych pomieszczeń, zwiększając tym samym ich temperatury. Rolety zewnętrzne, zapewniają całkowite zaciemnienie pokoju, nadając tym samym odpowiedni klimat. Wewnętrzne rolety, lub zasłony są półśrodkiem w walce z upałem, ponieważ ciepło zewnętrzne już jest wewnątrz, powodując iż pomieszczenia są dość mocno nagrzane. Dodatkowa warstwa w postaci zasłon może być nie tylko estetycznym dodatkiem. To kolejna bariera zatrzymująca rozgrzewające promienie.',
      'Bzyczenie pod sufitem, co za przyjemność',
      'Kolejnym problemem, z jakim musimy zmagać się w lato, to wszędobylskie muchy, pszczoły, osy, szerszenie i inne owady, wdzierające się celowo lub przez przypadek do naszego domu, a tego nie lubimy. Często latem otwarte lub uchylone na oścież okno nie zniechęci insektów do pozostawienia nas w spokoju. Lekko rozwarte okno zdecydowanie zmniejszy napływ małych intruzów, które nie są nam pożądane. Doskonałym rozwiązaniem będzie ramkowa moskitiera, zamontowana na oknie do ościeża. Specjalna transparentna siatka zatrzyma nawet małe meszki i pozwoli cieszyć się nam oknem, otwartym po zmroku bez potrzeby gaszenia światła. Jest to bardzo dużą zaletą. Zapobiegamy dzięki temu różnego rodzaju ukąszeniom i bzyczeniu budzącemu nas w nocy, oraz przeszkadzające nam za dnia. Moskitiery zewnętrzne mogą występować w postaci stałej siatki, lub rolowanej w kasecie.',
      'Projekt na chłodno',
      'W walce o wakacyjne wytchnienie musimy przede wszystkim zacząć od podstaw. Projekt domu jest najbardziej determinującym aspektem w kontekście temperatury domu. To po jakiej stronie mamy okna, w jakim miejscu położone jest nasze domostwo będzie rzutowało na całościowy wykres temperatury przez wszystkie pory roku. Zwrócenie uwagi na odpowiednio rozmieszczone okapy, zadaszenia lub balkony, osłoni nas przed nadmiernym nasłonecznieniem gdy słońce lać będzie z góry żar. W efekcie nawet w przypadku dużych przeszkleń nie musimy stosować osłon okiennych.',
      'Ożywcze rośliny',
      'Niebagatelnym czynnikiem redukującym temperaturę w naszym mieszkaniu, jest ilość roślin jaką posiadamy w nasłonecznionym pomieszczeniu. Pięknie zielone paprotki to nie tylko wystrój naszych parapetów i przyjemna dla oka roślinka. Przede wszystkim to organizm oczyszczający powietrze dzięki umiejętnemu przetwarzaniu promieni słonecznych i dwutlenku węgla. Kilka doniczek rozstawionych w okolicy okna sprawi że upał delikatnie zelży. Do tego celu doskonałe są wcześniej wspomniane paprocie. Te prehistoryczne rośliny znane są ze swojej doskonałej efektywności w produkcji tlenu, dodatkowo delikatnie wytłumią nasze pomieszczenie. Pamiętajmy jednak, że rośliny to także odpowiedzialność. Pamiętajmy o regularnym podlewaniu naszych podopiecznych. Zadbajmy o to szczególnie gdy wyruszymy w dłuższą podróż.',
      'Bezpieczeństwo domu zacznij od okna',
      'Dbanie o chłód w Twoim domu jest kwestią bardzo istotną, lecz nie może przesłonić bezpieczeństwa domu. Pamiętajmy że lato to również gwałtowne burze. Dlatego niezmiernie ważne jest sprawdzenie czy nasze okna są zamknięte bądź delikatnie rozszczelnione. Zapominalstwo może kosztować nas zalany parapet i parkiet, czy co gorsza wyszczerbione okno. Dlatego sprawdźmy wszystkie okna, szczególnie dachowe czy zostały zabezpieczone. Nasz dłuższy wyjazd może przyciągnąć również uwagę złodziei. To właśnie otwarte okna zachęcają rabusiów do wtargnięcia do naszego miru domowego. Okna antywłamaniowe zapobiegną włamaniu, ale tylko wtedy gdy korzystamy z zamontowanych mechanizmów.',
    ],
    obrazek: '/images/aktualnosci/letnie-okno.jpg',
  },
  {
    slug: 'adams-jaki-rodzaj-systemu-przesuwnego-wybrac',
    tytul: 'AdamS – Jaki rodzaj systemu przesuwnego wybrać?',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Klasyczne rozwiązanie otwierania drzwi tarasowych i balkonowych na przestrzeni lat, doczekało się wielu ciekawych i praktycznych alternatyw. Systemy przesuwne stają się coraz bardziej popularne i częściej stosowane dzięki swym wymiernym zaletom. Czym zatem są systemy przesuwne, jakie są ich cechy charakterystyczne i jaki typ najlepiej sprawdzi się w waszym domu?',
      'Podstawową różnicą między drzwiami osadzonymi w zawiasach, a systemami przesuwnymi jest sposób poruszania się otwieranego elementu. Drzwi lub okno nie otwiera się po łuku, zajmując bardzo dużą przestrzeń. Umocowany w zależności od użytego systemu przesuwnego element, poruszać się będzie równolegle wzdłuż linii szyby. Tego typu rozwiązanie oszczędza przestrzeń użytkową pomieszczenia, oraz jest znacznie bezpieczniejsze, ponieważ pozbywamy się niebezpiecznych wystających kantów oraz zapobiegamy trzaskaniu drzwi w przypadku dużego przeciągu. Przeszklenia tego typu są bardzo popularne w pokojach dziennych, living roomach z wyjściem na taras, balkon lub ogród. Osoby marzące o wizualnie połączonym wyjściu z naturalną przestrzenią zewnętrznej strony budynku, będą zachwycone. Taki element wyposażenia domu daje możliwość wykorzystania go do aranżacji dużych powierzchni, dzięki którym będziemy mogli nie tylko podziwiać widoki naszego pleneru ale również w łatwy sposób „przeniknąć" na zewnątrz.',
      'Istnieją dwa główne najpopularniejsze systemy przesuwne – PSK i HST. Ich różnice wpływają na komfort użytkowania, cenę oraz możliwości zastosowania. Okna i drzwi uchylno-przesuwne PSK to rozwiązanie umożliwiające lepsze zagospodarowanie małych przestrzeni. System uchylno-przesuwny oraz specjalne okucia umożliwiają uchylanie i przesuwanie skrzydła do szerokości nawet 1,6 m przy użyciu niewielkiej siły. Funkcjonalność konstrukcji sprawdza się w obrębie niewielkich wyjść balkonowych czy tarasowych. Maksymalna szerokość całej konstrukcji to 5 m. To bardzo dobra alternatywa dla standardowych, dwuskrzydłowych drzwi balkonowych, a co ważniejsze – zapewnia lepszą izolację termiczną. W sytuacji, gdy drzwi uchylno-przesuwne PSK są zamknięte, ich skrzydło stałe wraz ze skrzydłem przesuwnym tworzą linię prostą. Takie rozwiązanie powoduje, że zestaw okienny w tym systemie wygląda estetycznie. Na ościeżnicy okien PSK zamontowana jest szyna, którą widać. Po szynie tej poruszają się wózki, które zamontowane są na wewnętrznej ramie skrzydła ruchomego i ukryte pod specjalnie przygotowanymi do tego celu maskownicami. Otwieranie drzwi i okien w systemie uchylno-przesuwnym PSK rozpoczyna się od uchylenia i odsunięcia skrzydła ruchomego od progu. Następnie przesuwa się to skrzydło po szynie, która znajduje się w prowadnicy umieszczonej w dolnej części ościeżnicy. Uchylanie okien PSK odbywa się w identyczny sposób jak w oknach tradycyjnych. Warto również zwrócić uwagę na to, że obsługa okien PSK jest prosta, ale mniej komfortowa niż HST. Zaleta na pewno jest najniższa cena w porównaniu z innymi rozwiązaniami przesuwnymi.',
      'W oknach uchylno-przesuwnych PSK jest widoczny próg. Ile razy uderzyliśmy się w mały palec u nogi przechodząc przez zbyt wysoki próg? W systemie PSK można zastosować próg niski bądź wysoki, ale nadal będzie to widoczny próg. Bezprogowe wyjście zastosowane w HST może być bardzo pomocne, bądź niezbędne dla osób niepełnosprawnych poruszających się na wózku inwalidzkim.',
      'HST czyli rozwiązanie zapewniające maksymalny komfort użytkowania. System unoszono-przesuwny HST posiada skrzydło przesuwne i skrzydło stałe, które poruszają się względem siebie i położone są równolegle do siebie. Skrzydło ruchome dzięki przesuwniom, zachodzi za skrzydło stałe. Pozwala na bardzo delikatne otwieranie okien i drzwi łagodnym, niewymagającym wysiłku ruchem. Skrzydło ruchome, porusza się po ukrytej w podłodze szynie na rolkach, co łagodzi obciążenia dużo bardziej niż w systemie PSK. Nawet bardzo masywne, duże drzwi przesuniesz jednym palcem. Samo uchylanie okien i drzwi tego typu może odbyć się w każdym miejscu przy użyciu klamki. Tego typu system pozwala na wykorzystanie przeszkleń narożnych, a 3 mm próg jest bezkonkurencyjny. Pozwala to wręcz na scalenie go z linią podłogi. System HST to rozwiązanie dla osób które cenią sobie wygodę, niezawodność i płynność użytkowania. Drobne różnice względem PSK usprawniają użytkowanie i pozwalają cieszyć się wartością dużych przeszkleń, lecz również korzystanie z nich bez zbędnego wysiłku. Tak innowacyjne rozwiązanie jest droższe od swojego konkurenta, jednak doskonale sprawdza się u osób ceniących sobie wysoko komfort użytkowania.',
      'Decyzja o wyborze systemu przesuwnego może być znacznie łatwiejsza, gdy odwiedzicie Państwo nasz salon i na żywo przetestujecie wspomniane systemy przesuwne. Warto nadmienić, że w swojej ofercie posiadamy także system SMART-SLIDE – hybrydowe rozwiązanie łączące rozwiązania PSK i HST, tak by sprostać wysokim wymaganiom przy minimalnej cenie. Dla klientów pragnących wykorzystać cały potencjał przestrzeni, oferujemy także rozwiązanie narożnego wyjścia na taras HST PASSIV CORNER VIEW. Niski próg oraz narożne przeszklenie tworzą przestrzeń zintegrowaną z naturą. Zapraszamy do firmy ADAMS aby skonsultować państwa wątpliwości i otrzymać fachową obsługę.',
    ],
    obrazek: '/images/aktualnosci/system-przesuwny.jpg',
  },
  {
    slug: 'jesienna-konserwacja-okna',
    tytul: 'AdamS – Jesienna konserwacja okna',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Po ciepłym okresie letnim powinniśmy przedsięwziąć kroki w celu zabezpieczenia naszych okien przed wilgocią i zimnem okresu jesienno-zimowego. Solidna konserwacja okien i rozsądne użytkowanie zapewni nam długowieczność przeszkleń i większy komfort w naszym mieszkaniu.',
      'Od czego zacząć?',
      'Po wakacjach, na naszych oknach zbiera się bardzo dużo pyłu i osadu. Gromadzące się na powierzchni szkła zanieczyszczenia wyglądają nieestetycznie oraz na dłuższą metę są w stanie szkodzić tafli szkła. Dzięki okresowemu myciu szyb uchronimy nasza taflę przed tymi nieprzyjemnościami. Będzie to również bardzo dobry początek do dalszych prac konserwacyjnych. Myjąc okna skupmy się nie tylko na tafli szkła ale również na uszczelkach, zawiasach czy systemach przesuwnych. Odświeżenie tych miejsc wilgotną szmatką z dodatkiem mydła pozwoli pozbyć się nieczystości, odsłaniając tym samym miejsca narażone na degradację. Niestety każde okno po pewnym czasie zużywa się w naturalny sposób, jednak konserwując je możemy sprawić by proces ten był rozciągnięty na lata jeśli nie dekady. Dlatego na początek pamiętajmy by myć nasze okna w szczególności przed okresem jesiennym.',
      'Co dalej?',
      'Następnym krokiem jest dokładne obejrzenie ram i sprawdzenie szczelności poszczególnych partii okna. Najpierw sprawdźmy okucia to od ich stanu zależy, czy skrzydło będzie się wygodnie otwierać i zamykać oraz dobrze dolegać do ramy. Powinny one solidnie przylegać do ramy. W tym celu musimy je wyregulować oraz zabezpieczyć przed wszelkiego rodzaju uszkodzeniami powstałymi w wyniku użytkowania. Przyjrzyjmy się wszystkim wkrętom i dokręćmy poluzowane. Po sezonie zimowym możemy delikatnie obluzować docisk skrzydła do ramy, jednak w okresie zimowym zadbajmy o to by zminimalizować straty ciepła. Stosując w okuciach TITAN rozwórkę zima-lato w oknach firmy Adams, możemy redukować straty ciepła i oszczędzać energię. Ustawienie rozwórki w odpowiednim położeniu pozwala dopasować kąt uchylenia okna do aktualnych warunków pogodowych. Rozwórkę zima-lato możemy w dowolnym momencie, bez problemu zainstalować w działającym już oknie. Pozwala to na oszczędzenie sobie wysiłku manualnej regulacji okna.',
      'Subtelna opieka',
      'Przy dalszej konserwacji okna, musimy mieć na uwadze że mimo iż nawet najsolidniejsze przeszklenia powinny być pielęgnowane możliwie delikatnymi środkami. Unikajmy zatem silnych preparatów chemicznych. Wszelkiego rodzaju odrdzewiacze i odkamieniacze mogą uszkodzić antykorozyjną powłokę okna. Bardzo dobrym rozwiązaniem pozwalającym na pozbycie się uporczywych zanieczyszczeń jest sprężone powietrze. Ten „wynalazek" używany jest na co dzień w czyszczeniu wrażliwych na wilgoć i zarysowania, podzespołów komputerowych. Sprężony strumień powietrza pozbywa się przyległego brudu bez niebezpieczeństwa uszkodzenia elementu. Dodając do tego wspomnianą wcześniej lekko wilgotną szmatkę możemy bardzo łatwo oczyścić wszystkie zakamarki, by przystąpić do należytej konserwacji. Okucie należy nasmarować np. białym smarem maszynowym, wazeliną, oliwką albo olejem silikonowym. Świetnie sprawdzi się też olej bez żywic i kwasów. Przestrzegamy natomiast przed stosowaniem olejów jadalnianych oraz ciężkich smarów przemysłowych.',
      'Zadbane uszczelki',
      'Szczelność to jedna z najważniejszych funkcji okien. W przypadku ich znacznego zniszczenia musimy je niestety wymienić. Dlatego warto skupić się na ich sezonowej konserwacji. Często zapominamy że uszczelki spełniają swoje funkcje gdy są suche. To dlatego tak ważne jest ścieranie skropliny z okna w ich rejonie. Woda rozszczelnia przestrzeń izolującą i działa destrukcyjnie na tworzywo uszczelki. W szczególności gdy zbiera się w nadmiernej ilości i pozostaje tak bardzo długi czas. Konserwując uszczelki musimy zatem skupić na odizolowaniu ich od wody. Możemy nanieść na nie glicerynę, wazelinę techniczną lub silikon w areozolu. Te substancje sprawią że uszczelki przez długi czas będą nam służyć.',
      'Początek jesieni to czas który warto wykorzystać by zadbać o stan swoich okien, by przetrwały w dobrym stanie nie tylko jesień i zimę ale także by przez wiele lat służyły Ci pełną funkcjonalnością.',
    ],
    obrazek: '/images/aktualnosci/jesienna-konserwacja.jpg',
  },
  {
    slug: 'jakie-okna-wybrac-do-halasliwej-okolicy',
    tytul: 'Jakie okna wybrać do hałaśliwej okolicy?',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'W tym wypadku najważniejsza jest izolacyjność akustyczna okna, zwana dźwiękoszczelnością. Określa się ją za pomocą współczynnika izolacyjności akustycznej właściwej Rw, którą wyraża się w decybelach.',
      'Zasada jest taka, że im wyższy współczynnik Rw, tym lepiej okna będą izolować hałas z zewnątrz, a więc w domu będzie ciszej.',
      'Poziom hałasu',
      'Zanim zdecydujemy o wyborze okien, powinniśmy się zorientować, jaki jest poziom hałasu w naszej okolicy, bowiem wtedy odpowiednio dopasujemy okna. Hałas określa się w decybelach (dB). Szum liści to około 20 dB, spokojna rozmowa 50 dB, a hałas ruchliwej ulicy – 70 dB. Warto wiedzieć, że „wzrost poziomu hałasu o kilka decybeli oznacza, że nasz słuch odbiera dźwięk nawet jako dwukrotnie głośniejszy". Jako mało uciążliwe określa się dźwięki poniżej 52 dB, średnio uciążliwe od 52 do 62 dB, hałas do 70 dB odbieramy jako uciążliwy, ale już ten powyżej 70 dB jako bardzo przykry.',
    ],
    obrazek: '/images/aktualnosci/halasliwa-okolica.jpg',
  },
  {
    slug: 'adams-zatrzymaj-halas-dzieki-oknom',
    tytul: 'AdamS – Zatrzymaj hałas dzięki oknom',
    data: '2019-10-23',
    kategoria: 'Aktualności AdamS',
    tresc: [
      'Hałas głównej ulicy, bliskość nocnego klubu czy fabryki mogą skutecznie zakłócić spokój naszego zacisza domowego. Ale nie trzeba aż tak skrajnych przypadków by odczuć, że ruchliwe życie w mieście jest bardzo hałaśliwe. To dzięki ciszy się skupiamy, w ciszy zasypiamy i relaksujemy się. O ciszę coraz trudniej w dynamicznie zmieniającym się środowisku urbanistycznym. Nowe wyzwania musiały spotkać się z odzewem nowoczesnych technologii i rozwiązań pozwalających tłumić nadmierne natężenie dźwięku. I to właśnie dźwiękoszczelne okna stały się doskonałą barierą chroniącą mieszkańców Twojego domu przed hałasem.',
      'Niezdrowy dźwięk',
      'Słuch jest tym zmysłem, który jako jedyny jest aktywny całą dobę – nawet kiedy śpimy, często jako pierwszy ostrzega nas przed niebezpieczeństwem, jest nośnikiem miłych wspomnień gdy w ucho „wpada" ulubiona piosenka, czy głos ukochanej osoby. Gdzie jest zatem granica dźwięku neutralnego a szkodliwego? Odpowiedź nie jest jednoznaczna, jednak głównym wskaźnikiem jakim mierzymy hałas jest przede wszystkim natężenie dźwięku. Jako że głośność dźwięku jest pojęciem względnym, natężenie jest fizyczną miarą tego jak „mocny" jest dźwięk. Najbardziej widoczne i najszybciej obserwowane objawy związane z ekspozycją na hałas to zmęczenie, rozdrażnienie, osłabienie koncentracji i zdolności do nauki, zaburzenia orientacji, drażliwość, ból głowy, szumy w uszach. U dzieci może wystąpić niepokój, zagubienie, płacz.',
      'Kiedy dźwięk szkodzi',
      'Przy dźwiękach o wartości 35 decybelów możemy już zauważyć negatywny wpływ. Powyżej tego poziomu czyli około 70db pojawia się fizyczne zmęczenie układu nerwowego oraz zaburzenia snu. W miarę wzrostu natężenia dźwięku stopniowo zwiększa się nasza wydajność w pracy i pojawiają się problemy ze słuchem. Aż przy 130db dochodzimy do punktu trwałego uszkodzenia słuchu. Aby zobrazować przedziały natężenia dźwięku dla przykładu 35 dB reprezentuje słuchanie cichej muzyki; 70-80 dB to poziom głośności samochodu osobowego. Młot pneumatyczny to 100 dB, a 130 dB odzwierciedla hałas samolotu odrzutowego. Długotrwała ekspozycja na hałas sprawia, że się do niego adaptujemy – nie zmienia się jednak jego negatywny wpływ. Nawet jeśli jesteśmy w stanie słyszeć i komunikować się w naszym mieszkaniu czy miejscu pracy, hałas zmniejsza naszą produktywność i odbiera komfort przebywania w danym pomieszczeniu.',
    ],
    obrazek: '/images/aktualnosci/zatrzymaj-halas.jpg',
  },
];

export function getWpisBySlug(slug: string) {
  return wpisyDetale.find((w) => w.slug === slug);
}

// Krótkie akapity bez kropki/wielokropka/cudzysłowu na końcu pełnią funkcję
// śródtytułów w danych zescrapowanych z WordPressa (patrz renderowanie w
// app/aktualnosci/[slug]/page.tsx) — użyj tej samej reguły wszędzie, gdzie
// trzeba odróżnić nagłówek od właściwej treści (np. opis SEO).
export function jestSrodtytulem(akapit: string) {
  return akapit.trim().length < 60 && !/[.…"]$/.test(akapit.trim());
}

// Pierwszy akapit, który nie jest śródtytułem — do kart-zapowiedzi i opisu SEO.
// tresc[0] bywa krótkim sloganem/nagłówkiem (np. "Postaw na jakość marki Adams!"),
// więc surowe branie pierwszego elementu tablicy dawało czasem nagłówek zamiast opisu.
export function getPierwszyAkapit(wpis: WpisDetal) {
  return wpis.tresc.find((p) => !jestSrodtytulem(p)) ?? wpis.tresc[0];
}

export function getOpisSEO(wpis: WpisDetal) {
  return getPierwszyAkapit(wpis)?.slice(0, 160);
}
