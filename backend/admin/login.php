<?php
require __DIR__ . '/auth.php';

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $password = $_POST['password'] ?? '';
    if (password_verify($password, ADMIN_PASSWORD_HASH)) {
        session_regenerate_id(true);
        $_SESSION['admin_logged_in'] = true;
        header('Location: index.php');
        exit;
    }
    $error = 'Nieprawidłowe hasło.';
}
?>
<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<title>Logowanie — Admin BT-Styl</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
  body { font-family: system-ui, sans-serif; background: #f8f9fa; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
  form { background: white; padding: 2.5rem; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); width: 100%; max-width: 340px; }
  h1 { font-size: 1.25rem; color: #1a3a5c; margin: 0 0 1.5rem; }
  input { width: 100%; box-sizing: border-box; padding: 0.7rem 1rem; border: 1px solid #ddd; border-radius: 10px; font-size: 1rem; margin-bottom: 1rem; }
  button { width: 100%; padding: 0.8rem; background: #1a3a5c; color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer; font-size: 1rem; }
  button:hover { opacity: 0.9; }
  .error { color: #c0392b; font-size: 0.875rem; margin-bottom: 1rem; }
</style>
</head>
<body>
<form method="post">
  <h1>Panel Aktualności — BT-Styl</h1>
  <?php if ($error): ?><p class="error"><?= htmlspecialchars($error) ?></p><?php endif; ?>
  <input type="password" name="password" placeholder="Hasło" required autofocus>
  <button type="submit">Zaloguj</button>
</form>
</body>
</html>
