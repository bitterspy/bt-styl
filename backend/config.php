<?php
// Konfiguracja połączenia z bazą danych i panelu admina.
// UZUPEŁNIĆ prawdziwymi danymi z panelu Hostido przed wdrożeniem.
// Ten plik NIE powinien trafiać do gita z realnymi hasłami — dodać do .gitignore
// i trzymać kopię z prawdziwymi danymi wyłącznie na serwerze / w CREDENTIALS.md.

define('DB_HOST', 'localhost');
define('DB_NAME', 'UZUPELNIC_NAZWA_BAZY');
define('DB_USER', 'UZUPELNIC_UZYTKOWNIK');
define('DB_PASS', 'UZUPELNIC_HASLO');
define('DB_CHARSET', 'utf8mb4');

// Hasło do panelu admina (zmienić przed wdrożeniem!).
// Wygenerować hashem: php -r "echo password_hash('twoje-haslo', PASSWORD_DEFAULT);"
define('ADMIN_PASSWORD_HASH', 'UZUPELNIC_HASH_HASLA');

// Domena frontendu — używana do nagłówka CORS, żeby tylko strona BT-Styl
// mogła odpytywać to API z przeglądarki.
define('ALLOWED_ORIGIN', 'https://bt-styl.pl');

function getPdo(): PDO {
    $dsn = 'mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';charset=' . DB_CHARSET;
    return new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
}
