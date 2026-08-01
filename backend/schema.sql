-- Schemat bazy danych dla modułu Aktualności BT-Styl
-- Uruchomić raz przy zakładaniu bazy MySQL na Hostido (np. przez phpMyAdmin)

CREATE TABLE IF NOT EXISTS aktualnosci (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tytul VARCHAR(255) NOT NULL,
  tresc TEXT NOT NULL,
  data_publikacji DATE NOT NULL,
  utworzono TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  zaktualizowano TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_polish_ci;

-- Dane startowe skopiowane z dobreoknaszczecin.pl/aktualnosci/
INSERT INTO aktualnosci (tytul, tresc, data_publikacji) VALUES
(
  'Nowe drzwi stalowe w naszej ofercie!',
  'Serdecznie zapraszamy do zapoznania się z nową ofertą drzwi stalowych firmy Martom. MARTOM jest obecnie liderem rozwiązań hybrydowych, wyróżniających producenta na polskim rynku. Firma posiada opatentowane technologie, łączące drewno, stal, aluminium oraz tworzywo ABS które jest zbrojone włóknami oraz pianę PUR. Drzwi hybrydowe to bardzo dobra alternatywa dla innych rozwiązań, przy tym wypadają konkurencyjne cenowo. Hybrydowe drzwi firmy Martom to produkt godny uwagi. W ofercie MARTOM znajdziemy drzwi dwuskrzydłowe jak również jednoskrzydłowe.',
  '2026-03-07'
),
(
  'Najlepsze okna, czyli jakie? Przedstawiamy najlepsze okna w ofercie AdamS w różnych kryteriach.',
  'Najlepsze okna to takie, które są dopasowane do wymagań technicznych projektu, założeń estetycznych oraz do preferencji inwestorów. Nowoczesne okna muszą być przede wszystkim energooszczędne — przykładem jest okno Passiv-Line Ultra o współczynniku Uw=0,66 W/(m²K). Ważna jest też izolacyjność akustyczna (wskaźnik Rw) oraz odporność na wiatr i wodę. Przykładem okna z bardzo wysoką klasą odporności C5 jest Passiv-Line S, a okno Passiv-Line Plus podczas badań wodoszczelności osiągnęło wynik E1500.',
  '2024-10-17'
),
(
  'Firma AdamS pionierem rozwiązań ekologicznych',
  'Zakończył się 31. Konwent Stolarki VIP na zamku w Gniewie, podczas którego wybrano najlepsze i najbardziej ekologiczne rozwiązania. Firma AdamS została wyróżniona za produkcję Okien Passiv-Line Ultra — jako pierwsza w Polsce uzyskała certyfikat potwierdzający produkcję okien z certyfikowanych komponentów przeznaczonych do budownictwa pasywnego, przebadanych przez Passive House Institute w Darmstadt.',
  '2024-10-17'
);
