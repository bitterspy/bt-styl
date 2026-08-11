// Próbka modeli z galerii producenta (drzwimartom.pl/galeria-modeli) — po kilka
// wzorów z każdej kolekcji. Pełny katalog (setki modeli) zostaje u producenta;
// każdy wzór tutaj linkuje do konfiguratora/strony Martom.
export type MartomWzor = {
  nazwa: string;
  image: string;
  konfiguratorUrl: string;
};

export type MartomKolekcja = {
  nazwa: string;
  wzory: MartomWzor[];
};

export const martomKolekcje: MartomKolekcja[] = [
  {
    nazwa: 'Creative',
    wzory: [
      { nazwa: 'GA 400/89', image: '/images/martom/creative-ga400.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=6a070fafd5d8c20012166a61' },
    ],
  },
  {
    nazwa: 'Classic',
    wzory: [
      { nazwa: '1EK 80', image: '/images/martom/classic-1ek80.png', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=668289df4e2126003754e60b' },
      { nazwa: '1EK 80/57', image: '/images/martom/classic-1ek80-57.png', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=668289f6324b9e002e379c31' },
    ],
  },
  {
    nazwa: 'Future',
    wzory: [
      { nazwa: 'GV 106', image: '/images/martom/future-gv106.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=6464bf7dd6fa680011b141bb' },
      { nazwa: 'GV 107', image: '/images/martom/future-gv107.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=646df017b718f20018aa4de8' },
    ],
  },
  {
    nazwa: 'Diamond',
    wzory: [
      { nazwa: 'GS 20/18', image: '/images/martom/diamond-gs2018.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=6363a73c8554550011277576' },
      { nazwa: 'RS 20/18', image: '/images/martom/diamond-rs2018.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/ustawienia/strona-i-kierunek-otwierania?id=6363a77e50dac5003fbfee19' },
    ],
  },
  {
    nazwa: 'Simple elegance',
    wzory: [
      { nazwa: 'G 600/48', image: '/images/martom/simple-g600.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
      { nazwa: 'G 601/48', image: '/images/martom/simple-g601.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
    ],
  },
  {
    nazwa: 'Smooth',
    wzory: [
      { nazwa: 'GV 101', image: '/images/martom/smooth-gv101.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
      { nazwa: 'GX 102/68', image: '/images/martom/smooth-gx102.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
    ],
  },
  {
    nazwa: 'No glass',
    wzory: [
      { nazwa: 'GL 53', image: '/images/martom/noglass-gl53.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
      { nazwa: 'GL 55', image: '/images/martom/noglass-gl55.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
    ],
  },
  {
    nazwa: 'Modern',
    wzory: [
      { nazwa: 'G 01/3', image: '/images/martom/modern-g01.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
      { nazwa: 'A 01/3', image: '/images/martom/modern-a01.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
    ],
  },
  {
    nazwa: 'Traditional',
    wzory: [
      { nazwa: 'GK 01/3', image: '/images/martom/traditional-gk01.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
      { nazwa: 'AK 05/3', image: '/images/martom/traditional-ak05.jpg', konfiguratorUrl: 'https://konfigurator.drzwimartom.pl/#/konfigurator/kategoria' },
    ],
  },
];
