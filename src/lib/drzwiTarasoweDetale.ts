// Treści zescrapowane z oryginalnej strony klienta (dobreoknaszczecin.pl) na prośbę
// klienta — kolory, opisy i przekroje techniczne "jak na stronie btstyl.pl".
import { paletaPodstawowa } from './oknaDetale';

export type DrzwiTarasoweDetal = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  opis: string[];
  daneTechniczne: { label: string; value: string }[];
  kolory: string[];
  image: string;
  przekroje?: { label: string; src: string }[];
  dokumenty?: { label: string; href: string }[];
};

export const drzwiTarasoweDetale: DrzwiTarasoweDetal[] = [
  {
    slug: 'hst-corner-view',
    name: 'HST CORNER VIEW',
    tagline: 'Narożne przeszklenie – architektura bez granic',
    intro:
      'HST Corner View to nowoczesna, innowacyjna konstrukcja drzwi tarasowych i balkonowych unoszono-przesuwnych o najwyższym poziomie równowagi między lekkością i designem południowej Europy a efektywnością energetyczną wymaganą w naszym klimacie.',
    opis: [
      'Po pierwsze — kompozytowe progi drzwi z poliuretanowymi rdzeniami, wzmacniane włóknem szklanym GFK, ograniczają liniowe mostki cieplne na całym obwodzie styku konstrukcji z ościeżem.',
      'Po drugie — obniżona linia kształtowników oszkleń stałych wydatnie zwiększa udział powierzchni przeszklonych, zwiększając pasywne zyski energii z promieniowania słonecznego w sezonie grzewczym.',
      'Po trzecie — zastosowanie najnowocześniejszych rozwiązań w zakresie uszczelnień pozwala uzyskać wysoką klasę przepuszczalności powietrza, co ma znaczenie zwłaszcza w budynkach z wentylacją mechaniczną.',
      'Dzięki specjalistycznym okuciom Siegenia HST Portal skrzydło o masie do 400 kg przesuwa się swobodnie i bez najmniejszego oporu. Opcjonalnie dostępny jest napęd elektryczny MHS Siegenia z możliwością zdalnego sterowania.',
      'Konstrukcja likwiduje bariery architektoniczne przy narożnych wyjściach tarasowych, balkonowych i ogrodowych — umożliwia całkowicie przeszkloną zabudowę narożników ścian konstrukcyjnych, bez słupka.',
    ],
    daneTechniczne: [
      { label: 'Przenikalność cieplna Uw', value: '0,68 W/(m²K)' },
      { label: 'Odporność na obciążenie wiatrem', value: 'klasa C2' },
      { label: 'Wodoszczelność', value: 'klasa 8A' },
      { label: 'Przepuszczalność powietrza', value: 'klasa 4' },
      { label: 'Okucie', value: 'Siegenia HST Portal, do 400 kg' },
      { label: 'Napęd elektryczny', value: 'opcjonalnie MHS Siegenia' },
    ],
    kolory: paletaPodstawowa,
    image: '/images/oferta/hst_corner_view.jpg',
    przekroje: [
      { label: 'Przekrój 1', src: '/images/oferta/przekroje/hst-corner-view-1.jpg' },
      { label: 'Przekrój 2', src: '/images/oferta/przekroje/hst-corner-view-2.jpg' },
    ],
  },
  {
    slug: 'hst-passiv',
    name: 'HST PASSIV',
    tagline: 'Dom pasywny – maksymalna energooszczędność',
    intro:
      'Drzwi unoszono-przesuwne HST Passiv spełniają trzy najbardziej oczekiwane przez klientów kryteria: szczelność, termoizolacyjność i duże gabaryty — przy najwyższym standardzie energooszczędności, bezpieczeństwa, ciszy i estetyki.',
    opis: [
      'Szczelność — system oparty o profil wiodącej na rynku marki Aluplast jest jednym z najbardziej nieprzepuszczalnych rozwiązań w swojej klasie. Podczas badań szczelności osiągnął klasę 8A (450 Pa) — nawet podczas najbardziej ekstremalnych zjawisk pogodowych HST Passiv znakomicie wywiąże się ze swojego zadania.',
      'Termoizolacyjność — dzięki głębokiej zabudowie skrzydeł można zastosować bardzo „ciepłe” pakiety szybowe (Ug 0,5 lub 0,6 W/m²K), osiągając doskonałą termoizolacyjność. Dla najniższej wartości Uw, dedykowanej domom pasywnym i zeroenergetycznym, polecany jest właśnie system HST Passiv.',
      'Duże gabaryty — konstrukcja pozwala na wykonanie drzwi o wymiarach maksymalnych: szerokość 6000 mm, wysokość 2500 mm, w dowolnym dostępnym kolorze.',
    ],
    daneTechniczne: [
      { label: 'Profil', value: 'Aluplast' },
      { label: 'Klasa szczelności', value: '8A (450 Pa)' },
      { label: 'Współczynnik Ug', value: '0,5 lub 0,6 W/(m²K)' },
      { label: 'Maks. szerokość', value: '6000 mm' },
      { label: 'Maks. wysokość', value: '2500 mm' },
    ],
    kolory: paletaPodstawowa,
    image: '/images/oferta/hst_passiv_front.jpg',
    przekroje: [{ label: 'Rysunek techniczny', src: '/images/oferta/przekroje/hst-passiv.png' }],
  },
  {
    slug: 'hst-basic',
    name: 'HST BASIC',
    tagline: 'Solidna podstawa – sprawdzony system HST',
    intro:
      'HST Basic to drzwi unoszono-przesuwne z linii produktów marki Aluplast, łączące wysokie parametry techniczne z akceptowalnym poziomem inwestycji — rozwiązanie dla klientów poszukujących kompromisu między jakością a ceną.',
    opis: [
      'Szczelność — system oparty na profilu Aluplast osiąga klasę szczelności 8A (450 Pa), będąc rozwiązaniem nieprzepuszczalnym w swojej klasie.',
      'Termoizolacyjność — dostępne pakiety szybowe Ug 0,5 lub 0,6 W/(m²K), przy głębokiej zabudowie skrzydeł pozwalającej na użycie „ciepłych” pakietów.',
      'Wymiary maksymalne — szerokość do 6000 mm, wysokość do 2500 mm, wykonanie w dowolnym dostępnym kolorze niezależnie od wybranego systemu okiennego.',
      'Skrzydło unosi się przed przesunięciem, dzięki czemu praca mechanizmu odbywa się bez oporu — cichy bieg i doskonała szczelność przy wielu możliwych schematach otwarcia.',
    ],
    daneTechniczne: [
      { label: 'Profil', value: 'Aluplast' },
      { label: 'Klasa szczelności', value: '8A (450 Pa)' },
      { label: 'Współczynnik Ug', value: '0,5 lub 0,6 W/(m²K)' },
      { label: 'Maks. szerokość', value: '6000 mm' },
      { label: 'Maks. wysokość', value: '2500 mm' },
    ],
    kolory: paletaPodstawowa,
    image: '/images/oferta/HST_Basic.png',
    przekroje: [{ label: 'Rysunek techniczny', src: '/images/oferta/przekroje/hst-corner-view-1.jpg' }],
  },
  {
    slug: 'hst-sl-82',
    name: 'HST SL 82',
    tagline: 'Slim Look + HST – elegancja i funkcjonalność',
    intro:
      'HST SL 82 to system drzwi unoszono-przesuwnych na profilu VEKA o głębokości zabudowy 82 mm — rozwiązanie dla domów energooszczędnych oraz renowacji starszych budynków, łączące smukłą stylistykę Slim Look z funkcjonalnością systemu HST.',
    opis: [
      'Układ uszczelek zapewnia najwyższą szczelność, odporną nawet na huraganowe wiatry, a przy tym dobrą ochronę akustyczną.',
      'Wzmocnienia profilu na całym obwodzie skrzydła podnoszą poziom bezpieczeństwa konstrukcji.',
      'Niski, płaski próg minimalizuje różnice poziomów między wnętrzem a tarasem — komfortowe, bezprogowe przejście.',
      'Standardowe przeszklenie to pakiet 3-szybowy, a uzyskiwane parametry izolacyjne dorównują współczesnym konstrukcjom okiennym.',
    ],
    daneTechniczne: [
      { label: 'Głębokość zabudowy profilu', value: '82 mm' },
      { label: 'System', value: 'VEKA' },
      { label: 'Przeszklenie', value: 'pakiet 3-szybowy' },
      { label: 'Próg', value: 'niski, płaski' },
    ],
    kolory: paletaPodstawowa,
    image: '/images/oferta/schemat-a.png',
    przekroje: [{ label: 'Rysunek techniczny', src: '/images/oferta/przekroje/hst-sl-82.jpg' }],
  },
  {
    slug: 'smart-slide',
    name: 'SMART-SLIDE',
    tagline: 'Nowoczesna alternatywa dla PSK i patio',
    intro:
      'Smart-Slide to nowoczesne drzwi przesuwne, alternatywa dla tradycyjnych rozwiązań typu PSK i patio — odpowiednie zarówno do budynków jednorodzinnych, jak i obiektów użyteczności publicznej.',
    opis: [
      'Szczelność konstrukcji opiera się na uszczelkach obwodowych skrzydła, które poprzez przekręcenie klamki są dociskane do ościeżnicy. Dodatkowe punkty ryglowania w słupku wzmacniają szczelność i siłę docisku na całym obwodzie.',
      'Obsługa jest prosta i intuicyjna, zbliżona do rozwiązań stosowanych w drzwiach unoszono-przesuwnych typu HST — mechanizm pozwala na delikatne zamykanie i lekkie przesuwanie skrzydła.',
      'Możliwe jest wykonanie przeszklonej konstrukcji o wymiarach skrzydła do 1,5 × 2,3 m, dostępnej w schemacie dwukwaterowym z jednym skrzydłem ruchomym — rozwiązanie oszczędzające miejsce, bez potrzeby rozwarcia w głąb pomieszczenia.',
    ],
    daneTechniczne: [
      { label: 'Maks. wymiary skrzydła', value: '1,5 × 2,3 m' },
      { label: 'Schemat', value: 'dwukwaterowy, jedno skrzydło ruchome' },
      { label: 'Ryglowanie', value: 'na całym obwodzie' },
    ],
    kolory: paletaPodstawowa,
    image: '/images/oferta/smart_slide.png',
    dokumenty: [
      { label: 'Rysunek techniczny 1 (PDF)', href: '/images/oferta/przekroje/smart-slide-1.pdf' },
      { label: 'Rysunek techniczny 2 (PDF)', href: '/images/oferta/przekroje/smart-slide-2.pdf' },
    ],
  },
];

export function getDrzwiTarasoweBySlug(slug: string) {
  return drzwiTarasoweDetale.find((d) => d.slug === slug);
}
