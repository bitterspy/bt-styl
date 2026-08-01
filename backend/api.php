<?php
// Publiczne API — zwraca listę aktualności jako JSON.
// Wywoływane z przeglądarki przez fetch() ze statycznej strony Next.js.

require __DIR__ . '/config.php';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: GET');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

try {
    $pdo = getPdo();
    $stmt = $pdo->query(
        'SELECT id, tytul, tresc, data_publikacji FROM aktualnosci ORDER BY data_publikacji DESC, id DESC'
    );
    echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Błąd serwera']);
}
