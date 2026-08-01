<?php
require __DIR__ . '/../config.php';

session_start();

function isLoggedIn(): bool {
    return !empty($_SESSION['admin_logged_in']);
}

function requireLogin(): void {
    if (!isLoggedIn()) {
        header('Location: login.php');
        exit;
    }
}
